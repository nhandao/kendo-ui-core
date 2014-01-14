(function() {
var dataviz = kendo.dataviz,
    encodings = dataviz.encodings,
    encoding,
        characters = {
            "0": [1, 1, 1, 4, 2, 2],
            "10": [1, 4, 2, 2, 1, 1],
            "17": [1, 2, 1, 1, 4, 2],
            "20": [1, 2, 4, 1, 1, 2],
            "27": [4, 1, 2, 1, 2, 1],
            "32": [2, 1, 2, 2, 2, 2],
            "35": [1, 2, 1, 2, 2, 3],
            "39": [1, 2, 2, 3, 1, 2],
            "48": [1, 2, 3, 1, 2, 2],
            "51": [2, 2, 1, 1, 3, 2],
            "55": [3, 1, 2, 1, 3, 1],
            "60": [3, 2, 2, 1, 1, 2],
            "61": [3, 2, 2, 2, 1, 1],
            "64": [2, 3, 2, 1, 2, 1],
            "65": [1, 1, 1, 3, 2, 3],
            "66": [1, 3, 1, 1, 2, 3],
            "69": [1, 3, 2, 1, 1, 3],
            "75": [1, 1, 2, 3, 3, 1],
            "76": [1, 3, 2, 1, 3, 1],
            "83": [2, 1, 3, 1, 1, 3],
            "84": [2, 1, 3, 3, 1, 1],
            "88": [3, 3, 1, 1, 2, 1],
            "90": [3, 1, 2, 3, 1, 1],
            "94": [4, 3, 1, 1, 1, 1],
            "95": [1, 1, 1, 2, 2, 4],
            "START": [2, 1, 1, 4, 1, 2],
            "STOP": [2, 3, 3, 1, 1, 1, 2]
        };

    function calculateCheckSum(value){
        var sum = 103;
        for(var i = 0; i< value.length; i++){
            ascii = value.charCodeAt(i);
            if(ascii < 32){
                sum+= (i+1)*(ascii + 64);
            }
            else{
                sum+= (i+1)*(ascii - 32);
            }
        }
        return sum % 103;
    }

    function generateResult(value, checkValue, options){
        var expectedResult = [];
        if(options.quietZoneLength){
            expectedResult.push(options.quietZoneLength);
        }

        expectedResult.push.array(characters.START);

        for( var i = 0; i < value.length; i++){
            expectedResult.push.array(characters[value.charCodeAt(i)]);
        }

        expectedResult.push.array(characters[checkValue.charCodeAt(0)]);


        expectedResult.push.array(characters.STOP);

        if(options.quietZoneLength){
            expectedResult.push(options.quietZoneLength);
        }

        return expectedResult;
    }

    module("128A", {
        setup: function() {
            encoding = new encodings.code128a();
        },
        teardown: function(){
            encoding = null;
        }
    });

    test("test value TESTA", function() {
        var value = "TESTA",
            result = encoding.encode(value, 300, 100),
            expectedResult = generateResult(value,"B",
                {quietZoneLength: encoding.options.quietZoneLength });

        ok(comparePatterns(result.pattern, expectedResult));
    });

    test("test value BEXZ<=0 ", function() {
        var value = "BEXZ<=0",
            result = encoding.encode(value, 300, 100),
            expectedResult = generateResult(value, "'",
                {quietZoneLength: encoding.options.quietZoneLength });

        ok(comparePatterns(result.pattern, expectedResult));
    });

    test("test value ' (NUL)@(LF)(ESC)^KL' ", function() {
        var value = " " + String.fromCharCode(0) + "@" + String.fromCharCode(10) + String.fromCharCode(27) + "^KL",
            result = encoding.encode(value, 300, 100),
            expectedResult = generateResult(value, "K",
                {quietZoneLength: encoding.options.quietZoneLength });
        
        ok(comparePatterns(result.pattern, expectedResult));
    });

    test("test value (_730(DC1)#') ", function() {
        var value = "_730" + String.fromCharCode(17) + "#'",
            result = encoding.encode(value, 300, 100),
            expectedResult = generateResult(value, String.fromCharCode(20),
                {quietZoneLength: encoding.options.quietZoneLength });

        ok(comparePatterns(result.pattern, expectedResult));
    });


    test("test invalid character error", function() {
        var thrownError = false;
        try{
            encoding.encode("AASaT*", 300, 100);
        }
        catch (ex){
            thrownError = true;
        }
        ok(thrownError);
    });

    test("test base unit calculation", function() {
        var width = 200,
            height = 100,
            value = "_730" + String.fromCharCode(17) + "#'",
            quietZoneLength = encoding.options.quietZoneLength,
            result,
            expectedResult = fixed(width / (112 + 2 * quietZoneLength), 2);

            result = encoding.encode(value, width, height).baseUnit;
            equal(fixed(result, 2), expectedResult);

    });

})();

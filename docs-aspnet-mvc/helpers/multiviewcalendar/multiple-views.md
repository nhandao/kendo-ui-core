---
title: Multiple Views
page_title:  Multiple Views | Kendo UI MultiViewCalendarr HtmlHelper
description: "Control the visible date ranges in the Kendo UI MultiViewCalendar and manage the number of its horizontally rendered views."
slug: multiple_views_multiviewcalendar_aspnetmvc
position: 3
---


# Multiple Views

The Kendo UI MultiViewCalendar allows to define the number of views/months to be displayed at a time. In some scenarios it might be necessary to display more than two months. This is helpful especially in case of range selection among a couple of months.

###### Example

```tab-ASPX

        <%: Html.Kendo().NumericTextBox()
            .Name("numberOfViews")
            .RestrictDecimals(true)
            .Decimals(0)
            .Min(2)
            .Max(10)
            .Value(2)
            .Format("{0:n0}")
        %>

        <%:
            Html.Kendo().Button()
            .Name("numberOfViewsBtn")
            .Content("Apply Changes")
            .Events(ev => ev.Click("click"))
        %>

        <%:
            Html.Kendo().MultiViewCalendar()
                .Name("multiViewCalendar")
        %>

        <script>
            function click() {
                var numberOfViews = $("#numberOfViews").data().kendoNumericTextBox.value();
                if (numberOfViews > 0) {
                    $("#multiViewCalendar").data().kendoMultiViewCalendar.setOptions({ numberOfVies: numberOfViews });
                } 
            }
       </script>
```
```tab-Razor

        @(Html.Kendo().NumericTextBox()
            .Name("numberOfViews")
            .RestrictDecimals(true)
            .Decimals(0)
            .Min(2)
            .Max(10)
            .Value(2)
            .Format("{0:n0}")
        )
        @(Html.Kendo().Button()
            .Name("numberOfViewsBtn")
            .Content("Apply Changes")
            .Events(ev => ev.Click("click"))
        )
        @(Html.Kendo().MultiViewCalendar()
                .Name("multiViewCalendar")
        )

        <script>
            function click() {
                var numberOfViews = $("#numberOfViews").data().kendoNumericTextBox.value();
                if (numberOfViews > 0) {
                    $("#multiViewCalendar").data().kendoMultiViewCalendar.setOptions({ numberOfVies: numberOfViews });
                } 
            }
        </script>

```

## See Also

Other articles on the Kendo UI MultiViewCalendar:

* [Overview of the ASP.NET MVC HtmlHelper Extension for the MultiViewCalendar Widget](/helpers/multiviewcalendar/overview)
* [MultiViewCalendar JavaScript API Reference](http://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar)
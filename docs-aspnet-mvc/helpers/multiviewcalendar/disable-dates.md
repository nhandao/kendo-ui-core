---
title: Disabled dates
page_title:  Disabled dates| Kendo UI MultiViewCalendarr HtmlHelper
description: "Learn how to disable dates in the Kendo UI MultiViewCalendar widget."
slug: disabled_dates_multiviewcalendar_aspnetmvc
position: 6
---


# Disabled dates

The MultiViewCalendar allows you to disable certain days which are not intended to be selected by the end user such as weekends, national holidays, and others.

To disable a date, either:

* Set an array, or
* Add a function.

### Set an Array

When you set an array, list the days that need to be disabled by using the first letters from their names in English.

###### Example

```tab-ASPX

        <%: Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .DisableDates(new[] {"we", "th" })
        %>
```
```tab-Razor

        @(Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .DisableDates(new[] {"we", "th" })
        )
```

### Add a Function

When you add a function, determine its return value as `true` for the date that is disabled.

###### Example

```tab-ASPX

        <%: Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .DisableDates("handler")
        %>

        <script>
            function handler(date) {
                var disabled = [13,14,20,21];
                if (date && disabled.indexOf(date.getDate()) > -1 ) {
                    return true;
                } else {
                    return false;
                }
            }
        </script>
```
```tab-Razor

        @(Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .DisableDates("handler")
        )

        <script>
            function handler(date) {
                var disabled = [13,14,20,21];
                if (date && disabled.indexOf(date.getDate()) > -1 ) {
                    return true;
                } else {
                    return false;
                }
            }
        </script>
```

## See Also

Other articles on the Kendo UI MultiViewCalendar:

* [Overview of the ASP.NET MVC HtmlHelper Extension for the MultiViewCalendar Widget](/helpers/multiviewcalendar/overview)
* [MultiViewCalendar JavaScript API Reference](http://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar)
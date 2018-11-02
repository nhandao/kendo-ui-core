---
title: Active View
page_title: Active View | Kendo UI MultiViewCalendarr HtmlHelper
description: "Define the first view that the Kendo UI MultiViewCalendar initially renders."
slug: active_view_multiviewcalendar_aspnetmvc
position: 2
---

# Active View

To define the first rendered view, use the `Start` option. To control the navigation depth, set the `Depth` option.

The following views are predefined:

* `month`&mdash;Shows the days of the month.
* `year`&mdash;Shows the months of the year.
* `decade`&mdash;Shows the years of the decade.
* `century`&mdash;Shows the decades of the century.

### Selectable Month Calendars

The following example demonstrates how to create a MultiViewCalendar that allows users to select a month.

###### Example

```tab-ASPX

        <%: Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .Start(CalendarView.Year)
            .Depth(CalendarView.Year)
        %>
```
```tab-Razor

        @(Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .Start(CalendarView.Year)
            .Depth(CalendarView.Year)
        )
```

## See Also

Other articles on the Kendo UI MultiViewCalendar:

* [Overview of the ASP.NET MVC HtmlHelper Extension for the MultiViewCalendar Widget](/helpers/multiviewcalendar/overview)
* [MultiViewCalendar JavaScript API Reference](http://docs.telerik.com/kendo-ui/api/javascript/ui/multiviewcalendar)
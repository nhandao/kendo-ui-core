---
title: Disabled dates
page_title: Disabled dates | Telerik UI for ASP.NET Core Tag Helpers
description: "Learn how to disable dates in the Kendo UI MultiViewCalendar widget."
slug: disabled_dates_multiviewcalendar_taghelper_aspnetcore
position: 6
---


# Disabled dates

The MultiViewCalendar allows you to disable certain days which are not intended to be selected by the end user such as weekends, national holidays, and others.

To disable a date set an array of the dates that should be disabled.

### Set an Array

When you set an array, list the days that need to be disabled by using the first letters from their names in English.

###### Example

```tab-tagHelper

    <kendo-multiviewcalendar name="multiviewcalendar" disable-dates="new DateTime[] { DateTime.Now }">
    </kendo-multiviewcalendar>

```
```tab-Razor

        @(Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .DisableDates(new[] {"we", "th" })
        )
```

## See Also

Other articles on the Kendo UI MultiViewCalendar:

* [Overview of Telerik UI for ASP.NET Core]({% slug overview_aspnetmvc6_aspnetmvc %})
* [Get Started with Telerik UI for ASP.NET Core in ASP.NET Core Projects]({% slug gettingstarted_aspnetmvc6_aspnetmvc %})
* [Get Started with Telerik UI for ASP.NET Core in ASP.NET Core Projects with the CLI]({% slug gettingstartedcli_aspnetmvc6_aspnetmvc %})
* [Known Issues with Telerik UI for ASP.NET Core]({% slug knownissues_aspnetmvc6_aspnetmvc %})

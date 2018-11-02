---
title: Selection
page_title: Selection | Telerik UI for ASP.NET Core Tag Helpers
description: "Learn how to select dates in the Kendo UI MultiViewCalendar widget."
slug: selection_multiviewcalendar_taghelper_aspnetcore
position: 4
---

# Selection

The Kendo UI MultiViewCalendar allows the user to select multiple dates or a range of dates using different selection modes offered by the widget.

### Multiple selection

###### Example

```tab-tagHelper

    <kendo-multiviewcalendar name="multiviewcalendar" selectable="range">        
    </kendo-multiviewcalendar>

```
```tab-Razor

        @(Html.Kendo().MultiViewCalendar()
            .Name("MultiViewCalendar")
            .Selectable("range")
        )
```

## See Also

Other articles on the Kendo UI MultiViewCalendar:

* [Overview of Telerik UI for ASP.NET Core]({% slug overview_aspnetmvc6_aspnetmvc %})
* [Get Started with Telerik UI for ASP.NET Core in ASP.NET Core Projects]({% slug gettingstarted_aspnetmvc6_aspnetmvc %})
* [Get Started with Telerik UI for ASP.NET Core in ASP.NET Core Projects with the CLI]({% slug gettingstartedcli_aspnetmvc6_aspnetmvc %})
* [Known Issues with Telerik UI for ASP.NET Core]({% slug knownissues_aspnetmvc6_aspnetmvc %})

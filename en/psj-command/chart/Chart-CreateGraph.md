---
id: Chart-CreateGraph
title: Chart.CreateGraph()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Make a graph of post result curve
---

## Description

Make a graph of post result curve.

## Syntax

```psj
Chart.CreateGraph(...)
```

Macro: [PostCreateGraph](/docs/cli/5.1.0/macro/chart/PostCreateGraph)

Ribbon: <menuselection>Chart &#187; CreateGraph</menuselection>

## Inputs

### `crTargetCurve`

- A _Cursor_ specifying the post result curve.
- The default value is _None_.

### `iNumData`

- An _Integer_ specifying the number of data markers to plot the graph.
- The default value is 0.

### `strLineTitle`

- A _String_ specifying the chart line title.
- The default value is "".

### `dlAxisDataX`

- A _List of Double_ specifying the data value on X-Axis.
- The default value is [].

### `dlAxisDataY`

- A _List of Double_ specifying the data value on Y-Axis.
- The default value is [].

### `strChartTitle`

- A _String_ specifying the chart title.
- The default value is "".

### `strAxisTitleX`

- A _String_ specifying the X-axis title.
- The default value is "".

### `strAxisTitleY`

- A _String_ specifying the Y-axis title
- The default value is "".

### `bNewChart`

- A _Boolean_ specifying whether to plot graph on a new chart window
- The default value is _True_.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not.
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

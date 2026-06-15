---
id: PostCreateGraph
title: PostCreateGraph()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Invert hide targets by context menu

## Syntax

```psj
PostCreateGraph(cursor TargetCurve, int NumData, string LineTitle, double[] AxisDataX, double[] AxisDataY, string ChartTitle, string AxisTitleX, string AxisTitleY, bool NewChart)
```

## Inputs

### `1. Cursor`

A Cursor specifying the curve target.

### `2. Int`

An Integer specifying the number of data.

### `3. String`

A String specifying the line title.

### `4. Double[]`

A Double List specifying data of axis X.

### `5. Double[]`

A Double List specifying data of axis Y.

### `6. String`

A String specifying the chart title.

### `7. String`

A String specifying the axis X title.

### `8. String`

A String specifying the axis Y title.

### `9. Bool`

A Boolean specifying whether to create new chart.

## Return Code

- "1": The function can be executed.
- "0": The function cannot be executed.

## Sample Code

```psj
PostCreateGraph(3:1,1,"",[0.0,1.0],[1.0,2.0],"","","",True)
```

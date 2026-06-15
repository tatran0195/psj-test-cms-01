---
id: DYNAMIC_FREQ_ANALYSIS_LOADCASE
title: DYNAMIC_FREQ_ANALYSIS_LOADCASE()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create a load case for Gururi analysis.

## Syntax

```psj
DYNAMIC_FREQ_ANALYSIS_LOADCASE(int AnalysisType, cursor ParentAnalysis, string Name, double Factor, int NewID, cursor[] SelectedLoad, double[] TargetFactor, cursor Edit)
```

## Inputs

### `1. Int`

Choose type of analysis.

### `2. Cursor`

A Cursor specifying the parent analysis.

### `3. String`

Name of the load case.

### `4. Double`

A Double specifying the factor of load case.

### `5. Int`

New ID of the load case.

### `6. Cursor[]`

A Cursor List specifying the selected load.

### `7. Double[]`

A Double List specifying the target factor.

### `8. Cursor`

A Cursor specifying an existing load case condition.

## Return Code

A Cursor specifying the created gururi load case.

## Sample Code

```psj
DYNAMIC_FREQ_ANALYSIS_LOADCASE(1, 3:1, "LoadCase_1", 1.0, 1, [], [1.0], 0:0)
```

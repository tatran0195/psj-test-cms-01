---
id: DYNAMIC_GURURI_ANALYSIS_RESPONSE
title: DYNAMIC_GURURI_ANALYSIS_RESPONSE()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Output the Gururi result of the response point.

## Syntax

```psj
DYNAMIC_GURURI_ANALYSIS_RESPONSE(cursor ParentAnalysis, cursor Coordinate, bool AllModesUsed, string[] SelectedModesName, bool UseDampingFactor, double DampingFactor, cursor DampingFactorTable, double InputFrequency, double StartPhase, int StepNumber, bool OutputMaximumGururiResult, int PrincipleType, bool AllCase, cursor SelectedLoadCase, cursor Edit)
```

## Inputs

### `1. Cursor`

A Cursor specifying the parent analysis.

### `2. Cursor`

A Cursor specifying the coordinate.

### `3. Bool`

A Boolean specifying whether to use the all modes used.

### `4. String[]`

A String List specifying names of the selected modes.

### `5. Bool`

Specify whether to input value of damping factor with double format or table format.

### `6. Double`

A Double specifying value of the damping factor with doule format.

### `7. Cursor`

A Double specifying value of the damping factor with table format.

### `8. Double`

A Double specifying input of the frequency.

### `9. Double`

A Double specifying start of the phase.

### `10. Int`

An Int specifying the number of steps.

### `11. Bool`

A Boolean specifying whether to output the maximum Gururi results.

### `12. Int`

An Int specifying type of principle.

### `13. Bool`

A Boolean specifying whether to use the all cases.

### `14. Cursor`

A Cursor specifying the selected load case.

### `15. Cursor`

A Cursor specifying an existing response condition.

## Return Code

A Cursor specifying the created gururi response condition.

## Sample Code

```psj
DYNAMIC_GURURI_ANALYSIS_RESPONSE(3:1, 2:1, True, [], True, 1.0, 2:1, 0.0, 0.0, 10, True, 3, True, 2:1, 2:1)
```

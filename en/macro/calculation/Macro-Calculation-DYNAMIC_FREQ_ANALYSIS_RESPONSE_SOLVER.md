---
id: DYNAMIC_FREQ_ANALYSIS_RESPONSE_SOLVER
title: DYNAMIC_FREQ_ANALYSIS_RESPONSE_SOLVER()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create a response solver for Gururi analysis.

## Syntax

```psj
DYNAMIC_FREQ_ANALYSIS_RESPONSE_SOLVER(cursor ParentAnalysis, cursor Coordinate, bool AllModesUsed, string[] ModesSelect, bool DampingFactor, double DampingFactor, cursor DampingFactor, int CurveStyle, double StyleParamTop, double StyleParamMid, double StyleParamBot, bool IncludeEigenValue, bool CreateNewResult, int ResultType, string[] SelectedResultName, int ResultPos, string DBFileName, string DBVersion, string MethodId, string SPCID, int RESVEC, string JobName, cursor[] Targets, cursor Edit)
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

A Cursor specifying value of the damping factor with table format.

### `8. Int`

An Integer specifying the curve style.

### `9. Double`

A Double specifying the style of ParamTop.

### `10. Double`

A Double specifying the style of ParamMid.

### `11. Double`

A Double specifying the style of ParamBot.

### `12. Bool`

A Boolean specifying whether to include eigenvalue.

### `13. Bool`

A Boolean specifying whether to create the new all result.

### `14. Int`

An Integer specifying type of result.

### `15. String[]`

A String List specifying the name of selected result.

### `16. Int`

An Integer specifying the position of result.

### `17. String`

A String specifying name of DB file.

### `18. String`

A String specifying DB version.

### `19. String`

A String specifying ID of method.

### `20. String`

A String specifying ID of SPC.

### `21. Int`

An Integer specifying RESVEC.

### `22. String`

Name of the job.

### `23. Cursor[]`

A Cursor List specifying existing targets.

### `24. Cursor`

A Cursor specifying an existing response condition.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
DYNAMIC_FREQ_ANALYSIS_RESPONSE_SOLVER(0:0, 0:0, True, [""], True, 1.0, 0:0, 0, 0.0,0.0,0.0, True,True, 0, [""],0,"","","","",0,"",[0:0], 0:0)
```

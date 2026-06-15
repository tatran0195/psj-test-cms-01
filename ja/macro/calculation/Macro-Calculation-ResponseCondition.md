---
id: ResponseCondition
title: ResponseCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Output the result of the response point for transient response.

## Syntax

```psj
DYNAMIC_FREQ_ANALYSIS_RESPONSE(cursor crParentAnalysis, cursor crCoordinate, bool bAllModesUsed, str[] strlModesSelect, bool bDampingFactor, double dDampingFactor, cursor crDampingFactor, int iCurveStyle, double dStyleParamTop, double dStyleParamMid, double dStyleParamBot, bool bIncludeEigenValue, bool bCreateNewResult, int iResultType, str[]strlSelectedResultName, int iResultPos, bool bAllCase, cursor crSelectedLoadCase, bool bSeparateLoad, cursor[] crlTargets, cursor crEdit)
```

## Inputs

### `1. cursor`

- A Cursor specifying the target job to be processed.

### `2. cursor`

- A Cursor specifying the output coordinate system.

### `3. bool`

- A Boolean specifying whether to use all modes.

### `4. str[]`

- A List of String specifying the selected modes using for response calculation. This option was used if bAllModesUsed is False.

### `5. bool`

- A Boolean specifying whether to use damping factor for calculation.

### `6. double`

- A Double specifying the value of damping factor.

### `7. cursor`

- A Cursor specifying the field data of damping factor.

### `8. int`

- An Integer specifying the style of time range for the calculation.

### `9. double`

- A Double specifying the analysis start value of the selected curve style.

### `10. double`

- A Double specifying the step size value of the selected curve style.

### `11. double`

- A Double specifying the analysis end value of the selected curve style.

### `12. bool`

- A Double specifying the analysis end value of the selected curve style.

### `13. bool`

- A Boolean specifying whether to create new results (displacement and stress) for the entire model.

### `14. int`

- An Integer specifying the result type to be calculated.

### `15. str[]`

- A List of String specifying the component results according to the selected result type.

### `16. int`

- An Integer specifying the output position of the result.

### `17. bool`

- A Boolean specifying whether to use all current load cases.

### `18. cursor`

- A Cursor specifying the selected load case to analyze. This option was used if bAllLoadCases is False.

### `19. bool`

- A Boolean specifying whether to calculate the response to each set load.

### `20. cursor[]`

- A List of Cursor specifying the target to calculate the response. The target is node or solid element.

### `21. cursor`

- A Cursor specifying an existing response condition

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
DYNAMIC_FREQ_ANALYSIS_RESPONSE(0:0, 0:0, 1, [], 1, 0.01, 0:0, 1, 0.0, 1.0, 1.0, 0, 0, 0, ["TX"], 0, 1, 0:0, 1, [0:0], 0:0)
```

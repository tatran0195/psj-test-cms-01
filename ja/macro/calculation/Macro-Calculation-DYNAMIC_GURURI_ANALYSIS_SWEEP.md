---
id: DYNAMIC_GURURI_ANALYSIS_SWEEP
title: DYNAMIC_GURURI_ANALYSIS_SWEEP()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Output specified element/frequency result output to external file.

## Syntax

```psj
DYNAMIC_GURURI_ANALYSIS_SWEEP(str strExportFilePath, cursor[] crlTargetElem, cursor crParentAnalysis, cursor crCoordinate, bool bAllModesUsed, str[] strlSelectedModesName, bool bUseDampingFactor, double dDampingFactor, cursor crDampingFactorTable, double[] dlInputFrequency, double dStartPhase, int iStepNumber, bool bOutputMaximumGururiResult, int iPrincipleType, bool bAllCase, cursor crSelectedLoadCase, cursor crEdit)
```

## Inputs

### `1. str`

A String specifying the path of result file to be exported.

### `2. cursor[]`

A List of Cursor specifying the target solid elements.

### `3. cursor`

A Cursor specifying the target job to be processed.

### `4. cursor`

A Cursor specifying the response points coordinate system.

### `5. bool`

A Boolean specifying whether to use all modes.

### `6. str[]`

- A List of String specifying the selected modes using for response calculation. This option was used if bAllModesUsed is False.

### `7. bool`

- A Boolean specifying whether to use damping factor for calculation.

### `8. double`

- A Double specifying the value of damping factor.

### `9. cursor`

- A Cursor specifying the field data of damping factor.

### `10. double[]`

- A Double List specifying the frequency value for analysis.

### `11. double`

- A Double specifying the starting phase to analyze.

### `12. int`

- An Integer specifying the number division of one cycle.

### `13. bool`

- A Boolean specifying whether to output the maximum result of the selected Principal type and store it in a separated tree of assembly window.

### `14. int`

- An Integer specifying the principal result type that will be analyzed.

### `15. bool`

- A Boolean specifying whether to use all current load cases.

### `16. cursor`

- A Cursor specifying the selected load case to analyze. This option was used if bAllLoadCases is False.

### `17. cursor`

- A Cursor specifying an existing Load condition.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
DYNAMIC_GURURI_ANALYSIS_SWEEP("path/to/the/file", [0:0], 0:0, 0:0, 1, [], 1, 1.0, 0:0, [], 0.0, 10, 1, 3, 1, 0:0, 0:0)
```

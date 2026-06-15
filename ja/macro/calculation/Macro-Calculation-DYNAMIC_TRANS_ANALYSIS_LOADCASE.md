---
id: DYNAMIC_TRANS_ANALYSIS_LOADCASE
title: DYNAMIC_TRANS_ANALYSIS_LOADCASE()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create a load case for transient response analysis.

## Syntax

```psj
DYNAMIC_TRANS_ANALYSIS_LOADCASE(cursor crParentAnalysis, str strName, double dFactor, int iNewID, cursor[] crlSelectionLoad, double[] dlTargetFactor, cursor crEdit)
```

## Inputs

### `1. cursor`

- A Cursor specifying the target analysis to be create a load case. A new analysis is created if this parameter is set as None.

### `2. str`

- A String specifying the name of load case to be created.

### `3. double`

- A Double specifying the load coefficient for the entire load cases to be created.

### `4. int`

- An Integer specifying the ID of the load case to be created.

### `5. cursor[]`

- A List of Cursor specifying the selected loads will be used in the load case to be created.

### `6. double[]`

- A Double List specifying the coefficient for each selected load in the corresponding order.

### `7. cursor`

- A Cursor specifying an existing load case condition

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
DYNAMIC_TRANS_ANALYSIS_LOADCASE(0:0, "LoadCase1", 1.0, 1, [0:0], [], 0:0)
```

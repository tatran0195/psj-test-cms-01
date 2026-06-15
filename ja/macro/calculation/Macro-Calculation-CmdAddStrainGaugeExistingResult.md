---
id: CmdAddStrainGaugeExistingResult
title: CmdAddStrainGaugeExistingResult()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Obtain the strain in the vector direction of the existing result.

## Syntax

```psj
CmdAddStrainGaugeExistingResult(int[] ilNodeIDs, int iAnalysisType, int iResultSet, int iTimeStep, int iResultType, double dWidth, double dHeight, double dAmendFactor, str strGaugeName)
```

## Inputs

### `1. int[]`

- A List of Integer specifying the IDs of the selected nodes.

### `2. int`

- An Integer specifying the analysis type.

### `3. int`

- An Integer specifying the result set.

### `4. int`

- An Integer specifying the time step.

### `5. int`

- An Integer specifying the result type.

### `6. double`

- A Double specifying the width of the selection when the node is picked.

### `7. double`

- A Double specifying the length of the selection when the node is picked.

### `8. double`

- A Double specifying the coefficient for correction that is used for strain analysis results.

### `9. str`

- A String specifying the gauge name.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdAddStrainGaugeExistingResult([], 0, 1, 1, 1, 0.0, 0.0, 1.0, "strGaugeName")
```

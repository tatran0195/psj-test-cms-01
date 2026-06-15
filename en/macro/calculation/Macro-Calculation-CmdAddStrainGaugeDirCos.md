---
id: CmdAddStrainGaugeDirCos
title: CmdAddStrainGaugeDirCos()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display a graph of the stress/strain in the direction cosine of the entered direction vector.

## Syntax

```psj
CmdAddStrainGaugeDirCos(int[] ilNodeIDs, double[] dlDirectionInput, double dWidth, double dHeight, double dAmendFactor, str strGaugeName)
```

## Inputs

### `1. int[]`

- A List of Integer specifying the IDs of the selected nodes.

### `2. double[]`

- A Double List specifying the direction to get the result.

### `3. double`

- A Double specifying the width of the selection when the node is picked.

### `4. double`

- A Double specifying the length of the selection when the node is picked.

### `5. double`

- A Double specifying the coefficient for correction that is used for strain analysis results

### `6. str`

- A String specifying the gauge name.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdAddStrainGaugeDirCos([], [0.0, 0.0, 1.0], 0.0, 0.0, 1.0, "strGaugeName")
```

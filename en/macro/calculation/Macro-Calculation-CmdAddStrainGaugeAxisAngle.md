---
id: CmdAddStrainGaugeAxisAngle
title: CmdAddStrainGaugeAxisAngle()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display stress/strain data for an input rotation angle from the first defined axis on a plane consisting of two axes.

## Syntax

```psj
CmdAddStrainGaugeAxisAngle(int[] ilNodeIDs, int nAxis1, int nAxis2, double dAngle, double dWidth, double dHeight, double dAmendFactor, str strGaugeName)
```

## Inputs

### `1. int[]`

- A List of Integer specifying the IDs of the selected nodes.

### `2. int`

- An Integer specifying the first axis from maximum principal stress, minimum principal stress, and middle principal stress.

### `3. int`

- An Integer specifying the second axis from the minimum principal stress and the middle principal stress.

### `4. double`

- A Double specifying the value of rotation angle.

### `5. double`

- A Double specifying the width of the selection when the node is picked.

### `6. double`

- A Double specifying the length of the selection when the node is picked.

### `7. double`

- A Double specifying the coefficient for correction that is used for strain analysis results.

### `8. str`

- A String specifying the gauge name.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdAddStrainGaugeAxisAngle([], 0, 1, 0.0, 0.0, 0.0, 1.0, "strGaugeName")
```

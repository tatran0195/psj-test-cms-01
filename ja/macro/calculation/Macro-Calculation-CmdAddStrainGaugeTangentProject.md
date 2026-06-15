---
id: CmdAddStrainGaugeTangentProject
title: CmdAddStrainGaugeTangentProject()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display the tangential strain at each node.

## Syntax

```psj
CmdAddStrainGaugeTangentProject(int[] ilNodeIDs, double dWidth, double dHeight, int nDirection, double dAngle, double dVectorSize, double dAmendFactor, str strGaugeName)
```

## Inputs

### `1. int[]`

- A List of Integer specifying the IDs of the selected nodes.

### `2. double`

- A Double specifying the width of the selection when the node is picked.

### `3. double`

- A Double specifying the length of the selection when the node is picked.

### `4. int`

- An Integer specifying the original direction which is selected from maximum principal stress, minimum principal stress, X-axis, Y-axis, and Z-axis.

### `5. double`

- A Double specifying the value of rotation angle.

### `6. double`

- A Double specifying the vector size.

### `7. double`

- A Double specifying the coefficient for correction that is used for strain analysis results.

### `8. str`

- A String specifying gauge name.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdAddStrainGaugeTangentProject([], 0.0, 0.0, 0, 0.0, 1.0, 1.0, "strGaugeName")
```

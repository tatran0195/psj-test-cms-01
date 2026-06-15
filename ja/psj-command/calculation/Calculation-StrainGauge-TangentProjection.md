---
id: Calculation-StrainGauge-TangentProjection
title: Calculation.StrainGauge.TangentProjection()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display the tangential strain at each node
---

## Description

Display the tangential strain at each node.

## Syntax

```psj
Calculation.StrainGauge.TangentProjection(...)
```

Macro: [CmdAddStrainGaugeTangentProject](/docs/cli/5.1.0/macro/calculation/CmdAddStrainGaugeTangentProject)

Ribbon: <menuselection>Calculation &#187; StrainGauge &#187; TangentProjection</menuselection>

## Inputs

### `ilNodeIDs`

- A _List of Integer_ specifying the IDs of the selected nodes.
- The default value is [].

### `dWidth`

- A _Double_ specifying the width of the selection when the node is picked.
- The default value is 0.0.

### `dLength`

- A _Double_ specifying the length of the selection when the node is picked.
- The default value is 0.0.

### `iOriginalDirection`

- An _Integer_ specifying the original direction which is selected from maximum principal stress, minimum principal stress, X-axis, Y-axis, and Z-axis.
- The default value is 0.

### `dAngle`

- A _Double_ specifying the value of rotation angle.
- The default value is 0.0.

### `dVectorSize`

- A _Double_ specifying the vector size.
- The default value is 1.0.

### `dAmendFactor`

- A _Double_ specifying the coefficient for correction that is used for strain analysis results.
- The default value is 1.0.

### `strGaugeName`

- A _String_ specifying gauge name.
- The default value is "".

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

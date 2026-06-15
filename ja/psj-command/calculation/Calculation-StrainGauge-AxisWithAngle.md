---
id: Calculation-StrainGauge-AxisWithAngle
title: Calculation.StrainGauge.AxisWithAngle()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display stress/strain data for an input rotation angle from the first defined axis on a plane consisting of two axes
---

## Description

Display stress/strain data for an input rotation angle from the first defined axis on a plane consisting of two axes.

## Syntax

```psj
Calculation.StrainGauge.AxisWithAngle(...)
```

Macro: [CmdAddStrainGaugeAxisAngle](/docs/cli/5.1.0/macro/calculation/CmdAddStrainGaugeAxisAngle)

Ribbon: <menuselection>Calculation &#187; StrainGauge &#187; AxisWithAngle</menuselection>

## Inputs

### `ilNodeIDs`

- A _List of Integer_ specifying the IDs of the selected nodes.
- The default value is [].

### `iAxis1`

- An _Integer_ specifying the first axis from maximum principal stress, minimum principal stress, and middle principal stress.
- The default value is 0.

### `iAxis2`

- An _Integer_ specifying the second axis from the minimum principal stress and the middle principal stress.
- The default value is 1.

### `dAngle`

- A _Double_ specifying the value of rotation angle.
- The default value is 0.0.

### `dWidth`

- A _Double_ specifying the width of the selection when the node is picked.
- The default value is 0.0.

### `dLength`

- A _Double_ specifying the length of the selection when the node is picked.
- The default value is 0.0.

### `dAmendFactor`

- A _Double_ specifying the coefficient for correction that is used for strain analysis results.
- The default value is 1.0.

### `strGaugeName`

- A _String_ specifying the gauge name.
- The default value is "".

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

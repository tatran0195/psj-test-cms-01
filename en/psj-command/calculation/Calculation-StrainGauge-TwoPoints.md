---
id: Calculation-StrainGauge-TwoPoints
title: Calculation.StrainGauge.TwoPoints()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display stress and strain in the direction connecting two points
---

## Description

Display stress and strain in the direction connecting two points.

## Syntax

```psj
Calculation.StrainGauge.TwoPoints(...)
```

Macro: [CmdAddStrainGauge2Nodes](/docs/cli/5.1.0/macro/calculation/CmdAddStrainGauge2Nodes)

Ribbon: <menuselection>Calculation &#187; StrainGauge &#187; TwoPoints</menuselection>

## Inputs

### `iNodeID`

- An _Integer_ specifying the ID of the 1st selected node. This argument can be used for both 2Nodes or Node-Point selection methods.
- The default value is 0.

### `iNodeID2`

- An _Integer_ specifying the ID of the 2nd selected node. This argument was used incase of the selection method is 2Nodes.
- The default value is 0.

### `dlPosition`

- A _Double List_ specifying the coordinate of the selected Point. This argument was used incase of the selection method is Node-Point.
- The default value is [0.0,0.0,0.0].

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

---
id: Calculation-StrainGauge-DirectionCosine
title: Calculation.StrainGauge.DirectionCosine()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display a graph of the stress/strain in the direction cosine of the entered direction vector
---

## Description

Display a graph of the stress/strain in the direction cosine of the entered direction vector.

## Syntax

```psj
Calculation.StrainGauge.DirectionCosine(...)
```

Macro: [CmdAddStrainGaugeDirCos](/docs/cli/5.1.0/macro/calculation/CmdAddStrainGaugeDirCos)

Ribbon: <menuselection>Calculation &#187; StrainGauge &#187; DirectionCosine</menuselection>

## Inputs

### `ilNodeIDs`

- A _List of Integer_ specifying the IDs of the selected nodes.
- The default value is [].

### `dlDirectionCosine`

- A _Double List_ specifying the direction to get the result.
- The default value is [0.0,0.0,1.0].

### `dWidth`

- A _Double_ specifying the width of the selection when the node is picked.
- The default value is 0.0.

### `dLength`

- A _Double_ specifying the length of the selection when the node is picked.
- The default value is 0.0.

### `dAmendFactor`

- A _Double_ specifying the coefficient for correction that is used for strain analysis results
- The default value is 1.0.

### `strGaugeName`

- A _String_ specifying the gauge name.
- The default value is "".

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

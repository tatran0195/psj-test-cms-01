---
id: Calculation-StrainGauge-MaxMinPrincipal
title: Calculation.StrainGauge.MaxMinPrincipal()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display stress or strain in the direction of the maximum or minimum principle stress
---

## Description

Display stress or strain in the direction of the maximum or minimum principle stress

## Syntax

```psj
Calculation.StrainGauge.MaxMinPrincipal(...)
```

Macro:
[CmdAddStrainGaugeMaxPrincipal](/docs/cli/5.1.0/macro/calculation/CmdAddStrainGaugeMaxPrincipal)
[CmdAddStrainGaugeMinPrincipal](/docs/cli/5.1.0/macro/calculation/CmdAddStrainGaugeMinPrincipal)

Ribbon: <menuselection>Calculation &#187; StrainGauge &#187; MaxMinPrincipal</menuselection>

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

### `dAmendFactor`

- A _Double_ specifying the coefficient for correction that is used for strain analysis results.
- The default value is 1.0.

### `strGaugeName`

- A _String_ specifying the gauge name.
- The default value is "".

### `bMaxMin`

- A _Boolean_ specifying whether to use of maximum or minimum direction.
- The default value is _True_.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

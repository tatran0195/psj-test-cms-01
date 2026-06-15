---
id: Calculation-StrainGauge-ExistingResult
title: Calculation.StrainGauge.ExistingResult()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Obtain the strain in the vector direction of the existing result
---

## Description

Obtain the strain in the vector direction of the existing result.

## Syntax

```psj
Calculation.StrainGauge.ExistingResult(...)
```

Macro: [CmdAddStrainGaugeExistingResult](/docs/cli/5.1.0/macro/calculation/CmdAddStrainGaugeExistingResult)

Ribbon: <menuselection>Calculation &#187; StrainGauge &#187; ExistingResult</menuselection>

## Inputs

### `ilNodeIDs`

- A _List of Integer_ specifying the IDs of the selected nodes.
- The default value is [].

### `iAnalysisType`

- An _Integer_ specifying the analysis type.
- The default value is 0.

### `iResultSet`

- An _Integer_ specifying the result set.
- The default value is 1.

### `iTimeStep`

- An _Integer_ specifying the time step.
- The default value is 1.

### `iResultType`

- An _Integer_ specifying the result type.
- The default value is 1.

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

---
id: Calculation-FreqResp-MPFMCFCalculation-AtFrequency
title: Calculation.FreqResp.MPFMCFCalculation.AtFrequency()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display MPC result of specific frequency in Model Participation Factor dialog
---

## Description

Display MPC result of specific frequency in Model Participation Factor dialog.

## Syntax

```psj
Calculation.FreqResp.MPFMCFCalculation.AtFrequency(...)
```

Macro: [CalculateMPCAtFrequency](/docs/cli/5.1.0/macro/calculation/CalculateMPCAtFrequency)

Ribbon: <menuselection>Calculation &#187; FreqResp &#187; MPFMCFCalculation &#187; AtFrequency</menuselection>

## Inputs

### `crResponse`

- A _Cursor_ specifying the response to calculate MPC.
- The default value is _None_.

### `dFrequency`

- A _Double_ specifying the frequency to calculate MPC.
- The default value is 0.0.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

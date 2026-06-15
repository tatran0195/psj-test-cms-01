---
id: Calculation-TransResp-MPFMCFCalculation-AtTime
title: Calculation.TransResp.MPFMCFCalculation.AtTime()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display MPC result of specific time in Model Participation Factor dialog
---

## Description

Display MPC result of specific time in Model Participation Factor dialog.

## Syntax

```psj
Calculation.TransResp.MPFMCFCalculation.AtTime(...)
```

Macro: [CalculateMPCAtTime](/docs/cli/5.1.0/macro/calculation/CalculateMPCAtTime)

Ribbon: <menuselection>Calculation &#187; TransResp &#187; MPFMCFCalculation &#187; AtTime</menuselection>

## Inputs

### `crResponse`

- A _Cursor_ specifying the response to calculate MPC.
- The default value is _None_.

### `dTime`

- A _Double_ specifying the time to calculate MPC.
- The default value is 0.0.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

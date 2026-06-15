---
id: Calculation-TransResp-LoadCaseCondition
title: Calculation.TransResp.LoadCaseCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a load case for transient response analysis
---

## Description

Create a load case for transient response analysis.

## Syntax

```psj
Calculation.TransResp.LoadCaseCondition(...)
```

Macro: [DYNAMIC_TRANS_ANALYSIS_LOADCASE](/docs/cli/5.1.0/macro/calculation/DYNAMIC_TRANS_ANALYSIS_LOADCASE)

Ribbon: <menuselection>Calculation &#187; TransResp &#187; LoadCaseCondition</menuselection>

## Inputs

### `crTargetAnalysis`

- A _Cursor_ specifying the target analysis to be create a load case. A new analysis is created if this parameter is set as None.
- The default value is _None_.

### `strName`

- A _String_ specifying the name of load case to be created.
- The default value is "LoadCase1".

### `dFactor`

- A _Double_ specifying the load coefficient for the entire load cases to be created.
- The default value is 1.0.

### `iNewID`

- An _Integer_ specifying the ID of the load case to be created.
- The default value is 1.

### `crlSelectedLoad`

- A _List of Cursor_ specifying the selected loads will be used in the load case to be created.
- The default value is [].

### `dlTargetFactor`

- A _Double List_ specifying the coefficient for each selected load in the corresponding order.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing load case condition
    - If this parameter is used, the specified load case condition will be modified.
    - If it is left None, a new load case condition will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the create transient load case condition.

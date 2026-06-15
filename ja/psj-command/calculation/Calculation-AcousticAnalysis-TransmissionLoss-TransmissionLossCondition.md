---
id: Calculation-AcousticAnalysis-TransmissionLoss-TransmissionLossCondition
title: Calculation.AcousticAnalysis.TransmissionLoss.TransmissionLossCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Calculate AC power and transmittance from the selected nodal groups created by importing the PCH file on input side and output side respectively
---

## Description

Calculate AC power and transmittance from the selected nodal groups created by importing the PCH file on input side and output side respectively.

## Syntax

```psj
Calculation.AcousticAnalysis.TransmissionLoss.TransmissionLossCondition(...)
```

Macro: [AcousticTLCondition](/docs/cli/5.1.0/macro/calculation/AcousticTLCondition)

Ribbon: <menuselection>Calculation &#187; AcousticAnalysis &#187; TransmissionLoss &#187; TransmissionLossCondition</menuselection>

## Inputs

### `crGroupIn`

- A _Cursor_ specifying the nodal group of input data.
- The default value is _None_.

### `crGroupOut`

- A _Cursor_ specifying the nodal group of output data.
- The default value is _None_.

### `crEdit`

- A _Cursor_ specifying an existing transmission loss condition
    - If this parameter is used, the specified transmission loss condition will be modified.
    - If it is left None, a new transmission loss condition will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created transmission loss condition.

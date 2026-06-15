---
id: Calculation-AcousticAnalysis-TransmissionLoss-PCHResult
title: Calculation.AcousticAnalysis.TransmissionLoss.PCHResult()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Read a Punch file (*.pch) containing information on the coupled surfaces output from a Nastran structural-acoustic coupled calculation and create a nodal group on the acoustic model
---

## Description

Read a Punch file (\*.pch) containing information on the coupled surfaces output from a Nastran structural-acoustic coupled calculation and create a nodal group on the acoustic model.

## Syntax

```psj
Calculation.AcousticAnalysis.TransmissionLoss.PCHResult(...)
```

Macro: [AcousticTLPCHResult](/docs/cli/5.1.0/macro/calculation/AcousticTLPCHResult)

Ribbon: <menuselection>Calculation &#187; AcousticAnalysis &#187; TransmissionLoss &#187; PCHResult</menuselection>

## Inputs

### `strPath`

- A _String_ specifying the path of (\*.pch) file.
- This is a required input.

## Return Code

A _Cursor_ specifying the created PHC result.

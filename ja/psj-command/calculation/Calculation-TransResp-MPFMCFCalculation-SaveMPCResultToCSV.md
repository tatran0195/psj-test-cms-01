---
id: Calculation-TransResp-MPFMCFCalculation-SaveMPCResultToCSV
title: Calculation.TransResp.MPFMCFCalculation.SaveMPCResultToCSV()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Save the MPC results in CSV format.
---

## Description

Save the MPC results in CSV format.

## Syntax

```psj
Calculation.TransResp.MPFMCFCalculation.SaveMPCResultToCSV(...)
```

Macro: [SaveMPCResultToCSV](/docs/cli/5.1.0/macro/calculation/SaveMPCResultToCSV)

Ribbon: <menuselection>Calculation &#187; TransResp &#187; MPFMCFCalculation &#187; SaveMPCResultToCSV</menuselection>

## Inputs

### `crResponse`

- A _Cursor_ specifying the response to be saved.
- The default value is _None_.

### `dTime`

- A _Double_ specifying the time at which the result will be saved.
- The default value is 0.0.

### `strFilePath`

- A _String_ specifying the path of CSV file to be saved.
- This is a required input.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

---
id: Calculation-FreqResp-SaveAnalysis
title: Calculation.FreqResp.SaveAnalysis()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Save the results of a frequency response analysis (*.tsdv)
---

## Description

Save the results of a frequency response analysis (\*.tsdv).

## Syntax

```psj
Calculation.FreqResp.SaveAnalysis(...)
```

Macro: [CmdSaveOpenTsdv](/docs/cli/5.1.0/macro/calculation/CmdSaveOpenTsdv)

Ribbon: <menuselection>Calculation &#187; FreqResp &#187; SaveAnalysis</menuselection>

## Inputs

### `strPath`

- A _String_ specifying the path of file to be saved.
- This is a required input.

### `crlTargets`

- A _List of Cursor_ specifying the specified analysis targets to be saved.
- This is a required input.

### `bBdfMode`

- A _Boolean_ specifying whether to use the BDF mode.
- The default value is _False_.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

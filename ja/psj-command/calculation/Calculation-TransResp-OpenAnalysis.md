---
id: Calculation-TransResp-OpenAnalysis
title: Calculation.TransResp.OpenAnalysis()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Load the results of a transient response analysis (*.tsdv)
---

## Description

Load the results of a transient response analysis (\*.tsdv).

## Syntax

```psj
Calculation.TransResp.OpenAnalysis(...)
```

Macro: [CmdSaveOpenTsdv](/docs/cli/5.1.0/macro/calculation/CmdSaveOpenTsdv)

Ribbon: <menuselection>Calculation &#187; TransResp &#187; OpenAnalysis</menuselection>

## Inputs

### `strPath`

- A _String_ specifying the path of file will be opened.
- This is a required input.

### `bBdfMode`

- A _Boolean_ specifying whether to use BDF mode.
- The default value is _False_.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

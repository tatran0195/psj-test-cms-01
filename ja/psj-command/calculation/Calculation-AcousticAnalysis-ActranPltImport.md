---
id: Calculation-AcousticAnalysis-ActranPltImport
title: Calculation.AcousticAnalysis.ActranPltImport()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create intensity from the sound pressure and particle velocity results
---

## Description

Create intensity from the sound pressure and particle velocity results.

## Syntax

```psj
Calculation.AcousticAnalysis.ActranPltImport(...)
```

Macro: [PostImportActranPlt](/docs/cli/5.1.0/macro/calculation/PostImportActranPlt)

Ribbon: <menuselection>Calculation &#187; AcousticAnalysis &#187; ActranPltImport</menuselection>

## Inputs

### `strPath`

- A _String_ specifying the Actran (\*.plt) file to be imported.
- This is a required input.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not.
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

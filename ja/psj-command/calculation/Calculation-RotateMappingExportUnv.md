---
id: Calculation-RotateMappingExportUnv
title: Calculation.RotateMappingExportUnv()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Save the mapped result to file (*unv).
---

## Description

Save the mapped result to file (\*unv).

## Syntax

```psj
Calculation.RotateMappingExportUnv(...)
```

Macro:

Ribbon: <menuselection>Calculation &#187; RotateMappingExportUnv</menuselection>

## Inputs

### `strPath`

- A _String_ specifying the path of \*unv file to be saved.
- This is a required input.

### `veclResultSet`

- A _List of Vector_ specifying the attribute of the results to be exported.
- This is a required input.

### `ilComponentUnv`

- A _List of Integer_ specifying the universal components.
- The default value is [0, 2, 5, 1, 4, 3].

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

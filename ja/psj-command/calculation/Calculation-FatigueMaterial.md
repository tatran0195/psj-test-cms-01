---
id: Calculation-FatigueMaterial
title: Calculation.FatigueMaterial()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Load the fatigue limit diagrams for each material
---

## Description

Load the fatigue limit diagrams for each material.

## Syntax

```psj
Calculation.FatigueMaterial(...)
```

Macro:

Ribbon: <menuselection>Post &#187; Calculation &#187; FatigueMaterial</menuselection>

## Inputs

### `strlFilePaths`

- A _List of String_ specifying the path of fatigue limit diagram file (\*.csv).
- This is a required input.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

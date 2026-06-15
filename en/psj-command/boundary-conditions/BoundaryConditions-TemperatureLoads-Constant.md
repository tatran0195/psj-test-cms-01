---
id: BoundaryConditions-TemperatureLoads-Constant
title: BoundaryConditions.TemperatureLoads.Constant()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create temperature load constant
---

## Description

Create temperature load constant.

## Syntax

```psj
BoundaryConditions.TemperatureLoads.Constant(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; TemperatureLoads &#187; Constant</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `dTemperature`

- A _Double_ specifying the temperature.
- The default value is 0.0.

### `crTable`

- A _Cursor_ specifying the table.
- The default value is None.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `bUseDefaultTemp`

- A _Boolean_ specifying the use default temperature.
- The default value is False.

## Return Code

A String of 1 if success, or 0 if fail.

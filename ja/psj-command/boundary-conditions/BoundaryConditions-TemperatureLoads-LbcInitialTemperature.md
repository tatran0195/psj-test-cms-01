---
id: BoundaryConditions-TemperatureLoads-LbcInitialTemperature
title: BoundaryConditions.TemperatureLoads.LbcInitialTemperature()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Boundary Conditions Lbc Initial Temperature
---

## Description

Boundary Conditions Lbc Initial Temperature.

## Syntax

```psj
BoundaryConditions.TemperatureLoads.LbcInitialTemperature(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; TemperatureLoads &#187; LbcInitialTemperature</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "InitialTemperature1".

### `iType`

- An _Integer_ specifying the type.
- The default value is 0.

### `dFTemp`

- A _Double_ specifying the temperature.
- The default value is 0.0.

### `strFilePathName`

- A _String_ specifying the file path name.
- The default value is "".

### `bUseDefault`

- A _Boolean_ specifying the use default.
- The default value is False.

### `crTable`

- A _Cursor_ specifying the table.
- The default value is None.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

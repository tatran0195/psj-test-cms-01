---
id: BoundaryConditions-InitialTemperature-Constant
title: BoundaryConditions.InitialTemperature.Constant()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create initial temperature with constant value
---

## Description

Create initial temperature with constant value,

## Syntax

```psj
BoundaryConditions.InitialTemperature.Constant(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InitialTemperature &#187; Constant</menuselection>

## Inputs

### `strName`

- A _String_ specifying the initial temperature name.
- The default value is "InitialTemperature1".

### `dFTemp`

- A _double_ specifying the constant temperature.
- The default value is 0.0.

### `iLocalTemperatureUnit`

- An _Ingeter_ specifying the local temperature.
- The default value is 0.

### `bUseDefault`

- A _Boolean_ enable/disable default temperature.
- The default value is False.

### `crlTargets`

- A _List of Cursor_ specifying list of target parts for initial temperature.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the initial temperature item which use for editing.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

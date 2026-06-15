---
id: BoundaryConditions-InitialTemperature-WholeMapping
title: BoundaryConditions.InitialTemperature.WholeMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create initial temperature whole mapping
---

## Description

Create initial temperature whole mapping.

## Syntax

```psj
BoundaryConditions.InitialTemperature.WholeMapping(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InitialTemperature &#187; WholeMapping</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "TemperatureInitsWholeMapping1".

### `iMapSourceType`

- An _Integer_ specifying the map source type.
- The default value is 0.

### `strPath`

- A _String_ specifying the path.
- The default value is "".

### `iMappingMethod`

- An _Integer_ specifying the mapping method.
- The default value is 0.

### `iIsubcase`

- An _Integer_ specifying the isubcase.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `crTargets`

- A _List of Cursor_ specifying the mapping targets.
- The default value is []].

### `iMappingFromStepNo`

- An _Integer_ specifying the step number.
- The default value is 0.

### `iLocalUnit`

- An _Integer_ specifying the unit of temperature.
- The default value is 0.

## Return Code

A String of 1 if success, or 0 if fail.

---
id: BoundaryConditions-BoundaryTemperature-Constant
title: BoundaryConditions.BoundaryTemperature.Constant()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a constant temperature load to part, face, edge or node. User inputs temperature in scalar or in a table format, then it will return temperature load to the specified location
---

## Description

Create a constant temperature load to part, face, edge or node. User inputs temperature in scalar or in a table format, then it will return temperature load to the specified location.

## Syntax

```psj
BoundaryConditions.BoundaryTemperature.Constant(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Boundary Temperature &#187; Constant</menuselection>

## Inputs

### `strName`

- A _String_ specifying name of the temperature load condition.
- The default value is "BoundaryTemperature_1".

### `dFTemp`

- A _Double_ specifying the constant temperature value.
- This is a required input.

### `crTable`

- A _Cursor_ specifying the table entered in the field data.
- The default value is _None_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets. Target can be face, edge or node.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing temperature load. If this parameter is used, the specified temperature load will be modified. If it is left _None_, a new temperature load will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

---
id: BoundaryConditions-Convection-Constant
title: BoundaryConditions.Convection.Constant()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create natural convection condition on selected face, element or group. User inputs external temperature and convection coefficient in scalar or in a table format, then it will return convection load to the specified location
---

## Description

Create natural convection condition on selected face, element or group. User inputs external temperature and convection coefficient in scalar or in a table format, then it will return convection load to the specified location.

## Syntax

```psj
BoundaryConditions.Convection.Constant(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Convection &#187; Constant</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of convection setting.
- The default value is "Convection_1".

### `dExternalTemp`

- A _Double_ specifying the external temperature (default unit: Kelvin).
- This is a required input.

### `crTableTimeTemp`

- A _Cursor_ specifying the table of dependency between time and external temperature. This table can be created using _[BoundaryConditions.FieldData](/docs/cli/5.1.0/psj-command/boundary-conditions/BoundaryConditions.FieldData)_.
- The default value is _None_.

### `dConvectionCoef`

- A _Double_ specifying the convection coefficient (default unit: W/m^2\*K).
- This is a required input.

### `crTableTimeCoeff`

- A _Cursor_ specifying the table of dependency between time and convection coefficient. This table can be created using _[BoundaryConditions.FieldData](/docs/cli/5.1.0/psj-command/boundary-conditions/BoundaryConditions.FieldData)_.
- The default value is _None_.

### `crTableTempCoeff`

- A _Cursor_ specifying the table of dependency between temperature and convection coefficient. This table can be created using _[BoundaryConditions.FieldData](/docs/cli/5.1.0/psj-command/boundary-conditions/BoundaryConditions.FieldData)_.
- The default value is _None_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets for convection boundary condition. Target can be faces, elements or groups.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing convection setting (constant).
    - If this parameter is used, the specified convection setting (constant) will be modified.
    - If it is left _None_, a new convection setting (constant) will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

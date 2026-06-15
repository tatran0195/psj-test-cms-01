---
id: BoundaryConditions-Radiation
title: BoundaryConditions.Radiation()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a radiation applied to the selected Face or Element or Group. User inputs the radiation value and it will apply the radiation to the selected items
---

## Description

Create a radiation applied to the selected Face or Element or Group. User inputs the radiation value and it will apply the radiation to the selected items

## Syntax

```psj
BoundaryConditions.Radiation(...)
```

Macro:

Ribbon: <menuselection>BoundaryConditions &#187; Radiation</menuselection>

## Inputs

### `strName`

- A _String_ specifying name of radiation.
- The default value is "Radiation".

### `radiation`

- A _LBC_RADIATION_DATA_ specifying radiation
- The default value is LBC_RADIATION_DATA().

    #### `dAmbientTemp`
    - A _Double_ specifying the value of Ambient Temperature.
    - This is a required input.

    #### `crTimeDependAm`
    - A _Cursor_ of FieldData specifying information of Time Dependence Ambient in a table format
    - The default value is 0:0 (no reference).

    #### `dEmissivity`
    - A _Double_ specifying the value of Emissivity.
    - This is a required input.

    #### `crTimeDependEm`
    - A _Cursor_ of FieldData specifying information of Time Dependence Emissivity in a table format
    - The default value is 0:0 (no reference).

    #### `crTempDependEm`
    - A _Cursor_ of FieldData specifying information of Temp Dependence Emissivity in a table format
    - The default value is 0:0 (no reference).

### `crlTargets`

- A _List of Cursor_ specifying target to set Radiation.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying existing Radiation when edit it.
- The default value is _None_ (create mode).

## Return Code

A _Cursor_ specifying created / edited Radiation.

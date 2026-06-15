---
id: BoundaryConditions-LoadCase
title: BoundaryConditions.LoadCase()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a load case that bundles loads and constraints. Load cases can be referenced when creating analysis solver input data
---

## Description

Create a load case that bundles loads and constraints. Load cases can be referenced when creating analysis solver input data.

## Syntax

```psj
BoundaryConditions.LoadCase(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; LoadCase</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the load case to be created.
- The default value is "LoadCase1".

### `dFactor`

- A _Double_ specifying the load factor for Nastran that applies to the entire load case to be created. Used when multiplying the load by a factor.
- The default value is 1.0.

### `crlTargets`

- A _List of Cursor_ specifying the list of all created boundary conditions.
- The default value is [].

### `iExportId`

- An _Integer_ specifying the export identity number of load case.
- The default value is 1.

### `dlTargetFactor`

- A _List of Double_ specifying the list factor of each boundary condition.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing load case. If this parameter is used, the specified load case will be modified. If it is left _None_, a new load case will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

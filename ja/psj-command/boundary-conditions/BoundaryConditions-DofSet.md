---
id: BoundaryConditions-DofSet
title: BoundaryConditions.DofSet()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create the degrees of freedom in the analysis set(ASET) in TS-Solver
---

## Description

Create the degrees of freedom in the analysis set(ASET) in TS-Solver.

## Syntax

```psj
BoundaryConditions.DofSet(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; DofSet</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying the list of the target(face/edge/node) for creating the ASET.
- The default value is [].

### `strName`

- A _String_ specifying the name of the ASET to be created.
- The default value is "DofSet1".

### `iDwDof`

- An _Integer_ specifying the degree of freedom(DoF). This value is calculated by using OR operator between the following options:

    | Value                                                                          | Option             |
    | ------------------------------------------------------------------------------ | ------------------ | ------ |
    | 1                                                                              | Ux (x translation) |
    | 2                                                                              | Uy (y translation) |
    | 4                                                                              | Uz (z translation) |
    | 8                                                                              | Rx (x rotation)    |
    | 16                                                                             | Ry (y rotation)    |
    | 32                                                                             | Rz (z rotation)    |
    | - For example, if x, y, z translation must be constrained, then the iDwDof = 1 | 2                  | 4 = 7. |

- The default value is 7.

### `crCurCoord`

- A _Cursor_ specifying the coordinate from which the fixed constraint is created.
- The default value is _None_(global coordinate).

### `crTable`

- A _Cursor_ specifying the table of field data.
- The default value is _None_.

### `crEdit`

- A _Cursor_ specifying an existing DoF Set. If this parameter is used, the specified DoF Set will be modified. If it is left _None_, a new DoF Set will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

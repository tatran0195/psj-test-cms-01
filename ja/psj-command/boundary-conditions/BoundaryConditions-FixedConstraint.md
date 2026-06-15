---
id: BoundaryConditions-FixedConstraint
title: BoundaryConditions.FixedConstraint()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a fixed constraint on selected Face, Edge or Node. User inputs the degree of freedom of fixed constraint and it will return a fixed constraint on selected items
---

## Description

Create a fixed constraint on selected Face, Edge or Node. User inputs the degree of freedom of fixed constraint and it will return a fixed constraint on selected items.

## Syntax

```psj
BoundaryConditions.FixedConstraint(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Fixed Constraint</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the fixed constraint to be created.
- The default value is "Constraint1".

### `iDwDof`

- An _Integer_ specifying the degree of freedom (dof). This value is calculated by using OR operator between the following options:

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

### `iType`

- An _Integer_ specifying the type that is one of the following.
    - 0: None (do not use type)
    - 1: SUPPORT type.
    - 2: USET type.
- The default value is 0.

### `iUsetType`

- An _Integer_ specifying the USET type. The USET type is only used when setting iType=2. The USET type is one of the following.
    - 0: U1
    - 1: U2
    - 2: U3
    - 3: U4
    - 4: U5
    - 5: U6
- The default value is 0

### `crTable`

- A _Cursor_ specifying the table of field data.
- The default value is _None_.

### `bAbaqusFixed`

- A _Boolean_ to enable (_True_) or disable (_False_) the Abaqus fixed. This parameter is used for Abaqus I/F.
- The default value is _False_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets for fixed constraint. This target can be Face, Edge or Node.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing fixed constraint. If this parameter is used, the specified fixed constraint will be modified. If it is left _None_, a new fixed constraint will be created.
- The default value is None.

## Return Code

A _Cursor_ specifying the created LBC.

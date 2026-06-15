---
id: BoundaryConditions-InitialNodalValue-Displacement
title: BoundaryConditions.InitialNodalValue.Displacement()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Initial Dynamic
---

## Description

Create Initial Dynamic.

## Syntax

```psj
BoundaryConditions.InitialNodalValue.Displacement(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InitialNodalValue &#187; Displacement</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "InitialDisplacement1".

### `iType`

- An _Integer_ specifying the type.
- The default value is 0.

### `vecInit`

- A _Vector_ specifying the initial.
- The default value is [DFLT_DBL,DFLT_DBL,DFLT_DBL].

### `bSelNode`

- A _Boolean_ specifying the selection node.
- The default value is False.

### `crNodeSet`

- A _Cursor_ specifying the node set.
- The default value is None.

### `crTable`

- A _Cursor_ specifying the table.
- The default value is None.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

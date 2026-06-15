---
id: BoundaryConditions-Pressure-By2Nodes
title: BoundaryConditions.Pressure.By2Nodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create load boundary condition of 2nodes pressure
---

## Description

Create load boundary condition of 2nodes pressure.

## Syntax

```psj
BoundaryConditions.Pressure.By2Nodes(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Pressure &#187; By2Nodes</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "PressureLinear1".

### `crNodeA`

- A _Cursor_ specifying the node a.
- The default value is None.

### `dPressureA`

- A _Double_ specifying the pressure a.
- The default value is 0.0.

### `iNodeAUnit`

- An _Integer_ specifying the node a unit.
- The default value is 0.

### `crNodeB`

- A _Cursor_ specifying the node .
- The default value is None.

### `dPressureB`

- A _Double_ specifying the pressure .
- The default value is 0.0.

### `iNodeBUnit`

- An _Integer_ specifying the node unit.
- The default value is 0.

### `iDirection`

- An _Integer_ specifying the direction.
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

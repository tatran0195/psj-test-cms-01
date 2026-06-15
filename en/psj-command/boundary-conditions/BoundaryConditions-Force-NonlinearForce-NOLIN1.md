---
id: BoundaryConditions-Force-NonlinearForce-NOLIN1
title: BoundaryConditions.Force.NonlinearForce.NOLIN1()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Nonlinear Force of NOLIN1(Table)
---

## Description

Create Nonlinear Force of NOLIN1(Table).

## Syntax

```psj
BoundaryConditions.Force.NonlinearForce.NOLIN1(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Force &#187; NonlinearForce &#187; NOLIN1</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "NonlinearForce1_1".

### `dForceScale`

- A _Double_ specifying the force scale.
- The default value is 0.0.

### `dMomentScale`

- A _Double_ specifying the moment scale.
- The default value is 0.0.

### `iForcDir`

- An _Integer_ specifying the forc direction.
- The default value is 0.

### `iForceDepends`

- An _Integer_ specifying the force depends.
- The default value is 0.

### `iMomentDir`

- An _Integer_ specifying the moment direction.
- The default value is 0.

### `iMomentDepends`

- An _Integer_ specifying the moment depends.
- The default value is 0.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `crForceTable`

- A _Cursor_ specifying the force table.
- The default value is None.

### `crMomentTable`

- A _Cursor_ specifying the moment table.
- The default value is None.

### `crlMaster`

- A _List of Cursor_ specifying the master.
- The default value is [].

### `crlSlave`

- A _List of Cursor_ specifying the slave.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

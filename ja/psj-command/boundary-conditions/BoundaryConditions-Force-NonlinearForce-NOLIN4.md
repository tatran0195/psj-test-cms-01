---
id: BoundaryConditions-Force-NonlinearForce-NOLIN4
title: BoundaryConditions.Force.NonlinearForce.NOLIN4()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create nonlinear force NOLIN4
---

## Description

Create nonlinear force NOLIN4.

## Syntax

```psj
BoundaryConditions.Force.NonlinearForce.NOLIN4(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Force &#187; NonlinearForce &#187; NOLIN4</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `dForceScale`

- A _Double_ specifying the force scale.
- The default value is 0.0.

### `dMomentScale`

- A _Double_ specifying the moment scale.
- The default value is 0.0.

### `dForcePowerA`

- A _Double_ specifying the force power a.
- The default value is 0.0.

### `dMomentPowerA`

- A _Double_ specifying the moment power a.
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

### `crCurCoord`

- A _Cursor_ specifying the cur coordinate.
- The default value is None.

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

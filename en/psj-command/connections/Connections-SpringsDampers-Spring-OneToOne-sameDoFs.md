---
id: Connections-SpringsDampers-Spring-OneToOne-sameDoFs
title: Connections.SpringsDampers.Spring.OneToOne.sameDoFs()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Spring connection One to One same DOFs
---

## Description

Spring connection One to One same DOFs

## Syntax

```psj
Connections.SpringsDampers.Spring.OneToOne.sameDoFs(iMethod=0, strName="SPRING", crlMasterTargets=[], crlSlaveTargets=[], crCoordSys=None, iSpringType=0, iGround=0, dTolerance=0.0, iDirection=0, iDistributeMode=0, iDof1=0, iDof2=0, dDampCoef=DFLT_DBL, dStressCoef=DFLT_DBL, posTStiffness=[0,0,0], posRStiffness=[0,0,0], bUpdateDispCS=True, crEdit=None)
```

Ribbon: <menuselection>Connections &#187; SpringsDampers &#187; Spring &#187; OneToOne &#187; sameDoFs</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 0.

### `strName`

- A _String_ specifying the name.
- The default value is "SPRING".

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- The default value is [].

### `crlSlaveTargets`

- A _Cursor List_ specifying the slave target.
- The default value is [].

### `crCoordSys`

- A _Cursor_ specifying the coordinate system.
- The default value is None.

### `iSpringType`

- An _Integer_ specifying the spring type.
- The default value is 0.

### `iGround`

- An _Integer_ specifying the ground.
- The default value is 0.

### `dTolerance`

- A _Double_ specifying the tolerance.
- The default value is 0.0.

### `iDirection`

- An _Integer_ specifying the direction.
- The default value is 0.

### `iDistributeMode`

- An _Integer_ specifying the distribute mode.
- The default value is 0.

### `iDof1`

- An _Integer_ specifying the DOF 1.
- The default value is 0.

### `iDof2`

- An _Integer_ specifying the DOF 2.
- The default value is 0.

### `dDampCoef`

- A _Double_ specifying the damp coefficient .
- The default value is DFLT_DBL.

### `dStressCoef`

- A _Double_ specifying the stress coefficient .
- The default value is DFLT_DBL.

### `posTStiffness`

- A _Position_ specifying the t stiffness.
- The default value is [0,0,0].

### `posRStiffness`

- A _Position_ specifying the r stiffness.
- The default value is [0,0,0].

### `bUpdateDispCS`

- A _Boolean_ specifying the update displacement coordinate system.
- The default value is True.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

---
id: Connections-RigidElements-RBE2-ToCircleCenter
title: Connections.RigidElements.RBE2.ToCircleCenter()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: create RBE2
---

## Description

Create RBE2

## Syntax

```psj
Connections.RigidElements.RBE2.ToCircleCenter(iMethod=19, crlMasterTargets=[], crlSlaveTargets=[], iEType=2, strName="RBE2_1", crCoordSys=None, dTolerance=0.0, iUlDOFs=63, dlVirtualNodePos=[0, 0, 0], iSurfaceDef=0, crEdit=None, iEnableUpdateDispCS=1, iEnableCornerOnly=0, iEnableCheckDulplicate=1, iDuplicateMode=0)
```

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RBE2 &#187; ToCircleCenter</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 19.

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target.
- The default value is [].

### `iEType`

- An _Integer_ specifying the e type.
- The default value is 2.

### `strName`

- A _String_ specifying the name.
- The default value is "RBE2_1".

### `crCoordSys`

- A _Cursor_ specifying the coordinate system.
- The default value is None.

### `dTolerance`

- A _Double_ specifying the tolerance.
- The default value is 0.0.

### `iUlDOFs`

- An _Integer_ specifying the ul d o fs.
- The default value is 63.

### `dlVirtualNodePos`

- A _Double List_ specifying the virtual node position.
- The default value is [0, 0, 0].

### `iSurfaceDef`

- An _Integer_ specifying the surface definition.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `iEnableUpdateDispCS`

- An _Integer_ specifying the enable update displacement coordinate system.
- The default value is 1.

### `iEnableCornerOnly`

- An _Integer_ specifying the enable corner only.
- The default value is 0.

### `iEnableCheckDuplicate`

- An _Integer_ specifying the enable check dulplicate.
- The default value is 1.

### `iDuplicateMode`

- An _Integer_ specifying the duplicate mode.
- The default value is 0.

## Return Code

A String of 1 if success, or 0 if fail.

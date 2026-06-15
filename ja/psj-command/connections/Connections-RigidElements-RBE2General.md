---
id: Connections-RigidElements-RBE2General
title: Connections.RigidElements.RBE2General()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Unknown Description
---

## Description

Unknown Description

## Syntax

```psj
Connections.RigidElements.RBE2General(iMethod, crlMasterTargets, crlSlaveTargets, iEType=2, strName="RBE2_1", crCoordSys=None, dTolerance=0.0, iUlDOFs=63, dlVirtualNodePos=[0, 0, 0], iSurfaceDef=0, crEdit=None, iEnableUpdateDispCS=1, iEnableCornerOnly=0, iDuplicateMode=-1)
```

Macro: [Rbe2](/docs/cli/5.1.0/macro/connections/Rbe2)

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RBE2General</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- This is a required input.

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- This is a required input.

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target.
- This is a required input.

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

### `iDuplicateMode`

- An _Integer_ specifying the duplicate mode.
- The default value is -1.

## Return Code

A String of 1 if success, or 0 if fail.

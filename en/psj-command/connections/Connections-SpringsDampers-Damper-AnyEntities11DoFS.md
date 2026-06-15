---
id: Connections-SpringsDampers-Damper-AnyEntities11DoFS
title: Connections.SpringsDampers.Damper.AnyEntities11DoFS()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Damper Connection
---

## Description

Create Damper Connection

## Syntax

```psj
Connections.SpringsDampers.Damper.AnyEntities11DoFS(iMethod, strName, crlMasterTargets, crlSlaveTargets, crCoordSys=None, iGround=0, dTolerance=0.0, vecTDamper=[0, 0, 0], vecRDamper=[0, 0, 0], crEdit=None, bUpdateDispCS=True)
```

Ribbon: <menuselection>Connections &#187; SpringsDampers &#187; Damper &#187; AnyEntities11DoFS</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- This is a required input.

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- This is a required input.

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target.
- This is a required input.

### `crCoordSys`

- A _Cursor_ specifying the coordinate system.
- The default value is None.

### `iGround`

- An _Integer_ specifying the ground.
- The default value is 0.

### `dTolerance`

- A _Double_ specifying the tolerance.
- The default value is 0.0.

### `vecTDamper`

- A _Vector_ specifying the t damper.
- The default value is [0, 0, 0].

### `vecRDamper`

- A _Vector_ specifying the r damper.
- The default value is [0, 0, 0].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `bUpdateDispCS`

- A _Boolean_ specifying the update displacement coordinate system.
- The default value is True.

## Return Code

A String of 1 if success, or 0 if fail.

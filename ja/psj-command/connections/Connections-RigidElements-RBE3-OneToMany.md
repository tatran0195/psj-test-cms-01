---
id: Connections-RigidElements-RBE3-OneToMany
title: Connections.RigidElements.RBE3.OneToMany()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create one to many (Slave:Master) RBE3 (Interpolation constraining Element)
---

## Description

Create one to many (Slave:Master) RBE3 (Interpolation constraining Element).

## Syntax

```psj
Connections.RigidElements.RBE3.OneToMany(...)
```

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RBE3 &#187; OneToMany</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 16.

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target.
- The default value is [].

### `listRbe3TermConnection`

- A _RBE3TERM_CONNECTION List_ specifying the rbe3 term connection.
- The default value is [].

### `iTypeRBE3`

- An _Integer_ specifying the type r e3.
- The default value is 3.

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `crCoordSys`

- A _Cursor_ specifying the coordinate system.
- The default value is None.

### `dTolerance`

- A _Double_ specifying the tolerance.
- The default value is 0.0.

### `dlVirtualNodePos`

- A _Double List_ specifying the virtual node position.
- The default value is [0, 0, 0].

### `iSurfaceDef`

- An _Integer_ specifying the surface definition.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `bUpdateDispCS`

- A _Boolean_ specifying the enable update displacement coordinate system.
- The default value is _True_.

### `bCornerOnly`

- A _Boolean_ specifying the enable corner only.
- The default value is _False_.

## Return Code

A Cursor specifying the created RBE3 connection.

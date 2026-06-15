---
id: Connections-RigidElements-RBarGeneral
title: Connections.RigidElements.RBarGeneral()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Unknown Description
---

## Description

Unknown Description

## Syntax

```psj
Connections.RigidElements.RBarGeneral(rbarConnection=RBAR_CONNECTION(), crlMasterTargets=[], crlSlaveTargets=[], iUlDOFs=0, dTol=DFLT_DBL, crCoord=None, crEdit=None)
```

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RBarGeneral</menuselection>

## Inputs

### `rbarConnection`

- A _RBAR_CONNECTION_ specifying the connection.
- The default value is RBAR_CONNECTION().

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target.
- The default value is [].

### `iUlDOFs`

- An _Integer_ specifying the ul d o fs.
- The default value is 0.

### `dTol`

- A _Double_ specifying the tolerance.
- The default value is DFLT_DBL.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is _None_.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is _None_.

## Return Code

A String of 1 if success, or 0 if fail.

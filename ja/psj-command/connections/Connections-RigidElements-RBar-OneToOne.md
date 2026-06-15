---
id: Connections-RigidElements-RBar-OneToOne
title: Connections.RigidElements.RBar.OneToOne()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create one-to-one (master:slave) RBar (rigid elements)
---

## Description

Create one-to-one (master:slave) RBar (rigid elements).

## Syntax

```psj
Connections.RigidElements.RBar.OneToOne(...)
```

Macro: [RBarOneToOne](/docs/cli/5.1.0/macro/connections/RBarOneToOne)

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RBar &#187; OneToOne</menuselection>

## Inputs

### `strName`

- A _String_ specifying the RBar name to be created.
- The default value is "RBAR_1".

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target. Master target can be selected by part, face, edge, element, or node.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target. Slave target can be selected by part, face, edge, element, or node.
- The default value is [].

### `iMethod`

- An _Integer_ specifying the connection method.
- The default value is 17.

### `iUlDOFs`

- An _Integer_ specifying the master degrees of freedom. This function only support case where all components of the independent degrees of freedom are fixed for the nodes selected in the master.
- The default value is 0.

### `dTol`

- A _Double_ specifying the tolerance.
- The default value is DFLT_DBL.

### `crCoord`

- A _Cursor_ specifying the coordinate system.
- The default value is _None_.

### `bUpdateDispCS`

- A Boolean specifying whether or not update displacement coordinate system.
    - If True, the displacement coordinate system is updated.
    - If False, displacement coordinate system is not updated.
- The default value is _True_.

### `crEdit`

- A _Cursor_ specifying an existing Rbar
    - If this parameter is used, the specified Rbar will be modified.
    - If it is left None, a new Rbar will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created Rbar.

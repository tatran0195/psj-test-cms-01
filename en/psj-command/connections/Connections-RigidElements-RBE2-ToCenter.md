---
id: Connections-RigidElements-RBE2-ToCenter
title: Connections.RigidElements.RBE2.ToCenter()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create one-to-many (master:slave) RBE2 (rigid element)
---

## Description

Create one-to-many (master:slave) RBE2 (rigid element).

## Syntax

```psj
Connections.RigidElements.RBE2.ToCenter(...)
```

Macro: [RBE2ToCenter](/docs/cli/5.1.0/macro/connections/RBE2ToCenter)

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RBE2 &#187; ToCenter</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the connection method.
- The default value is 18.

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target. Slave target can be selected by part, face, edge, element, or node.
- The default value is [].

### `iEType`

- An _Integer_ specifying the connection type.
- The default value is 2.

### `strName`

- A _String_ specifying the RBE2 name to be created.
- The default value is "RBE2_1".

### `crCoordSys`

- A _Cursor_ specifying the coordinate system.
- The default value is _None_.

### `dTolerance`

- A _Double_ specifying the tolerance.
- The default value is 0.0.

### `iUlDOFs`

- An _Integer_ specifying the component of dependent degrees of freedom.
- The default value is 63.

### `dlVirtualNodePos`

- A _Double List_ specifying the position of master node.
- The default value is [0, 0, 0].

### `iSurfaceDef`

- An _Integer_ specifying the surface definition.
    - 0: By Node Set - Specify the node as a reference surface.
    - 1: By Element Set - Specify the element as a reference surface. Cannot configure an element to the slave entity (node, edge) and if it has been selected an error will be output.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying an existing RBE2 connection
    - If this parameter is used, the specified RBE2 connection will be modified.
    - If it is left None, a new RBE2 will be created.
- The default value is _None_.

### `iEnableUpdateDispCS`

- An _Integer_ specifying whether to update displacement coordinate system.
- The default value is 1.

### `iEnableCornerOnly`

- An _Integer_ specifying whether to connect only to the corner nodes of the selected entity.
- The default value is 0.

### `iEnableCheckDuplicate`

- An _Integer_ specifying whether to check for duplicate.
- The default value is 1.

### `iDuplicateMode`

- An _Integer_ specifying the duplicate mode.
- The default value is 0.

## Return Code

A _Cursor_ specifying the created RBE2.

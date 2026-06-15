---
id: Connections-MPC-General-NodeToAny
title: Connections.MPC.General.NodeToAny()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create MPC between a selected node and any types of entities such as nodes, edges or faces
---

## Description

Create MPC between a selected node and any types of entities such as nodes, edges or faces.

## Syntax

```psj
Connections.MPC.General.NodeToAny(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; General &#187; NodeToAny</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crMasterNode`

- A _Cursor_ specifying the master node which needs to be connected.
- The default value is _None_.

### `crlSlaveEntities`

- A _List of Cursor_ specifying the list of slave entities such as nodes, edges or faces which need to be connected. The slave entities list can contain different types of entities at the same time.
- This is the required input.

### `listMpcConnection`

- A _List of [MPC_CONNECTION](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MPC_CONNECTION)_ specifying the pair of MPC connection data type.
- The default value is [].

### `iLocalCoordinate`

- An _Integer_ specifying the local coordinate system.
- The default value is 0.

### `bUpdateDispCS`

- A _Boolean_ specifying whether or not update displacement coordinate system.
    - If _True_, the displacement coordinate system is updated.
    - If _False_, displacement coordinate system is not updated.
- The default value is _True_.

### `crMPCConnection`

- A _Cursor_ specifying the exist MPC for editing.
    - If this parameter is used, the specified exist MPC item will be modified.
    - If it is left _None_, a new MPC item will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created or the modified MPC connection.

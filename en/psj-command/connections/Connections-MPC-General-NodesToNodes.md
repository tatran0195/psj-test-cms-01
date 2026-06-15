---
id: Connections-MPC-General-NodesToNodes
title: Connections.MPC.General.NodesToNodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create MPC between selected nodes
---

## Description

Create MPC between selected nodes.

## Syntax

```psj
Connections.MPC.General.NodesToNodes(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; General &#187; NodesToNodes</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crlMasterNodes`

- A _List of Cursor_ specifying the list of master nodes.
- In case this list has more than one selected node, the number of master nodes and slave nodes must be equal. The MPC is created by connecting selected master nodes with selected slave nodes one-to-one correspondingly.
- This is the required input.

### `crlSlaveNodes`

- A _List of Cursor_ specifying the list of slave nodes.
- In case this list has more than one selected node, the number of slave nodes and master nodes must be equal. The MPC is created by connecting selected master nodes with selected slave nodes correspondingly.
- This is the required input.

### `listMpcConnection`

- A _List of [MPC_CONNECTION](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MPC_CONNECTION)_ specifying the pair of MPC connection data type.
- The default value is [].

### `dSearchTol`

- A _Double_ specifying the MPC search tolerance value.
- The default value is 0.0.

### `dValue`

- A _Double_ specifying the MPC value.
- The default value is 0.0.

### `iMPCType`

- An _Integer_ specifying the MPC type.
    - 0: MPC General.
    - 1: MPC Equation.
- The default value is 0.

### `iSearchType`

- An _Integer_ specifying the search type.
- The default value is 1.

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

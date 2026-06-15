---
id: Connections-MPC-Equation-MultiNodes
title: Connections.MPC.Equation.MultiNodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a MPC connection between a slave node with multi-master nodes
---

## Description

Create a MPC connection between a slave node with multi-master nodes.

## Syntax

```psj
Connections.MPC.Equation.MultiNodes(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; Equation &#187; MultiNodes</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crlMasterNodes`

- A _List of Cursor_ specifying the list of master nodes which need to be connected. The master nodes are the nodes from the second selected node onwards in the selection list of nodes.
- This is the required input.

### `crSlaveNode`

- A _Cursor_ specifying the slave node which needs to be connected. The slave node is the first selected node in the selection list of nodes. This slave node will connect to all master nodes.
- This is the required input.

### `listMpcConnection`

- A _List of [MPC_CONNECTION](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MPC_CONNECTION)_ specifying the list of MPC connection.
- The default value is [].

### `dValue`

- A _Double_ specifying the MPC value.
- The default value is 0.0.

### `iLocalCoordinate`

- An _Integer_ specifying the local coordinate system.
- The default value is 0.

### `bUpdateDispCS`

- A _Boolean_ specifying whether or not update displacement coordinate system.
    - If _True_, the displacement coordinate system is updated.
    - If _False_, displacement coordinate system is not updated.
- The default value is _True_.

### `crMPCConnection`

- A _Cursor_ specifying an existing MPC connection.
    - If this parameter is used, the specified MPC connection will be modified.
    - If it is left _None_, a new MPC connection will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created or the modified MPC connection.

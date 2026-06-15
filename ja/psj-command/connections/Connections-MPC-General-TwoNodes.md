---
id: Connections-MPC-General-TwoNodes
title: Connections.MPC.General.TwoNodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a MPC connection between slave nodes to master nodes one-to-one correspondingly. The sequence of nodes selection is the first master node, the first slave node, the second master node, the second slave node and so on
---

## Description

Create a MPC connection between slave nodes to master nodes one-to-one correspondingly. The sequence of nodes selection is the first master node, the first slave node, the second master node, the second slave node and so on.

## Syntax

```psj
Connections.MPC.General.TwoNodes(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; General &#187; NodeToNode</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crlMasterNodes`

- A _List of Cursor_ specifying the list of master nodes which need to be connected. The master list can contain one or many nodes.
- In case the list has more than one node, the number of master nodes and slave nodes must be equal. The MPC is created by connecting the selected master nodes with the selected slave nodes one by one correspondingly.
- This is the required input.

### `crlSlaveNodes`

- A _List of Cursor_ specifying the list of slave nodes which need to be connected. The slave list can contain one or many nodes.
- In case the list has more than one face, the number of master nodes and slave nodes must be equal. The MPC is created by connecting the selected master nodes with the selected slave nodes one by one correspondingly.
- This is the required input.

### `listMpcConnection`

- A _List of [MPC_CONNECTION](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MPC_CONNECTION)_ specifying the list of MPC connection.
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

- A _Cursor_ specifying an existing MPC connection.
    - If this parameter is used, the specified MPC connection will be modified.
    - If it is left _None_, a new MPC connection will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created or the modified MPC connection.

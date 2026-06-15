---
id: Connections-MPC-General-TwoEdges
title: Connections.MPC.General.TwoEdges()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create MPC between two edges
---

## Description

Create MPC between two edges.

## Syntax

```psj
Connections.MPC.General.TwoEdges(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; General &#187; TwoEdges</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crMasterEdge`

- A _List of Cursor_ specifying the list of master edges which need to be connected.
- This is the required input.

### `crSlaveEdge`

- A _List of Cursor_ specifying the list of slave edges which need to be connected.
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

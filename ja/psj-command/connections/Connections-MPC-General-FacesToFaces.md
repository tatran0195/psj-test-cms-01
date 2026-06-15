---
id: Connections-MPC-General-FacesToFaces
title: Connections.MPC.General.FacesToFaces()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create MPC by connecting selected faces together
---

## Description

Create MPC by connecting selected faces together.

## Syntax

```psj
Connections.MPC.General.FacesToFaces(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; General &#187; FacesToFaces</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crlMasterFaces`

- A _List of Cursor_ specifying the list of the master faces which need to be connected. The master list can contain one or many faces.
- In case the master list has more than one face, the number of master faces and slave faces must be equal. The MPC is created by connecting the selected master faces with the selected slave faces one by one correspondingly.
- This is the required input.

### `crlSlaveFaces`

- A _List of Cursor_ specifying the list of the slave faces which need to be connected. The slave list can contain one or many faces.
- In case the slave list has more than one face, the number of slave faces and master faces must be equal. The MPC is created by connecting the selected master faces with the selected slave faces one by one correspondingly.
- This is the required input.

### `listMpcConnection`

- A _List of [MPC_CONNECTION](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MPC_CONNECTION)_ specifying the list of MPC connection.
- The default value is [].

### `iLocalCoordinate`

- An _Integer_ specifying the local coordinate system.
- The default value is 0.

### `bUpdateDispCS`

- A _Boolean_ specifying the update displacement coordinate system.
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

---
id: Connections-MPC-General-TwoFaces
title: Connections.MPC.General.TwoFaces()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create MPC between two faces
---

## Description

Create MPC between two faces.

## Syntax

```psj
Connections.MPC.General.TwoFaces(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; General &#187; TwoFaces</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crMasterFace`

- A _Cursor_ specifying the master face. The couple _crMasterFace_, _crSlaveFace_ and _crMPCConnection_ arguments are mutually exclusive. One of them must be specified.
- The default value is _None_.

### `crSlaveFace`

- A _Cursor_ specifying the slave face. The couple _crMasterFace_, _crSlaveFace_ and _crMPCConnection_ arguments are mutually exclusive. One of them must be specified.
- The default value is _None_.

### `listMpcConnection`

- A _List of [MPC_CONNECTION](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MPC_CONNECTION)_ specifying the pair of MPC connection data type.
- The default value is [].

### `iLocalCoordinate`

- An _Integer_ specifying the local coordinate system.
- The default value is 0.

### `bUpdateDispCS`

- A _Boolean_ specifying whether or not update displacement coordinate system at nodes belongs to selected faces to the specified local coordinate system.
    - If _True_, the displacement coordinate system is updated.
    - If _False_, displacement coordinate system is not updated.
- The default value is _True_.

### `crMPCConnection`

- A _Cursor_ specifying the exist MPC for editing. The couple _crMasterFace_, _crSlaveFace_ and _crMPCConnection_ arguments are mutually exclusive. One of them must be specified.
    - If this parameter is used, the specified exist MPC item will be modified.
    - If it is left _None_, a new MPC item will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created or the modified MPC connection (2 Faces).

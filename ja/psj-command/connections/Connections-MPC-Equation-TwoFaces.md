---
id: Connections-MPC-Equation-TwoFaces
title: Connections.MPC.Equation.TwoFaces()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create MPC between multiple points of two faces
---

## Description

Create MPC between multiple points of two faces.

## Syntax

```psj
Connections.MPC.Equation.TwoFaces(...)
```

Macro: [Mpc](/docs/cli/5.1.0/macro/connections/Mpc)

Ribbon: <menuselection>Connections &#187; MPC &#187; Equation &#187; TwoFace</menuselection>

## Inputs

### `strName`

- A _String_ specifying the MPC name.
- The default value is "MPC_1".

### `crMasterFace`

- A _Cursor_ specifying the face to be master. The couple _crMasterFace_, _crSlaveFace_ and _crMPCConnection_ arguments are mutually exclusive. One of them must be specified.
- The default value is _None_.

### `crSlaveFace`

- A _Cursor_ specifying the face to be slave. The couple _crMasterFace_, _crSlaveFace_ and _crMPCConnection_ arguments are mutually exclusive. One of them must be specified.
- The default value is _None_.

### `listMpcConnection`

- A _List of [MPC_CONNECTION](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MPC_CONNECTION)_ specifying the pair of MPC connection data type.
- The default value is [].

### `dValue`

- A _Double_ specifying the MPC constant value.
- The default value is 0.0.

### `iLocalCoordinate`

- An _Integer_ specifying the local coordinate system.
- The default value is 0.

### `bUpdateDispCS`

- A _Boolean_ specifying whether to change the Displacement Coordinate system at nodes belongs to selected faces to the specified local coordinate system.
- The default value is _True_.

### `crMPCConnection`

- A _Cursor_ specifying an existing MPC Connection (2 Faces). If this argument is not _None_, the specified MPC Connection will be modified. Otherwise, a new MPC Connection will be created. The couple _crMasterFace_, _crSlaveFace_ and _crMPCConnection_ arguments are mutually exclusive. One of them must be specified.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created or the modified MPC connection.

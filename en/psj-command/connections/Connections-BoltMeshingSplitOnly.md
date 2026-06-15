---
id: Connections-BoltMeshingSplitOnly
title: Connections.BoltMeshingSplitOnly()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: For CAD bolts, divide the bolt into upper and lower parts, generate the mesh, and apply load and boundary conditions.
---

## Description

For CAD bolts, divide the bolt into upper and lower parts, generate the mesh, and apply load and boundary conditions.

## Syntax

```psj
Connections.BoltMeshingSplitOnly(...)
```

Ribbon: <menuselection>Connections &#187; BoltMeshingSplitOnly</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `iPartcutparamImethod`

- An _Integer_ specifying the part cut parameter method.
- The default value is 0.

### `dPartcutparamDoffset`

- A _Double_ specifying the part cut parameter offset.
- The default value is 0.0.

### `iPartcutparamBshareface`

- An _Integer_ specifying the part cut parameter share face.
- The default value is 0.

### `iPartcutparamBseparateface`

- An _Integer_ specifying the part cut parameter separate face.
- The default value is 0.

### `iPartcutparamBsplitonly`

- An _Integer_ specifying the part cut parameter split only.
- The default value is 0.

### `iPartcutparamBmakesectionface`

- An _Integer_ specifying the part cut parameter make section face.
- The default value is 0.

### `crPartcutparamCoord`

- A _Cursor_ specifying the part cut parameter coordinate.
- The default value is None.

### `surfaceMesh`

- A _[SURFACE_MESH](/docs/cli/5.1.0/data-type/psj-command/parameter-types/SURFACE_MESH)_ specifying the mesh.
- The default value is _[SURFACE_MESH](/docs/cli/5.1.0/data-type/psj-command/parameter-types/SURFACE_MESH)_.

### `bLBCPRETENSIONABAQUSDATABfixedlenght`

- A _Boolean_ specifying the load boundary condition pretension abaqus data fixed length.
- The default value is False.

### `crLBCPRETENSIONABAQUSDATACrtable`

- A _Cursor_ specifying the load boundary condition pretension abaqus data table.
- The default value is None.

### `dLBCPRETENSIONABAQUSDATADvalue`

- A _Double_ specifying the load boundary condition pretension abaqus data value.
- The default value is 0.0.

### `iLBCPRETENSIONABAQUSDATAIlocalunit`

- An _Integer_ specifying the load boundary condition pretension abaqus data local unit.
- The default value is 0.

### `strLBCPRETENSIONABAQUSDATAStrnormal`

- A _String_ specifying the load boundary condition pretension abaqus data normal.
- The default value is "".

### `posLBCPRETENSIONABAQUSDATATvctrolnodepos`

- A _Position_ specifying the load boundary condition pretension abaqus data node position.
- The default value is [0,0,0].

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `poslCutter`

- A _Position List_ specifying the cutter.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

---
id: Connections-BoltMeshingNotSplitOnly
title: Connections.BoltMeshingNotSplitOnly()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: For CAD bolts, divide the bolt into upper and lower parts, generate the mesh, and apply load and boundary conditions for ADVC.
---

## Description

For CAD bolts, divide the bolt into upper and lower parts, generate the mesh, and apply load and boundary conditions for ADVC.

## Syntax

```psj
Connections.BoltMeshingNotSplitOnly(...)
```

Ribbon: <menuselection>Connections &#187; BoltMeshingNotSplitOnly</menuselection>

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

### `iLBCPRETENSIONDATAIdir`

- An _Integer_ specifying the load boundary condition pretension data direction.
- The default value is 0.

### `dLBCPRETENSIONDATADvalue`

- A _Double_ specifying the load boundary condition pretension data value.
- The default value is 0.0.

### `bLBCPRETENSIONDATABfixlength`

- A _Boolean_ specifying the load boundary condition pretension data fixed length.
- The default value is False.

### `crLBCPRETENSIONDATACrtable`

- A _Cursor_ specifying the load boundary condition pretension data table.
- The default value is None.

### `crLBCPRETENSIONDATACrcoord`

- A _Cursor_ specifying the load boundary condition pretension data coordinate.
- The default value is None.

### `iLBCPRETENSIONDATAIlocalunit`

- An _Integer_ specifying the load boundary condition pretension data local unit.
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `poslCutter`

- A _Position List_ specifying the cutter.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

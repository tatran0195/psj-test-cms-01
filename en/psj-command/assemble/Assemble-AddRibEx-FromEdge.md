---
id: Assemble-AddRibEx-FromEdge
title: Assemble.AddRibEx.FromEdge()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Specify an edge to define the path of the rib and the attachment surface, and add the rib shape to the existing surface mesh.
---

## Description

Specify an edge to define the path of the rib and the attachment surface, and add the rib shape to the existing surface mesh.

## Syntax

```psj
Assemble.AddRibEx.FromEdge(...)
```

Macro: AddRibFromEdgesEx

Ribbon: <menuselection>Assemble &#187; AddRibEx &#187; FromEdge</menuselection>

## Inputs

### `crlFaces`

- A _List of Cursor_ specifying the target face where the created rib will be attached.
- This is a required input.

### `crlEdges`

- A _List of Cursor_ specifying edge where the rib created from.
- This is a required input.

### `dThickness`

- A _Double_ specifying the width of the rib.
- The default value is 0.001.

### `dHeight`

- A _Double_ specifying the height of the rib from the attachment surface.
- The default value is 0.001.

### `iDirection`

- An _Int_ specifying the direction of the rib from the attachment surface.
    - 0: Normal Offset
    - 1: Offset
    - 2: Projection
- The default value is 0.

### `crCoordinate`

- A _Cursor_ specifying the coordinate system to reference when attaching the rib.
- The default value is _None_.

### `iBasePlane`

- An _Integer_ specifying the direction of rib extrusion when Offset or Projection is selected for Direction.
    - 0: XY plane
    - 1: YZ plane
    - 2: XZ plane
- The default value is 0.

### `dOffsetX`

- A _Double_ specifying the offset value the rib creation position in X direction.
- The default value is 0.0.

### `dOffsetY`

- A _Double_ specifying the offset value the rib creation position in Y direction.
- The default value is 0.0.

### `dOffsetZ`

- A _Double_ specifying the offset value the rib creation position in Z direction.
- The default value is 0.0.

### `iRibTriangle`

- An _Integer_ specifying to make the rib triangular.
    - 0: Creates a normal rib without making it triangular.
    - 1: Creates a triangular rib with a higher starting point.
    - 2: Creates a triangular rib with a higher ending point.

### `bCreateNewPart`

- A _Boolean_ specifying whether or not to create the rib as a new part.
- The default value is _False_.

### `bMerge`

- A _Boolean_ specifying whether or not to merge the rib with the attachment part.
- The default value is _True_.

### `bPreview`

- A _Boolean_ specifying whether or not to display preview.
- The default value is _True_.

## Return Code

A _Boolean_ specifying

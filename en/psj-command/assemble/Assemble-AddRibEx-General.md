---
id: Assemble-AddRibEx-General
title: Assemble.AddRibEx.General()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Add rib part on a part.
---

## Description

Add rib part on a part.

## Syntax

```psj
Assemble.AddRibEx.General(...)
```

Macro: AddRibGeneralEx

Ribbon: <menuselection>Assemble &#187; AddRibEx &#187; General</menuselection>

## Inputs

### `dlPositions`

- A _List of Double_ specifying position of first end of the rib to create.
- This is a required input.

### `crlFaces`

- A _List of Cursor_ specifying position of second end of the rib to create.
- This is a required input.

### `dThickness`

- A _Double_ specifying the width of the rib.
- The default value is 0.0005.

### `#dHeight`

- A _Double_ specifying the height of the rib from the attachment surface.
- The default value is 0.001.

### `#crCoordinate`

- A _Cursor_ specifying the coordinate system to reference when attaching the rib.
- The default value is _None_.

### `bDirectByCoord`

- A _Boolean_ specifying whether or not align the rib direction with the coordinate plane defined by the specified coordinate axes.
- The default value is _False_.

### `iPlane`

- An _Integer_ specifying the coordinate plane:
    - 0: Aligns the rib with the XY plane direction.
    - 1: Aligns the rib with the YZ plane direction.
    - 2: Aligns the rib with the ZX plane direction.
- The default value is 0.

### `dOffsetX`

- A _Double_ specifying offset value the rib creation position in X direction.
- The default value is 0.0.

### `dOffsetY`

- A _Double_ specifying offset value the rib creation position in Y direction.
- The default value is 0.0.

### `dOffsetZ`

- A _Double_ specifying offset value the rib creation position in Z direction.
- The default value is 0.0.

### `bTriangle`

- A _Boolean_ specifying whether creates the rib as a triangular rib with a higher starting point.
- The default value is _False_.

### `bPlaneTop`

- A _Boolean_ specifying whether or not makes the rib top flat even when the attachment surface is curved.
- The default value is _True_.

### `bCreateNewPart`

- A _Boolean_ specifying whether or not create a rib part as a new part.
- The default value is _False_.

### `bMerge`

- A _Boolean_ specifying whether or not merge rib part to the part of target face belongs to.
- The default value is _True_.

### `bPreview`

- A _Boolean_ specifying whether or not display preview.
- The default value is _True_.

## Return Code

A _Boolean_ specifying the function successfully executed or not.

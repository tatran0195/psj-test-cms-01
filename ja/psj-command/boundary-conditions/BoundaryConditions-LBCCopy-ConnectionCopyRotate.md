---
id: BoundaryConditions-LBCCopy-ConnectionCopyRotate
title: BoundaryConditions.LBCCopy.ConnectionCopyRotate()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy boundary conditions by using rotation method
---

## Description

Copy boundary conditions by using rotation method.

## Syntax

```psj
BoundaryConditions.LBCCopy.ConnectionCopyRotate(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; ConnectionCopyRotate</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the connection copy method:
    - 0: Translation method. The copy destination is searched by translation in the X, Y, and Z directions.
    - 1: Rotation method. The copy destination is searched by the rotational movement of the specified axis.
    - 2: Mirror method. Search the copy destination by plane and offset amount. To define a plane, select 3 nodes or 2D elements.
- The default value is 1.

### `iMatchMethod`

- An _Integer_ specifying the match method:
    - 0: Node method. This matching method matches the exact nodes of the target to get matching results. It is useful when the target features are different.
    - 1: Feature method. This matching method is very fast, especially for large models, and requires face-to-face, vertex to vertex like feature matching.
- The default value is 0.

### `posAxis`

- A _List_ specifying the rotation axis.
- The default value is [0,0,0].

### `posCenter`

- A _List_ specifying the center of rotation.
- The default value is [0,0,0].

### `dAngle`

- A _Double_ specifying the copy destination rotation angle.
- The default value is 0.

### `dTol`

- A _Double_ specifying the tolerance value to be used for determination of conformity.
- Unit of length.
- The default value is 1.0.

### `crCoord`

- A _Cursor_ specifying the coordinate system.
- The default value is _None_.

### `crlTargets`

- A _List of Cursor_ specifying the targets.
- The default value is [].

## Return Code

A _Cursor_ specifying the created LBCs.

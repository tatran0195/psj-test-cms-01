---
id: BoundaryConditions-LBCCopy-ConnectionCopyTranslate
title: BoundaryConditions.LBCCopy.ConnectionCopyTranslate()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy boundary conditions by using translation method
---

## Description

Copy boundary conditions by using translation method.

## Syntax

```psj
BoundaryConditions.LBCCopy.ConnectionCopyTranslate(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; ConnectionCopyTranslate</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the connection copy method:
    - 0: Translation method. The copy destination is searched by translation in the X, Y, and Z directions.
    - 1: Rotation method. The copy destination is searched by the rotational movement of the specified axis.
    - 2: Mirror method. Search the copy destination by plane and offset amount. To define a plane, select 3 nodes or 2D elements.
- The default value is 0.

### `iMatchMethod`

- An _Integer_ specifying the match method:
    - 0: Node method. This matching method matches the exact nodes of the target to get matching results. It is useful when the target features are different.
    - 1: Feature method. This matching method is very fast, especially for large models, and requires face-to-face, vertex to vertex like feature matching.
- The default value is 0.

### `posVecTrans`

- A _List_ specifying the translational vector.
- The default value is [0,0,0].

### `dMagnitude`

- A _Double_ specifying the magnitude of the move distance of the copy destination.
- The default value is 1.0.

### `dTrandataDoffset`

- A _Double_ specifying the trandata offset.
- The default value is 0.0.

### `dTol`

- A _Double_ specifying the tolerance value to be used for determination of conformity.
- Unit of length.
- The default value is 1.0.

### `crCoord`

- A _Cursor_ specifying the coordinate system.
- The default value is _None_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets.
- The default value is [].

## Return Code

A _Cursor_ specifying the created LBCs.

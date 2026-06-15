---
id: BoundaryConditions-LBCCopy-ConnectionCopyMirror
title: BoundaryConditions.LBCCopy.ConnectionCopyMirror()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy boundary conditions by using mirror method
---

## Description

Copy boundary conditions by using mirror method.

## Syntax

```psj
BoundaryConditions.LBCCopy.ConnectionCopyMirror(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; ConnectionCopyMirror</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the connection copy method:
    - 0: Translation method. The copy destination is searched by translation in the X, Y, and Z directions.
    - 1: Rotation method. The copy destination is searched by the rotational movement of the specified axis.
    - 2: Mirror method. Search the copy destination by plane and offset amount. To define a plane, select 3 nodes or 2D elements.
- The default value is 2.

### `iMatchMethod`

- An _Integer_ specifying the match method:
    - 0: Node method. This matching method matches the exact nodes of the target to get matching results. It is useful when the target features are different.
    - 1: Feature method. This matching method is very fast, especially for large models, and requires face-to-face, vertex to vertex like feature matching.
- The default value is 0.

### `poslPoints`

- A _Nested List_ specifying the list of points that create the center line of mirror.
- The default value is [].

### `dOffset`

- A _Double_ specifying the offset value for mirror in unit of length.
- The default value is 0.0.

### `dTol`

- A _Double_ specifying the tolerance value to be used for determination of conformity.
- The default value is 1.0.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets.
- The default value is [].

## Return Code

A _Cursor_ specifying the created LBCs.

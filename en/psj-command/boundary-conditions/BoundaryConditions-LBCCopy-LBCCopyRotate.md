---
id: BoundaryConditions-LBCCopy-LBCCopyRotate
title: BoundaryConditions.LBCCopy.LBCCopyRotate()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy a LBC rotate
---

## Description

Copy a LBC rotate.

## Syntax

```psj
BoundaryConditions.LBCCopy.LBCCopyRotate(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; LBCCopyRotate</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
  0: COPY_TRANS.
  1: COPY_ROTATE.
  2: COPY_MIRROR.
- The default value is 1.

### `iMatchMethod`

- An _Integer_ specifying the match method.
  0: MATCH NODE.
  1: MATCH FEATURE.
- The default value is 0.

### `posAxis`

- A _Position_ specifying the axis.
- The default value is [0,0,0].

### `posCenter`

- A _Position_ specifying the center.
- The default value is [0,0,0].

### `dAngle`

- A _Double_ specifying the angle.
- The default value is 0.0.

### `dTol`

- A _Double_ specifying the tolerance.
- The default value is 1.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `crlTargets`

- A _List of Cursor_ specifying the targets.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

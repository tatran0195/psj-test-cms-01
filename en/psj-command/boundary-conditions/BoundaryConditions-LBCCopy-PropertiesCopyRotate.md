---
id: BoundaryConditions-LBCCopy-PropertiesCopyRotate
title: BoundaryConditions.LBCCopy.PropertiesCopyRotate()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy a property rotate
---

## Description

Copy a property rotate.

## Syntax

```psj
BoundaryConditions.LBCCopy.PropertiesCopyRotate(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; PropertiesCopyRotate</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 1.

### `iMatchMethod`

- An _Integer_ specifying the match method.
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

- A _List of Cursor_ specifying the target.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

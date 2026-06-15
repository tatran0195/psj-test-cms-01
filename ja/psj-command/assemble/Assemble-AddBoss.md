---
id: Assemble-AddBoss
title: Assemble.AddBoss()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Add boss shape to specific body as a union part
---

## Description

Add boss shape to specific body as a union part.

## Syntax

```psj
Assemble.AddBoss(...)
```

Ribbon: <menuselection>Assemble &#187; Add BOSS</menuselection>

## Inputs

### `crPart`

- A _Cursor_ specifying the part.
- The default value is None.

### `iType`

- An _Integer_ specifying the type.
- The default value is 0.

### `bMerge`

- A _Boolean_ specifying the merge.
- The default value is True.

### `posOrgCenter`

- A _Position_ specifying the original center.
- The default value is [0,0,0].

### `vecOrgDirection`

- A _Vector_ specifying the original direction.
- The default value is [0,0,0].

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `iAxis`

- An _Integer_ specifying the axis.
- The default value is 0.

### `dAngle`

- A _Double_ specifying the angle.
- The default value is 0.0.

### `bHollow`

- A _Boolean_ specifying the hollow.
- The default value is False.

### `dInnerRadius`

- A _Double_ specifying the inner radius.
- The default value is 0.0.

### `dOrgOuterRadius`

- A _Double_ specifying the original outer radius.
- The default value is 1.0.

### `dTaperAngle`

- A _Double_ specifying the taper angle.
- The default value is 0.0.

### `iNodeOnCircle`

- An _Integer_ specifying the node on circle.
- The default value is 12.

### `iNodeOnAxis`

- An _Integer_ specifying the node on axis.
- The default value is 2.

### `dOriginalHeight`

- A _Double_ specifying the original height.
- The default value is 5.0.

## Return Code

_True_ if success, or _False_ if fail.

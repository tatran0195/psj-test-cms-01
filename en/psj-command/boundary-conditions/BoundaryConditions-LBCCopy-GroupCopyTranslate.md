---
id: BoundaryConditions-LBCCopy-GroupCopyTranslate
title: BoundaryConditions.LBCCopy.GroupCopyTranslate()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy a group translate
---

## Description

Copy a group translate.

## Syntax

```psj
BoundaryConditions.LBCCopy.GroupCopyTranslate(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; GroupCopyTranslate</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 0.

### `iMatchMethod`

- An _Integer_ specifying the match method.
- The default value is 0.

### `posVecTrans`

- A _Position_ specifying the vector trans.
- The default value is [0,0,0].

### `dMagnitude`

- A _Double_ specifying the magnitude.
- The default value is 1.

### `dTrandataDoffset`

- A _Double_ specifying the trandata offset.
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

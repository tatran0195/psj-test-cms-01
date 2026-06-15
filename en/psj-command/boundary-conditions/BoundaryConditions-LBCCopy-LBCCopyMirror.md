---
id: BoundaryConditions-LBCCopy-LBCCopyMirror
title: BoundaryConditions.LBCCopy.LBCCopyMirror()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy a LBC mirror
---

## Description

Copy a LBC mirror.

## Syntax

```psj
BoundaryConditions.LBCCopy.LBCCopyMirror(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; LBCCopyMirror</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 2.

### `iMatchMethod`

- An _Integer_ specifying the match method.
  0: MATCH NODE.
  1: MATCH FEATURE.
- The default value is 0.

### `poslPoints`

- A _Position List_ specifying points on the mirror plane.
- The default value is [].

### `dOffset`

- A _Double_ specifying the offset.
- The default value is 0.

### `dTol`

- A _Double_ specifying the tolerance.
- The default value is 1.

### `crlTargets`

- A _List of Cursor_ specifying the target connections.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

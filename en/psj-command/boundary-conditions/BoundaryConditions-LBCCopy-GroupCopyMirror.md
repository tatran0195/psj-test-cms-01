---
id: BoundaryConditions-LBCCopy-GroupCopyMirror
title: BoundaryConditions.LBCCopy.GroupCopyMirror()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy a group mirror
---

## Description

Copy a group mirror.

## Syntax

```psj
BoundaryConditions.LBCCopy.GroupCopyMirror(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; LBCCopy &#187; GroupCopyMirror</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the mirror group copy method.
- The default value is 2.

### `iMatchMethod`

- An _Integer_ specifying the match method.
    - 0: Node method. This matching method matches the exact nodes of the target to get matching results. It is useful when the target features are different.
    - 1: Feature method. This matching method is very fast, especially for large models, and requires face-to-face, vertex to vertex like feature matching.
- The default value is 0.

### `poslPoints`

- A _Position List_ specifying the list of points that create the center line of mirror.
- The default value is [].

### `dOffset`

- A _Double_ specifying the offset value for mirror in unit of length.
- The default value is 0.0.

### `dTol`

- A _Double_ specifying the tolerance value to be used for determination of conformity.
- Unit of length.
- The default value is 1.0.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets.
- The default value is [].

## Return Code

A _String_ of 1 if success, or 0 if fail.

---
id: BoundaryConditions-InitialNodalValue-RotationAngle
title: BoundaryConditions.InitialNodalValue.RotationAngle()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create initial rotation angle
---

## Description

Create initial rotation angle.

## Syntax

```psj
BoundaryConditions.InitialNodalValue.RotationAngle(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InitialNodalValue &#187; RotationAngle</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "InitialVelocity1".

### `stData`

- A _ST_DATA_ specifying the data.
- The default value is LBC_DYNAMIC_INITIAL_CONDITION_DATA().

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

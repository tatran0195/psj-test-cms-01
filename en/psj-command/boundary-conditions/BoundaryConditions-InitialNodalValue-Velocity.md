---
id: BoundaryConditions-InitialNodalValue-Velocity
title: BoundaryConditions.InitialNodalValue.Velocity()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create initial velocity
---

## Description

Create initial velocity.

## Syntax

```psj
BoundaryConditions.InitialNodalValue.Velocity(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InitialNodalValue &#187; Velocity</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "InitialRotationAngle1".

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

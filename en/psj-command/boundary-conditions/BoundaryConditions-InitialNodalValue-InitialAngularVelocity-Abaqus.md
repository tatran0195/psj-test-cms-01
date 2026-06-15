---
id: BoundaryConditions-InitialNodalValue-InitialAngularVelocity-Abaqus
title: BoundaryConditions.InitialNodalValue.InitialAngularVelocity.Abaqus()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create initial angular velocity for the Abaqus solver
---

## Description

Create initial angular velocity for the Abaqus solver.

## Syntax

```psj
BoundaryConditions.InitialNodalValue.InitialAngularVelocity.Abaqus(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InitialNodalValue &#187; InitialAngularVelocity &#187; Abaqus</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "InitialAngularVelocityAbaqus1".

### `dVelocity`

- A _Double_ specifying the velocity.
- The default value is DFLT_DBL.

### `strFirstCoord`

- A _String_ specifying the first coordinate.
- The default value is "".

### `strSecondCoord`

- A _String_ specifying the second coordinate.
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

---
id: BoundaryConditions-Force-FunctionLoadCylinder-Quadratic
title: BoundaryConditions.Force.FunctionLoadCylinder.Quadratic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Force (Quadratic) y = a*x^2 + b
---

## Description

Create Force (Quadratic) y = a\*x^2 + b.

## Syntax

```psj
BoundaryConditions.Force.FunctionLoadCylinder.Quadratic(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Force &#187; FunctionLoadCylinder &#187; Quadratic</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "ForceQuadratic1".

### `dFTotalForce`

- A _Double_ specifying the total force.
- The default value is 0.0.

### `dA`

- A _Double_ specifying the a.
- The default value is 0.0.

### `dB`

- A _Double_ specifying the .
- The default value is 0.0.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `iAngleBase`

- An _Integer_ specifying the angle base.
- The default value is 0.

### `dAngleRange`

- A _Double_ specifying the angle range.
- The default value is 0.0.

### `iEnArrowDir`

- An _Integer_ specifying the en arrow direction.
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

---
id: BoundaryConditions-Force-FunctionLoadCylinder-Vector
title: BoundaryConditions.Force.FunctionLoadCylinder.Vector()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define the force load on selected entity based on the distribution of the vector function
---

## Description

Define the force load on selected entity based on the distribution of the vector function.

## Syntax

```psj
BoundaryConditions.Force.FunctionLoadCylinder.Vector(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Force &#187; FunctionLoadCylinder &#187; Vector</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "ForceVector1".

### `dFTotalForce`

- A _Double_ specifying the total force.
- The default value is DFLT_DBL.

### `dA`

- A _Double_ specifying the a.
- The default value is DFLT_DBL.

### `dX`

- A _Double_ specifying the x.
- The default value is DFLT_DBL.

### `dY`

- A _Double_ specifying the y.
- The default value is DFLT_DBL.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `iEnDirection`

- An _Integer_ specifying the en direction.
- The default value is 0.

### `dAngleRange`

- A _Double_ specifying the angle range.
- The default value is 0.0.

### `iArrowDir`

- An _Integer_ specifying the arrow direction.
- The default value is 0.

### `bDistributeInAxis`

- A _Boolean_ specifying the distribute in axis.
- The default value is False.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

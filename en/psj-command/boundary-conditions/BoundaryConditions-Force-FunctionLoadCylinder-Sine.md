---
id: BoundaryConditions-Force-FunctionLoadCylinder-Sine
title: BoundaryConditions.Force.FunctionLoadCylinder.Sine()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define the force load on selected entity based on the distribution of the sine function
---

## Description

Define the force load on selected entity based on the distribution of the sine function.

## Syntax

```psj
BoundaryConditions.Force.FunctionLoadCylinder.Sine(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Force &#187; FunctionLoadCylinder &#187; Sine</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "ForceSine1".

### `dFTotalForce`

- A _Double_ specifying the total force.
- The default value is 0.0.

### `dA`

- A _Double_ specifying the a.
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

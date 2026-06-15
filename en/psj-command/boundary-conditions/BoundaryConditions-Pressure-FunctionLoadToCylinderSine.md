---
id: BoundaryConditions-Pressure-FunctionLoadToCylinderSine
title: BoundaryConditions.Pressure.FunctionLoadToCylinderSine()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define a pressure load on the selected face or element surface based on a sine function distribution.
---

## Description

Define a pressure load on the selected face or element surface based on a sine function distribution.

## Syntax

```psj
BoundaryConditions.Pressure.FunctionLoadToCylinderSine(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Pressure &#187; FunctionLoadToCylinderSine</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "PressureSine1".

### `dA`

- A _Double_ specifying the a.
- The default value is 0.0.

### `crCoordinate`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `dAngleRange`

- A _Double_ specifying the angle range.
- The default value is 0.0.

### `bDistributionAxis`

- A _Boolean_ specifying the distribution axis.
- The default value is False.

### `iPressureDirectionMode`

- An _Integer_ specifying the pressure direction mode.
- The default value is 0.

### `bIsTotalForceAdjustment`

- A _Boolean_ specifying the is total force adjustment.
- The default value is False.

### `dTotalForce`

- A _Double_ specifying the total force.
- The default value is 0.0.

### `vecPressureDirection`

- A _Vector_ specifying the pressure direction.
- The default value is [0.0,0.0,0.0].

### `crCoordinateSystemForDirection`

- A _Cursor_ specifying the coordinate system for direction.
- The default value is None.

### `bIsCornerNodesDistribution`

- A _Boolean_ specifying the is corner nodes distribution.
- The default value is False.

### `strFormulaForA`

- A _String_ specifying the formula for a.
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

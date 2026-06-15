---
id: BoundaryConditions-Pressure-Quadratic
title: BoundaryConditions.Pressure.Quadratic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create quadratic pressure
---

## Description

Create quadratic pressure.

## Syntax

```psj
BoundaryConditions.Pressure.Quadratic(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Pressure &#187; Quadratic</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "PressureQuadratic1".

### `dA`

- A _Double_ specifying the a.
- The default value is 0.0.

### `dB`

- A _Double_ specifying the .
- The default value is 0.0.

### `crCoordinate`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `dAngleRange`

- A _Double_ specifying the angle range.
- The default value is 0.0.

### `iPressureDirectionMode`

- An _Integer_ specifying the pressure direction mode.
- The default value is 0.

### `dlPressureDirection`

- A _Double List_ specifying the pressure direction.
- The default value is [0.0,0.0,0.0].

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

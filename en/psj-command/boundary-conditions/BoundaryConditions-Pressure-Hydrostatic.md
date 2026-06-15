---
id: BoundaryConditions-Pressure-Hydrostatic
title: BoundaryConditions.Pressure.Hydrostatic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create hydrostatic pressure
---

## Description

Create hydrostatic pressure.

## Syntax

```psj
BoundaryConditions.Pressure.Hydrostatic(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Pressure &#187; Hydrostatic</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "PressureHydrostatic1".

### `dFHPressure`

- A _Double_ specifying the h pressure.
- The default value is 0.0.

### `dFDensity`

- A _Double_ specifying the density.
- The default value is 0.0.

### `iDensityUnit`

- An _Integer_ specifying the density unit.
- The default value is 0.

### `dFGravity`

- A _Double_ specifying the gravity.
- The default value is 0.0.

### `iGravityUnit`

- An _Integer_ specifying the gravity unit.
- The default value is 0.

### `iGravityDir`

- An _Integer_ specifying the gravity direction.
- The default value is 0.

### `dFWaterSuface`

- A _Double_ specifying the water suface.
- The default value is 0.0.

### `iSufaceUnit`

- An _Integer_ specifying the suface unit.
- The default value is 0.

### `iDistributionMethod`

- An _Integer_ specifying the distribution method.
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

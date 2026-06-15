---
id: BoundaryConditions-VirtualFluidMass
title: BoundaryConditions.VirtualFluidMass()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a virtual fluid mass.
---

## Description

Create a virtual fluid mass.

## Syntax

```psj
BoundaryConditions.VirtualFluidMass(...)
```

Macro:

Ribbon: <menuselection>BoundaryConditions &#187; VirtualFluidMass</menuselection>

## Inputs

### `crEdit`

- A _Cursor_ specifying existing virtual fluid mass.
- The default value is _None_.

### `strName`

- A _String_ specifying the name.
- The default value is "FluidVolume_1".

### `crlTargetFaces`

- A _List of Cursor_ specifying the target faces.
- The default value is [].

### `crlTargetElems`

- A _List of Cursor_ specifying the target elements.
- The default value is [].

### `crlTargetGroups`

- A _List of Cursor_ specifying the target groups.
- The default value is [].

### `iWettedSideType`

- An _Integer_ specifying wetted side.
- The default value is 0.

### `crlNegativeSideTargets`

- A _List of Cursor_ specifying negative side targets.
- The default value is [].

### `dFluidDensity`

- A _Double_ specifying fluid density.
- The default value is 0.0.

### `iFluidDensityUnit`

- An _Integer_ specifying unit of fluid density.
- The default value is 0.

### `crCoordinate`

- A _Cursor_ specifying local coordinate.
- The default value is _None_.

### `dFluidHeight`

- A _Double_ specifying coordinate of fluid.
- The default value is 0.0.

### `iFluidHeightUnit`

- An _Integer_ specifying unit of coordinate of fluid.
- The default value is 0.

### `iPlaneOfSymmetry1`

- An _Integer_ specifying planes of symmetry 1.
- The default value is 2.

### `iPlaneOfSymmetry2`

- An _Integer_ specifying planes of symmetry 2.
- The default value is 2.

## Return Code

This function does not have return value.

---
id: Calculation-RotateMapping
title: Calculation.RotateMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Copy (mapping) stress to create continuous stress data in the direction of rotation
---

## Description

Copy (mapping) stress to create continuous stress data in the direction of rotation.

## Syntax

```psj
Calculation.RotateMapping(...)
```

Macro: [PostRotateMapping](/docs/cli/5.1.0/macro/calculation/PostRotateMapping)

Ribbon: <menuselection>Calculation &#187; RotateMapping</menuselection>

## Inputs

### `dAngleInterval`

- A _Double_ specifying the rotation angle in degree.
- The default value is 7.5.

### `iRotateAxis`

- An _Integer_ specifying the selection of rotation axis.
- The default value is 3.

### `iCoordinate`

- An _Integer_ specifying the coordinate reference.
- The default value is 0.

### `iInterpolateType`

- An _Integer_ specifying the interpolation type when mapping.
    - 0: Nearest Node Interpolation
    - 1: Element Inside Interpolation
- The default value is 1.

### `dAreaTolerance`

- A _Double_ specifying the value of area tolerance.
- The default value is 1.

### `dMeshTolerance`

- A _Double_ specifying value of mesh tolerance.
- The default value is 0.05.

### `iRegionType`

- An _Integer_ specifying the region type to map the result.
    - 0: By Part
    - 1: By Group
- The default value is 0.

### `crTarget`

- A _Cursor_ specifying the target to map the result. The target can be part if RegionType = By Part, or solid element if RegionType = By Group.
- This is a required input.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

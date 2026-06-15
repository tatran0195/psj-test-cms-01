---
id: PostRotateMapping
title: PostRotateMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Copy (mapping) stress to create continuous stress data in the direction of rotation.

## Syntax

```psj
PostRotateMapping(doule dAngleInterval, int iRotateAxis, int iCoordinateReference, int iInterpolateType, doubled AreaTolerance, double dMeshTolerance, int iRegionType, cursor crPart)
```

## Inputs

### `1. double`

- A Double specifying the rotation angle in degree.

### `2. int`

- An Integer specifying the selection of rotation axis.

### `3. int`

- An Integer specifying the coordinate reference.

### `4. int`

- An Integer specifying the interpolation type when mapping.

### `5. double`

- A Double specifying the value of area tolerance.

### `6. double`

- A Double specifying value of mesh tolerance.

### `7. int`

- An Integer specifying the region type to map the result.

### `8. cursor`

- A Cursor specifying the target to map the result. The target can be part if RegionType = By Part, or solid element if RegionType = By Group.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PostRotateMapping(7.5, 3, 0, 1, 1, 0.05, 0, 0:0)
```

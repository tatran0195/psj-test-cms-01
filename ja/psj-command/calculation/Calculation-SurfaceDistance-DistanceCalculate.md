---
id: Calculation-SurfaceDistance-DistanceCalculate
title: Calculation.SurfaceDistance.DistanceCalculate()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display the distance between parts as a contour
---

## Description

Display the distance between parts as a contour.

## Syntax

```psj
Calculation.SurfaceDistance.DistanceCalculate(...)
```

Macro: [ACCombineSurfaceDistanceDistanceCalculatedAnimation](/docs/cli/5.1.0/macro/calculation/SurfaceDistanceDistanceCalculate)

Ribbon: <menuselection>Calculation &#187; SurfaceDistance &#187; DistanceCalculate</menuselection>

## Inputs

### `strResultTitle`

- A _String_ specifying the name of the result to be created.
- The default value is 'Untitled'.

### `iCompareRegionType`

- An _Integer_ specifying the region type to make the comparison.
    - 0: by Parts
    - 1: by Groups
- The default value is 0.

### `dEdgeTolerance`

- A _Double_ specifying the tolerance between edges.
- The default value is 0.0.

### `iMeshOfTwoSurfaces`

- An _Integer_ specifying the position of mesh nodes.
    - 0: Same
    - 1: Different
- The default value is 0.

### `iAxisDirection`

- An _Integer_ specifying the axis direction.
    - 0: X
    - 1: Y
    - 2: Z
    - 3: Arbitrary direction
- The default value is 0.

### `dlDirection`

- A _List of Double_ specifying the direction vector to be calculated.
- The default value is [1.0,0.0,0.0].

### `crReferenceNode`

- A _Cursor_ specifying the reference node.
- The default value is _None_.

### `crFirstTarget`

- A _Cursor_ specifying the first target. The target can be Part or Group Element depend on the selection of _iCompareRegionType_.
- The default value is _None_.

### `crSecondTarget`

- A _Cursor_ specifying the second target. The target can be Part or Group depend on the selection of _iCompareRegionType_.
- The default value is _None_.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

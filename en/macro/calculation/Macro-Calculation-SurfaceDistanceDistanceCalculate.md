---
id: SurfaceDistanceDistanceCalculate
title: SurfaceDistanceDistanceCalculate()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display the distance between parts as a contour.

## Syntax

```psj
SurfaceDistanceDistanceCalculate(str strTitle, int iRegionType, double dTolerance, int iTypeMesh, int iAxisDirection, double[] dlDirection, cursor crRefNode, cursor crPartGroup1, cursor crPartGroup2)
```

## Inputs

### `1. str`

- A String specifying the name of the result to be created.

### `2. int`

- An Integer specifying the region type to make the comparison.

### `3. double`

- A Double specifying the tolerance between edges.

### `4. int`

- An Integer specifying the position of mesh nodes.

### `5. int`

- An Integer specifying the axis direction.

### `6. double[]`

- A List of Double specifying the direction vector to be calculated.

### `7. cursor`

- A Cursor specifying the reference node.

### `8. cursor`

- A Cursor specifying the first target. The target can be Part or Group Element depend on the selection of iCompareRegionType.

### `9. cursor`

- A Cursor specifying the second target. The target can be Part or Group depend on the selection of iCompareRegionType.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
SurfaceDistanceDistanceCalculate("Untitled", 0, 2.0, 0, 0, [1.0, 0.0, 0.0], 10:124, 3:4, 3:6)
```

---
id: CreateEllipsoidBody
title: CreateEllipsoidBody()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Ellipsoid Body

## Syntax

```psj
CreateEllipsoidBody(bool bAuto, double dTol, int[] taBodyK, double[] dOrigin, double[] dMajorPt, double[] dMinorPt, int iLatitudeNodeCnt, int iLongitudeNodeCnt, string strName, color colBody, cursor curCoord)

```

## Inputs

### `1. bool`

Flag of Auto mode

- 0: OFF
- 1: ON

### `2. double`

Tolerance

### `3. int[]`

A list of part IDs of objects enclosed by the created ellipsoid.

### `4. double[]`

Origin Coordinates（Center Point：X,Y,Z）

### `5. double[]`

長Major Axis Vector （Major Point：X,Y,Z）

### `6. double[]`

Minor Axis Vector（Minor Point：X,Y,Z）

### `7. int`

Number of Latitude Nodes.

### `8. int`

Number of Longitude Nodes.

### `9 string`

Part Name

### `10 color`

Part Color

### `11 cursor`

Cursor of Reference Coordinate.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CreateEllipsoidBody(1, 0.01, [1], [0, 0, 0], [0, 0, 0], [0, 0, 0], 0, 0, "INBoundary", 6409934, 0:0)
```

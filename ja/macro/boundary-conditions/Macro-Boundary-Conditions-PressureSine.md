---
id: PressureSine
title: PressureSine()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Pressure sine

## Syntax

```psj
PressureSine(String name, double a, Cursor crCoordinate, double angleRange, int distributionAxis,
    int pressureDirectionMode, int isTotalForceAdjustment, double totalForce, Vector pressureDirection,
    Cursor crCoordinateSystemForDirection, int isCornerNodesDistribution, String formulaForA,
    Cursor[] targets, Cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. double`

a

### `3. Cursor`

coordinate system

### `4. double`

angle range

### `5. int`

distribution axis

### `6. int`

direction mode (0: normal, 1: direction)

### `7. int`

is total force adjustment

### `8. double`

total force

### `9. Vector`

pressure direction

### `10. Cursor`

coordinate system for direction

### `11. int`

is corner nodes distribution

### `12. String`

formula for A

### `13. Cursor[]`

targets

### `14. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PressureSine("PressureSine1", 1e+07, 0:0, 0.523599, 0, 0, 0, 0, [0, 0, 0], 0:0, 0, "", [6:23], 0:0)
```

---
id: PressureQuadratic
title: PressureQuadratic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Pressure quadratic

## Syntax

```psj
PressureQuadratic(string name, double a, double b, Cursor crCoordinate, double angleRange,
    int pressureDirectionMode, Vector pressureDirection, Cursor[] targets, Cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. double`

a

### `3. double`

b

### `4. Cursor`

coordinate system

### `5. double`

angle range

### `6. int`

direction mode (0: normal, 1: direction)

### `7. Vector`

pressure direction

### `8. Cursor[]`

targets

### `9. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PressureQuadratic("PressureQuadratic1", 1e+06, 2e+06, 0:0, 0.523599, 0, [0, 0, 0], [6:23], 0:0)
```

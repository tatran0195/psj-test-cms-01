---
id: PressureHydrostatic
title: PressureHydrostatic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Pressure hydrostatic

## Syntax

```psj
PressureHydrostatic(String name, double staticPressure, double density, int densityUnit,
    double gravity, int gravityUnit, int gravityDir, double waterSurface, int surfaceUnit,
    int distributionMethod, Cursor[] targets, Cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. Double`

static pressure

### `3. Double`

density

### `4. Int`

density unit

### `5. Double`

gravity

### `6. Int`

gravity unit

### `7. Int`

gravity direction

### `8. Double`

water surface

### `9. Int`

water surface unit

### `10. Int`

distributionMethod (0: Per selected entity, 1: Per node, 2: Total of select)

### `11. Cursor[]`

targets

### `12. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PressureHydrostatic("PressureHydrostatic1", 0, 1000, 0, 0, 0, 0, 0, 0, 0, [6:23], 0:0)
```

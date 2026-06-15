---
id: ACM_ACSpace
title: ACM_ACSpace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

ACM_ACSpace

## Syntax

```psj
ACM_ACSpace(cursor crBodyKey, double dGradingFact, int iRegion, bool bIntNode, bool bSafeMode,
    bool bIntMeshOnly, bool bPML, bool bSweGrd, double dWidth, int iLayer, int iAxis,
    double dSweCoord, double dSweMeshSize, int iLayer)
```

## Inputs

### `1. Cursor`

Body key cursor([Part ID])

### `2. Double`

Grading Factor

### `3. Int`

Region type:

- 0: Main region
- 1: All region

### `4. Bool`

Inter nodes bool flag True = 1, False = 0

### `5. Bool`

Safe mode bool flag True = 1, False = 0

### `6. Bool`

Internal mesh only bool flag True = 1, False = 0

### `7. Bool`

PML bool flag True = 1, False = 0

### `8. Bool`

Sweep to ground bool flag True = 1, False = 0

### `9. Double`

PML width

### `10. Int`

PML layer

### `11. Int`

Axis type:

- 0: X
- 1: Y
- 2: Z

### `12. Double`

Sweep to ground Coordinate

### `13. Double`

Sweep to ground mesh size

### `14. Int`

Sweep to ground layer

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ACM_ACSpace([1, 2], 10, 0, 0, 0, 0, 1, 0, 0.015, 3, 0, -0.02, 0.02, 1)
```

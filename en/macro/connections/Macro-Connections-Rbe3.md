---
id: Rbe3
title: Rbe3()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create rbe3 connection

## Syntax

```psj
Rbe3(int Method, Cursor[] MasterTarget, Cursor[] SlaveTarget, RBE3TermAttribute[] termAtbs,
    int RBE3Type, string name, Cursor CoordSystem, double Tolerance, double[3] VisualNodePos,
    int SurfaceDef, Cursor edit, bool UpdateDispCS, bool CornerOnly )
```

## Inputs

### `1. Int`

Method RBE3 = 3

### `2. Cursor[]`

Master Target

### `3. Cursor[]`

Slave Target

### `4. RBE3TermAttribute[]`

Term attribute list

\*RBE3TermAttribute:(double Coefficient, int DOF, int Count)

### `5. Int`

RBE3 Type

### `6. string`

Name of RBE3

### `7. Cursor`

Coordinate

### `8. Double`

Tolerance

### `9. Double[3]`

Visual node position

### `10. Int`

Surface definition ByNodeSet = 0, ByElementSet = 1

### `11. Cursor`

Edit RBE3

### `12. Bool`

Update disp Coordinate System flag true = 1, false = 0

### `13. Bool`

Corner only flag true = 1, false = 0

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Rbe3(17, [10:157854], [10:224981], [(0, 63, 1), (1, 7, 1)], 3,
    "RBE3_1", 0:0, 0, [0, 0, 0], 0, 0:0, 1, 0)
```

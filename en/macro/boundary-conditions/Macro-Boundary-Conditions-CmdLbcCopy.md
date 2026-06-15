---
id: CmdLbcCopy
title: CmdLbcCopy()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Copy properties by translation

There are 3 cases:

- Copy translation

- Copy rotation

- Copy mirror

## Syntax

```psj
COPY TRANS: CmdLbcCopy(int Method, int MatchMethod, double[3] TransVec, double Magnitude,
    double Offset, double Tolerance, Cursor Coordinate, Cursor[] Target)
```

```psj
COPY ROTATE: CmdLbcCopy(int Method, int MatchMethod, double[3] AxisVec,
    double[3] CenterVec, double Angle, double Tolerance, Cursor Coordinate , Cursor[] Target)
```

```psj
COPY MIRROR: CmdLbcCopy(int Method, int MatchMethod, double[3] Points,
    double Offset, double Tolerance, Cursor[] Target)
```

## Inputs

### `1. Int`

Method COPY TRANS = 0, COPY ROTATE = 1, COPY MIRROR = 2

### `2. Int`

Match method MATCH NODE = 0, MATCH FEATURE = 1

### `3. Double[3]`

Trans vector

### `4. Double`

Magnitude

### `5. Double`

Offset

### `6. Double`

Tolerance

### `7. Cursor`

Coordinate

### `8. Double[3]`

Axis vector

### `9. Double[3]`

Center vector

### `10. Double`

Angle

### `11. Cursor`

Coordinate

### `12. Double[3]`

Points

### `13. Double`

Offset

### `14. Double`

Tolerance

### `15. Cursor[]`

Target (LBC/Property/Connection/Group)

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdLbcCopy(0, 0, [0.001, 0, 0], 0.03, 0, 0.0001, 0:0, [40:1])
```

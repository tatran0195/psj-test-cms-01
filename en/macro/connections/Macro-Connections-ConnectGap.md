---
id: ConnectGap
title: ConnectGap()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create gap connection

## Syntax

```psj
ConnectGap(cursor[] taEntityMaster, cursor[] taEntitySlave, int iMethod, int OrientType,
    cursor crCoord, string strName, double dU0, double dF0, double dKa, double dKb,
    double dKt, double dMar, double dMu1, double dMu2, double[3] orientVec,
    double dTmax, double dRadius, double dTRmin, cursor crCoord)
```

## Inputs

### `1. Cursor[]`

Target entity master cursor([CursorType:CursorType ID])

### `2. Cursor[]`

Target entity slave cursor([CursorType:CursorType ID])

### `3. Int`

Method type

- 1: 2 Nodes
- 2: 2 Edges
- 3: 2 Faces

### `4. Int`

Gap orientation by

- 0: Orientation vector
- 1: Coordinate system

### `5. Cursor`

Whether use local coordinate or not True = 27:\*, False = 0:0

### `6. String`

Name of gap

### `7. Double`

U0 value

### `8. Double`

F0 value

### `9. Double`

KA value

### `10. Double`

KB value

### `11. Double`

KT value

### `12. Double`

Mar value

### `13. Double`

MU1 value

### `14. Double`

MU2 value

### `15. Double[3]`

Orientation vector coordinate

### `16. Double`

TMax value

### `17. Double`

Radius to find node pair

### `18. Double`

TRmin value

### `19. Cursor`

Used in edit mode to specify edited object

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ConnectGap([6:62], [6:60], 3, 1, 27:1, "GAP_11", 0.001, 1, 1000, 1000, 1000, 1,
    1, 1, [0, 1, 0], 0.002, 0.05, 2, 0:0)
```

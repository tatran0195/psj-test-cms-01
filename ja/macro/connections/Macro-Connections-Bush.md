---
id: Bush
title: Bush()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create bush connection

## Syntax

```psj
Bush(int iMethod, string strName, cursor[] vcrMasterTarget, cursor[] vcrSlaveTarget,
    cursor crCoord, double dTol, bool bBushGrounded, int iOriMode, bool iEqual,
    double[3] oriVector, double[] dStiffness, double[] dDampCoef, double[] dDampConst,
    double dRotStrain, double dTransStrain, double dRotStress, double dTransStress, cursor crEdit)
```

## Inputs

### `1. Int`

Bush method creation

- 1: 2 Nodes
- 16: Any Entities
- 21: One to one (Nodes with tolerance)

### `2. String`

Bush name

### `3. Cursor[]`

Target master entities cursor

### `4. Cursor[]`

Target slave entities cursor

### `5. Cursor`

Whether use local coordinate or not True = 27:\*, False = 0:0

### `6. Double`

Connection tolerance to find node pair

### `7. Bool`

Bush grounded bool flag True = 1, False = 0

### `8. Int`

Orientation mode

- 0: Orientation vector
- 1: Coordinate system

### `9. Bool`

Equal 1:1 bool flag True = 1, False = 0

### `10. Double[3]`

Orientation vector

### `11. Double[]`

Stiffness value

### `12. Double[]`

Damping coefficient value

### `13. Double[]`

Damping constant value

### `14. Double`

Strain recovery rotation

### `15. Double`

Strain recovery translation

### `16. Double`

Stress recovery rotation

### `17. Double`

Stress recovery translation

### `18. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Bush(16, "BUSH_1", [10:48, 10:46], [], 0:0, 0.003, 1, 0, 1, [0, 1, 0],
    [1000, 2000, 3000, 0.004, 0.005, 0.006], [1000, 2000, 3000, 0.004, 0.005, 0.006],
    [1, 2, 3, 4, 5, 6], 4, 3, 2, 1, 0:0)
```

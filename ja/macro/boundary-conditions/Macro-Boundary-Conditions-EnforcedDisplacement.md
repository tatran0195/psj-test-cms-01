---
id: EnforcedDisplacement
title: EnforcedDisplacement()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create enforced displacement

## Syntax

```psj
EnforcedDisplacement(string strName, int dwDof, double dTransR, double dTransTheta,
    double dTransZ, double dRotR, double dRotTheta, double dRotZ, cursor crCoord,
    int iArrowDir, cursor crTable, cursor crNodeSet, double dPhase, double dDelay,
    cursor crPhaseTable, cursor[] taTarget, cursor crEdit)
```

## Inputs

### `1. String`

Enforced displacement name

### `2. Int`

Reference DOFs attribute

### `3. Double`

Translation R

### `4. Double`

Translation Theta

### `5. Double`

Translation Z

### `6. Double`

Rotate R

### `7. Double`

Rotate Theta

### `8. Double`

Rotate Z

### `9. Cursor`

Whether use local coordinate or not True = 27:, False = 0:0

### `10. Int`

Arrow direction

- 0: Start at node
- 1: End at node

### `11. Cursor`

Table field data cursor(81:FieldData ID)

### `12. Cursor`

Table node set

### `13. Double`

Phase value

### `14. Double`

Delay value

### `15. Cursor`

Phase table cursor

### `16. Cursor[]`

Target entities cursor

### `17. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
EnforcedDisplacement("EnforcedDisplacement1", 63, 0.001, 0.002, 0.003, 1, 2, 3, 27:1,
    0, 81:1, 0:0, 1, 1, 0:0, [6:3, 5:1, 10:70], 0:0)
```

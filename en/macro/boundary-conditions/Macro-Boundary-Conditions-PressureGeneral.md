---
id: PressureGeneral
title: PressureGeneral()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Pressure general

## Syntax

```psj
PressureGeneral(string strName, double pressure, int distrbute, cursor crTable,
    double phase, double delay, cursor phaseTable, string formulaValue, cursor crCoord,
    cursor[] dirPressCoord, string formulaDirX, string formulaDirY, string formulaDirZ,
    int arrowDir, cursor[] taTarget, cursor crEdit)
```

## Inputs

### `1. String`

Pressure general name

### `2. Double`

Pressure value

### `3. Int`

N/A distribution method

- 0: Per selected entity
- 1: Per node
- 2: Total of select

### `4. Cursor`

Table field data cursor(81:FieldData ID)

### `5. Double`

Phase value

### `6. Double`

delay value

### `7. Cursor`

Table phase field data cursor

### `8. String`

Formula value

### `9. Cursor`

Whether use local coordinate or not True = 27:\*, False = 0:0

### `10. Cursor[]`

Pressure direction R, Theta, Z

### `11. String`

Formula X direction

### `12. String`

Formula Y direction

### `13. String`

Formula Z direction

### `14. Int`

Arrow direction

- 0: Start at node
- 1: End at node

### `15. Cursor[]`

Target entities cursor

### `16. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PressureGeneral("Pressure1", 5000, 0, 81:1, 0.0174533, 2, 81:3, "", 27:1, [1, 2, 3], "", "", "", 1, [6:5, 11:700, 11:699], 0:0)
```

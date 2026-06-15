---
id: Rbe2
title: Rbe2()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create rbe2 connection

## Syntax

```psj
Rbe2(int iMethod, cursor[] taMasterTarget, cursor[] taSlaveTarget, int eType, string strName,
    cursor crCoord, double dTol, int ulDofs, double[3] virtualNodePos, int iSurfaceDef,
    cursor crEdit, bool bUpdateDispCS, bool bCornerOnly, int iDuplicatedMode)
```

## Inputs

### `1. Int`

Rbe2 method creation

- 16: One to many
- 17: One to one
- 18: To center
- 19: To circle center
- 21: One to one (Nodes with tolerance)

### `2. Cursor[]`

Target master entities cursor

### `3. Cursor[]`

Target slave entities cursor

### `4. Int`

RBE2 type = 2

### `5. String`

RBE2 name

### `6. Cursor`

Whether use local coordinate or not True = 27:\*, False = 0:0

### `7. Double`

Search area tolerance

### `8. Int`

Reference DOFs attribute

### `9. Double[3]`

used in center of any entities and circle center circumference

### `10. Int`

Surface definition output

- 0: By node set
- 1: By element set

### `11. Cursor`

Edit cursor

### `12. Bool`

update display bool flag True = 1, False = 0

### `13. Bool`

Only corner nodes bool flag True = 1, False = 0

### `14. Int`

duplicated mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Rbe2(17, [10:224983], [10:157853], 2, "RBE2_1", 0:0, 0, 63, [0, 0, 0], 0, 0:0, 1, 0, -1)
```

---
id: Pretension
title: Pretension()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create pretension

## Syntax

```psj
Pretension(string strName, int iDir, double dValue, bool bFixLength, cursor crTable,
    cursor crCoord, int iLocalUnit, cursor[] taFace, cursor crEdit, bool bIfCreate2ADVCStatic)
```

## Inputs

### `1. String`

Pretension name

### `2. Int`

Pretension direction

- 0: UX
- 1: UY
- 2: UZ

### `3. Double`

Pretension force value

### `4. Bool`

Bolt FixLength bool flag True = 1, False = 0

### `5. Cursor`

Table cursor

### `6. Cursor`

Whether use local coordinate or not True = 27:\*, False = 0:0

### `7. Int`

unit index

### `8. Cursor[]`

Target face cursor([6:Face ID])

### `9. Cursor`

Edit cursor

### `10. Bool`

Create 2 ADVC Static bool flag True = 1, False = 0

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Pretension("BoltLoad007", 2, 0.05, 1, 0:0, 27:1, 0, [6:180, 6:178], 0:0, 0)
```

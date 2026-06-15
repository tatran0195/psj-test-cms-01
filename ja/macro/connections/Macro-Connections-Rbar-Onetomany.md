---
id: RBarOneToMany
title: RBarOneToMany()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create one-to-many RBAR (rigid elements) connection

## Syntax

```psj
RBarOneToMany(string strName, cursor[] taMasterTarget, cursor[] taSlaveTarget, int iMethod, int ulDofs, double dTol,
            cursor crCoord, bool bUpdateDispCS, cursor crEdit)
```

## Inputs

### `1. String`

RBAR name

### `2. Cursor[]`

Target master entities cursor

### `3. Cursor[]`

Target slave entities cursor

### `4. Int`

Rbe2 method creation

- 16: One to many

### `5. Int`

Reference DOFs attribute

### `6. Double`

Search area tolerance

### `7. Cursor`

Whether use local coordinate or not: True = 27:\*, False = 0:0

### `8. Bool`

Update displacement coordinate system, bool flag: True = 1, False = 0

### `9. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
RBarOneToMany("RBar_1", [10:493], [10:6, 10:2, 10:3], 16, 63, 0, 0:0, 1, 0:0)
```

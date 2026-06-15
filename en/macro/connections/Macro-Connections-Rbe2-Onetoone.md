---
id: RBE2OneToOne
title: RBE2OneToOne()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create one-to-one RBE2 (rigid elements) connection

## Syntax

```psj
RBE2OneToOne(int iMethod, cursor[] taMasterTarget, cursor[] taSlaveTarget, int eType, string strName,
    cursor crCoordSys, double dTol, int ulDofs, double[3] virtualNodePos, int iSurfaceDef,
    cursor crEdit, int iEnableUpdateDispCS, int iEnableCornerOnly, int iEnableCheckDuplicate, int iDuplicatedMode)
```

## Inputs

### `1. Int`

Rbe2 method creation

- 17: One to one

### `2. Cursor[]`

Target master entities cursor

### `3. Cursor[]`

Target slave entities cursor

### `4. Int`

Rbe2 type creation

- RBE2 type = 2

### `5. String`

RBE2 name

### `6. Cursor`

Whether use local coordinate or not: True = 27:\*, False = 0:0

### `7. Double`

Search area tolerance

### `8. Int`

Reference DOFs attribute

### `9. Double[3]`

Used in center of any entities and circle center circumference

### `10. Int`

Surface definition output

- 0: By node set
- 1: By element set

### `11. Cursor`

Edit cursor

### `12. Int`

Update displacement coordinate system

### `13. Int`

Enable only corner nodes

### `14. Int`

Enable duplication check

### `15. Int`

Duplication mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
RBE2OneToOne(17, [10:935], [10:469], 2, "RBE2_2", 0:0, 0, 63, [0, 0, 0], 0, 0:0, 1, 0, 1, 0)
```

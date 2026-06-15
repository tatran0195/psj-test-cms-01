---
id: CloseHoleEdgeFace
title: CloseHoleEdgeFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

ACM_CloseHole_EdgeFace

## Syntax

```psj
CloseHoleEdgeFace(cursor[] crBody, cursor[] crFace, cursor[] crEdge, bool bSelBelPart,
    bool SpecPart, bool bNewPart, string strName, bool bRemesh, double dElemSize)
```

## Inputs

### `1. Cursor[]`

Target body cursor([3:Body ID])

### `2. Cursor[]`

Target face cursor([6:Face ID])

### `3. Cursor[]`

Target edge cursor([5:Edge ID])

### `4. Bool`

Select belong part bool flag True = 1, False = 0

### `5. Bool`

Specified part bool flag True = 1, False = 0

### `6. Bool`

New part bool flag True = 1, False = 0

### `7. String`

New part name

### `8. Bool`

Remesh bool flag True = 1, False = 0

### `9. Double`

Element size

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CloseHoleEdgeFace([], [6:62], [5:10000157], 0, 0, 0, "", 1, 0.008)
```

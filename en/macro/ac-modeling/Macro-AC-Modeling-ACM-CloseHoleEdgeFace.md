---
id: ACM_CloseHoleEdgeFace
title: ACM_CloseHoleEdgeFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

ACM_CloseHole_EdgeFace

## Syntax

```psj
ACM_CloseHoleEdgeFace(cursor[] FaceCursor, cursor[] EdgeCursor, bool bNewBody,
    string newBodyname, bool bRemesh, double dAvgMeshSize)
```

## Inputs

### `1. Cursor[]`

Face List

### `2. Cursor[]`

Edge List

### `3. Bool`

Create New Body

### `4. string`

New Body name

### `5. Bool`

Remesh

### `6. Double`

Average Remesh Size

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CloseHoleEdgeFace([6:13049, 6:13059], [5:290520], 1, "NewBody", 1, 0.008)
```

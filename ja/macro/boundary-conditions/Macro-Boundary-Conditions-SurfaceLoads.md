---
id: SurfaceLoads
title: SurfaceLoads()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create surface load

## Syntax

```psj
SurfaceLoads(string strName, cursor[] crPressure, int arrowDir, cursor coordinate, cursor[] taTarget, cursor crEdit)
```

## Inputs

### `1. String`

Surface loads name

### `2. Cursor[]`

Force R, theta, Z cursor

### `3. Int`

Arrow direction

- 0: Start at node
- 1: End at node

### `4. Cursor`

Table field data cursor(81:FieldData ID)

### `5. Cursor[]`

Target entities cursor

### `6. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
SurfaceLoads("SurfaceLoads3", [1, 2, 3], 1, 27:1, [6:5, 11:771, 11:772], 0:0)
```

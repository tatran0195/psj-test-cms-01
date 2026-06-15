---
id: Pressure2Nodes
title: Pressure2Nodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Pressure 2 nodes

## Syntax

```psj
Pressure2Nodes(string strName, cursor crNodeA, double dPressureA, int iNodeAUnit,
    cursor crNodeB, double dPressureB, int iNodeBUnit, cursor[] taTarget, cursor crEdit)
```

## Inputs

### `1. String`

Pressure 2 nodes name

### `2. Cursor`

Node A key cursor(10:Node ID)

### `3. Double`

Pressure A value

### `4. Int`

Node A unit type

### `5. Cursor`

Node B key cursor(10:Node ID)

### `6. Double`

Pressure B value

### `7. Int`

Node B unit type

### `8. Cursor[]`

Target entities cursor

### `9. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Pressure2Nodes("PressureLinear1", 10:351, 2000, 0, 10:350, 4000, 0, 2, [6:5, 11:553, 11:554, 10:351, 10:350], 0:0)
```

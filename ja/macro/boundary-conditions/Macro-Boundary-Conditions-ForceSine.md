---
id: ForceSine
title: ForceSine()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Force (Sine)

## Syntax

```psj
ForceSine(String name, double totalForce, double a, Cursor crCoordinate, int angleBase,
    double angleRange, int arrowDir, int distributeInAxis, Cursor[] targets, Cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. double`

total force

### `3. Double`

a

### `4. Cursor`

coordinate system

### `5. Int`

angle base

### `6. Double`

angle range

### `7. Int`

arrorDir (0: Start at node, 1: End at node)

### `8. Int`

distributed in axis (0: false, 1: true)

### `9. Cursor[]`

targets

### `10. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ForceSine("Force3", 1, 2, 0:0, 0, 1.5708, 0, 0, [6:22], 0:0)
```

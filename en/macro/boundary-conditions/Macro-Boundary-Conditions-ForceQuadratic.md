---
id: ForceQuadratic
title: ForceQuadratic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Force (Quadratic)

## Syntax

```psj
ForceQuadratic(String name, double totalForce, double a, double b, Cursor crCoordinate,
    int angleBase, double angleRange, int arrowDir, Cursor[] targets, Cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. Double`

total force

### `3. Double`

a

### `4. Double`

b

### `5. Cursor`

coordinate system

### `6. Int`

angle base

### `7. Double`

angle range

### `8. Int`

arrorDir (0: Start at node, 1: End at node)

### `9. Cursor[]`

targets

### `10. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ForceQuadratic("Force2", 1, 2, 3, 0:0, 0, 1.5708, 0, [6:22], 0:0)
```

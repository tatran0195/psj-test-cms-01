---
id: ForceNormalDirection
title: ForceNormalDirection()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Force (normal direction)

## Syntax

```psj
ForceNormalDirection(string name, vector force, int arrowDir, int distributionMethod,
    cursor crCoordinate, cursor[] targets, cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. Vector`

force

### `3. int`

arrorDir (0: Start at node, 1: End at node)

### `4. int`

distributionMethod (0: Per selected entity, 1: Per node, 2: Total of select)

### `5. Cursor`

coordinate system

### `6. Cursor[]`

targets

### `7. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ForceNormalDirection("Force3", [0, -1, 0], 0, 0, 0:0, [6:21], 0:0)
```

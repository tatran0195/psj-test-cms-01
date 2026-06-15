---
id: FixedConstraint
title: FixedConstraint()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create fixed constraint

## Syntax

```psj
FixedConstraint(string name, int dof, Cursor crCoord, int functionType, int USETType,
    bool bAbqOpt,Cursor crTable, Cursor[] targets, Cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. Int`

dof

### `3. Cursor`

coordinate system

### `4. Int`

function type (0: Constraint, 1: Support, 2: USET)

### `5. Int`

USET type (0: None, 1: U1, 2: U2, 3: U3, 4: U4, 5: U5, 6: U6)

### `6. Bool`

Fixed Abaqus option bool flag True = 1, False = 0

### `7. Cursor`

table

### `8. Cursor[]`

targets

### `9. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
FixedConstraint("Constraint1", 7, 0:0, 0, 0, 0:0, [6:26], 0:0)
```

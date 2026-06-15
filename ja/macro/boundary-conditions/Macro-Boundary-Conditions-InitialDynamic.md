---
id: InitialDynamic
title: InitialDynamic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Initial Condition

## Syntax

```psj
InitialDynamic(string m_strName,int m_Type,double[] fVel,BOOL bSelNodeSet,Cursor crNodeSet,
    Cursor crTable,Cursor curCoord,Cursor[] m_taTarget,Cursor m_crEdit)
```

## Inputs

### `1. string`

Condition name

### `2. Int`

Condition Type[0-displacement 1-velocity 2-rotation angle 3-angular velocity]

### `3. Double[]`

Condition value

### `4. Bool`

selected node set

### `5. Cursor`

selected node set cursor

### `6. Cursor`

selected table cursor

### `7. Cursor`

coordinate cursor

### `8. Cursor[]`

selected entity

### `9. Cursor`

edit mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
InitialDynamic("InitialAngularVelocity1", 3, [1, 2, 3], 0, 0:0, 0:0, 0:0, [3:1], 0:0)
```

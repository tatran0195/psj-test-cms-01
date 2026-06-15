---
id: InitialStressGeneral
title: InitialStressGeneral()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create initial stress

## Syntax

```psj
InitialStressGeneral(String m_strName,int dim,int cs,double dval[0],double dval[1],
    double dval[2],Cursor crTable,Cursor[] m_taTarget,Cursor m_crEdit)
```

## Inputs

### `1. String`

name of stress

### `2. Int`

dimension[0:2D]

### `3. Int`

coordinate[0:Element CS]

### `4. Double`

initial stress component Sx

### `5. Double`

initial stress component Sy

### `6. Double`

initial stress component Sxy

### `7. Cursor`

select table

### `8. Cursor[]`

targets

### `9. Cursor`

edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
InitialStressGeneral("Test",1,1,0.001,0.001,0.001,1:11,[1:11,2:12],1:11)
```

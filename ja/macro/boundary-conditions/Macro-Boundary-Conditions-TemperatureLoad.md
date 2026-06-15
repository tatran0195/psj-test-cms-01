---
id: TemperatureLoad
title: TemperatureLoad()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create temperature load

## Syntax

```psj
TemperatureLoad(string m_strName,int nType,double fTemp,string strFilePathName,
    Cursor crTable,Cursor[] m_taTarget,Cursor m_crEdit,bool bUseAsMaterialReferenceTemp)
```

## Inputs

### `1. String`

name of temperature load

### `2. Int`

type[0:Constant; 1:Nastran Punch]

### `3. Double`

value of temperature

### `4. String`

file path

### `5. Cursor`

select table

### `6. Cursor[]`

targets

### `7. Cursor`

edit cursor

### `8. Bool`

if use as material reference temperature

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
TemperatureLoad("Test",1,0.001,"Test",1:11,[1:11,2:12],1:11,1)
```

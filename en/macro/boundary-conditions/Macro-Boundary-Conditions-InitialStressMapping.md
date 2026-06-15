---
id: InitialStressMapping
title: InitialStressMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create mapping stress

## Syntax

```psj
InitialStressMapping(String m_strName,int m_dim,String m_strMappingFilePath,Cursor m_crTable,Cursor m_crEdit)
```

## Inputs

### `1. String`

name of stress

### `2. Int`

dimension[0:3D]

### `3. String`

file path

### `4. Cursor`

select table

### `5. Cursor`

edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
InitialStressMapping("Test",1,"Test",1:11,1:11)
```

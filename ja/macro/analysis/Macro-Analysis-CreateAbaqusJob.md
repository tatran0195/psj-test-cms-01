---
id: CreateAbaqusJob
title: CreateAbaqusJob()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Abaqus Job

## Syntax

```psj
CreateAbaqusJob(string m_strName,bool m_bRBE2toMPC,bool m_bRenameProcess,
    int m_iCodeType,int m_iSurfDefType,int m_iUnit,int m_iWriteType,
    string m_strDescription,cursor[] m_taStepSequence,cursor m_crEditCursor)
```

## Inputs

### `1. String`

Job Name

### `2. Bool`

Output REB3 as MPC

### `3. Bool`

Rename Step or not

### `4. Int`

Output REB3 as MPC

### `5. Int`

Surface Definiation[0:by element set 1:by element]

### `6. Int`

unit system

### `7. Int`

Output type[0: by model 1: by selected bodies]

### `8. String`

Description for this Job

### `9. Cursor[]`

Steps applied on this Job

### `10. Cursor`

Edit Job cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CreateAbaqusJob("Abaqus", 0, 0, 0, 0, 1, 0, "", [], 0:0, [], 0, 0, 0, 0, 1, 22:2)
```

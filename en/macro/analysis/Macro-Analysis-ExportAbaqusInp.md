---
id: ExportAbaqusInp
title: ExportAbaqusInp()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Export Abaqus Inp

## Syntax

```psj
ExportAbaqusInp(cursor m_crAbaJob,cursor[] m_taSelectBody,string strPath)
```

## Inputs

### `1. Cursor`

Abaqus Job Cursor

### `2. Cursor[]`

Select Body Cursors to output

### `3. String`

output directory for INP

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ExportAbaqusInp(143:2, [], "D:/Abaqus.inp")
```

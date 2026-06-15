---
id: ExportAnsys
title: ExportAnsys()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Export Ansys file

## Syntax

```psj
ExportAnsys(String m_strName,Cursor m_crAbaJob)
```

## Inputs

### `1. String`

Export file name

### `2. Cursor`

Ansys Job Cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ExportAnsys("D:/Ansys.dat", 146:1)
```

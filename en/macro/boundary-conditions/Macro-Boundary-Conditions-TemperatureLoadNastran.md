---
id: TemperatureLoadNastran
title: TemperatureLoadNastran()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create temperature load by Nastran punch file

## Syntax

```psj
TemperatureLoadNastran(string strName, string strFilePathName, cursor crTable,
    cursor[] taTarget, cursor crEdit, bool bUseAsMaterialReferenceTemp)
```

## Inputs

### `1. String`

name of temperature load

### `2. String`

file path

### `3. Cursor`

select table

### `4. Cursor[]`

targets

### `5. Cursor`

edit cursor

### `6. Bool`

if use as material reference temperature

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
TemperatureLoadNastran("TemperatureLoadsPunch1", "D:/1_heat.pch", 0:0, [], 0:0, 0)
```

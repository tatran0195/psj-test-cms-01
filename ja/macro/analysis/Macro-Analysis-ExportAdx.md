---
id: ExportAdx
title: ExportAdx()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Export ADX file

## Syntax

```psj
ExportAdx(cursor crJobAdx, string strPath, int NumType, int Width, int Precision)
```

## Inputs

### `1. Cursor`

cursor of job exported

### `2. String`

path of adx file

### `3. Int`

number of type

### `4. Int`

width

### `5. Int`

precision

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ExportAdx(130:1, "D:/ADVC.adx", 2, 10, 5)
```

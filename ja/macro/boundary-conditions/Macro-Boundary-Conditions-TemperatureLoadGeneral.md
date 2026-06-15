---
id: TemperatureLoadGeneral
title: TemperatureLoadGeneral()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create temperature load by constant value

## Syntax

```psj
TemperatureLoadGeneral(string strName, double dTemperature, cursor crTable,
    cursor[] taTarget, cursor crEdit, bool bUseAsMaterialReferenceTemp)
```

## Inputs

### `1. String`

Name of temperature load

### `2. Double`

Temperature value

### `3. Cursor`

Select table

### `4. Cursor[]`

Targets

### `5. Cursor`

Edit cursor

### `6. Bool`

Use as material reference temperature bool flag True = 1, False = 0

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
TemperatureLoadGeneral("TemperatureLoadsConstant1", 303.15, 0:0, [6:21], 0:0, 0)
```

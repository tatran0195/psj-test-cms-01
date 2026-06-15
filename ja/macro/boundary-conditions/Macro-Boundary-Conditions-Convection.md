---
id: Convection
title: Convection()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create convection

## Syntax

```psj
Convection(string strName, double dExtTemp, cursor crTimeTempTbl, double dCoef,
    cursor crTimeCoefTbl, cursor crTempCoefTbl, cursor crTargets, cursor crEdit)
```

## Inputs

### `1. String`

Convection name

### `2. Double`

External temperature

### `3. Cursor`

Time temperature table cursor([81:FieldData ID])

### `4. Double`

Convection coefficient value

### `5. Cursor`

Time dependent coefficient table

### `6. Cursor`

Time temperature dependent coefficient table

### `7. Cursor[]`

Target Entities

### `8. Cursor`

Cursor edit

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Convection("Convection_1", 373.15, 81:1, 2000, 81:1, 81:1, [6:3, 11:764], 0:0)
```

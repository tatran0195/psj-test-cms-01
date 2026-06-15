---
id: InsideHeatGeneration
title: InsideHeatGeneration()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create inside heat generation

## Syntax

```psj
InsideHeatGeneration(string strName, double dInsideFlux, cursor crTable, cursor[] crTarget, cursor crEdit)
```

## Inputs

### `1. String`

Inside heat generation name

### `2. Double`

Inside flux value

### `3. Cursor`

Table field data cursor

### `4. Cursor[]`

Target entities cursor

### `5. Cursor`

Edit Cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
InsideHeatGeneration("InsideHeatGeneration3", 0.001, 81:1, [3:1], 0:0)
```

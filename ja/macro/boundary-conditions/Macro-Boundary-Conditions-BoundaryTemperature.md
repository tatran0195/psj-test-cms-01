---
id: BoundaryTemperature
title: BoundaryTemperature()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create boundary temperature

## Syntax

```psj
BoundaryTemparature(string strName, double fTemp, cursor crTable, cursor[] taTarget, cursor crEdit)
```

## Inputs

### `1. String`

Boundary temperature name

### `2. Double`

Temperature value

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
BoundaryTemperature("BoundaryTemperature_1", 373.15, 81:1, [3:1, 6:3], 0:0)
```

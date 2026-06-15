---
id: PretensionAbaqus
title: PretensionAbaqus()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Pretension Abaqus

## Syntax

```psj
PretensionAbaqus(string strName, bool bFixedLength, cursor crTable, double dValue,
    int iLocalUnit, string stNormal, double[3] dNodePos, cursor crEdit, cursor[] taTarget)
```

## Inputs

### `1. String`

Pretension abaqus name

### `2. Bool`

Bolt FixLength bool flag True = 1, False = 0

### `3. Cursor`

Table cursor

### `4. Double`

Pretension_1 force value

### `5. Int`

Input Unit

- 0: N
- 1: MN
- 2: kgf
- 3: Lbf
- 4: Tf

### `6. String`

String normal

### `7. Double[3]`

Coordinate of the control node

### `8. Cursor`

Edit cursor

### `9. Cursor[]`

Target entities cursor: Face/1D Element

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PretensionAbaqus("PreTensionAbaqus1", 1, 0:0, 100, 0, "1,0,0", [0.0083333, 0.015556, 0.025], 0:0, [6:180])
```

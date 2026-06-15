---
id: ContactClearance
title: ContactClearance()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create contact clearance

## Syntax

```psj
ContactClearance(string strName, double dClearanceVal, int iLocalUnit,
    int iSolverType, cursor[] taTarget, cursor crEdit)
```

## Inputs

### `1. String`

Structural name

### `2. Double`

Clearance value

### `3. Int`

Input Unit

- 0: Mm
- 1: M
- 2: Ft
- 3: In
- 4: Cm

### `4. Int`

Solver type

### `5. Cursor[]`

Target entities cursor

### `6. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ContactClearance("ContactClearance1", 0.002, 0, 0, [10:452, 6:26], 0:0)
```

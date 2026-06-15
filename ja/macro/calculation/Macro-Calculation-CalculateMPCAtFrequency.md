---
id: CalculateMPCAtFrequency
title: CalculateMPCAtFrequency()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display MPC result of specific frequency in Model Participation Factor dialog.

## Syntax

```psj
CalculateMPCAtFrequency(cursor crResponse, double dFrequency)
```

## Inputs

### `1. cursor`

- A Cursor specifying the response to calculate MPC.

### `2. double`

- A Double specifying the frequency to calculate MPC.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CalculateMPCAtFrequency(0:0, 0.0)
```

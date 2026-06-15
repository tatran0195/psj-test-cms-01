---
id: CalculateMPCAtTime
title: CalculateMPCAtTime()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display MPC result of specific time in Model Participation Factor dialog.

## Syntax

```psj
CalculateMPCAtTime(cursor crResponse, double dTime)
```

## Inputs

### `1. cursor`

- A Cursor specifying the response to calculate MPC.

### `2. double`

- A Double specifying the time to calculate MPC.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CalculateMPCAtTime(0:0, 0.0)
```

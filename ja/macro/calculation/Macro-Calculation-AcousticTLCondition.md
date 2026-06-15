---
id: AcousticTLCondition
title: AcousticTLCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Calculate AC power and transmittance from the selected nodal groups created by importing the PCH file on input side and output side respectively.

## Syntax

```psj
AcousticTLCondition(cursor crGroupIn, cursor crGroupOut, cursor crEdit)
```

## Inputs

### `1. cursor`

- A Cursor specifying the nodal group of input data.

### `2. cursor`

- A Cursor specifying the nodal group of output data.

### `3. cursor`

- A Cursor specifying an existing transmission loss condition.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AcousticTLCondition(0:0, 0:0, 0:0)
```

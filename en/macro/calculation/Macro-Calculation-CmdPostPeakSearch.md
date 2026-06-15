---
id: CmdPostPeakSearch
title: CmdPostPeakSearch()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Find peak nodes with higher or lower results (peaked) than nearby vertices at each node in the model and flag them.

## Syntax

```psj
CmdPostPeakSearch(int iOption, double dParameter, boolbStep)
```

## Inputs

### `1. int`

- An Integer specifying the peak option.

### `2. double`

- A Double specifying the the value for micro peak removal.

### `3. bool`

- A Boolean specifying whether to use the Step option.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdPostPeakSearch(0, 0.1, 1)
```

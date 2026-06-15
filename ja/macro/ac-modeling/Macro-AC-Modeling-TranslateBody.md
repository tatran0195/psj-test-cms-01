---
id: TranslateBody
title: TranslateBody()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Translate Body

## Syntax

```psj
TranslateBody(cursor[] body, double[3] trans_vector, cursor coordinate, bool create_new,
    bool copy_lbc, int copy_count)
```

## Inputs

### `1. Cursor[]`

Body List

### `2. double[3]`

Translation Vector

### `3. Cursor`

Reference Coordinate

### `4. Bool`

Create New Body 1=Yes, 0=No

### `5. Bool`

Copy LBC 1=Yes, 0=No

### `6. Int`

Copy Count

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
TranslateBody([3:2], [[0.002, 0, 0]], 0:0, 0, 0, 0)
```

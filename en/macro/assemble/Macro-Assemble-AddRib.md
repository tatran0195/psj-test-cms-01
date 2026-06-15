---
id: AddRib
title: AddRib()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Add Rib

## Syntax

```psj
AddRib(cursor part, cursor[] face_list, Cursor[] node_list, int width, int depth)
```

## Inputs

### `1. Cursor`

Part

### `2. Cursor[]`

Face List

### `3. Cursor[]`

Node list

### `4. Int`

Rib width

### `5. Int`

Rib depth

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AddRib(3:10, [6:260, 6:26], [], 10, 0)
```

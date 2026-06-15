---
id: Assemble_Faces_MatingStep
title: Assemble_Faces_MatingStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Find mating faces

## Syntax

```psj
Assemble_Faces_MatingStep(cursor[] face_id_master_list, cursor[] face_id_slave_list, cursor[] body_id_list, double tol)
```

## Inputs

### `1. Cursor[]`

List ID master faces. Empty is okay

### `2. Cursor[]`

List ID slave faces. Empty is okay

### `3. Cursor[]`

List ID bodies. Empty is okay

### `4. Double`

Tolerance to find mating faces

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Assemble_Faces_MatingStep([6:50, 6:47], [6:23, 6:21], [3:1, 3:2], 0.00022222)
```

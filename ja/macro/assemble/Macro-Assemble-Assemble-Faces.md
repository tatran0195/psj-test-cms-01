---
id: Assemble_Faces
title: Assemble_Faces()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create assemble faces

## Syntax

```psj
Assemble_Faces(int[] id_mating_faces_list, double tol, int at_pos, double snap_tol, bool fit_edge)
```

## Inputs

### `1. Int[]`

List id mating faces. Not empty

### `2. Double`

Tolerance to find mating faces

### `3. Int`

Connect position: 0 is mid-position, 1 is master position

### `4. Double`

Snap tolerance to boundary edges

### `5. Bool`

Fit edge: to keep circle edge shape: flag 0 : false, 1 : true

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Assemble_Faces([24, 49], 0.00022232, 1, 5e-05, 0)
```

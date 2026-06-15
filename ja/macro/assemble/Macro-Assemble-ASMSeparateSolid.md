---
id: ASMSeparateSolid
title: ASMSeparateSolid()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Separate assembled parts in a solid model

## Syntax

```psj
ASMSeparateSolid(int[] bodyID, int[] faceID, bool createGroup)
```

## Inputs

### `1. Int[]`

Given body ids to be separated

### `2. Int[]`

Given face ids to be assembled

### `3. Bool`

Group creation option

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ASMSeparateSolid([2, 29], [], 0)
```

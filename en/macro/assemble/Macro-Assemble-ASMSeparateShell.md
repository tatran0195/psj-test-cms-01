---
id: ASMSeparateShell
title: ASMSeparateShell()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Separate assembled faces in a shell model

## Syntax

```psj
ASMSeparateShell(int iType, int[] taKeyEntity, bool bCreateGroup)
```

## Inputs

### `1. Int`

Type option:

- 1: Parts
- 2: Edges

### `2. Int[]`

Entity cursor([Entity ID]) -> depend on Picked Type

### `3. Bool`

Create group

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ASMSeparateShell(1, [4, 1], 0)
```

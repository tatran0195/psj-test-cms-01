---
id: ACBoundaryMethod1
title: ACBoundaryMethod1()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Acoustic Boundary. (in japanese - test) 5.2.0

## Syntax

```psj
ACBoundaryMethod1(cursor[] crlParts, bool bIsMergePart, bool bIsRenumber)

```

## Inputs

### `1. cursor[]`

A list of body entities (such as parts or shapes) that you want to process using the boundary method.

### `2. bool`

Whether to merge the body entities into one. If True, the selected parts will be merged together.

### `3. bool`

Whether to renumber the nodes and elements. If True, the macro will assign new numbers to nodes/elements to avoid duplicates or conflicts.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ACBoundaryMethod1([3:1, 3:2], 1, 1)
```

---
id: Assemble-SeparateFaces-Shell
title: Assemble.SeparateFaces.Shell()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Separate shared Nodes for Shell that is shared between the shell parts into double nodes
---

## Description

Separate shared Nodes for Shell that is shared between the shell parts into double nodes.

## Syntax

```psj
Assemble.SeparateFaces.Shell(...)
```

Ribbon: <menuselection>Assemble &#187; Separate Faces &#187; Shell</menuselection>

## Inputs

### `iType`

- An _Integer_ specifying the type of entity to be selected.
- The default value is 0.

### `crlEntity`

- A _List of Cursor_ specifying the list of target item which will be separated.
- The default value is [].

### `bCreateGroup`

- A _Boolean_ enable/disable create group option.
- The default value is False.

## Return Code

A _List Cursor_ of separated edges if success, or _None_ if fail.

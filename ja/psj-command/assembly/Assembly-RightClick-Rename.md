---
id: Assembly-RightClick-Rename
title: Assembly.RightClick.Rename()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Rename a specified entity
---

## Description

Rename a specified entity.

## Syntax

```psj
Assembly.RightClick.Rename(...)
```

Macro: RenameItem

Ribbon: <menuselection>Assembly &#187; RightClick &#187; Rename</menuselection>

## Inputs

### `strNewName`

- A _String_ specifying the new name for item.
- The default value is "New name".

### `crItem`

- A _Cursor_ specifying the item which name will be changed.
- This is a required input.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

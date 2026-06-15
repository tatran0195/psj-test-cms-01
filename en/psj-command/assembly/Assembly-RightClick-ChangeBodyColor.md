---
id: Assembly-RightClick-ChangeBodyColor
title: Assembly.RightClick.ChangeBodyColor()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Change the color of the selected part
---

## Description

Change the color of the selected part.

## Syntax

```psj
Assembly.RightClick.ChangeBodyColor(...)
```

Ribbon: <menuselection>Assembly &#187; Right Click &#187; Change Random Color &#187; Surface</menuselection>

## Inputs

### `listPartColorPair`

- A _List of [PART_COLOR_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/PART_COLOR_PAIR)_ specifying a list which contains part and its color.
- The default value is [].

### `bResetFaceColor`

- A _Boolean_ specifying whether or not reset face color.
- The default value is False.

## Return Code

A _Boolean_ specifying whether the process is executed successfully or not:

- _True_: The process is executed successfully.
- _False_: Cannot execute the function.

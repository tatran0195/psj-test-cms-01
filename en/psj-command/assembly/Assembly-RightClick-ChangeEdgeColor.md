---
id: Assembly-RightClick-ChangeEdgeColor
title: Assembly.RightClick.ChangeEdgeColor()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Change the color of the edges of selected part
---

## Description

Change the color of the edges of selected part.

## Syntax

```psj
Assembly.RightClick.ChangeEdgeColor(...)
```

Ribbon: <menuselection>Assemble Window &#187; Right Click &#187; Change Single Color &#187; Feature Edge</menuselection> \
Ribbon: <menuselection>Assemble Window &#187; Right Click &#187; Change Single Color &#187; Feature Edge(Default)</menuselection> \
Ribbon: <menuselection>Assemble Window &#187; Right Click &#187; Change Random Color &#187; Feature Edge</menuselection> \
Ribbon: <menuselection>Assemble Window &#187; Right Click &#187; Change Random Color &#187; Feature Edge(Default)</menuselection>

## Inputs

### `crlParts`

- A _List of Cursor_ specifying parts to change edge color.
- This is a required input.

### `iColor`

- An _Integer_ specifying edge color to change.
- The default value is 0.

### `bRandom`

- A _Boolean_ specifying whether assign random color. It ignores iColor setting.
- The default value is _False_.

## Return Code

A _Boolean_ specifying whether the process is executed successfully or not:

- _True_: The process is executed successfully.
- _False_: Cannot execute the function.

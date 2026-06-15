---
id: Assembly-RightClick-ChangeMeshLineColor
title: Assembly.RightClick.ChangeMeshLineColor()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Change the color of the mesh line of the selected part
---

## Description

Change the color of the mesh line of the selected part.

## Syntax

```psj
Assembly.RightClick.ChangeMeshLineColor(...)
```

Ribbon: <menuselection>Assembly &#187; Right Click &#187; Change Single Color &#187; Mesh Line</menuselection>

## Inputs

### `crlFaces`

- A _List of Cursor_ specifying the face which mesh line color will be changed.
- This is a required input.

### `iColor`

- An _Integer_ specifying the color.
- The default value is 0.

## Return Code

A _Boolean_ specifying whether the process is executed successfully or not:

- _True_: The process is executed successfully.
- _False_: Cannot execute the function.

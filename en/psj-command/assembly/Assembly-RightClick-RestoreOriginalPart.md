---
id: Assembly-RightClick-RestoreOriginalPart
title: Assembly.RightClick.RestoreOriginalPart()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Replace the current part by using its reference. In case the number of reference = 0, it will keep the current part without changing anything
---

## Description

Replace the current part by using its reference. In case the number of reference = 0, it will keep the current part without changing anything.

## Syntax

```psj
Assembly.RightClick.RestoreOriginalPart(...)
```

Ribbon: <menuselection>Assembly &#187; Right Click &#187; Restore Original Part</menuselection>

## Inputs

### `crlBodies`

- A _List of Cursor_ specifying the list of parts which will be restored.
- This is a required input.

### `bKeepShareFace`

- A _Boolean_ specifying whether or not keep share face after restore.
- The default value is False.

## Return Code

A _Boolean_ specifying whether the process is executed successfully or not:

- _True_: The process is executed successfully.
- _False_: Cannot execute the function.

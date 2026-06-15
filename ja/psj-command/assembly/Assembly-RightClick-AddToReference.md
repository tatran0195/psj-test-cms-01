---
id: Assembly-RightClick-AddToReference
title: Assembly.RightClick.AddToReference()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Add the current part to its Reference and use the added one as the current reference part
---

## Description

Add the current part to its Reference and use the added one as the current reference part.

## Syntax

```psj
Assembly.RightClick.AddToReference(...)
```

Ribbon: <menuselection>Assembly &#187; Right Click &#187; Add To Reference</menuselection>

## Inputs

### `crSrcPart`

- A _Cursor_ specifying the source part which will be become reference for destination part.
- This is a required input.

### `crDestPart`

- A _Cursor_ specifying the destination part.
- This is a required input.

## Return Code

A _Boolean_ specifying whether the process is executed successfully or not:

- _True_: The process is executed successfully.
- _False_: Cannot execute the function.

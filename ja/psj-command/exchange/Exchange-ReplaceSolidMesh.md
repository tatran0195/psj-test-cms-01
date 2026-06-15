---
id: Exchange-ReplaceSolidMesh
title: Exchange.ReplaceSolidMesh()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Replace an adjacent solid part.
---

## Description

Replace an adjacent solid part.

## Syntax

```psj
Exchange.ReplaceSolidMesh(...)
```

Macro:

Ribbon: <menuselection>Exchange &#187; ReplaceSolidMesh</menuselection>

## Inputs

### `crlSourceFace`

- A _List of Cursor_ specifying source face (base model side).
- This is a required input.

### `crlTargetFace`

- A _List of Cursor_ specifying target face (echange part side).
- This is a required input.

### `dTolerance`

- A _Double_ specifying tolerance between source face and target face.
- This is a required input.

## Return Code

A _Boolean_ specifying the function successfully executed or not.

---
id: Assemble-AddRib
title: Assemble.AddRib()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Add the ribs to the body as a union part
---

## Description

Add the ribs to the body as a union part.

## Syntax

```psj
Assemble.AddRib(...)
```

Macro: [AddRib](/docs/cli/5.1.0/macro/assemble/AddRib)

Ribbon: <menuselection>Assemble &#187; Add Rib</menuselection>

## Inputs

### `crPart`

- A _Cursor_ specifying the part.
- The default value is None.

### `crlFaces`

- A _List of Cursor_ specifying the face.
- The default value is [].

### `veclPoints`

- A _Vector List_ specifying the points.
- The default value is [].

### `dWidth`

- A _Double_ specifying the width.
- The default value is 0.0.

### `dDepth`

- A _Double_ specifying the depth.
- The default value is 0.0.

## Return Code

_True_ if success, or _False_ if fail.

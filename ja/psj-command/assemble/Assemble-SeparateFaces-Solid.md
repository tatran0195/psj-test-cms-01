---
id: Assemble-SeparateFaces-Solid
title: Assemble.SeparateFaces.Solid()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Separate a shared face between parts into distinct faces
---

## Description

Separate a shared face between parts into distinct faces.

## Syntax

```psj
Assemble.SeparateFaces.Solid(...)
```

Ribbon: <menuselection>Assemble &#187; Separate Faces &#187; Solid</menuselection>

## Inputs

### `crlParts`

- A _List of Cursor_ specifying the target parts which have shared faces between them.
- The default value is [].

### `crlFaces`

- A _List of Cursor_ specifying the target shared faces.
- The default value is [].

### `iCreateGroup`

- A _Boolean_ specifying the type of group will be created.
- The default value is 0.

## Return Code

A _List Cursor_ of separated faces if success, or _None_ if fail.

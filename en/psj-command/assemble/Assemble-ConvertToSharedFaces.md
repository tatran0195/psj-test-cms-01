---
id: Assemble-ConvertToSharedFaces
title: Assemble.ConvertToSharedFaces()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: If a pair of Tri elements that share all three vertices exists within the document or on the specified surface, they are converted into a shared surface between the two parts to which they belong.
---

## Description

If a pair of Tri elements that share all three vertices exists within the document or on the specified surface, they are converted into a shared surface between the two parts to which they belong.

## Syntax

```psj
Assemble.ConvertToSharedFaces(...)
```

Macro:

Ribbon: <menuselection>Assemble &#187; ConvertToSharedFaces</menuselection>

## Inputs

### `crlFaces`

- A _List of Cursor_ specifying the target faces. If the list is empty, all faces in the document are considered as targets.
- The default value is [].

## Return Code

A _List of Cursor_ specifying the created shared face.

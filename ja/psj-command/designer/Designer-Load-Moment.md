---
id: Designer-Load-Moment
title: Designer.Load.Moment()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create moment
---

## Description

Create moment

## Syntax

```psj
Designer.Load.Moment(strName="", crlFaces=[], dlVecMomentXYZ=[0.0,0.0,0.0], crCoord=None, crEdit=None)
```

Ribbon: <menuselection>Designer &#187; Load &#187; Moment</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `crlFaces`

- A _List of Cursor_ specifying the face.
- The default value is [].

### `dlVecMomentXYZ`

- A _Double List_ specifying the vector moment x y z.
- The default value is [0.0,0.0,0.0].

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

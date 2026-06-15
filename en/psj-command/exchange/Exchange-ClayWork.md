---
id: Exchange-ClayWork
title: Exchange.ClayWork()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Make a simple design change for solid mesh parts
---

## Description

Make a simple design change for solid mesh parts.

## Syntax

```psj
Exchange.ClayWork(...)
```

Macro:

Ribbon: <menuselection>Exchange &#187; ClayWork</menuselection>

## Inputs

### `iProcess`

- An _Integer_ specifying the process type.
    - 0: Sphere
    - 1: Boolean +
    - 2: Boonlean -
- The default value is 0.

### `iWrappingType`

- An _Integer_ specifying the wrapping type. This argument only was used when `iProcess` = 1 or 2.
    - 0: Tight
    - 1: Convex
- The default value is 0.

### `dlSphereCenter`

- A _List of Double_ specifying the center coordinates of sphere.
- The default value is [].

### `dSphereRadius`

- A _Double_ specifying the radius of sphere.
- The default value is 0.0.

### `crTargetPart`

- A _Cursor_ specifying the part to which the wrapped sphere will be added or scraped off. This argument only was used when `iProcess` = 1 or 2.
- The default value is _None_.

## Return Code

A _Boolean_ specifying the function successfully executed or not.

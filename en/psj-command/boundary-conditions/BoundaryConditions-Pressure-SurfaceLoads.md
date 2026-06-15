---
id: BoundaryConditions-Pressure-SurfaceLoads
title: BoundaryConditions.Pressure.SurfaceLoads()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: create distrubited pressure
---

## Description

Create distrubited pressure.

## Syntax

```psj
BoundaryConditions.Pressure.SurfaceLoads(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Pressure &#187; SurfaceLoads</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "SurfaceLoads1".

### `dlPressure`

- A _Double List_ specifying the pressure.
- The default value is [0,0,0].

### `iArrowDir`

- An _Integer_ specifying the arrow direction.
- The default value is 0.

### `crCoordinate`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `crlTargetsFace`

- A _List of Cursor_ specifying the target face.
- The default value is [].

### `crEditCur`

- A _Cursor_ specifying the edit cur.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

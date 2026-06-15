---
id: BoundaryConditions-Pressure-SurfaceMapping
title: BoundaryConditions.Pressure.SurfaceMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create mapping pressure
---

## Description

Create mapping pressure.

## Syntax

```psj
BoundaryConditions.Pressure.SurfaceMapping(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Pressure &#187; SurfaceMapping</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "MappingPressure".

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `iMAPPos`

- An _Integer_ specifying the m a p position.
- The default value is 0.

### `iViewCp`

- An _Integer_ specifying the view component.
- The default value is 0.

### `iCp`

- An _Integer_ specifying the component.
- The default value is 1.

### `iSrcType`

- An _Integer_ specifying the source type.
- The default value is 0.

### `iMappedCpIndexArr`

- An _Integer_ specifying the mapped component index arr.
- The default value is 0.

### `dScaleFactor`

- A _Double_ specifying the scale factor.
- The default value is 1.

### `posOffset`

- A _Position_ specifying the offset.
- The default value is [0,0,0].

### `posRotate`

- A _Position_ specifying the rotate.
- The default value is [0,0,0].

### `dCorScale`

- A _Double_ specifying the cor scale.
- The default value is 1.

### `dSearchRange`

- A _Double_ specifying the search range.
- The default value is 0.

### `iUnit`

- An _Integer_ specifying the unit.
- The default value is 0.

### `strPath`

- A _String_ specifying the path.
- The default value is "".

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

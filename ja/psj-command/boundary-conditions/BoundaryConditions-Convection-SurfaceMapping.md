---
id: BoundaryConditions-Convection-SurfaceMapping
title: BoundaryConditions.Convection.SurfaceMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create load boundary condition of convection surface mapping
---

## Description

Create load boundary condition of convection surface mapping.

## Syntax

```psj
BoundaryConditions.Convection.SurfaceMapping(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Convection &#187; SurfaceMapping</menuselection>

## Inputs

### `strName`

- A _String_ specifying the Mapping Convection name.
- The default value is "MappingConvection_1".

### `crlTargets`

- A _List of Cursor_ specifying the targets.
- The default value is [].

### `iPos`

- An _Integer_ specifying the MAP position.
    - 0: MAP_POS_SURFACE_NODE.
        - 1: MAP_POS_SOLID_NODE.
        - 2: MAP_POS_SURFACE_ELEM.
        - 3: MAP_POS_SOLID_ELEM.
- The default value is 0.

### `iViewCp`

- An _Integer_ specifying the component index that to be previewed.
- The default value is 0.

### `iCp`

- An _Integer_ specifying the component.
- The default value is 0.

### `iSrcType`

- An _Integer_ specifying the source type of the fluid analysis solver from which the result file was output.
    - 0: Fluent.
        - 1: Star CD.
        - 2: CSV.
- The default value is 0.

### `iMappedCpIndex0`

- An _Integer_ specifying the mapped component index0.
- The default value is 0.

### `iMappedCpIndex1`

- An _Integer_ specifying the mapped component index1.
- The default value is 0.

### `dRScale`

- A _Double_ specifying the rotation scale.
- The default value is 1.0.

### `posOffset`

- A _Position_ specifying the offset.
- The default value is [0,0,0].

### `posAxis`

- A _Position_ specifying the axis.
- The default value is [0,0,0].

### `dTScale`

- A _Double_ specifying the translation scale.
- The default value is 1.0.

### `dSearchRange`

- A _Double_ specifying the search range.
- The default value is 1.0.

### `iHTCUnit`

- An _Integer_ specifying the HTC unit.
    - 0: mW/mm^2.
    - 1: W/mm^2.
    - 2: miuW/mm^2.
    - 3: lcal/mm^2\*h.
    - 4: lbf/ft\*s.
    - 5: lbf/in\*s.
- The default value is 0.

### `iTempUnit`

- An _Integer_ specifying the temperature unit.
    - 0: degree Kenvil (K).
    - 1: degree Celsius (deg C).
    - 2: degree Fahrenheit (deg F).
- The default value is 0.

### `strPath`

- A _String_ specifying the path.
- The default value is "".

### `crEdit`

- A _Cursor_ specifying the cursor of boundary condition need editing.
- The default value is _None_.

## Return Code

A _String_ of 1 if success, or 0 if fail.

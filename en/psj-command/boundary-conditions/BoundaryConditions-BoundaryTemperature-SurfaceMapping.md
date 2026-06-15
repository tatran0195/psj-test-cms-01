---
id: BoundaryConditions-BoundaryTemperature-SurfaceMapping
title: BoundaryConditions.BoundaryTemperature.SurfaceMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create surface mapping boundary temperature
---

## Description

Create surface mapping boundary temperature.

## Syntax

```psj
BoundaryConditions.BoundaryTemperature.SurfaceMapping(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; BoundaryTemperature &#187; SurfaceMapping</menuselection>

## Inputs

### `strName`

- A _String_ specifying the mapping temperature name.
- The default value is "MappingTemperature".

### `crlTargets`

- A _List of Cursor_ specifying the targets.
- The default value is [].

### `iMAPPos`

- An _Integer_ specifying the map position.
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
- The default value is 1.

### `iSrcType`

- An _Integer_ specifying the source type of the fluid analysis solver from which the result file was output.
    - 0: Fluent.
        - 1: Star CD.
        - 2: Convection Text.
        - 3: SZText.
        - 4: ADVC.
        - 5: SubmodelBC ADVC.
- The default value is 0.

### `iMappedCpIndexArr0`

- An _Integer_ specifying the mapped component index arr0.
- The default value is 0.

### `iMappedCpIndexArr1`

- An _Integer_ specifying the mapped component index arr1.
- The default value is 0.

### `dScaleFactor`

- A _Double_ specifying the scale factor.
- The default value is 1.0.

### `posOffset`

- A _Position_ specifying the offset.
- The default value is [0,0,0].

### `posRotate`

- A _Position_ specifying the rotate.
- The default value is [0,0,0].

### `dCorScale`

- A _Double_ specifying the coordinate scale.
- The default value is 1.0.

### `dSearchRange`

- A _Double_ specifying the search range.
- The default value is 0.0.

### `iUnit`

- An _Integer_ specifying the unit. - 0: degree Kenvil (K).
    - 1: degree Celsius (deg C).
    - 2: degree Fahrenheit (deg F).
- The default value is 0.

### `strPath`

- A _String_ specifying the path.
- The default value is "".

### `crEdit`

- A _Cursor_ specifying the cursor of boundary condition need editing.
- The default value is _None_.

### `iMappingMethod`

- An _Integer_ specifying the mapping method.
    - 0: Mapping Nearest.
        - 1: Mapping CMLS.
- The default value is 0.

### `iSubmodeLBCMappingType`

- An _Integer_ specifying the submode load boundary condition mapping type.
    - 0: Mapping type FORCED DISPLACEMENT.
        - 1: Mapping type LOAD FORCE.
        - 2: Mapping type EMPERATURE.
        - 3: Mapping type FORCED TEMPERATURE.
        - 4: Mapping type HEAT FLUX.
- The default value is 3.

### `iMappingFromStepNo`

- An _Integer_ specifying the mapping from step number.
- The default value is 0.

### `bSetADVCFile`

- A _Boolean_ specifying whether set ADVC file.
- The default value is _False_.

### `strADVCResultFile`

- A _String_ specifying the ADVC result file.
- The default value is "".

### `bSetDetATol`

- A _Boolean_ specifying whether set det a tolerance.
- The default value is _False_.

### `dDetATol`

- A _Double_ specifying the det a tolerance.
- The default value is DFLT_DBL.

### `bSetElementSet`

- A _Boolean_ specifying whether set element set.
- The default value is _False_.

### `strElementSet`

- A _String_ specifying the element set.
- The default value is "all".

## Return Code

A _String_ of 1 if success, or 0 if fail.

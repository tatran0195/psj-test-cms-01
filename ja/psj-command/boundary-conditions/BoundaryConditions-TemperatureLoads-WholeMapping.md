---
id: BoundaryConditions-TemperatureLoads-WholeMapping
title: BoundaryConditions.TemperatureLoads.WholeMapping()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Map temperagure load from solver data or csv.
---

## Description

Map temperagure load from solver data or csv.

## Syntax

```psj
BoundaryConditions.TemperatureLoads.WholeMapping(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; TemperatureLoads &#187; WholeMapping</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "TemperatureLoadsWholeMapping".

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

### `iMappedCpIndexArr0`

- An _Integer_ specifying the mapped component index arr0.
- The default value is 0.

### `iMappedCpIndexArr1`

- An _Integer_ specifying the mapped component index arr1.
- The default value is 0.

### `iDScaleFactor`

- An _Integer_ specifying the d scale factor.
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

### `strPath`

- A _String_ specifying the path.
- The default value is "".

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `iMappingMethod`

- An _Integer_ specifying the mapping method.
- The default value is 0.

### `iSubmodelBCMappingType`

- An _Integer_ specifying the submodel c mapping type.
- The default value is 2.

### `iMappingFromStepNo`

- An _Integer_ specifying the mapping from step no.
- The default value is 0.

### `bSetADVCFile`

- A _Boolean_ specifying the set ADVC file.
- The default value is False.

### `strADVCResultFile`

- A _String_ specifying the ADVC result file.
- The default value is "".

### `bSetDetATol`

- A _Boolean_ specifying the set det a tolerance.
- The default value is False.

### `dDetATol`

- A _Double_ specifying the det a tolerance.
- The default value is DFLT_DBL.

### `bSetElementSet`

- A _Boolean_ specifying the set element set.
- The default value is False.

### `strElementSet`

- A _String_ specifying the element set.
- The default value is "".

### `iTemperature`

- An _Integer_ specifying the unit of temperature.
    - 0: K
    - 1: deg C
    - 2: deg F
- The default value is 1.

## Return Code

A String of 1 if success, or 0 if fail.

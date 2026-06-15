---
id: BoundaryConditions-Submodel-ForcedTempertature
title: BoundaryConditions.Submodel.ForcedTempertature()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a submodel by using temperature field from the coarse model and apply it to the submodel as a boundary condition to get the accurate highly-refined response in the area of interest
---

## Description

Create a submodel by using temperature field from the coarse model and apply it to the submodel as a boundary condition to get the accurate highly-refined response in the area of interest.

## Syntax

```psj
BoundaryConditions.Submodel.ForcedTempertature(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Submodel &#187; ForcedTempertature</menuselection>

## Inputs

### `strName`

- A _String_ specifying the submodel forced temperature name.
- The default value is "SubmodelForcedTemperature1".

### `iSolver`

- An _Integer_ specifying the solver type. Currently, there is only ADVC solver is available.
    - 0: ADVC solver.
- The default value is 0.

### `strFilePathName`

- A _String_ specifying the file path name.
- The default value is "/home/".

### `iProcessNo`

- An _Integer_ specifying the process number of ADVC solver. The value must be greater than 0.
- This is the required input.

### `iReferType`

- An _Integer_ specifying the refer type.
    - 0: Blank.
    - 1: Result.
    - 2: Restart.
- The default value is 0.

### `dExtensionRange`

- A _Double_ specifying the extension range value.
- The default value is DFLT_DBL.

### `dExtensionTol`

- A _Double_ specifying the extension tolerance.
- The default value is DFLT_DBL.

### `dExtensionLimitTol`

- A _Double_ specifying the extension limit tolerance.
- The default value is DFLT_DBL.

### `strGlobalElementSet`

- A _String_ specifying the global element set.
- The default value is "".

### `iUseBucket`

- An _Integer_ specifying the use bucket.
    - 0: Blank.
    - 1: Yes.
    - 2: No.
- The default value is -1.

### `iNumBucketMaxX`

- An _Integer_ specifying the number bucket maximum X.
- The default value is DFLT_INT.

### `iNumBucketMaxY`

- An _Integer_ specifying the number bucket maximum Y.
- The default value is DFLT_INT.

### `iNumBucketMaxZ`

- An _Integer_ specifying the number bucket maximum Z.
- The default value is DFLT_INT.

### `iPrevBc`

- An _Integer_ specifying the maintaining of the specified boundary conditions.
    - 0: Blank.
    - 1: Default hold.
- The default value is -1.

### `crlTargets`

- A _List of Cursor_ specifying the target entities. The target entities could be Face or Nodes.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the cursor of boundary condition Forced Temperature need editing.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

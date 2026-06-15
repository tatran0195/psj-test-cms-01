---
id: BoundaryConditions-Submodel-SubmodelForcedFlux
title: BoundaryConditions.Submodel.SubmodelForcedFlux()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create submodel forced flux
---

## Description

Create submodel forced flux.

## Syntax

```psj
BoundaryConditions.Submodel.SubmodelForcedFlux(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Submodel &#187; SubmodelForcedFlux</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `iSolver`

- An _Integer_ specifying the solver.
- The default value is 0.

### `strFilePathName`

- A _String_ specifying the file path name.
- The default value is "/home/".

### `iProcessNo`

- An _Integer_ specifying the process no.
- The default value is 0.

### `iReferType`

- An _Integer_ specifying the refer type.
- The default value is -1.

### `dExtensionRange`

- A _Double_ specifying the extension range.
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
- The default value is -1.

### `iNumBucketMaxX`

- An _Integer_ specifying the number bucket maximum x.
- The default value is DFLT_INT.

### `iNumBucketMaxY`

- An _Integer_ specifying the number bucket maximum y.
- The default value is DFLT_INT.

### `iNumBucketMaxZ`

- An _Integer_ specifying the number bucket maximum z.
- The default value is DFLT_INT.

### `iPrevBc`

- An _Integer_ specifying the prev bc.
- The default value is -1.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

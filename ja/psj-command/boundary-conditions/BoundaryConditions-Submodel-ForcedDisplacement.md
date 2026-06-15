---
id: BoundaryConditions-Submodel-ForcedDisplacement
title: BoundaryConditions.Submodel.ForcedDisplacement()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a forced displacement boundary condition for node-based submodeling
---

## Description

Create a forced displacement boundary condition for node-based submodeling.

## Syntax

```psj
BoundaryConditions.Submodel.ForcedDisplacement(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Submodel &#187; Submodel Forced Displacement</menuselection>

## Inputs

### `strName`

- A _String_ specifying the new Boundary Condition name.
- The default value is "SubmodelForcedDisplacement1".

### `iSolver`

- An _Integer_ specifying the applied Solver. Possible value is 0 corresponding to ADVC solver.
- The default value is 0.

### `strDataDirectory`

- A _String_ specifying the data directory name of the global model containing the model, result, and restart. It can be specified as either an absolute path or a relative path.
- The default value is "/home/".

### `iProcessNo`

- An _Integer_ specifying the process number.
- The default value is 0.

### `bMapX`

- A _Boolean_ specifying whether to map the X translational degree of freedom.
- The default value is _True_.

### `bMapY`

- A _Boolean_ specifying whether to map the Y translational degree of freedom.
- The default value is _True_.

### `bMapZ`

- A _Boolean_ specifying whether to map the Z translational degree of freedom.
- The default value is _True_.

### `iReferType`

- An _Integer_ specifying the reference destination for the result directory of the global model.
    - 0: Not specified - Refers to the normal output result (dir name / result)
    - 1: Result - Refer to the normal output result (dir name / result)
    - 2: Restart - Refer to the restart output result (dir name / restart)
- The default value is 0.

### `dExtensionRange`

- A _Double_ specifying the extension of the range in the global coordinate system. Extend the search range by range in the global coordinate system.
- The default value is DFLT_DBL.

### `dExtensionTol`

- A _Double_ specifying the extension of the range in the element coordinate system. Extend the search range by tolerance in the element coordinate system. If specified value smaller than _dExtensionLimitTol_, the extension parameter in the element coordinate system is _dExtensionLimitTol_.
- The default value is DFLT_DBL.

### `dExtensionLimitTol`

- A _Double_ specifying the Newton-Raphson iteration convergence tolerance for calculating the "global coordinates corresponding to the submodel".
- The default value is DFLT_DBL.

### `strGlobalElementSet`

- A _String_ specifying the element group name of the "global element containing submodel" that is known in advance.
- The default value is "".

### `iUseBucket`

- An _Integer_ specifying whether to use the bucket method to speed up the search.
    - 0: Not specified - Use the bucket method
    - 1: Yes - Use the bucket method
    - 2: No - Do not use the bucket method
- The default value is 0.

### `iNumBucketMaxX`

- An _Integer_ specifying the maximum number of bucket divisions in the x-direction.
- The default value is DFLT_INT.

### `iNumBucketMaxY`

- An _Integer_ specifying the maximum number of bucket divisions in the y-direction.
- The default value is DFLT_INT.

### `iNumBucketMaxZ`

- An _Integer_ specifying the maximum number of bucket divisions in the z-direction.
- The default value is DFLT_INT.

### `iPrevBc`

- An _Integer_ specifying the specified boundary condition to maintain.
    - 0: Not specified
    - 1: Default Hold
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the targets to be applied. The target can be Face entities or Node entities. The _crlTargets_ and _crForcedDispBC_ arguments are mutually exclusive. One of them must be specified.
- The default value is [].

### `crForcedDispBC`

- A _Cursor_ specifying the existing Boundary Condition (Forced Displacement). If this argument is not _None_, the specified Boundary Condition will be modified. Otherwise, a new Boundary Condition will be created. The _crlTargets_ and _crForcedDispBC_ arguments are mutually exclusive. One of them must be specified.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

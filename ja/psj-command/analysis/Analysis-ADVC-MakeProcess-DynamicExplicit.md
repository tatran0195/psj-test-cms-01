---
id: Analysis-ADVC-MakeProcess-DynamicExplicit
title: Analysis.ADVC.MakeProcess.DynamicExplicit()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create an ADVC Dynamic Explicit process. This process could be created in one time or multiple times
---

## Description

Create an ADVC Dynamic Explicit process.
This process could be created in one time or multiple times.

## Syntax

```psj
Analysis.ADVC.MakeProcess.DynamicExplicit(...)
```

Macro: [AdvcDynamicExplicitProcess](/docs/cli/5.1.0/macro/analysis/AdvcDynamicExplicitProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; MakeProcess &#187; DynamicExplicit</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the process.
- This is a required input.

### `iGeomNonlinear`

- An _Integer_ specifying the geometric nonlinearity type:
    - If _iGeomNonlinear=0_, do not define the geometric nonlinearity type.
    - If _iGeomNonlinear=1_, a Linear geometric nonlinearity is specified.
    - If _iGeomNonlinear=2_, a Nonlinear geometric nonlinearity is specified.
    - If _iGeomNonlinear=3_, a Total Lagrange geometric nonlinearity is specified.
    - If _iGeomNonlinear=4_, a Updated Lagrange geometric nonlinearity is specified.
- The default value is 0.

### `advcStructTimeStep`

- A _[ADVC_STRUCT_TIME_STEP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_STRUCT_TIME_STEP)_ specifying the time step settings for ADVC solver.
- The default value is _[ADVC_STRUCT_TIME_STEP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_STRUCT_TIME_STEP)_.

### `bConvergence`

- A _Boolean_ specifying whether to apply the convergence parameters.
- The default value is _False_.

### `advcConvergence`

- A _[ADVC_CONVERGENCE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONVERGENCE)_ specifying the convergence settings for ADVC solver. This argument must be specified when _bConvergence=True_.
- The default value is _[ADVC_CONVERGENCE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONVERGENCE)_.

### `bContact`

- A _Boolean_ specifying whether to apply the contact parameters.
- The default value is _False_.

### `advcContactIter`

- A _[ADVC_CONTACT_ITER](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONTACT_ITER)_ specifying the contact iterator settings for ADVC solver. This argument must be specified when _bContact=True_.
- The default value is _[ADVC_CONTACT_ITER](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONTACT_ITER)_.

### `bAutoIncrement`

- A _Boolean_ specifying whether to apply the auto increment parameters.
- The default value is _False_.

### `advcAutoIncrement`

- A _[ADVC_AUTO_INCREMENT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_AUTO_INCREMENT)_ specifying the auto increment settings for ADVC solver. This argument must be specified when _bAutoIncrement=True_.
- The default value is _[ADVC_AUTO_INCREMENT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_AUTO_INCREMENT)_.

### `iLogMessageInterval`

- An _Integer_ specifying the log message interval.
- The default value is DFLT_INT.

### `iLinearApproximation`

- An _Integer_ specifying the linear approximation.
- The default value is -1.

### `dBulkViscosityCoef1`

- A _Double_ specifying the first bulk viscosity coefficient.
- The default value is DFLT_DBL.

### `dBulkViscosityCoef2`

- A _Double_ specifying the second bulk viscosity coefficient.
- The default value is DFLT_DBL.

### `dMassScalingdt`

- A _Double_ specifying the mass scaling of the dt time.
- The default value is DFLT_DBL.

### `dDtScaleFactor`

- A _Double_ specifying the scale factor of the dt time.
- The default value is DFLT_DBL.

### `dPenaltyScaleFactor`

- A _Double_ specifying the penalty scale factor.
- The default value is DFLT_DBL.

### `iContactSearchInterval`

- An _Integer_ specifying the contact search interval.
- The default value is DFLT_INT.

### `crEdit`

- A _Cursor_ specifying the existing process to be modified. If the default value is specified, a new process will be created, otherwise, the specified process will modified.
- The default value is _None_.

### `listLoadNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the load node.
- If this argument is specified, the `listLoadCaseNode` will be empty.
- The default value is [].

### `listLoadCaseNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the loadcase node.
- If this argument is specified, the `listLoadNode` will be empty.
- The default value is [].

### `listLoadNodeContact`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the load node contact.
- This argument uses the instance of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE) and won't be duplicated with `listLoadNode` or `listLoadCaseNode`
- The default value is [].

### `ilOutputParamList`

- A _List of Integer_ specifying the output parameters.
- The default value is [].

### `iRefType`

- An _Integer_ specifying the reference type.
- The default value is -1.

### `strRefPath`

- A _String_ specifying the reference path.
- The default value is "".

### `listAdvcRefStressResult`

- A _List_ specifying the advc reference stress result.
- The default value is [].

## Return Code

A _Cursor_ specifying the created or the modified ADVC Dynamic Explicit process.

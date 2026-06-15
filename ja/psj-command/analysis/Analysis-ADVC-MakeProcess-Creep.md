---
id: Analysis-ADVC-MakeProcess-Creep
title: Analysis.ADVC.MakeProcess.Creep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a Structure - Creep analysis as an ADVC process
---

## Description

Create a Structure - Creep analysis as an ADVC process.

## Syntax

```psj
Analysis.ADVC.MakeProcess.Creep()
```

Macro: [AdvcCreepProcess](/docs/cli/5.1.0/macro/analysis/AdvcCreepProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; MakeProcess &#187; Creep</menuselection>

## Inputs

### `strName`

- A _String_ specifying the process name of Structure - Creep analysis.
- This is a required input.

### `iGeomNonlinear`

- An _Integer_ specifying the geometry nonlinear.
- The default value is 0.

### `advcStructTimeStep`

- A _Struct_ specifying the struct time step.
- The default value is ADVC_STRUCT_TIME_STEP().

### `bConvergence`

- A _Boolean_ specifying the convergence.
- The default value is False.

### `advcConvergence`

- A _Struct_ specifying the convergence.
- The default value is ADVC_CONVERGENCE().

### `bContact`

- A _Boolean_ specifying the contact.
- The default value is False.

### `advcContactIter`

- A _Struct_ specifying the contact iterator.
- The default value is ADVC_CONTACT_ITER().

### `bAutoIncrement`

- A _Boolean_ specifying the auto increment.
- The default value is False.

### `advcAutoIncrement`

- A _Struct_ specifying the auto increment.
- The default value is ADVC_AUTO_INCREMENT().

### `dStabilizationFactor`

- A _Double_ specifying the stabilization factor.
- The default value is DFLT_DBL.

### `bThetaDefined`

- A _Boolean_ specifying the theta defined.
- The default value is False.

### `dTheta`

- A _Double_ specifying the theta.
- The default value is DFLT_DBL.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

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

- A _List of Integer_ specifying the output param list.
- The default value is [].

### `iRefType`

- An _Integer_ specifying the reference type.
- The default value is -1.

### `strRefPath`

- A _String_ specifying the reference path.
- The default value is "".

### `listAdvcRefStressResult`

- A _List of [ADVC_REF_STRESS_RESULT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the advc reference stress result.
- The default value is [].

### `bCrackGrowth`

- A _Bool_ specifying whether set crack growth parameters.
- The default value is _False_.

### `CrackGrowthParam`

- A _ [ADVC_CRACK_GROWTH](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CRACK_GROWTH)_ specifying the list of data of Reference Result.
- The default value is [].

## Return Code

A _Cursor_ specifying the created/modified Structure - Creep analysis as an ADVC process.

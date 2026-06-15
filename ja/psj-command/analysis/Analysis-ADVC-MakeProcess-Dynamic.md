---
id: Analysis-ADVC-MakeProcess-Dynamic
title: Analysis.ADVC.MakeProcess.Dynamic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create an ADVC Dynamic process. This process could be created in one time or multiple times
---

## Description

Create an ADVC Dynamic process.
This process could be created in one time or multiple times.

## Syntax

```psj
Analysis.ADVC.MakeProcess.Dynamic(...)
```

Macro: [AdvcDynamicProcess](/docs/cli/5.1.0/macro/analysis/AdvcDynamicProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Structure &#187; Dynamic</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the ADVC Dynamic process will be created.
- This is a required input.

### `iGeomNonlinear`

- An _Integer_ specifying the geometry nonlinear type:
    - 0: None
    - 1: Linear
    - 2: Nonlinear
    - 3: Total Lagrange
    - 4: Updated Lagrange
- The default value is 0.

### `advcStructTimeStep`

- An _[ADVC_STRUCT_TIME_STEP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_STRUCT_TIME_STEP)_ specifying the time step parameters.
- The default value is _[ADVC_STRUCT_TIME_STEP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_STRUCT_TIME_STEP)_.

### `bConvergence`

- A _Boolean_ specifying whether to apply the convergence parameters or not.
- The default value is _False_.

### `advcConvergence`

- An _[ADVC_CONVERGENCE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONVERGENCE)_ specifying the convergence parameters.
- This argument will be specified when _bConvergence=True_.
- The default value is _[ADVC_CONVERGENCE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONVERGENCE)_.

### `bContact`

- A _Boolean_ specifying whether to apply the contact parameters or not.
- The default value is _False_.

### `advcContactIter`

- An _[ADVC_CONTACT_ITER](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONTACT_ITER)_ specifying the contact iteration parameters.
- This argument will be specified when _bContact=True_.
- The default value is _[ADVC_CONTACT_ITER](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONTACT_ITER)_.

### `bAutoIncrement`

- A _Boolean_ specifying whether to apply the auto increment parameters or not.
- The default value is _False_.

### `advcAutoIncrement`

- An _[ADVC_AUTO_INCREMENT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_AUTO_INCREMENT)_ specifying the auto increment parameters.
- This argument will be specified when _bAutoIncrement=True_.
- The default value is _[ADVC_AUTO_INCREMENT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_AUTO_INCREMENT)_.

### `bDynamic`

- A _Boolean_ specifying whether to apply the ADVC dynamic parameters or not.
- The default value is _False_.

### `advcDynamic`

- A _[ADVC_DYNAMIC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_DYNAMIC)_ specifying the ADVC dynamic parameters.
- This argument will be specified when _bDynamic=True_.
- The default value is _[ADVC_DYNAMIC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_DYNAMIC)_.

### `crEdit`

- A _Cursor_ specifying an ADVC Dynamic process.
    - If this parameter is used, the specified job will be modified.
    - If it is left _None_, a new job will be created.
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

- A _List of Integer_ specifying the output param list.
- The default value is [].

### `iRefType`

- An _Integer_ specifying the reference type.
- The default value is -1.

### `strRefPath`

- A _String_ specifying the reference path.
- The default value is "".

### `listAdvcRefStressResult`

- A _List_ specifying the ADVC reference stress result.
- The default value is [].

## Return Code

A _Cursor_ specifying the created or the modified ADVC Dynamic process.

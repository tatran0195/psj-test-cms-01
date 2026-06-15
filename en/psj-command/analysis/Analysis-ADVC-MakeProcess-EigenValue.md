---
id: Analysis-ADVC-MakeProcess-EigenValue
title: Analysis.ADVC.MakeProcess.EigenValue()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a Structure - Eigenvalue analysis as an ADVC process
---

## Description

Create a Structure - Eigenvalue analysis as an ADVC process.

## Syntax

```psj
Analysis.ADVC.MakeProcess.EigenValue(...)
```

Macro: [AdvcEigenProcess](/docs/cli/5.1.0/macro/analysis/AdvcEigenProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Structure &#187; EigenValue</menuselection>

## Inputs

### `strName`

- A _String_ specifying the process name of Structure - Eigenvalue analysis.
- This is a required input.

### `bEigenValue`

- A _Boolean_ specifying to be enable/disable the Eigenvalue parameters option.
- The default value is _False_.

### `advcNormalModal`

- A _[ADVC_NORMAL_MODAL](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_NORMAL_MODAL)_ specifying the parameters setting for the Eigenvalue analysis such as Eigen Num of Modes, Eigenvalue Parameter.
- The default value is _[ADVC_NORMAL_MODAL](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_NORMAL_MODAL)_.

### `crEdit`

- A _Cursor_ specifying the ADVC Eigenvalue process in Assembly Tree to modify it. This option uses only for editing process purpose.
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

- A _List of Integer_ specifying the list of output parameters.
- The default value is [].

### `iRefType`

- An _Integer_ specifying the result reference type.
    - If _iRefType=0_: Temperature Load
    - If _iRefType=1_: Stress
- The default value is 0.

### `strRefPath`

- A _String_ specifying the path of reference result.
- The default value is "".

### `listAdvcRefStressResult`

- A _List of [ADVC_REF_STRESS_RESULT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the advc reference stress result.
- The default value is [].

## Return Code

A _Cursor_ specifying the created/modified Structure - Eigenvalue analysis as an ADVC process.

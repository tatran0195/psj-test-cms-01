---
id: Analysis-ADVC-MakeProcess-RDNLK
title: Analysis.ADVC.MakeProcess.RDNLK()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create ADVC RDNLK process for analysis work. This process could be created in one time or multiple times
---

## Description

Create ADVC RDNLK process for analysis work. This process could be created in one time or multiple times.

## Syntax

```psj
Analysis.ADVC.MakeProcess.RDNLK(...)
```

Macro: [AdvcStaticProcess](/docs/cli/5.1.0/macro/analysis/AdvcStaticProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Make Process &#187; Static</menuselection>

## Inputs

### `strName`

- A _String_ specifying the process name of ADVC - Static process.
- This is a required input.

### `iGeomNonlinear`

- An _Integer_ specifying the Geometry nonlinear option:
    - If _iGeomNonlinear=0_: None
    - If _iGeomNonlinear=1_: Total Lagrange - Consider the geometric nonlinearity due to total Lagrange method
    - If _iGeomNonlinear=2_: Updated Lagrange - Consider the geometric nonlinearity due to updated Lagrange method
    - If _iGeomNonlinear=3_: Linear
    - If _iGeomNonlinear=4_: NonLinear
- The default value is 0.

### `advcStructTimeStep`

- An _[ADVC_STRUCT_TIME_STEP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_STRUCT_TIME_STEP)_ specifying the setting of Structure Static parameters such as Time Step, Output Timing Definition.
- The default value is [ADVC_STRUCT_TIME_STEP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_STRUCT_TIME_STEP).

### `bConvergence`

- A _Boolean_ specifying to be enable/disable the Convergence parameters setting option.
- If _True_: Enable setting option to modify the Convergence parameters
- If _False_: Disable setting option to modify the Convergence parameters
- The default value is _False_.

### `advcConvergence`

- An _[ADVC_CONVERGENCE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONVERGENCE)_ specifying the Convergence parameters setting.
- The default value is [ADVC_CONVERGENCE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONVERGENCE).

### `bContact`

- A _Boolean_ specifying to modify the Contact iterator parameters setting option.
    - If _True_: Enable setting option to modify the Contact iterator parameters
    - If _False_: Disable setting option to modify the Contact iterator parameters
- The default value is _False_.

### `advcContactIter`

- An _[ADVC_CONTACT_ITER](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONTACT_ITER)_ specifying the Contact iterator parameters setting.
- The default value is [ADVC_CONTACT_ITER](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONTACT_ITER).

### `bAutoIncrement`

- A _Boolean_ specifying to modify the Auto Increment parameters setting option.
    - If _True_: Enable setting option to modify the Auto Increment parameters
    - If _False_: Disable setting option to modify the Auto Increment parameters
- The default value is _False_.

### `advcAutoIncrement`

- An _[ADVC_AUTO_INCREMENT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_AUTO_INCREMENT)_ specifying the Auto Increment parameters setting.
- The default value is [ADVC_AUTO_INCREMENT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_AUTO_INCREMENT).

### `dStabilizationFactor`

- A _Double_ specifying the Stabilization factor.
- The default value is 0.0.

### `crEdit`

- A _Cursor_ specifying the ADVC Static process in Assembly Tree to modify it. This option uses only for editing process purpose.
- The default value is _None_.

### `listLoadNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the list of nodes that assigned loads in the model.
- The default value is [].

### `listLoadCaseNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the list of nodes that assigned load cases in the model.
- The default value is [].

### `listLoadNodeContact`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the list of nodes that assigned contacts in the model.
- The default value is [].

### `ilOutputParamList`

- A _List of Integer_ specifying the list of output request for the result type such as Displacement, Stress, Strain,...
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

- A _List of [ADVC_REF_STRESS_RESULT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_REF_STRESS_RESULT)_ specifying the list of data of Reference Result.
- The default value is [].

### `bCrackGrowth`

- A _Bool_ specifying whether set crack growth parameters.
- The default value is _False_.

### `CrackGrowthParam`

- A _ [ADVC_CRACK_GROWTH](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CRACK_GROWTH)_ specifying the list of data of Reference Result.
- The default value is [].

## Return Code

A _Cursor_ specifying the created or the modified ADVC Static process.

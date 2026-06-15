---
id: Analysis-ADVC-MakeProcess-SteadyState
title: Analysis.ADVC.MakeProcess.SteadyState()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a Heat Transfer - Steady State analysis as an ADVC process
---

## Description

Create a Heat Transfer - Steady State analysis as an ADVC process.

## Syntax

```psj
Analysis.ADVC.MakeProcess.SteadyState(...)
```

Macro: [AdvcSSHProcess](/docs/cli/5.1.0/macro/analysis/AdvcSSHProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Make Process &#187; Steady State</menuselection>

## Inputs

### `strName`

- A _String_ specifying the process name of Heat Transfer - Steady State analysis.
- This is a required input.

### `advcHeatTimeStep`

- An _[ADVC_HEAT_TIME_STEP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_HEAT_TIME_STEP)_ specifying the setting of Heat Transfer - Steady State parameters such as End Condition, Incrementation, Output Timing Definition.
- The default value is [].

### `bConvergence`

- A _Boolean_ specifying to modify the Convergence parameters setting option:
    - If _True_: Enable setting option to modify the Convergence parameters
    - If _False_: Disable setting option to modify the Convergence parameters
- The default value is _False_.

### `advcConvergence`

- An _[ADVC_CONVERGENCE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_CONVERGENCE)_ specifying the Convergence parameters setting.
- The default value is ADVC_CONVERGENCE().

### `crEdit`

- A _Cursor_ specifying the ADVC Heat Steady process in Assembly Tree to modify it. This option uses only for editing process purpose.
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

- A _List of Integer_ specifying the list of output request for the result type such as Displacement, Stress, Strain,...
- The default value is [].

## Return Code

A _Cursor_ specifying the created or the modified ADVC Steady State process.

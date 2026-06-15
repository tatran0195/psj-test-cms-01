---
id: Calculation-TransRespSolver-ResponseCondition
title: Calculation.TransRespSolver.ResponseCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Output the result of the response point for transient response (Solver)
---

## Description

Output the result of the response point for transient response (Solver).

## Syntax

```psj
Calculation.TransRespSolver.ResponseCondition(...)
```

Macro:

Ribbon: <menuselection>Calculation &#187; TransRespSolver &#187; ResponseCondition</menuselection>

## Inputs

### `crTargetAnalysis`

- A _Cursor_ specifying the target job to be processed.
- The default value is _None_.

### `crCoordinate`

- A _Cursor_ specifying the output coordinate system.
- The default value is _None_.

### `bAllModesUsed`

- A _Boolean_ specifying whether to use all modes.
- The default value is _True_.

### `strlModesSelected`

- A _List of String_ specifying the selected modes using for response calculation. This option was used if bAllModesUsed is _False_.
- The default value is [].

### `bDampingFactor`

- A _Boolean_ specifying whether to use damping factor for calculation.
- The default value is _True_.

### `dDampingFactor`

- A _Double_ specifying the value of damping factor.
- The default value is 0.01.

### `crDampingFactor`

- A _Cursor_ specifying the field data of damping factor.
- The default value is _None_.

### `iCurveStyle`

- An _Integer_ specifying the style of time range for the calculation.
    - 0: Start + StepNumber + StepSize
    - 1: Start + StepSize + End
    - 2: Start + StepNumber + End
- The default value is 1.

### `dStyleParamTop`

- A _Double_ specifying the analysis start value of the selected curve style.
- The default value is 0.0.

### `dStyleParamMid`

- A _Double_ specifying the step size value of the selected curve style.
- The default value is 1.0.

### `dStyleParamBot`

- A _Double_ specifying the analysis end value of the selected curve style.
- The default value is 1.0.

### `bCreateNewResult`

- A _Boolean_ specifying whether to create new results (displacement and stress) for the entire model.
- The default value is _False_.

### `iResultType`

- An _Integer_ specifying the result type to be calculated.
    - 0: Displacement
    - 1: Velocity
    - 2: Acceleration
    - 3: Stress (Solid)
    - 4: Stress (Shell)
    - 5: Disp. + Stress. This result type was displayed when bCreateNewResult = _True_.
- The default value is 0.

### `strlResultNames`

- A _List of String_ specifying the component results according to the selected result type.
- The default value is ["TX"].

### `iResultPosition`

- An _Integer_ specifying the output position of the result.
    - 0: On Node
    - 1: On Element
    - 2: On Element Node
- The default value is 0.

### `strDBFileName`

- A _String_ specifying the SunShine DB file (\*.mdb).
- The default value is "".

### `strDBVersion`

- A _String_ specifying the DB version.
- The default value is "".

### `strMethodId`

- A _String_ specifying the method ID.
- The default value is "".

### `strSPCID`

- A _String_ specifying the SPC ID.
- The default value is "".

### `strMPCID`

- A _String_ specifying the MPC ID.
- The default value is "".

### `iResidualVector`

- An _Integer_ specifying residual vector option.
  0: No
  1: Yes
  2: Blank
- The default value is 0.

### `strPath`

- A _String_ specifying the directory path used to store the result data (\*.bdf file).
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying the target to calculate the response. The target is node or solid element.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing response condition
    - If this parameter is used, the specified response condition will be modified.
    - If it is left None, a new response condition will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created transient response condition (Solver).

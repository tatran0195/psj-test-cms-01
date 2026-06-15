---
id: Analysis-AbaqusStep-SteadyStateStep
title: Analysis.AbaqusStep.SteadyStateStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Abaqus step for Steady State analysis
---

## Description

Create Abaqus step for Steady State analysis.

## Syntax

```psj
Analysis.AbaqusStep.SteadyStateStep(...)
```

Ribbon: <menuselection>Analysis &#187; AbaqusStep &#187; SteadyStateStep</menuselection>

## Inputs

### `strName`

- A _String_ specifying the Steady State step name.
- This is a required input.

### `strDesp`

- A _String_ specifying the Steady State step description.
- The default value is "".

### `iAutomatic`

- An _Integer_ specifying the increment method.
- The default value is 0.

### `iMaxInc`

- An _Integer_ specifying the maximum number of increments.
- The default value is 100.

### `iInitSize`

- An _Integer_ specifying the initial increment size.
- The default value is 1.

### `dMinSize`

- A _Double_ specifying the minimum increment size.
- The default value is 1.0e-5.

### `dMaxSize`

- A _Double_ specifying the maximum increment size.
- The default value is 1.0.

### `dMaxAllowTChange`

- A _Double_ specifying the maximum value of the allowable temperature change.
- The default value is DFLT_DBL.

### `endStepTemp`

- An _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_ specifying the end step temperature information.
- The default value is _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_.

### `dMaxAllowEmissivityChange`

- A _Double_ specifying the maximum allowable emissivity change per increment.
- The default value is 0.1.

### `iMethod`

- An _Integer_ specifying the equation solver method.
- The default value is 0.

### `iMatrixStorage`

- An _Integer_ specifying the equation solver matrix storage setting.
- The default value is 0.

### `iSolutionTech`

- An _Integer_ specifying the solution technique.
- The default value is 0.

### `iAllowedIters`

- An _Integer_ specifying the number of iterations allowed before the kernel matrix is reformed.
- The default value is 8.

### `iAdjustFactor`

- An _Integer_ specifying the adjustment factor for the number of solutions in each iteration.
- The default value is 1.

### `iMaxContactIter`

- An _Integer_ specifying the maximum number of contact iterations.
- The default value is 30.

### `iNlGeom`

- An _Integer_ specifying whether or not to consider geometric nonlinear (large deformation) analysis.
- The default value is 0.

### `dTimePeriod`

- A _Double_ specifying the analysis time.
- The default value is 1.0.

### `iConvertDscntIter`

- An _Integer_ specifying the conversion of severe discontinuity iterations.
- The default value is 0.

### `iRamp`

- An _Integer_ specifying the number of linear change over step.
- The default value is 0.

### `iExtrapolateMethod`

- An _Integer_ specifying the Extrapolate previous state at start of each increment.
- The default value is 0.

### `listAbaqusOutputRequest`

- An _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_ list specifying the list of Abaqus output request.
- The default value is _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_.

### `crEdit`

- A _Cursor_ specifying an existing Abaqus step.
    - If this parameter is used, the specified step will be modified.
    - If it is left _None_, a new step will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created/modified Abaqus Steady State step.

---
id: Analysis-AbaqusStep-TransientStep
title: Analysis.AbaqusStep.TransientStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Abaqus Step - Transient Type
---

## Description

Create Abaqus step for Transient analysis.

## Syntax

```psj
Analysis.AbaqusStep.TransientStep(...)
```

Ribbon: <menuselection>Analysis &#187; Abaqus</menuselection>

## Inputs

### `strName`

- A _String_ specifying the Transient step name.
- This is a required input.

### `strDesp`

- A _String_ specifying the step description of the Transient analysis.
- The default value is "".

### `iEnableAutomatic`

- An _Integer_ specifying the automatic increment method.
- The default value is 0.

### `iMaxInc`

- An _Integer_ specifying the maximum number of increment.
- The default value is 0.

### `dInitSize`

- A _Double_ specifying the initial increment value.
- The default value is DFLT_DBL.

### `dMinSize`

- A _Double_ specifying the minimum increment value.
- The default value is DFLT_DBL.

### `dMaxSize`

- A _Double_ specifying the maximum increment value.
- The default value is DFLT_DBL.

### `dMaxAllowTChange`

- A _Double_ specifying the maximum allowable change.
- The default value is DFLT_DBL.

### `iEndsteptBchecked`

- An _Integer_ specifying whether or not using End the step when the change is less than the _[dlEndsteptTlist](#dlendstepttlist)_.
- The default value is 0.

### `dlEndsteptTlist`

- A _Double List_ specifying the end step value list.
- The default value is [].

### `dMaxAllowEmissivityChange`

- A _Double_ specifying the maximum allowable emissivity change per increment.
- The default value is DFLT_DBL.

### `iMethod`

- An _Integer_ specifying the solver.
    - 0: Direct
    - 1: Iterative
- The default value is 0.

### `iMatrixStorage`

- An _Integer_ specifying the matrix storage setting.
    - 0: Default
    - 1: Unsymmetric
    - 2: Symmetric
- The default value is 0.

### `iSolutionTech`

- An _Integer_ specifying the solution technique.
    - 0: Full Newton
    - 1: Quasi-Newton
    - 2: Contact iterations
- The default value is 0.

### `iAllowedIters`

- An _Integer_ specifying the number of iterations allowed before the kernel matrix is reformed.
- The default value is 0.

### `dAdjustFactor`

- An _Integer_ specifying the adjustment factor for the number of solutions in each iteration.
- The default value is DFLT_DBL.

### `iMaxContactIter`

- An _Integer_ specifying the maximum number of contact iterations.
- The default value is 0.

### `iEnableNlgeom`

- An _Integer_ specifying whether or not to consider geometric nonlinear (large deformation) analysis.
- The default value is 0.

### `dTimePeriod`

- A _Double_ specifying the analysis time.
- The default value is DFLT_DBL.

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

A _Cursor_ specifying the newly created or the modified Abaqus Transient step.

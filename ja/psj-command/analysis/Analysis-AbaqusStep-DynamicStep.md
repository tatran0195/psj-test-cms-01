---
id: Analysis-AbaqusStep-DynamicStep
title: Analysis.AbaqusStep.DynamicStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Abaqus step for Dynamic analysis
---

## Description

Create Abaqus step for Dynamic analysis.

## Syntax

```psj
Analysis.AbaqusStep.DyanmicStep(...)
```

Ribbon: <menuselection>Analysis &#187; AbaqusStep &#187; DynamicStep</menuselection>

## Inputs

### `strName`

- A _String_ specifying the Dynamic step name.
- This is a required input.

### `strDesp`

- A _String_ specifying the Dynamic step description.
- The default value is "".

### `iAutomatic`

- An _Integer_ specifying the increment method.
- The default value is 0.

### `iMaxInc`

- An _Integer_ specifying the maximum number of increments.
- The default value is 100.

### `dInitSize`

- A _Double_ specifying the initial increment size.
- The default value is 1.0.

### `dMinSize`

- A _Double_ specifying the minimum increment size.
- The default value is 1.0e-5.

### `dMaxSize`

- A _Double_ specifying the maximum increment size.
- The default value is 1.0.

### `iSuppressHalfResCal`

- An _Integer_ specifying whether or not suppress the calculation of the half-increment residual tolerance.
- The default value is 0.

### `dHalfStepResTol`

- A _Double_ specifying the half-increment residual tolerance value.
- The default value is _DFLT_DBL_.

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

### `dAdjustFactor`

- A _Double_ specifying the adjustment factor for the number of solutions in each iteration.
- The default value is 1.0.

### `iMaxContactIter`

- An _Integer_ specifying the maximum number of contact iterations.
- The default value is 30.

### `dDampingControl`

- An _Double_ specifying the numerical damping control parameter.
- The default value is -0.05.

### `iByPassCalInitAcceleration`

- An _Integer_ specifying whether or not to bypass calculations of initial accelerations at beginning of step.
- The default value is 1.

### `iNlGeom`

- An _Integer_ specifying whether or not to consider geometric nonlinear (large deformation) analysis.
- The default value is 0.

### `dTimePeriod`

- A _Double_ specifying the analysis time.
- The default value is 1.0.

### `iIncldHeatEffect`

- An _Integer_ specifying whether or not to consider adiabatic heating effects.
- The default value is 1.

### `iConvertDscntIter`

- An _Integer_ specifying the conversion of severe discontinuity iterations.
- The default value is 0.

### `iRamp`

- An _Integer_ specifying the number of linear change over step.
- The default value is 1.

### `iExtrapolateMethod`

- An _Integer_ specifying the Extrapolate previous state at start of each increment.
- The default value is 0.

### `iAcceptByMaxIters`

- An _Integer_ specifying whether or not to accept the solution after reaching maximum number of iterations.
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

A _Cursor_ specifying the created/modified Abaqus Dynamic step.

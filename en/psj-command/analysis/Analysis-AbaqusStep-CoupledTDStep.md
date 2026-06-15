---
id: Analysis-AbaqusStep-CoupledTDStep
title: Analysis.AbaqusStep.CoupledTDStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Abaqus step for Coupled Temperature-Displacement analysis
---

## Description

Create Abaqus step for Coupled Temperature-Displacement analysis.

## Syntax

```psj
Analysis.AbaqusStep.CoupledTDStep(...)
```

Ribbon: <menuselection>Analysis &#187; AbaqusStep &#187; CoupledTDStep</menuselection>

## Inputs

### `strName`

- A _String_ specifying the step name of Coupled Temperature-Displacement analysis.
- This is a required input.

### `strDesp`

- A _String_ specifying the step description of Coupled Temperature-Displacement analysis.
- The default value is "".

### `iEnableAutomatic`

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

### `abaqusPair1`

- An _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_ specifying the maximum value of the allowable temperature change.
- The default value is _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_.

### `abaqusPair2`

- A _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_ specifying the creep/swelling/viscoelastic strain error tolerance value.
- The default value is _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_.

### `iCSVIntegration`

- An _Integer_ specifying the creep/swelling/viscoelastic integration method.
- The default value is 0.

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

- A _Double_ specifying the adjustment factor for the number of solutions in any iteration.
- The default value is 1.0.

### `iMaxContactIter`

- An _Integer_ specifying the maximum number of contact iterations.
- The default value is 30.

### `iType`

- An _Integer_ specifying the automatic static stabilization.
- The default value is 0.

### `iEnableUseAdaptive`

- An _Integer_ specifying whether or not use adaptive stabilization with max. Ratio of stabilization to strain energy.
- The default value is 1.

### `dDampingFactor`

- A _Double_ specifying the damping factor for automatic static stabilization.
- The default value is 0.0002.

### `dMaxRationofStrainEnergy`

- A _Double_ specifying the maximum ratio of stabilization to strain energy for automatic static stabilization.
- The default value is 0.05.

### `iEnableNlgeom`

- An _Integer_ specifying whether or not to consider geometric nonlinear (large deformation) analysis.
- The default value is 0.

### `dTimePeriod`

- A _Double_ specifying the analysis time.
- The default value is 1.0.

### `iTransient`

- An _Integer_ specifying the analysis response type.
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

### `iEnableIncludeCSV`

- An _Integer_ specifying the inclusion of creep/swelling/viscoelatic behavior.
- The default value is 0.

### `listAbaqusOutputRequest`

- An _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_ list specifying the list of Abaqus output request.
- The default value is _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_.

### `crEdit`

- A _Cursor_ specifying the editing Abaqus Coupled Temperature-Displacement step.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created/modified Abaqus Coupled Temperature-Displacement step.

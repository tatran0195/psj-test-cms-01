---
id: Analysis-AbaqusStep-DynamicExplicitStep
title: Analysis.AbaqusStep.DynamicExplicitStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Abaqus Step - Dynamic Explicit Type
---

## Description

Create Abaqus Step - Dynamic Explicit Type.

## Syntax

```psj
Analysis.AbaqusStep.DynamicExplicitStep(...)
```

Ribbon: <menuselection>Analysis &#187; Abaqus</menuselection>

## Inputs

### `strName`

- A _String_ specifying the Dynamic Explicit step name.
- This is a required input.

### `strDesp`

- A _String_ specifying the step description of Dynamic Explicit analysis.
- The default value is "".

### `iEnableAutomatic`

- An _Integer_ specifying the increment method.
- The default value is 1.

### `iIncrmtEstimator`

- An _Integer_ specifying the use of the stable increment estimator.
    - 0: Global
    - 1: Element by element
- The default value is 0.

### `abaqusPair1`

- An _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_ specifying the maximum time increment value.
- The default value is _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_.

### `dTimeScalfactor`

- A _Double_ specifying the time scaling factor.
- The default value is 1.0.

### `abaqusPair2`

- A _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_ specifying the user-defined time increment.
- The default value is _[ABAQUS_PAIR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_PAIR)_.

### `iEnableNlgeom`

- An _Integer_ specifying whether or not to consider geometric nonlinear (large deformation) analysis.
    - 0: Not consider
    - 1: Consider
- The default value is 1.

### `dTimePeriod`

- A _Double_ specifying the analysis time.
- The default value is 1.0.

### `iEnableIncludeHeatEffect`

- An _Integer_ specifying whether or not include adiabatic heating effects.
- The default value is 0.

### `dLinearBlkVisco`

- A _Double_ specifying the linear bulk viscosity parameter.
- The default value is 0.06.

### `dQuadrBlkVisco`

- A _Double_ specifying the quadratic bulk viscosity parameter.
- The default value is 1.2.

### `listAbaqusOutputRequest`

- An _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_ list specifying the list of Abaqus output request.
- The default value is _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_.

### `crEdit`

- A _Cursor_ specifying an existing Abaqus step.
    - If this parameter is used, the specified step will be modified.
    - If it is left _None_, a new step will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the newly created or the modified Abaqus Dynamic Explicit step.

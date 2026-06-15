---
id: Analysis-AbaqusStep-ModalStep
title: Analysis.AbaqusStep.ModalStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Abaqus Step - Modal Type
---

## Description

Create Abaqus Step - Modal Type.

## Syntax

```psj
Analysis.AbaqusStep.ModalStep(...)
```

Ribbon: <menuselection>Analysis &#187; AbaqusStep &#187; ModalStep</menuselection>

## Inputs

### `strName`

- A _String_ specifying the Modal step name.
- This is a required input.

### `strDesp`

- A _String_ specifying the step description of Modal analysis.
- The default value is "".

### `iEigenSolver`

- An _Integer_ specifying the Modal analysis method.
    - 0: Lanczos
    - 1: Subspace
- The default value is 0.

### `iNFreqRequestbchecked`

- An _Integer_ specifying the number of modes to obtain.
    - 0: Obtain all modes in the frequency range.
    - Other: specify the number of modes to obtain.
- The default value is 0.

### `ilNFreqRequestTList`

- A _List of Integer_ specifying the frequency range.
- The default value is [].

### `iFreqShiftbchecked`

- An _Integer_ specifying the frequency shift value $(cycles/time)^2$.
- The default value is 0.

### `ilFreqShiftTList`

- A _List of Integer_ specifying the the frequency shift range.
- The default value is [].

### `iFreqRangebchecked`

- An _Integer_ specifying the minimum frequency of interest $(cycles/time)$.
- The default value is 0.

### `ilFreqRangeTList`

- A _List of Integer_ specifying the minimum frequency of interest value list.
- The default value is [].

### `iIncldAcoustic`

- An _Integer_ specifying the inclusion of acoustic-structural coupling.
- The default value is 0.

### `iBlockSizebchecked`

- An _Integer_ specifying whether or not use block size.
- The default value is 0.

### `ilBlockSizeTList`

- A _List of Integer_ specifying the block size value list.
- The default value is [].

### `iMaxBlkNumofLanczosStepbchecked`

- An _Integer_ specifying the maximum number of block Lanczos steps.
- The default value is 0.

### `ilMaxBlkNumofLanczosStepTList`

- A _List of Integer_ specifying the maximum number of block Lanczos steps value list.
- The default value is [].

### `iEnableUseSIM`

- An _Integer_ specifying the usage of SIM-Based linear dynamic procedures.
- The default value is 0.

### `iEnableIncludeResMods`

- An _Integer_ specifying the inclusion of residual modes.
- The default value is 0.

### `iNEigenRequest`

- An _Integer_ specifying the number of modes request.
- The default value is 2147483647.

### `iMaxItersUsed`

- An _Integer_ specifying the number of iterations allowed before the kernel matrix is reformed.
- The default value is 30.

### `iVectorsUsed`

- An _Integer_ specifying the number of vectors used in the iteration.
- The default value is 2147483647.

### `iMethod`

- An _Integer_ specifying the solver method.
    - 0: Direct.
    - 1: Iterative.
- The default value is 0.

### `iMatrixStorage`

- An _Integer_ specifying how to store the matrix.
    - 0: Default
    - 1: Unsymmetric
    - 2: Symmetric
- The default value is 0.

### `iNormalizeEigenBy`

- An _Integer_ specifying the normalization of eigenvectors.
    - 0: Displacement
    - 1: Mass
- The default value is 1.

### `iEvalPropFreqbchecked`

- An _Integer_ specifying the frequency for evaluating frequency dependent properties.
- The default value is 0.

### `ilEvalPropFreqTList`

- A _List of Integer_ specifying the frequency for evaluating frequency dependent properties value list.
- The default value is [].

### `abaqusOutputRequest`

- An _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_ list specifying the list of Abaqus output request.
- The default value is _[ABAQUS_OUTPUT_REQUEST](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_OUTPUT_REQUEST)_.

### `crEdit`

- A _Cursor_ specifying an existing Abaqus step.
    - If this parameter is used, the specified step will be modified.
    - If it is left _None_, a new step will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the newly created or the modified Abaqus Modal step.

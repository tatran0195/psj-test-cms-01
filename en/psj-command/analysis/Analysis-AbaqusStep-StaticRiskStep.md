---
id: Analysis-AbaqusStep-StaticRiskStep
title: Analysis.AbaqusStep.StaticRiskStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Abaqus Static Risk Step
---

## Description

Abaqus Static Risk Step

## Syntax

```psj
Analysis.AbaqusStep.StaticRiskStep(...)
```

Ribbon: <menuselection>Analysis &#187; AbaqusStep &#187; StaticRiskStep</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `strDesp`

- A _String_ specifying the description.
- The default value is "".

### `iEnableAutomatic`

- An _Integer_ specifying the enable automatic.
- The default value is 0.

### `iMaxInc`

- An _Integer_ specifying the maximum increment.
- The default value is 100.

### `dInitSize`

- A _Double_ specifying the initial size.
- The default value is 1.0.

### `dMinSize`

- A _Double_ specifying the minimum size.
- The default value is 1.0e-5.

### `dMaxSize`

- A _Double_ specifying the maximum size.
- The default value is 1.0.

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 0.

### `iMatrixStorage`

- An _Integer_ specifying the matrix storage.
- The default value is 0.

### `dMaxLdPropFactor`

- A _Double_ specifying the maximum ld property factor.
- The default value is 0.0.

### `iEnableMaxLdPropFactor`

- An _Integer_ specifying the enable maximum ld property factor.
- The default value is 0.

### `iEnableMaxDisp`

- An _Integer_ specifying the enable maximum displacement.
- The default value is 0.

### `dMaxDisp`

- A _Double_ specifying the maximum displacement.
- The default value is DFLT_DBL.

### `iEnableMaxDispDof`

- An _Integer_ specifying the enable maximum displacement dof.
- The default value is DFLT_INT.

### `strNdRgn`

- A _String_ specifying the nd rgn.
- The default value is "".

### `iEnableNlgeom`

- An _Integer_ specifying the enable nlgeom.
- The default value is 0.

### `iEnableIncludeHeatEffect`

- An _Integer_ specifying the enable include heat effect.
- The default value is 0.

### `iConvertDscntIter`

- An _Integer_ specifying the convert destination count iterator.
- The default value is 0.

### `dTotalArcLength`

- A _Double_ specifying the total arc length.
- The default value is 1.0.

### `iExtrapolateMethod`

- An _Integer_ specifying the extrapolate method.
- The default value is 0.

### `iEnableAcceptByMaxIters`

- An _Integer_ specifying the enable accept by maximum iterators.
- The default value is 0.

### `iEnableLongTerm`

- An _Integer_ specifying the enable long term.
- The default value is 0.

### `iEnablePerturbation`

- An _Integer_ specifying the enable perturbation.
- The default value is 0.

### `iFullplasticregionBchecked`

- An _Integer_ specifying the fullplasticregion check.
- The default value is 0.

### `strlFullplasticregionTlist`

- A _List of String_ specifying the fullplasticregion table list.
- The default value is [].

### `iOutput`

- An _Integer_ specifying the output.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

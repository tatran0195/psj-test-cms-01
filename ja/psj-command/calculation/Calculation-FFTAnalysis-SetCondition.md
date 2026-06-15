---
id: Calculation-FFTAnalysis-SetCondition
title: Calculation.FFTAnalysis.SetCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Perform a FFT analysis
---

## Description

Perform a FFT analysis.

## Syntax

```psj
Calculation.FFTAnalysis.SetCondition(...)
```

Macro: [PostFFTConditionOut](/docs/cli/5.1.0/macro/calculation/PostFFTConditionOut)

Ribbon: <menuselection>Calculation &#187; FFTAnalysis &#187; SetCondition</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of bore cylinder.
- The default value is "BORE_1".

### `crlTargets`

- A _List of Cursor_ specifying the target parts to perform FFT analysis.
- The default value is [].

### `crl2DElems`

- A _List of Cursor_ specifying the selected 2D elements.
- The default value is [].

### `dAngle`

- A _Double_ specifying the angle to extract the target cylinder surface.
- The default value is 20.0.

### `crTopNode`

- A _Cursor_ specifying the node to determine the top end of the bore cylinder surface.
- The default value is _None_.

### `crBottomNode`

- A _Cursor_ specifying the node to determine the bottom end of the bore cylinder surface. To define the bore height also.
- The default value is _None_.

### `dlCenterPoint`

- A _List of Double_ specifying the center coordinate of the bore coordinate system.
- The default value is [0.0,0.0,0.0].

### `dBoreRadius`

- A _Double_ specifying the radius of the bore cylinder.
- The default value is 0.0.

### `dBoreHeight`

- A _Double_ specifying the height of the bore cylinder.
- The default value is 0.0.

### `iAxisDirection`

- An _Integer_ specifying the bore cylinder axial direction in global coordinate system X, Y, Z or arbitrary direction (user defined).
- The default value is 3.

### `dlAxisDefined`

- A _Double List_ specifying the defined bore cylinder axial direction.
- The default value is [0.0,0.0,0.0].

### `iDepthDirection`

- An _Integer_ specifying the depth direction.
- The default value is 0.

### `iNumOfLayerPoint`

- An _Integer_ specifying the number of calculation points in one layer.
- The default value is 36.

### `dlLayers`

- A _List of Double_ specifying the number of layers and depth value at each layer.
- The default value is [].

### `iCalculationMethod`

- An _Integer_ specifying the calculation method.
    - 0: Best Fit Circle
    - 1: Best Fit Cylinder
- The default value is 0.

### `dlAxisX`

- A _List of Double_ specifying X axial direction of the the bore cylinder.
- The default value is [0.0,0.0,0.0].

### `crEdit`

- A _Cursor_ specifying an existing FFT condition
    - If this parameter is used, the specified FFT condition will be modified.
    - If it is left None, a new FFT condition will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created FFT condition.

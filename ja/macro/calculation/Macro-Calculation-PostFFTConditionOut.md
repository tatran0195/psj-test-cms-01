---
id: PostFFTConditionOut
title: PostFFTConditionOut()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Perform a FFT analysis.

## Syntax

```psj
PostFFTConditionOut(str strName, cursor[] crlTargets, cursor[] crl2DElems, double dAngle,
    cursor crTopNode, cursor crBotNode, double[] dlCenterPoint, double dBoreRadius,
    double dBoreHeight, int iAxisDirection, double[] dlAxisDefined, int iDepthDirection,
    int iNumOfLayerPoint, double[] dlLayers, int iCalculationMethod, double[] dlAxisX,
    cursor crEdit)
```

## Inputs

### `1. str`

- A String specifying the name of bore cylinder.

### `2. cursor[]`

- A List of Cursor specifying the target parts to perform FFT analysis.

### `3. cursor[]`

- A List of Cursor specifying the selected 2D elements.

### `4. double`

- A Double specifying the angle to extract the target cylinder surface.

### `5. cursor`

- A Cursor specifying the node to determine the top end of the bore cylinder surface.

### `6. cursor`

- A Cursor specifying the node to determine the bottom end of the bore cylinder surface. To define the bore height also.

### `7. double[]`

- A List of Double specifying the center coordinate of the bore coordinate system.

### `8. double`

- A Double specifying the radius of the bore cylinder.

### `9. double`

- A Double specifying the height of the bore cylinder.

### `10. int`

- An Integer specifying the bore cylinder axial direction in global coordinate system X, Y, Z or arbitrary direction.

### `11. double[]`

- A Double List specifying the defined bore cylinder axial direction.

### `12. int`

- An Integer specifying the depth direction.

### `13. int`

- An Integer specifying the number of calculation points in one layer.

### `14. double[]`

- A List of Double specifying the number of layers and depth value at each layer.

### `15. int`

- An Integer specifying the calculation method.

### `16. double[]`

- A List of Double specifying X axial direction of the the bore cylinder.

### `17. cursor`

- A Cursor specifying an existing FFT condition

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PostFFTConditionOut("BORE_1", [0:0], [0:0], 20.0, 0:0, 0:0, [0.0, 0.0, 0.0], 0.0, 0.0, 3, [0.0, 0.0, 0.0],
    0, 36, [], 0, [0.0, 0.0, 0.0], 0:0)
```

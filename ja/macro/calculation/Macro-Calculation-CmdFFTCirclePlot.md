---
id: CmdFFTCirclePlot
title: CmdFFTCirclePlot()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display the deformation plot graph.

## Syntax

```psj
CmdFFTCirclePlot(int iKey, bool bOACircleOutput, str strOACircleLayers, bool bOADefine, str strOADefine, str strModeOutput, str strModesLayers)
```

## Inputs

### `1. int`

- An Integer specifying the ID of the specified FFT condition.

### `2. bool`

- A Boolean specifying whether to use the OA Circle option.

### `3. str`

- A String specifying the number of layers to display the deformation plot graph of the OA results.

### `4. bool`

- A Boolean specifying whether to use the Define OA Circle option.

### `5. str`

- A String specifying the mode to be used for the OA curve.

### `6. str`

- A String specifying the mode in which deformation plots are displayed graphically.

### `7. str`

- A String specifying the layer to be displayed graphically in each mode.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdFFTCirclePlot(1, 1, "2", 1, "2-4", "2", "2")
```

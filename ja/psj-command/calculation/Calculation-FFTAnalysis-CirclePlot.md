---
id: Calculation-FFTAnalysis-CirclePlot
title: Calculation.FFTAnalysis.CirclePlot()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display the deformation plot graph
---

## Description

Display the deformation plot graph.

## Syntax

```psj
Calculation.FFTAnalysis.CirclePlot(...)
```

Macro: [CmdFFTCirclePlot](/docs/cli/5.1.0/macro/calculation/CmdFFTCirclePlot)

Ribbon: <menuselection>Calculation &#187; FFTAnalysis &#187; CirclePlot</menuselection>

## Inputs

### `iFFTCondition`

- An _Integer_ specifying the ID of the specified FFT condition.
- The default value is 1.

### `bOACircle`

- A _Boolean_ specifying whether to use the OA Circle option.
- The default value is _False_.

### `strOACircle`

- A _String_ specifying the number of layers to display the deformation plot graph of the OA results.
- The default value is "2".

### `bDefineOA`

- A _Boolean_ specifying whether to use the Define OA Circle option.
- The default value is _False_.

### `strDefineOA`

- A _String_ specifying the mode to be used for the OA curve.
- The default value is "2-4".

### `strDefineMode`

- A _String_ specifying the mode in which deformation plots are displayed graphically.
- The default value is "2".

### `strModeLayer`

- A _String_ specifying the layer to be displayed graphically in each mode.
- The default value is "2".

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

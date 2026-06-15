---
id: Calculation-FFTAnalysis-XYPlot
title: Calculation.FFTAnalysis.XYPlot()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Display the circularity XY plot graph and export it to a specified file
---

## Description

Display the circularity XY plot graph and export it to a specified file.

## Syntax

```psj
Calculation.FFTAnalysis.XYPlot(...)
```

Macro: [CmdFFTXYPlot](/docs/cli/5.1.0/macro/calculation/CmdFFTXYPlot)

Ribbon: <menuselection>Calculation &#187; FFTAnalysis &#187; XYPlot</menuselection>

## Inputs

### `iFFTCondition`

- An _Integer_ specifying the ID of the specified FFT condition.
- The default value is 1.

### `bDefineOA`

- A _Boolean_ specifying whether to display the OA result.
- The default value is _False_.

### `strDefineOA`

- A _String_ specifying the mode to display the graph of OA result.
- The default value is "2-4".

### `strDefineMode`

- A _String_ specifying the mode to display the circularity XY plot graph.
- The default value is "2, 3, 4".

### `b3DPlot`

- A _Boolean_ specifying whether to display the circularity plot graph in 3D space.
- The default value is _False_.

### `bExportData`

- A _Boolean_ specifying whether to save the FFT analysis result to file.
- The default value is _False_.

### `strPath`

- A _String_ specifying the path of CSV file to save the FFT analysis results.
- The default value is "".

### `bOriginalShift`

- A _Boolean_ specifying whether to shift the values of all layers when outputting amplitude data (except for the 0th order mode).
- The default value is _False_.

### `bExportAllPlot`

- A _Boolean_ specifying whether to save all resulting roundness XY plots and deformation plots to a CSV file.
- The default value is _False_.

### `b2DPlot`

- A _Boolean_ specifying whether to display the circularity plot graph in 3D space.
- The default value is _False_.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

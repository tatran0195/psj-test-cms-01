---
id: CmdFFTXYPlot
title: CmdFFTXYPlot()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Display the circularity XY plot graph and export it to a specified file.

## Syntax

```psj
CmdFFTXYPlot(int iKey, bool bDefineOA, str strOADefined, str strModesDefined, bool b3DPlot, str strSavePath, bool bSaveFFTInfo, bool bExportTop, bool bExportAllPlotToFile, bool b2DPlot):
```

## Inputs

### `1. int`

- An Integer specifying the ID of the specified FFT condition.

### `2. bool`

- A Boolean specifying whether to display the OA result.

### `3. str`

- A String specifying the mode to display the graph of OA result.

### `4. str`

- A String specifying the mode to display the circularity XY plot graph.

### `5. bool`

- A Boolean specifying whether to display the circularity plot graph in 3D space.

### `6. str`

- A string specifying the save path.

### `7. bool`

- A Boolean specifying whether to save the FFT analysis result to file.

### `8. bool`

- A Boolean specifying whether to shift the values of all layers when outputting amplitude data (except for the 0th order mode).

### `9. bool`

- A Boolean specifying whether to save all resulting roundness XY plots and deformation plots to a CSV file.

### `10. bool`

- A Boolean specifying whether to display the circularity plot graph in 3D space.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CmdFFTXYPlot(1, 1, "2-4", "2, 3, 4", 1,  "path/to/the/file", 1, 1, 1, 1)
```

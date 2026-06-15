---
id: Property1DPlot
title: Property1DPlot()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create property 1D Plot

## Syntax

```psj
Property1DPlot(string strName, int iPlotID, cursor[] taTarget, cursor crCoord)
```

## Inputs

### `1. String`

Plot name

### `2. Int`

Plot ID

### `3. Cursor[]`

Target entity cursor

### `4. Cursor`

Whether use local coordinate or not True = 27:\*, False = 0:0

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Property1DPlot("PLOT_4", 4, [5:104, 10:692], 0:0)
```

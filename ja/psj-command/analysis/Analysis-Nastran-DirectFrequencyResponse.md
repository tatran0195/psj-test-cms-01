---
id: Analysis-Nastran-DirectFrequencyResponse
title: Analysis.Nastran.DirectFrequencyResponse()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the input file for Nastran Direct Frequency Response Analysis (SOL 108)
---

## Description

Export the input file for Nastran Direct Frequency Response Analysis (SOL 108).

## Syntax

```psj
Analysis.Nastran.DirectFrequencyResponse(...)
```

Macro:

Ribbon: <menuselection>Analysis &#187; Nastran &#187; DirectFrequencyResponse</menuselection>

## Inputs

### `strName`

- A _String_ specifying the job name of Nastran analysis
- The default value is "Job_1".

### `strDescription`

- A _String_ specifying the description of Nastran analysis job.
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying list of target parts.
- The default value is [].

### `nastranAnalysis`

- A _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_ specifying the Nastran analysis input parameter.
- The default value is _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_.

### `strPath`

- A _String_ specifying the export path for bdf file.
- The default value is "".

### `iModelCheckAnswer`

- An _Integer_ specifying the model checking option.
    - 0: disable model checking option used for seeking dummy property.
    - 1: enable model checking option used for seeking dummy property.
- The default value is 0.

### `iDeleteSlaveNodesAnswer`

- An _Integer_ specifying the deleting slave nodes option.
    - 0: disable the deleting slave nodes checking option.
    - 1: enable the deleting slave nodes checking option.
- The default value is 0.

### `bOutputXYPlots`

- A _Boolean_ specifying whether to output X–Y plot.
- The default value is _False_.

### `iOutputValueSet`

- An _Integer_ specifying the group node.
- The default value is -1.

### `iOutputDOFType`

- An _Integer_ specifying the degrees of freedom to output for each result.
- The default value is 0.

### `iXYPlotDisplacementType`

- An _Integer_ specifying the displacement output destination.
    - 0: None
    - 264: XYPunch - Output the XY table to a punch file (\*.pch).
    - 520: XYPlot - Outputs the XY table to a plot output file (\*.plt).
    - 776: XYPunch&XYPlot - Outputs the XY table to both a punch file and a plot output file.
- The default value is 0.

### `iXYPlotVelocityType`

- An _Integer_ specifying the velocity output destination.
    - 0: None
    - 264: XYPunch - Output the XY table to a punch file (\*.pch).
    - 520: XYPlot - Outputs the XY table to a plot output file (\*.plt).
    - 776: XYPunch&XYPlot - Outputs the XY table to both a punch file and a plot output file.
- The default value is 0.

### `iXYPlotAccelerationType`

- An _Integer_ specifying the acceleration output destination.
    - 0: None
    - 264: XYPunch - Output the XY table to a punch file (\*.pch).
    - 520: XYPlot - Outputs the XY table to a plot output file (\*.plt).
    - 776: XYPunch&XYPlot - Outputs the XY table to both a punch file and a plot output file.
- The default value is 0.

### `strXTitle`

- A _String_ specifying the X-axis title.
- The default value is "".

### `strYTitle`

- A _String_ specifying the Y-axis title.
- The default value is "".

### `bDummyPropAutoAssign`

- A _Boolean_ specifying whether to assign dummy properties to parts without assigned properties automatically.
- The default value is _False_.

### `bOutputGeomIDofDummyProp`

- A _Boolean_ specifying whether to output entity IDs (Face, Edge, Part).
- The default value is _False_.

### `iDummyPropMaterialID`

- An _Integer_ specifying the material ID which using for dummy property assignment.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying an existing Nastran job.
    - If this parameter is used, the specified job will be modified.
    - If it is left _None_, a new job will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the newly created or the modified Nastran job.

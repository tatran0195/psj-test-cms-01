---
id: Analysis-TSSolver-TransientHeatTransfer
title: Analysis.TSSolver.TransientHeatTransfer()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the Input Deck for TechnoStar Transient Heat Transfer analysis (SOL 159)
---

## Description

Export the Input Deck for TechnoStar Transient Heat Transfer analysis (SOL 159).

## Syntax

```psj
Analysis.TSSolver.TransientHeatTransfer(...)
```

Ribbon: <menuselection>Analysis &#187; TS-Solver &#187; Transient Heat Transfer(SOL 159)</menuselection>

## Inputs

### `strName`

- A _String_ specifying the job name of TechnoStar solver. Output set by this name will be saved in the Assembly tree.
- The default value is "Job_1".

### `strDescription`

- A _String_ specifying the description of TechnoStar solver job.
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying the list of target part.
- The default value is [] (all parts in the model).

### `nastranAnalysis`

- A _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_ specifying the TechnoStar solver input parameter.
- The default value is _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_.

### `crEdit`

- A _Cursor_ specifying the created TechnoStar solver job. If this parameter is used, the value will be DynamisJob(_ID_), where _ID_ is the ID of the solver job had been created. If it is left _None_, a new TechnoStar solver job will be created.
- The default value is _None_.

### `strPath`

- A _String_ specifying the export location for bdf file.
- This is a required input.

## Return Code

A _Cursor_ specifying the exported job.

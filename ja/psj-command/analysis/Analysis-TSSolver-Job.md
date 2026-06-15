---
id: Analysis-TSSolver-Job
title: Analysis.TSSolver.Job()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create TechnoStar Solver Job which is necessary for Analysis.TSSolver.ExportDynamisBdf
---

## Description

Create TechnoStar Solver Job which is necessary for _[Analysis.TSSolver.ExportDynamisBdf](/docs/cli/5.1.0/psj-command/analysis/Analysis.TSSolver.ExportDynamisBdf)_.

## Syntax

```psj
Analysis.TSSolver.Job(...)
```

Macro: [DynamisJob](/docs/cli/5.1.0/macro/analysis/DynamisJob)

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

## Return Code

A _Cursor_ specifying the created jobs.

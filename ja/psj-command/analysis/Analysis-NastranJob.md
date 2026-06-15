---
id: Analysis-NastranJob
title: Analysis.NastranJob()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a Nastran Analysis Job
---

## Description

Create a Nastran Analysis Job.

## Syntax

```psj
Analysis.NastranJob(...)
```

Macro: [NastranJob](/docs/cli/5.1.0/macro/analysis/NastranJob)

Ribbon: <menuselection>Analysis &#187; NastranJob</menuselection>

## Inputs

### `strName`

- A _String_ specifying the job name of Nastran analysis.
- The default value is "Job_1".

### `strDescription`

- A _String_ specifying the description of Nastran analysis job.
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying list of target parts.
- The default value is [].

### `nastranAnalysis`

- An _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_ specifying the Nastran analysis input parameter.
- The default value is _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_.

### `bDummyPropAutoAssign`

- A _Boolean_ specifying whether to enable or disable the auto dummy properties creation option.
- The default value is _False_.

### `iDummyPropMaterialID`

- An _Integer_ specifying the material ID which is used for dummy property assignment.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying an existing Nastran job.
    - If this parameter is used, the specified job will be modified.
    - If it is left _None_, a new job will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created job.

---
id: Analysis-TSSS-NormalModes
title: Analysis.TSSS.NormalModes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the Input Deck for TechnoStar SunShine Normal Modes analysis (SOL 103)
---

## Description

Export the Input Deck for TechnoStar SunShine Normal Modes analysis (SOL 103).

## Syntax

```psj
Analysis.TSSS.NormalModes(...)
```

Ribbon: <menuselection>Analysis &#187; SunShine &#187; Normal Modes(SOL 103)</menuselection>

## Inputs

### `strName`

- A _String_ specifying the job name of TechnoStar SunShine solver. Output set by this name will be saved in the Assembly tree.
- The default value is "Job_1".

### `strDescription`

- A _String_ specifying the description of TechnoStar SunShine solver job.
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying the list of target part.
- The default value is [] (all parts in the model).

### `nastranAnalysis`

- A _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_ specifying the TechnoStar Sunshine solver input parameter.
- The default value is _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_.

### `crEdit`

- A _Cursor_ specifying the created TechnoStar SunShine solver job. If this parameter is used, the value will be DynamisJob(_ID_), where _ID_ is the ID of the solver job had been created. If it is left _None_, a new TechnoStar solver job will be created.
- The default value is _None_.

### `strPath`

- A _String_ specifying the export location for bdf file.
- This is a required input.

### `iModelCheckAnswer`

- An _Integer_ specifying the model checking option.
- The default value is 0.

### `iDeleteSlaveNodesAnswer`

- An _Integer_ specifying the deleting slave nodes option.
- The default value is 0.

### `iRigidMethod`

- An _Integer_ specifying export RIGID card.

## Return Code

A _Cursor_ specifying the exported job.

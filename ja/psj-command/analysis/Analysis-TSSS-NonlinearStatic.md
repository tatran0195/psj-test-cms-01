---
id: Analysis-TSSS-NonlinearStatic
title: Analysis.TSSS.NonlinearStatic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the Input Deck for TechnoStar SunShine Nonlinear Static analysis (SOL 106)
---

## Description

Export the Input Deck for TechnoStar SunShine Nonlinear Static analysis (SOL 106).

## Syntax

```psj
Analysis.TSSS.NonlinearStatic(...)
```

Macro: TSSS_NonlinearStatic

Ribbon: <menuselection>Analysis &#187; SunShine &#187; Nonlinear Static(SOL 106)</menuselection>

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

### `iRadialReturn`

- An _Integer_ specifying the radial return algorithm used in Nonlinear Static Analysis.
- The default value is DFLT_INT.

### `listNastranNonlinear`

- A _[NASTRAN_NONLINEAR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_NONLINEAR)_ _list_ specifying the Nastran Nonlinear parameter of TechnoStar SunShine solver.
- The default value is [].

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

### `iLGDISP`

- An _Integer_ specifying LGDISP parameter.
- This default value is -1.

### `iRigidMethod`

- An _Integer_ specifying export RIGID card.

## Return Code

A _Cursor_ specifying the exported job.

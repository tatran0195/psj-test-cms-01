---
id: Analysis-TSSS-LinearStatic
title: Analysis.TSSS.LinearStatic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the Input Deck for TechnoStar SunShine Linear Static analysis (SOL 101)
---

## Description

Export the Input Deck for TechnoStar SunShine Linear Static analysis (SOL 101).

## Syntax

```psj
Analysis.TSSS.LinearStatic(...)
```

Macro: [TSSS_LinearStatic]

Ribbon: <menuselection>Analysis &#187; SunShine &#187; Linear Static(SOL 101)</menuselection>

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

### `iInitTempType`

- An _Integer_ specifying the initial temperature load type.
- The default value is 0.

### `bUSTARCalculation_b`

- A _Boolean_ specifying enable UStar calculation.

### `iMethod`

- An _Integer_ specifying method.
    - 0 : Default
    - 1 : ORIGINAL

### `bDomainWithDSize_b`

- A _Boolean_ specifying whether domain with Dsize.
-

### `iDSize`

- An _Integer_ specifying value of Dsize.
-

### `bEPS_b`

- A _Boolean_ specifying enable EPS.
-

### `dEPS`

- A _Double_ specifying EPS value.
-

### `iGroupKey`

- An _Integer_ specifying group id.

### `iRigidMethod`

- An _Integer_ specifying export RIGID card.

## Return Code

A _Cursor_ specifying the exported job.

---
id: Analysis-Nastran-ModalTransientResponse
title: Analysis.Nastran.ModalTransientResponse()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the input file for Nastran Modal Transient Response Analysis (SOL 112)
---

## Description

Export the input file for Nastran Modal Transient Response Analysis (SOL 112).

## Syntax

```psj
Analysis.Nastran.ModalTransientResponse(...)
```

Ribbon: <menuselection>Analysis &#187; Nastran &#187; Modal Transient Response(SOL 112)</menuselection>

## Inputs

### `strName`

- A _String_ specifying the job name of Nastran analysis.
- The default value is "Job_1".

### `strDescription`

- A _String_ specifying the description of Nastran analysis job.
- The default value is "".

### `crlTargets`

- A _List of Cursor_ specifying the list of target parts.
- The default value is [].

### `nastranAnalysis`

- A _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_ specifying the Nastran analysis input parameter.
- The default value is _[NASTRAN_ANALYSIS](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_ANALYSIS)_.

### `bDummyPropAutoAssign`

- A _Boolean_ specifying whether to enable or disable the auto dummy properties creation option.
- The default value is _False_.

### `iDummyPropMaterialID`

- An _Integer_ specifying the material ID which using for dummy property assignment.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying an existing Nastran job.
    - If this parameter is used, the specified job will be modified.
    - If it is left _None_, a new job will be created.
- The default value is _None_.

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

## Return Code

A _Cursor_ specifying the newly created or the modified Nastran job.

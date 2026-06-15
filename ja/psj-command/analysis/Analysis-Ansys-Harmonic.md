---
id: Analysis-Ansys-Harmonic
title: Analysis.Ansys.Harmonic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the Ansys Harmonic Structural solver file
---

## Description

Export the Ansys Harmonic Structural solver file.

## Syntax

```psj
Analysis.Ansys.Harmonic(...)
```

Ribbon: <menuselection>Analysis &#187; Ansys &#187; Harmonic</menuselection>

## Inputs

### `strJobName`

- A _String_ specifying the job name of Ansys analysis.
- This is a required input.

### `strAnsysJobName`

- A _String_ specifying the the name of Ansys NorHarmonic Structural analysis.
- The default value is "Job1".

### `strAnsysJobdescription`

- A _String_ specifying the description for new Ansys analysis.
- The default value is "".

### `bRunAPDL`

- A _Boolean_ enable/disalbe the option that running Ansys Parametric Design Language (APDL).
- The default value is False.

### `bWriteResultDB`

- A _Boolean_ enable/disalbe the option that write result database.
- The default value is False.

### `dAnsysAnalysisEndFreq`

- A _Double_ specifying the end frequency number.
- The default value is DFLT_DBL.

### `dAnsysAnalysisStartFreq`

- A _Double_ specifying the start frequency number.
- The default value is DFLT_DBL.

### `ansysAnalysisHarmonic`

- A _[HARMONIC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/HARMONIC)_ specifying the Ansys Analysis - Hamonic Structural input parameter.
- The default value is [HARMONIC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/HARMONIC).

### `iLoadCaseId`

- An _Integer_ specifying the load case identify number.
- The default value is 0.

### `ansysAnalysisModal`

- A _[MODAL](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MODAL)_ specifying the Ansys Analysis - Modal Structural input parameter.
- The default value is [MODAL](/docs/cli/5.1.0/data-type/psj-command/parameter-types/MODAL).

### `strAnsysVersion`

- A _String_ specifying the Ansys Version information.
- The default value is "".

### `strCommandLineOption`

- A _String_ specifying the Command Line Option information.
- The default value is "".

### `bOutputSOLVE`

- A _Boolean_ enable/disalbe SOLVE command write out.
- The default value is _False_.

### `crEdit`

- A _Cursor_ specifying the editing ansys job.
- The default value is _None_.

### `strFileName`

- A _String_ specifying the exporting path for .dat file.
- The default value is "".

## Return Code

A String of 1 if success, or 0 if fail.

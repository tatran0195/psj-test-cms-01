---
id: Analysis-Ansys-LinearStatic
title: Analysis.Ansys.LinearStatic()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the Ansys Linear Static Structural solver file
---

## Description

Export the Ansys Linear Static Structural solver file.

## Syntax

```psj
Analysis.Ansys.LinearStatic(...)
```

Ribbon: <menuselection>Analysis &#187; Ansys &#187; LinearStatic</menuselection>

## Inputs

### `strJobName`

- A _String_ specifying the job name of Ansys analysis.
- This is a required input.

### `iVersion`

- An _Int_ specifying the version of this command.
- The default value is 0.

### `strAnsysJobName`

- A _String_ specifying the the name of Ansys Linear Static Structural analysis.
- The default value is "Job1".

### `strAnsysJobDescription`

- A _String_ specifying the description for new Ansys analysis.
- The default value is "".

### `ansysAnalysisBasic`

- A _[BASIC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/BASIC)_ specifying the Ansys Analysis - Linear Static input parameter.
- The default value is [BASIC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/BASIC).

### `bRunAPDL`

- A _Boolean_ enable/disalbe the option that running Ansys Parametric Design Language (APDL).
- The default value is _False_.

### `bWriteResultDB`

- A _Boolean_ enable/disalbe the option that write result database.
- The default value is _False_.

### `iLoadCaseId`

- An _Integer_ specifying the load case identify number.
- The default value is 0.

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

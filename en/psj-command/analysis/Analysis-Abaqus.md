---
id: Analysis-Abaqus
title: Analysis.Abaqus()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create an Abaqus job
---

## Description

Create an Abaqus job.

## Syntax

```psj
Analysis.Abaqus(...)
```

Macro: [CreateAbaqusJob](/docs/cli/5.1.0/macro/analysis/CreateAbaqusJob)

Ribbon: <menuselection>Analysis &#187; Abaqus</menuselection>
new line here.
another line.

## Inputs

### `strName`

- A _String_ specifying the Abaqus job name.
- This is a required input.

### `abaqusAnalysis`

- A _[JOB_ABAQUS_DATA](/docs/cli/5.1.0/data-type/psj-command/parameter-types/JOB_ABAQUS_DATA)_ specifying the Abaqus Analysis input parameter.
- The default value is _[JOB_ABAQUS_DATA](/docs/cli/5.1.0/data-type/psj-command/parameter-types/JOB_ABAQUS_DATA)_.

### `crlStepSequence`

- A _List of Cursor_ specifying the list of Abaqus step defined in sequence.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing Abaqus job.
    - If this parameter is used, the specified job will be modified.
    - If it is left _None_, a new job will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created jobs.

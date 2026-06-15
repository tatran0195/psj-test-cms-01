---
id: Analysis-Permas-Job
title: Analysis.Permas.Job()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a Permas Analysis Job
---

## Description

Create a Permas Analysis Job.

## Syntax

```psj
Analysis.Permas.Job(...)
```

Ribbon: <menuselection>Analysis &#187; Permas &#187; Job</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `strDescription`

- A _String_ specifying the description.
- This is a required input.

### `iType`

- An _Integer_ specifying the type.
  0: Structure.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying the cursor of the Analysis Permas Job needs editing.
- This is a required input.

### `crlTargets`

- A _List of Cursor_ specifying the targets.
- This is a required input.

### `bElStress`

- A _Boolean_ specifying whether el stress.
- This is a required input.

### `bElStressMis`

- A _Boolean_ specifying whether el stress mis.
- This is a required input.

### `bElStrain`

- A _Boolean_ specifying whether el strain.
- This is a required input.

### `bNodeStess`

- A _Boolean_ specifying whether node stress.
- This is a required input.

### `bGZip`

- A _Boolean_ specifying whether G zip.
- This is a required input.

### `bIdeas`

- A _Boolean_ specifying whether ideas.
- This is a required input.

### `bNLResult`

- A _Boolean_ specifying whether enable NL Result option.
- This is a required input.

### `iNLStepType`

- An _Integer_ specifying the NL step type.
  0: ALL.
  1: EQUI.
  2: LIST.
- This is a required input.

### `dEquiStart`

- A _Double_ specifying the equi start.
- This is a required input.

### `dEquiStep`

- A _Double_ specifying the equi step.
- This is a required input.

### `dEquiEnd`

- A _Double_ specifying the equi end.
- This is a required input.

### `strNLStepList`

- A _String_ specifying the NL step list.
- This is a required input.

### `bTimeStep`

- A _Boolean_ specifying whether enable Time Step option.
- This is a required input.

### `iTimeStepKind`

- An _Integer_ specifying the time step kind.
  0: ABS.
- This is a required input.

### `dTimeStart`

- A _Double_ specifying the time start.
- This is a required input.

### `dTimeStep`

- A _Double_ specifying the time step.
- This is a required input.

### `dTimeEnd`

- A _Double_ specifying the time end.
- This is a required input.

### `iLCId`

- An _Integer_ specifying the LC ID.
- This is a required input.

## Return Code

A String of 1 if success, or 0 if fail.

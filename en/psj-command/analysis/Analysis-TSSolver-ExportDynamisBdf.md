---
id: Analysis-TSSolver-ExportDynamisBdf
title: Analysis.TSSolver.ExportDynamisBdf()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the TechnoStar Dynamis solver file in bdf format
---

## Description

Export the TechnoStar Dynamis solver file in bdf format.

## Syntax

```psj
Analysis.TSSolver.ExportDynamisBdf(...)
```

Macro: [ExportDynamisBdf](/docs/cli/5.1.0/macro/analysis/ExportDynamisBdf)

## Inputs

### `strPath`

- A _String_ specifying the export location for bdf file.
- This is a required input.

### `crJob`

- A _Cursor_ specifying the _[Analysis.TSSolver.Job](/docs/cli/5.1.0/psj-command/analysis/Analysis.TSSolver.Job)_.
- This is a required input.

## Return Code

A _Cursor_ specifying the exported TS-Solver Dynamis BDF file.

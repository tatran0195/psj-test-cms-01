---
id: Analysis-ExportAnsys
title: Analysis.ExportAnsys()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export Ansys Analysis Job
---

## Description

Export Ansys Analysis Job.
\*This command is no more displayed in the latest Jupiter.

## Syntax

```psj
Analysis.ExportAnsys(...)
```

Macro: [ExportAnsys](/docs/cli/5.1.0/macro/analysis/ExportAnsys)

Ribbon: <menuselection>Analysis &#187; ExportAnsys</menuselection>

## Inputs

### `strName`

- A _String_ specifying the destination path file to export.
- The default value is "".

### `crAnsysJob`

- A _Cursor_ specifying the Ansys analysis job.
- The default value is _None_.

## Return Code

A String of 1 if success, or 0 if fail.

---
id: Analysis-ExportLsdyna
title: Analysis.ExportLsdyna()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export LS-Dyna Analysis Job
---

## Description

Export LS-Dyna Analysis Job.

## Syntax

```psj
Analysis.ExportLsdyna(...)
```

Ribbon: <menuselection>Analysis &#187; ExportLsdyna</menuselection>

## Inputs

### `strPath`

- A _String_ specifying the destination path file to export.
- The default value is "".

### `crJob`

- A _Cursor_ specifying the LS-Dyna analysis job.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

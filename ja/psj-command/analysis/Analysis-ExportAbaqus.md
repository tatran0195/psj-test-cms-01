---
id: Analysis-ExportAbaqus
title: Analysis.ExportAbaqus()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export Abaqus (*.inp) file
---

## Description

Export Abaqus (\*.inp) file.

## Syntax

```psj
Analysis.ExportAbaqus(...)
```

Macro: [ExportAbaqusInp](/docs/cli/5.1.0/macro/analysis/ExportAbaqusInp)

Ribbon: <menuselection>Analysis &#187; ExportAbaqus</menuselection>

## Inputs

### `crAbaJob`

- A _Cursor_ specifying the created Abaqus job using [Analysis.Abaqus()](/docs/cli/5.1.0/psj-command/analysis/Analysis.Abaqus) function.
- The default value is None.

### `crlParts`

- A _List of Cursor_ specifying the list of parts will be exported.
- The default value is [].

### `strInpPath`

- A _String_ specifying the destination path file to export.
- The default value is "".

## Return Code

A _Boolean_ specifying the status of the exporting process:

- _True_: The Abaqus (\*.inp) file has been exported successfully.
- _False_: The Abaqus (\*.inp) file cannot be exported.

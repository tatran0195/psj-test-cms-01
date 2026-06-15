---
id: BoundaryConditions-TemperatureLoads-ADVCFile
title: BoundaryConditions.TemperatureLoads.ADVCFile()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create temperature load by using ADVC file
---

## Description

Create temperature load by using ADVC file.

## Syntax

```psj
BoundaryConditions.TemperatureLoads.ADVCFile(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; TemperatureLoads &#187; ADVCFile</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "TemperatureLoadsADVC1".

### `strFilePathName`

- A _String_ specifying the file path name.
- The default value is "".

### `crTable`

- A _Cursor_ specifying the table.
- The default value is None.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

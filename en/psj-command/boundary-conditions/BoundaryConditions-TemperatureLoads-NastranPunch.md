---
id: BoundaryConditions-TemperatureLoads-NastranPunch
title: BoundaryConditions.TemperatureLoads.NastranPunch()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create temperature load by using Nastran punch
---

## Description

Create temperature load by using Nastran punch.

## Syntax

```psj
BoundaryConditions.TemperatureLoads.NastranPunch(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; TemperatureLoads &#187; NastranPunch</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "TemperatureLoadsPunch1".

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

### `iLocalTemperatureUnit`

- An _Integer_ specifying the unit of temperature.
    - 0: K
    - 1: deg C
    - 2: deg F
- The default value is 0.

### `bUseAsMaterialReferenceTemp`

- A _Boolean_ specifying the use as material reference temperature.
- The default value is False.

### `bSkipUnavailableNode`

- A _Boolean_ specifying whether to skip nodes that do not exists in the model.
- The default value is _False_ .

### `vecUnavailableNodeId`

- A _List of Integer_ specifying the skip node ids.
- The default value is [] .

## Return Code

A String of 1 if success, or 0 if fail.

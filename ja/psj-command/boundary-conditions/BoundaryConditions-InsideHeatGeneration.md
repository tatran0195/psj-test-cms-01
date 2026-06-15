---
id: BoundaryConditions-InsideHeatGeneration
title: BoundaryConditions.InsideHeatGeneration()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create load boundary condition of inside heat generation
---

## Description

Create load boundary condition of inside heat generation.

## Syntax

```psj
BoundaryConditions.InsideHeatGeneration(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InsideHeatGeneration</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "InsideHeatGeneration1".

### `dInsideFlux`

- A _Double_ specifying the inside flux.
- The default value is DFLT_DBL.

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

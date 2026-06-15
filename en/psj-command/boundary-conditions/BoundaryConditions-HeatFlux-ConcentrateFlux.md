---
id: BoundaryConditions-HeatFlux-ConcentrateFlux
title: BoundaryConditions.HeatFlux.ConcentrateFlux()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a heat flux condition
---

## Description

Create a heat flux condition.

## Syntax

```psj
BoundaryConditions.HeatFlux.ConcentrateFlux(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; HeatFlux &#187; ConcentrateFlux</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "ConcentrateHeatFlux1".

### `dflux`

- A _Double_ specifying the heat flux value.
- The default value is _0.0_.

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

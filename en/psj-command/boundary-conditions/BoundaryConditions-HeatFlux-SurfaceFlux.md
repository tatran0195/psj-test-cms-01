---
id: BoundaryConditions-HeatFlux-SurfaceFlux
title: BoundaryConditions.HeatFlux.SurfaceFlux()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a surface flux
---

## Description

Create a surface flux.

## Syntax

```psj
BoundaryConditions.HeatFlux.SurfaceFlux(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; HeatFlux &#187; SurfaceFlux</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `dFflux`

- A _Double_ specifying the fflux.
- This is a required input.

### `iDistributionMethod`

- An _Integer_ specifying the distribution method.
- This is a required input.

### `crTable`

- A _Cursor_ specifying the table.
- This is a required input.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

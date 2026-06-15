---
id: BoundaryConditions-Pressure-General
title: BoundaryConditions.Pressure.General()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a general pressure applied to the selected Face, Element or Group. User inputs the pressure value and it will apply the pressure to the selected items
---

## Description

Create a general pressure applied to the selected Face, Element or Group. User inputs the pressure value and it will apply the pressure to the selected items.

## Syntax

```psj
BoundaryConditions.Pressure.General(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; Pressure &#187; General</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of pressure condition to be created.
- The default value is "Pressure1".

### `dPressure`

- A _Double_ specifying the pressure value applied to the selected targets.
- The default value is 0.0.

### `iDistribute`

- An _Integer_ specifying the LBC arrow position.
    - 0: DISTRIBUTE_PER_SELECTION
    - 1: DISTRIBUTE_PER_NODE
    - 2: DISTRIBUTE_TOTAL
- The default value is 0.

### `crTable`

- A _Cursor_ specifying the table.
- The default value is _None_.

### `dPhase`

- A _Double_ specifying the phase value.
- The default value is 0.0.

### `dDelay`

- A _Double_ specifying the delay value.
- The default value is 0.0.

### `crPhaseTable`

- A _Cursor_ specifying the phase table.
- The default value is _None_.

### `strFormulaValue`

- A _String_ specifying the formula value.
- The default value is "".

### `crCoord`

- A _Cursor_ specifying the coordinate to be used.
- The default value is _None_.

### `dlDirection`

- A _List of Double_ specifying the direction.
- The default value is [DFLT_DBL,DFLT_DBL,DFLT_DBL].

### `strFormulaDirX`

- A _String_ specifying the formula in direction X.
- The default value is "".

### `strFormulaDirY`

- A _String_ specifying the formula in direction Y.
- The default value is "".

### `strFormulaDirZ`

- A _String_ specifying the formula in direction Z.
- The default value is "".

### `iArrowDir`

- An _Integer_ specifying the arrow direction.
    - 0: Start at Node.
    - 1: End at Node.
- The default value is 1.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets for general pressure. This targets can be Face, Element or Group.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing general pressure.
    - If this parameter is used, the specified general pressure will be modified.
    - If it is left _None_, a new general pressure will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

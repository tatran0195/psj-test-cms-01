---
id: BoundaryConditions-EnforcedLoads-Displacement
title: BoundaryConditions.EnforcedLoads.Displacement()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create enforced displacement to face, edge or node. User inputs enforced displacement parameters, and it will return enforced displacement to the specified location
---

## Description

Create enforced displacement to face, edge or node. User inputs enforced displacement parameters, and it will return enforced displacement to the specified location.

## Syntax

```psj
BoundaryConditions.EnforcedLoads.Displacement(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; EnforcedLoads &#187; Displacement</menuselection>

## Inputs

### `strName`

- A _String_ specifying the enforced displacement load name.
- The default value is "EnforcedDisplacement1".

### `iDof`

- An _Integer_ specifying the degree of freedom (DoF). This value is calculated by using OR operator between the following options.

### `dDispUx`

- A _Double_ specifying the enforced displacement in X translation direction (default unit: m).
- The default value is _DFLT_DBL_.

### `dDispUy`

- A _Double_ specifying the enforced displacement in Y translation direction (default unit: m).
- The default value is _DFLT_DBL_.

### `dDispUz`

- A _Double_ specifying the enforced displacement in Z translation direction (default unit: m).
- The default value is _DFLT_DBL_.

### `dDispRx`

- A _Double_ specifying the enforced displacement in X rotation direction (default unit: rad).
- The default value is _DFLT_DBL_.

### `dDispRy`

- A _Double_ specifying the enforced displacement in Y rotation direction (default unit: rad).
- The default value is _DFLT_DBL_.

### `dDispRz`

- A _Double_ specifying the enforced displacement in Z rotation direction (default unit: rad).
- The default value is _DFLT_DBL_.

### `crCoord`

- A _Cursor_ specifying the coordinate from which the enforced displacement is created.
- The default value is _None_ (global coordinate).

### `iArrowDir`

- An _Integer_ specifying how arrow direction is displayed. This parameter only affects the display of the load setting, the load itself remains intact. The value for this parameter is one of the following:
    - 0: Start at node.
    - 1: End at node.
- The default value is 0.

### `crTable`

- A _Cursor_ specifying the table created from _[BoundaryConditions.FieldData](/docs/cli/5.1.0/psj-command/boundary-conditions/BoundaryConditions.FieldData)_ function.
- The default value is _None_.

### `crNodeSet`

- A _Cursor_ specifying the node set table created from _[BoundaryConditions.FieldData](/docs/cli/5.1.0/psj-command/boundary-conditions/BoundaryConditions.FieldData)_ function.
- The default value is _None_.

### `dPhase`

- A _Double_ specifying the phase value.
- The default value is _DFLT_DBL_.

### `dDelay`

- A _Double_ specifying the delay value.
- The default value is _DFLT_DBL_.

### `crPhaseTable`

- A _Cursor_ specifying the phase table created from _[BoundaryConditions.FieldData](/docs/cli/5.1.0/psj-command/boundary-conditions/BoundaryConditions.FieldData)_ function.
- The default value is _None_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets to apply enforced displacement. Target can be face, edge or node.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing enforced displacement.
    - If this parameter is used, the specified enforced displacement will be modified.
    - If it is left _None_, a new enforced displacement will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

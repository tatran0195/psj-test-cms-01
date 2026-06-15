---
id: BoundaryConditions-EnforcedLoads-Acceleration
title: BoundaryConditions.EnforcedLoads.Acceleration()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create enforced acceleration to face, edge or node. User inputs enforced acceleration parameters, and it will return enforced acceleration to the specified location
---

## Description

Create enforced acceleration to face, edge or node. User inputs enforced acceleration parameters, and it will return enforced acceleration to the specified location.

## Syntax

```psj
BoundaryConditions.EnforcedLoads.Acceleration(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; EnforcedLoads &#187; Acceleration</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the enforced acceleration load name.
- The default value is "EnforcedAcceleration1".

### `dAccelUx`

- A _Double_ specifying the enforced acceleration value of X translation direction.
- The default value is _DFLT_DBL_.

### `dAccelUy`

- A _Double_ specifying the enforced acceleration value of Y translation direction.
- The default value is _DFLT_DBL_.

### `dAccelUz`

- A _Double_ specifying the enforced acceleration value of Z translation direction.
- The default value is _DFLT_DBL_.

### `dAccelRx`

- A _Double_ specifying the enforced acceleration value of X rotation direction.
- The default value is _DFLT_DBL_.

### `dAccelRy`

- A _Double_ specifying the enforced acceleration value of Y d rotation direction.
- The default value is _DFLT_DBL_.

### `dAccelRz`

- A _Double_ specifying the enforced acceleration value of Z rotation direction.
- The default value is _DFLT_DBL_.

### `crCurCoord`

- A _Cursor_ specifying the reference coordinate system of the load.
- The default value is _None_ (global coordinate).

### `iArrowDir`

- An _Integer_ specifying how arrow direction is displayed. This parameter only affects the display of the load setting, the load itself remains intact. The value for this parameter is one of the following:
    - 0: Start at node.
    - 1: End at node.
- The default value is 0.

### `crTable`

- A _Cursor_ specifying the table created from _[BoundaryConditions.FieldData](/docs/cli/5.1.0/psj-command/boundary-conditions/BoundaryConditions.FieldData)_ function.
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

### `bExport`

- A _Boolean_ specifying whether enable or disable the Multi-Excitation Load Export.
- The default value is _False_.

### `crMEExportUx`

- A _Cursor_ specifying the table of Plural point input for X translation direction.
- The default value is _None_.

### `crMEExportUy`

- A _Cursor_ specifying the table of Plural point input for Y translation direction.
- The default value is _None_.

### `crMEExportUz`

- A _Cursor_ specifying the table of Plural point input for Z translation direction.
- The default value is _None_.

### `crMEExportRx`

- A _Cursor_ specifying the table of Plural point input for X rotation direction.
- The default value is _None_.

### `crMEExportRy`

- A _Cursor_ specifying the table of Plural point input for Y rotation direction.
- The default value is _None_.

### `crMEExportRz`

- A _Cursor_ specifying the table of Plural point input for Z rotation direction.
- The default value is _None_.

### `iAccelTransUnit`

- An _Integer_ specifying the input unit system for the enforced acceleration of translation.
- The default value is 0.

### `iAccelRotUnit`

- An _Integer_ specifying the input unit system for the enforced acceleration of rotation.
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets to apply enforced acceleration. Target can be face, edge or node.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing enforced acceleration.
    - If this parameter is used, the specified enforced acceleration will be modified.
    - If it is left _None_, a new enforced acceleration will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

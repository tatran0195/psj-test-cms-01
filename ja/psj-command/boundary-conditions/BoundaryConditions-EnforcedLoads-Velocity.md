---
id: BoundaryConditions-EnforcedLoads-Velocity
title: BoundaryConditions.EnforcedLoads.Velocity()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create enforced velocity to face, edge or node. User inputs enforced velocity parameters, and it will return enforced velocity to the specified location
---

## Description

Create enforced velocity to face, edge or node. User inputs enforced velocity parameters, and it will return enforced velocity to the specified location.

## Syntax

```psj
BoundaryConditions.EnforcedLoads.Velocity(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Enforced Loads &#187; Velocity</menuselection>

## Inputs

### `strName`

- A _String_ specifying the enforced velocity load name.
- The default value is "EnforcedVelocity1".

### `enforceVelocity`

- An _[ENFORCED_VELOCITY_LBC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ENFORCED_VELOCITY_LBC)_ specifying the enforced velocity parameters.
- This is a required input.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets to apply enforced velocity. Target can be face, edge or node.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing enforced velocity.
    - If this parameter is used, the specified enforced velocity will be modified.
    - If it is left _None_, a new enforced velocity will be created.
- The default value is _None_.

### `bADVCStatic`

- A _Boolean_ specifying whether to create 2 ADVC Static processes for bolt fix length or not.
- The default value is _False_.

## Return Code

A _Cursor_ specifying the created LBC.

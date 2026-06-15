---
id: BoundaryConditions-Force-General
title: BoundaryConditions.Force.General()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a general force applied to the selected Face, Edge or Node. User inputs the force values and it will apply the force to the selected items
---

## Description

Create a general force applied to the selected Face, Edge or Node. User inputs the force values and it will apply the force to the selected items.

## Syntax

```psj
BoundaryConditions.Force.General(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Force &#187; General</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of force condition to be created.
- The default value is "Force1".

### `forceLBC`

- A _[FORCE_LBC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/FORCE_LBC)_ specifying the general force parameters.
- The default value is _[FORCE_LBC](/docs/cli/5.1.0/data-type/psj-command/parameter-types/FORCE_LBC)_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets for general force. This targets can be Face, Edge or Node.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing general force.
    - If this parameter is used, the specified general force will be modified.
    - If it is left _None_, a new general force will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

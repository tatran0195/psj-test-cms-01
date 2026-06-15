---
id: Connections-Pretension-Abaqus
title: Connections.Pretension.Abaqus()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create bolt pretension for the Abaqus solver
---

## Description

Create bolt pretension for the Abaqus solver.

## Syntax

```psj
Connections.Pretension.Abaqus(...)
```

Macro: [PretensionAbaqus](/docs/cli/5.1.0/macro/connections/PretensionAbaqus)

Ribbon: <menuselection>Connections &#187; Pretension &#187; Abaqus</menuselection>

## Inputs

### `crTargets`

- A _Cursor_ specifying the faces or the element for creating the pretension force.
- This is a required input.

### `dForceValue`

- A _Double_ specifying the value of pretension force.
- This is a required input.

### `dlForceDirection`

- A _List of Double_ specifying the direction of pretension force.
- This is a required input.

### `dlControlNode`

- A _List of Double_ specifying the position of the control node.
- This is a required input.

### `strName`

- A _String_ specifying the name of pretension force.
- The default value is "PreTensionAbaqus1".

### `bFixedLength`

- A _Boolean_ specified whether or not the tightening force of the bolt option are retained.
- The default value is _False_.

### `crLbcConstraint`

- A _Cursor_ specifying the existing Fixed Constraint object of pretension force to be edited. This argument must be specified when _crLbcPretensionAbaqus_ is specified. Otherwise, a new Fixed Constraint object will be created.
- The default value is _None_.

### `crLbcPretensionAbaqus`

- A _Cursor_ specifying an existing pretension force (Abaqus). If no pretension force is specified, a new one will be created, otherwise, the specified pretension force (Abaqus) will be modified.
- The default value is _None_.

### `iRefNodeID`

- An _Int_ specified the reference node.
- This is a required input.

## Return Code

A _Cursor_ specifying the created Abaqus pretension.

---
id: Connections-RigidElements-RigidBodyConstraint-Nodes
title: Connections.RigidElements.RigidBodyConstraint.Nodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Rigid Body Constraint (LS-DYNA)
---

## Description

Create Rigid Body Constraint (LS-DYNA)

## Syntax

```psj
Connections.RigidElements.RigidBodyConstraint.Nodes(...)
```

Macro:

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RigidBodyConstraint &#187; Nodes</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of Rigid Body Constraint.
- The default value is "RBC".

### `iMethod`

- An _Integer_ specifying method. Is is set 3 for this function.
- The default value is 0.

### `crlMasters`

- A _List of Cursor_ specifying master entities.
- The default value is [].

### `crlSlaves`

- A _List of Cursor_ specifying slave entities.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying existing Rigid Body Constraint.
- The default value is _None_.

## Return Code

A String of 1 if success, or 0 if fail.

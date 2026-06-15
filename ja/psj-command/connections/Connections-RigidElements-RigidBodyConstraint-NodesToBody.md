---
id: Connections-RigidElements-RigidBodyConstraint-NodesToBody
title: Connections.RigidElements.RigidBodyConstraint.NodesToBody()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Rigid Body Constraint (LS-DYNA)
---

## Description

Create Rigid Body Constraint (LS-DYNA)

## Syntax

```psj
Connections.RigidElements.RigidBodyConstraint.NodesToBody(...)
```

Macro:

Ribbon: <menuselection>Connections &#187; RigidElements &#187; RigidBodyConstraint &#187; NodesToBody</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of Rigid Body Constraint.
- The default value is "RBC".

### `iMethod`

- An _Integer_ specifying type.
    - 1: Node.
    - 2: Node set.
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

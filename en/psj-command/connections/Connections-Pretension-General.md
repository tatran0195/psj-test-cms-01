---
id: Connections-Pretension-General
title: Connections.Pretension.General()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create bolt pretension in general (Not for a specific solver)
---

## Description

Create bolt pretension in general (Not for a specific solver).

## Syntax

```psj
Connections.Pretension.General(...)
```

Macro: [Pretension](/docs/cli/5.1.0/macro/connections/Pretension)

Ribbon: <menuselection>Connections &#187; Pretension &#187; General</menuselection>

## Inputs

### `crlFaces`

- A _List of Cursor_ specifying the target faces to be used for pretension force.
- This is a required input.

### `dForceValue`

- A _Double_ specifying the value of pretension force.
- This is a required input.

### `strName`

- A _String_ specifying the name of pretension force.
- The default value is "BoltLoad001".

### `iForceDirection`

- An _Integer_ specifying the direction of pretension force.
    - If _iForceDirection=0_, the direction is along to UX-axis of the local coordinate system.
    - If _iForceDirection=1_, the direction is along to UY-axis of the local coordinate system.
    - If _iForceDirection=2_, the direction is along to UZ-axis of the local coordinate system.
- The default value is 0.

### `bFixedLength`

- A _Boolean_ specifying whether to retain the tightening force of the bolt.
- The default value is _False_.

### `crLocalCoordinate`

- A _Cursor_ specifying the local coordinate system used for defined the direction of pretension force. If unspecified, global coordinate system will be applied.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created ADVC pretension.

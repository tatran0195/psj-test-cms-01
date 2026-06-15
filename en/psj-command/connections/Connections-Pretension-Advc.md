---
id: Connections-Pretension-Advc
title: Connections.Pretension.Advc()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create bolt pretension for the ADVC solver
---

## Description

Create bolt pretension for the ADVC solver.

## Syntax

```psj
Connections.Pretension.Advc(...)
```

Ribbon: <menuselection>Connections &#187; Pretension &#187; Advc</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying the list of targets. It can be faces or 1D elements.
- This is a required input.

### `dForceValue`

- A _Double_ specifying the value of pretension force.
- This is a required input.

### `dlForceDirection`

- A _List of Double_ specifying the bolt tightening direction.
- This is a required input.

### `dlControlNode`

- A _List of Double_ specifying the position of control node.
- This is a required input.

### `strName`

- A _String_ specifying the name of pretension force.
- The default value is "PreTensionAdvc1".

### `bFixedLength`

- A _Boolean_ specified whether or not the tightening force of the bolt option are retained.
- The default value is _False_.

### `crLbcEnforcedVelocity`

- A _Cursor_ specifying the existing enforced velocity of the pretension force (ADVC) to be edited. This argument must be specified when _crLbcPretensionADVC_ is specified.
- The default value is _None_.

### `iDirectionUpdate`

- An _Integer_ specifying whether or not the tightening direction has been updated.
    - If _iDirectionUpdate=0_, this argument is ignored.
    - If _iDirectionUpdate=1_, update the tightening direction.
    - If _iDirectionUpdate=2_, do not update the tightening direction.
- The default value is 0.

### `iRefNodeId`

- An _Integer_ specifying the ID of reference node.
- The default value is 0.

### `crLbcPretensionADVC`

- A _Cursor_ specifying an existing pretension force (ADVC).
    - If this parameter is used, the specified pretension force (ADVC) will be modified.
    - If it is left _None_, a new pretension force (ADVC) will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created ADVC pretension.

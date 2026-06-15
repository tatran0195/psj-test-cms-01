---
id: Connections-BoltConnections-FindAutoBoltConnection
title: Connections.BoltConnections.FindAutoBoltConnection()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Get table data of Auto Bolt Connection.
---

## Description

Get table data of Auto Bolt Connection.

## Syntax

```psj
Connections.BoltConnections.FindAutoBoltConnection(...)
```

Macro: FindAutoBoltConnection

Ribbon: <menuselection>Connections &#187; BoltConnections &#187; FindAutoBoltConnection</menuselection>

## Inputs

### `crMasterPart`

- A _Cursor_ specifying target part (master side).
- This is a required input.

### `crSlavePart`

- A _Cursor_ specifying target part (slave side)
- This is a required input.

### `dMinCircleDiameter`

- A _Double_ specifying maximum circle diameter.
- The default value is 0.

### `dMaxCircleDiameter`

- A _Double_ specifying maximum circle diameter.
- The default value is 0.1.

## Return Code

- A _List of [BOLT_HOLE_FACE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/BOLT_HOLE_FACE)_. It can input to the argument `listBoltHoles` of Connections.BoltConnections.AutoBoltConnection.

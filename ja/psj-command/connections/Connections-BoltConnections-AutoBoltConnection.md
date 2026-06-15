---
id: Connections-BoltConnections-AutoBoltConnection
title: Connections.BoltConnections.AutoBoltConnection()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create bolt connection for all the detected bolt holes at one time
---

## Description

Create bolt connection for all the detected bolt holes at one time

## Syntax

```psj
Connections.BoltConnections.AutoBoltConnection(...)
```

Macro: AutoBoltConnection

Ribbon: <menuselection>Connections &#187; BoltConnections &#187; AutoBoltConnection</menuselection>

## Inputs

### `strName`

- A _String_ specifying the bolt connection name.
- This is a required input.

### `listBoltHoles`

- A _list of [BOLT_HOLE_FACE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/BOLT_HOLE_FACE)_ specifying data of bolt hole face.
- This is a required input.

### `crlMatingFaces`

- A _List of Cursor_ specifying mating faces target.
- This is a required input.

### `boltTypeA`

- A _BOLT_TYPE_AB_ specifying an instance of BOLT_TYPE_AB class specifying the information of bolt type A and B
- The default value is BOLT_TYPE_AB().

### `boltTypeB`

- A _BOLT_TYPE_AB_ specifying an instance of BOLT_TYPE_AB class specifying the information of bolt type A and B
- The default value is BOLT_TYPE_AB().

### `boltTypeC`

- A _Boolean_ specifying an instance of BOLT_TYPE_C class specifying the information of bolt type C
- The default value is BOLT_TYPE_C().

### `boltTypeD`

- A _Boolean_ specifying an instance of BOLT_TYPE_D class specifying the information of bolt type D
- The default value is BOLT_TYPE_D().

### `bLocalSettingFace`

- A _Boolean_ specifying the local setting face option
- The default value is _False_.

### `dLocalSettingSize`

- A _Double_ specifying the local setting size.
- The default value is 0.003.

## Return Code

- A _Boolean_ specifying the function succeeded or not.
    - True: Succeeded
    - False: Failed

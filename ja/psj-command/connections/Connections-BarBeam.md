---
id: Connections-BarBeam
title: Connections.BarBeam()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Connections Bar or Beam
---

## Description

Create Connections Bar or Beam.

## Syntax

```psj
Connections.BarBeam(...)
```

Ribbon: <menuselection>Connections &#187; BarBeam</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `iEType`

- An _Integer_ specifying the e type.
- The default value is 10.

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 1.

### `crProp`

- A _Cursor_ specifying the property.
- The default value is None.

### `dlOrient`

- A _Double List_ specifying the orient.
- The default value is [].

### `crlMasterTargets`

- A _List of Cursor_ specifying the master target.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the slave target.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

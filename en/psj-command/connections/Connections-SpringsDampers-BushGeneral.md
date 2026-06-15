---
id: Connections-SpringsDampers-BushGeneral
title: Connections.SpringsDampers.BushGeneral()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create bush connection
---

## Description

Create bush connection

## Syntax

```psj
Connections.SpringsDampers.BushGeneral(iMethod, strName, crlMaster, crlSlave, crCoord, dTol, iGround, iOriMode, iEqual, poslVector, dlStiffness, dlDampCoef, dlDampConst, dRotStrain, dTransStrain, dRotStress, dTransStress, crEditObj)
```

Macro: [Bush](/docs/cli/5.1.0/macro/connections/Bush)

Ribbon: <menuselection>Connections &#187; SpringsDampers &#187; BushGeneral</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- This is a required input.

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `crlMaster`

- A _List of Cursor_ specifying the master.
- This is a required input.

### `crlSlave`

- A _List of Cursor_ specifying the slave.
- This is a required input.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- This is a required input.

### `dTol`

- A _Double_ specifying the tolerance.
- This is a required input.

### `iGround`

- An _Integer_ specifying the ground.
- This is a required input.

### `iOriMode`

- An _Integer_ specifying the ori mode.
- This is a required input.

### `iEqual`

- An _Integer_ specifying the equal.
- This is a required input.

### `poslVector`

- A _Position List_ specifying the vector.
- This is a required input.

### `dlStiffness`

- A _Double List_ specifying the stiffness.
- This is a required input.

### `dlDampCoef`

- A _Double List_ specifying the damp coefficient .
- This is a required input.

### `dlDampConst`

- A _Double List_ specifying the damp const.
- This is a required input.

### `dRotStrain`

- A _Double_ specifying the rotation strain.
- This is a required input.

### `dTransStrain`

- A _Double_ specifying the trans strain.
- This is a required input.

### `dRotStress`

- A _Double_ specifying the rotation stress.
- This is a required input.

### `dTransStress`

- A _Double_ specifying the trans stress.
- This is a required input.

### `crEditObj`

- A _Cursor_ specifying the edit object.
- This is a required input.

## Return Code

A String of 1 if success, or 0 if fail.

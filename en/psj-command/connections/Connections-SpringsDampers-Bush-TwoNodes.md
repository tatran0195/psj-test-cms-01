---
id: Connections-SpringsDampers-Bush-TwoNodes
title: Connections.SpringsDampers.Bush.TwoNodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create bush connection between nodes.
---

## Description

Create bush connection between nodes.

## Syntax

```psj
Connections.SpringsDampers.Bush.TwoNodes(...)
```

Ribbon: <menuselection>Connections &#187; SpringsDampers &#187; Bush &#187; TwoNodes</menuselection>

## Inputs

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 1.

### `strName`

- A _String_ specifying the name.
- The default value is "BUSH_1".

### `crlMaster`

- A _List of Cursor_ specifying the master.
- This is a required input.

### `crlSlave`

- A _List of Cursor_ specifying the slave.
- This is a required input.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `iGround`

- An _Integer_ specifying the ground.
- The default value is 0.

### `iOriMode`

- An _Integer_ specifying the ori mode.
- The default value is 0.

### `poslVector`

- A _Position List_ specifying the vector.
- The default value is [].

### `dlStiffness`

- A _Double List_ specifying the Stiffness 1 to 6.
- The default value is all DFLT_DBL.

### `dlDampCoef`

- A _Double List_ specifying the Damping Coeff. 1 to 6.
- The default value is all DFLT_DBL.

### `dlDampConst`

- A _Double List_ specifying the Damping Const. 1 to 6.
- The default value is all DFLT_DBL.

### `dRotStrain`

- A _Double_ specifying the rotation strain.
- The default value is DFLT_DBL.

### `dTransStrain`

- A _Double_ specifying the trans strain.
- The default value is DFLT_DBL.

### `dRotStress`

- A _Double_ specifying the rotation stress.
- The default value is DFLT_DBL.

### `dTransStress`

- A _Double_ specifying the trans stress.
- The default value is DFLT_DBL.

### `crlStiffTbl`

- A _Lits of Cursor_ specifying the Field Data for the table of Stiffness 1 to 6.
- The default value is all 0:0.

### `crlDampCoefTbl`

- A _Lits of Cursor_ specifying the Field Data for the table of Damping Coef. 1 to 6.
- The default value is all 0:0.

### `crlDampConstTbl`

- A _Lits of Cursor_ specifying the Field Data for table of Damping Const. 1 to 6.
- The default value is all 0:0.

### `crEditObj`

- A _Cursor_ specifying the edit object.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

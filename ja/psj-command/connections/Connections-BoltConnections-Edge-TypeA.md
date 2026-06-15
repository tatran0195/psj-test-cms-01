---
id: Connections-BoltConnections-Edge-TypeA
title: Connections.BoltConnections.Edge.TypeA()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Lbc TypeA Bolt Edge method
---

## Description

Create Lbc TypeA Bolt Edge method.

## Syntax

```psj
Connections.BoltConnections.Edge.TypeA(...)
```

Ribbon: <menuselection>Connections &#187; BoltConnections &#187; Edge &#187; TypeA</menuselection>

## Inputs

### `crlEdgeCur1`

- A _List of Cursor_ specifying the edge cur1.
- This is a required input.

### `crlEdgeCur2`

- A _List of Cursor_ specifying the edge cur2.
- This is a required input.

### `strRbeName`

- A _String_ specifying the rbe name.
- The default value is "RBE".

### `strBarName`

- A _String_ specifying the bar name.
- The default value is "".

### `iShaftType`

- An _Integer_ specifying the shaft type.
- The default value is 0.

### `crCurBarProperty`

- A _Cursor_ specifying the cur bar property.
- The default value is None.

### `dPlaneTol`

- A _Double_ specifying the plane tolerance.
- The default value is 20.0.

### `dMaxBoltHeight`

- A _Double_ specifying the maximum bolt height.
- The default value is 100.0.

### `bPretensionLoad`

- A _Boolean_ specifying the pretension load.
- The default value is False.

### `iSolverType`

- An _Integer_ specifying the solver type.
- The default value is 0.

### `dForceValue`

- A _Double_ specifying the force value.
- The default value is 0.0.

### `iPreTenDof`

- An _Integer_ specifying the pre ten dof.
- The default value is 0.

### `crCurCoord`

- A _Cursor_ specifying the cur coordinate.
- The default value is None.

### `iBoltFixLength`

- An _Integer_ specifying the bolt fix length.
- The default value is 0.

### `iTopSlot`

- An _Integer_ specifying the top slot.
- The default value is 0.

### `dRBE1`

- A _Double_ specifying the r e1.
- The default value is 0.0.

### `iBotSlot`

- An _Integer_ specifying the bot slot.
- The default value is 0.

### `dRBE2`

- A _Double_ specifying the r e2.
- The default value is 0.0.

### `bIsCreate2ADVCStaticProcessForFixLength`

- A _Boolean_ specifying the is create2 ADVC static process for fix length.
- The default value is False.

## Return Code

A String of 1 if success, or 0 if fail.

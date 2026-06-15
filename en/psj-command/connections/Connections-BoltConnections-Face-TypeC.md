---
id: Connections-BoltConnections-Face-TypeC
title: Connections.BoltConnections.Face.TypeC()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create Lbc TypeC Bolt Face method
---

## Description

Create Lbc TypeC Bolt Face method.

## Syntax

```psj
Connections.BoltConnections.Face.TypeC(...)
```

Ribbon: <menuselection>Connections &#187; BoltConnections &#187; Face &#187; TypeC</menuselection>

## Inputs

### `crlFaceCur1`

- A _List of Cursor_ specifying the face cur1.
- This is a required input.

### `crlFaceCur2`

- A _List of Cursor_ specifying the face cur2.
- This is a required input.

### `strRbeName`

- A _String_ specifying the rbe name.
- The default value is "RBE".

### `dPlaneTol`

- A _Double_ specifying the plane tolerance.
- The default value is 20.

### `dMaxBoltHeight`

- A _Double_ specifying the maximum bolt height.
- The default value is 100.

### `dMaxDiameter`

- A _Double_ specifying the maximum diameter.
- The default value is 0.

### `dMinDiameter`

- A _Double_ specifying the minimum diameter.
- The default value is 0.

### `iConnectionType`

- An _Integer_ specifying the connection type.
- The default value is 0.

### `iCoincidentNodes`

- An _Integer_ specifying the coincident nodes.
- The default value is 1.

### `dTolerance`

- A _Double_ specifying the tolerance.
- The default value is 0.0.

### `iGround`

- An _Integer_ specifying the ground.
- The default value is 0.

### `dStiffnessX`

- A _Double_ specifying the stiffness x.
- The default value is 0.0.

### `dStiffnessY`

- A _Double_ specifying the stiffness y.
- The default value is 0.0.

### `dStiffnessZ`

- A _Double_ specifying the stiffness z.
- The default value is 0.0.

### `iLocalStiffUnit`

- An _Integer_ specifying the local stiff unit.
- The default value is 0.

### `dRotateStiffX`

- A _Double_ specifying the rotate stiff x.
- The default value is 0.0.

### `dRotateStiffY`

- A _Double_ specifying the rotate stiff y.
- The default value is 0.0.

### `dRotateStiffZ`

- A _Double_ specifying the rotate stiff z.
- The default value is 0.0.

### `iLocalRotateStiffUnit`

- An _Integer_ specifying the local rotate stiff unit.
- The default value is 0.

### `dDampCoef`

- A _Double_ specifying the damp coefficient .
- The default value is 0.0.

### `dStressCoef`

- A _Double_ specifying the stress coefficient .
- The default value is 0.0.

### `crCurCoord`

- A _Cursor_ specifying the cur coordinate.
- The default value is None.

### `iTopRbeType`

- An _Integer_ specifying the top rbe type.
- The default value is 0.

### `dTopPitch`

- A _Double_ specifying the top pitch.
- The default value is 10.

### `dTopRemoveDepth`

- A _Double_ specifying the top remove depth.
- The default value is 0.0.

### `iBotRbeType`

- An _Integer_ specifying the bot rbe type.
- The default value is 0.

### `dBotPitch`

- A _Double_ specifying the bot pitch.
- The default value is 10.

### `dBotRemoveDepth`

- A _Double_ specifying the bot remove depth.
- The default value is 0.0.

## Return Code

A String of 1 if success, or 0 if fail.

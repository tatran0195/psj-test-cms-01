---
id: Connections-SolidBoltModeling
title: Connections.SolidBoltModeling()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a solid bolt composed of hexa elements.
---

## Description

Create a solid bolt composed of hexa elements.

## Syntax

```psj
Connections.SolidBoltModeling(...)
```

Macro:

Ribbon: <menuselection>Connections &#187; SolidBoltModeling</menuselection>

## Inputs

### `crlTopTargets`

- A _List of Cursor_ specifying top side edges or faces.
- This is a required input.

### `crlBottomTargets`

- A _List of Cursor_ specifying bottom side edges or faces.
- This is a required input.

### `strName`

- A _String_ specifying the name of created bolt connection.
- The default value is "Bolt_1".

### `iBoltType`

- An _Integer_ specifying bolt type.
    - 0: Bolt - Nut
    - 1: Bolt
- The default value is 0.

### `dMaxHeight`

- A _Double_ specifying the maximum length of bolt hole where a new bolt is created.
- The default value is 100.

### `dMaxDiameter`

- A _Double_ specifying the maximum diameter to search bolt hole.
- The default value is 36.

### `dMinDiameter`

- A _Double_ specifying the minimum diameter to search bolt hole.
- The default value is 3.

### `bPretension`

- A _Boolean_ specifying whether or not create pretension setting.
- The default value is _False_.

### `iSolverType`

- An _Integer_ specifying solver type.
    - 0: All
    - 1: Abaqus
- The default value is 0.

### `iForceUnit`

- An _Integer_ specifying unit of pretension force.
    - 0: N
    - 1: mN
    - 2: kN
    - 3: kgf
    - 4: lbf
    - 5: tf
- The default value is 0.

### `dPretensionValue`

- A _Double_ specifying the value of pretension force.
- The default value is 100.

### `iDirection`

- An _Integer_ specifying force direction.
    - 0: UX
    - 1: UY
    - 2: UZ
- The default value is 0.

### `crCoord`

- A _Cursor_ specifying coordinate for force direction.
- The default value is _None_.

### `bFixLength`

- A _Boolean_ specifying whether or not create fixed length setting.
- The default value is _False_.

### `dDiameter`

- A _Double_ specifying nominal thread diameter of the created bolt.
- The default value is 4.

### `dBoltHeadWidthAcrossFlat`

- A _Double_ specifying the bolt head diagonal distance.
- The default value is 7.

### `dBoltHeadHeight`

- A _Double_ specifying bolt head height.
- The default value is 2.8.

### `dShaftLength`

- A _Double_ specifying bolt shaft length.
- The default value is 40.

### `dPitch`

- A _Double_ specifying bolt thread length.
- The default value is 5.

### `iTopHeadHeightDivision`

- An _Integer_ specifying the number of mesh divisions in the top side of bolt head height direction.
- The default value is 1.

### `iTopHeadRadialDivision`

- An _Integer_ specifying the number of mesh divisions in the radial direction of the bolt head circumference.
- The default value is 1.

### `dNutWidthAcrossFlat`

- A _Double_ specifying the bolt nut diagonal distance.
- The default value is 7.

### `dNutHeight`

- A _Double_ specifying bolt nut height.
- The default value is 3.2.

### `iBotHeadHeightDivision`

- An _Integer_ specifying the number of mesh divisions in the bolt head height direction.
- The default value is 1.

### `iBotHeadRadialDivision`

- An _Integer_ specifying the number of mesh divisions in the radial direction of the top side of bolt head circumference.
- The default value is 1.

## Return Code

A _List of Cursor_ specifying created solid bolt parts.

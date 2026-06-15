---
id: BoundaryConditions-BodyLoads-CentrifugalForce-TwoPositions
title: BoundaryConditions.BodyLoads.CentrifugalForce.TwoPositions()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create the centrifugal force load in the analysis model
---

## Description

Create the centrifugal force load in the analysis model.

## Syntax

```psj
BoundaryConditions.BodyLoads.CentrifugalForce.TwoPositions(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; BodyLoads &#187; CentrifugalForce &#187; TwoPositions</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying the list of the target items for creating the centrifugal force.
- The default value is [].

### `strName`

- A _String_ specifying the name of the centrifugal force load condition to be created.
- The default value is "CentrifugalForce1".

### `dBasePointX`

- A _Double_ specifying the X coordinate of the rotation axis reference point.
- The default value is 0.0.

### `dBasePointY`

- A _Double_ specifying the Y coordinate of the rotation axis reference point.
- The default value is 0.0.

### `dBasePointZ`

- A _Double_ specifying the Z coordinate of the rotation axis reference point.
- The default value is 0.0.

### `dTipPointX`

- A _Double_ specifying the X coordinate of the rotation axis vertex.
- The default value is 0.0.

### `dTipPointY`

- A _Double_ specifying the Y coordinate of the rotation axis vertex.
- The default value is 0.0.

### `dTipPointZ`

- A _Double_ specifying the Z coordinate of the rotation axis vertex.
- The default value is 0.0.

### `dVelocity`

- A _Double_ specifying the angular velocity value.
- The default value is 0.0.

### `dAcceleration`

- A _Double_ specifying the angular acceleration value.
- The default value is 0.0.

### `iVelocityUnit`

- An _Integer_ specifying the input unit of the angular velocity value.
- The default value is 0.

### `iAccelerationUnit`

- An _Integer_ specifying the input unit of the angular acceleration value.
- The default value is 0.

### `crEdit`

- A _Cursor_ specifying an existing centrifugal force load. If this parameter is used, the specified centrifugal force load will be modified. If it is left _None_, a new centrifugal force load will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

---
id: BoundaryConditions-BodyLoads-CentrifugalForce-CoordinateSystems
title: BoundaryConditions.BodyLoads.CentrifugalForce.CoordinateSystems()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create the centrifugal force load to refer to the coordinate system in the analysis model
---

## Description

Create the centrifugal force load to refer to the coordinate system in the analysis model.

## Syntax

```psj
BoundaryConditions.BodyLoads.CentrifugalForce.CoordinateSystems(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; BodyLoads &#187; CentrifugalForce &#187; CoordinateSystems</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying the list of the target items(Part/Bar) for creating the centrifugal force.
- The default value is [].

### `strName`

- A _String_ specifying the name of the centrifugal force load condition to be created.
- The default value is "CentrifugalForce1".

### `dVelocity`

- A _Double_ specifying the angular velocity value.
- The default value is DFLT_DBL.

### `dAcceleration`

- A _Double_ specifying the angular acceleration value.
- The default value is DFLT_DBL.

### `iAxisDirection`

- An _Integer_ specifying the rotation axis of coordinate system from X, Y or Z axis.
- The default value is 0.

### `iVelocityUnit`

- An _Integer_ specifying the input unit of the angular velocity value.
- The default value is 0.

### `iAccelerationUnit`

- An _Integer_ specifying the input unit of the angular acceleration value.
- The default value is 0.

### `crCurCoord`

- A _Cursor_ specifying the coordinate system in which the centrifugal force is referenced.
- The default value is _None_.

### `crEdit`

- A _Cursor_ specifying an existing centrifugal force load. If this parameter is used, the specified centrifugal force load will be modified. If it is left _None_, a new centrifugal force load will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

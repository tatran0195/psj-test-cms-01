---
id: BoundaryConditions-BodyLoads-Gravity
title: BoundaryConditions.BodyLoads.Gravity()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define the acceleration load of gravity to the selected part. User inputs the value of the acceleration load of gravity and it will return the acceleration load of gravity to the selected parts
---

## Description

Define the acceleration load of gravity to the selected part. User inputs the value of the acceleration load of gravity and it will return the acceleration load of gravity to the selected parts.

## Syntax

```psj
BoundaryConditions.BodyLoads.Gravity(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Body Loads &#187; Gravity</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of gravity load to be created.
- The default value is "Gravity1"

### `dlGravity`

- A _Double List_ specifying the list of acceleration value of each direction (X,Y,Z).
- This is a required input.

### `crCurCoord`

- A _Cursor_ specifying the coordinate system for the load.
- The default value is _None_(global coordinate system).

### `crlTargets`

- A _List of Cursor_ specifying the list of target parts for creating the acceleration load of gravity.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing gravity load. If this parameter is used, the specified gravity load will be modified. If it is left _None_, a new gravity load will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

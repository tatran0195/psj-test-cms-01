---
id: Connections-RigidWall
title: Connections.RigidWall()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define a rigid wall contact setting to simulate impact analyses with planar rigid walls
---

## Description

Define a rigid wall contact setting to simulate impact analyses with planar rigid walls.

## Syntax

```psj
Connections.RigidWall(...)
```

Ribbon: <menuselection>Connections &#187; RigidWall</menuselection>

## Inputs

### `strName`

- A _String_ specifying the rigid wall name.
- The default value is "RigidWall1".

### `iObject`

- An _Integer_ specifying the rigid object type.
    - 0: Planar rigid object.
- The default value is 0.

### `iType`

- An _Integer_ specifying the rigid wall type.
    - 0: Infinite body.
    - 1: Finite body.
- The default value is 0.

### `iMotion`

- An _Integer_ specifying the behavior.
    - 0: Static - Stationary.
    - 1: Moving - Movable.
- The default value is 0.

### `iFriction`

- An _Integer_ specifying the condition of friction types. The friction type of rigid wall contact definition is one of the following.
    - 0: Frictionless - No friction.
    - 1: No Sliding - No slip.
    - 2: Coulomb Friction - Coulomb friction.
    - 3: Weld with Frictionless - Frictionless welding.
    - 4: Weld with No Sliding - Non-slip welding.
- The default value is 0.

### `iOrthoFriction`

- An _Integer_ specifying whether or not using rigid orthotropic frictional coefficient.
    - 0: No
    - 1: Yes
- The default value is 0.

### `iForces`

- An _Integer_ specifying whether or not considering the reaction force.
    - 0: No
    - 1: Yes
- The default value is 0.

### `dFinite1`

- A _Double_ specifying length of l(x) edge when Finite body is used.
- The default value is DFLT_DBL.

### `dFinite2`

- A _Double_ specifying length of m(y) edge when Finite body is used.
- The default value is DFLT_DBL.

### `dMotionMass`

- A _Double_ specifying the motion mass when Moving behavior is used.
- The default value is DFLT_DBL.

### `dMotionInitVelocity`

- A _Double_ specifying the motion initial velocity Moving behavior is used.
- The default value is DFLT_DBL.

### `dFricCoulombCoeff`

- A _Double_ specifying the friction coulomb coefficient when Coulomb Friction is used.
- The default value is DFLT_DBL.

### `dFricWeldVelocity`

- A _Double_ specifying the critical normal velocity for weld when Frictionless welding is used.
- The default value is DFLT_DBL.

### `iForcesCirclesNum`

- An _Integer_ specifying the number of forces cycles when reaction force is used.
- The default value is 0.

### `dOrthoStaticCoeff1`

- A _Double_ specifying the ortho static friction coefficient a when rigid Ortho is used.
- The default value is DFLT_DBL.

### `dOrthoStaticCoeff2`

- A _Double_ specifying the ortho static friction coefficient b when rigid Ortho is used.
- The default value is DFLT_DBL.

### `dOrthoDynamicCoeff1`

- A _Double_ specifying the ortho dynamic friction coefficient a when rigid Ortho is used.
- The default value is DFLT_DBL.

### `dOrthoDynamicCoeff2`

- A _Double_ specifying the ortho dynamic friction coefficient b when rigid Ortho is used.
- The default value is DFLT_DBL.

### `dOrthoDecayConst1`

- A _Double_ specifying the decay constant a-direction a.
- The default value is DFLT_DBL.

### `dOrthoDecayConst2`

- A _Double_ specifying the decay constant a-direction b.
- The default value is DFLT_DBL.

### `dOrthoFricVector1`

- A _Double_ specifying the ortho Friction Vector - x value.
- The default value is DFLT_DBL.

### `dOrthoFricVector2`

- A _Double_ specifying the ortho Friction Vector - y value.
- The default value is DFLT_DBL.

### `dOrthoFricVector3`

- A _Double_ specifying the ortho Friction Vector - z value.
- The default value is DFLT_DBL.

### `bAllNodeSlave`

- A _Boolean_ specifying whether or not considering all nodes to be subordinate points.
- The default value is _False_.

### `crCoord`

- A _Cursor_ specifying the local coordinate. If the _crCoord_ does not specify any local coordinate, function will execute with global coordinate.
- The default value is _None_.

### `crAreaFaceSet`

- A _Cursor_ specifying the Selected Force Area Face when reaction force is used.
- The default value is _None_.

### `crVisualNodeSet`

- A _Cursor_ specifying the Selected Visualization Node Set when reaction force is used.
- The default value is _None_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets will be set up as rigid wall.
- This is the required input.

### `crEdit`

- A _Cursor_ specifying an existing rigid wall contact setting. If this parameter is used, the specified rigid wall contact setting will be modified. When the default value is used, a new rigid wall contact setting will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created or the modified rigid wall contact connection.

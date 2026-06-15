---
id: BoundaryConditions-Force-NormalDirection
title: BoundaryConditions.Force.NormalDirection()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a force in the normal direction applies on selected Face, Edge, Node/MidNode, Normal(Element). User inputs the force value, and it will apply the force to the selected items
---

## Description

Create a force in the normal direction applies on selected Face, Edge, Node/MidNode, Normal(Element). User inputs the force value, and it will apply the force to the selected items.

## Syntax

```psj
BoundaryConditions.Force.NormalDirection(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Force &#187; Normal Direction</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the force setting.
- The default value is "ForceNormal1".

### `dForce`

- A _Double_ specifying the total force value (default unit: N).
- The default value is 0.

### `crElemForNormal`

- A _Cursor_ specifying a 2D element. This element will be used to calculate vector normal for force direction.

### `iArrowDir`

- An _Integer_ specifying the display arrow direction. This parameter only affects the display of the force setting, the force itself remains intact. The value for this parameter is one of the following.
    - 0: Start at node.
    - 1: End at node.
- The default value is 0.

### `iDistributeType`

- An _Integer_ specifying the force distribution method. The value for this parameter is one of the following.
    - 0: Per selected entity. Each selected item (Face, Edge, Node) receives the same amount of the specified force. For example, a vector force [1; 0; 2] is applied on 2 faces, then each face will receive a vector force [1; 0; 2].
    - 1: Per selected node. Each nodes in selected items (Face, Edge, Node) receives the same amount of the specified force. For example, a vector force [1; 0; 2] is applied on 1 edge, which has 10 nodes, then each node will receive a vector force [1; 0; 2].
    - 2: Total of selected entity. Each selected item (Face, Edge, Node) receives the same amount of force, which is the specified force divided by the number of selected entity. For example, a vector force [1; 0; 2] is applied on 2 faces, then each face will receive a vector force [0.5; 0; 1].
- The default value is 0.

### `crCoord`

- A _Cursor_ specifying the coordinate from which the fixed constraint is created.
- The default value is _None_(global coordinate system).

### `crlTargets`

- A _List of Cursor_ specifying the list of targets for normal direction force. This target can be Face, Edge, Node/MidNode, Normal(Element).
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing normal direction force. If this parameter is used, the specified normal direction force will be modified. If it is left _None_, a new normal direction force will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

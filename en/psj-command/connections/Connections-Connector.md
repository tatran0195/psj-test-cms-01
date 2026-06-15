---
id: Connections-Connector
title: Connections.Connector()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create connectors between nodes, edges, and faces according to specified connection types. User selects master/slave targets and the connectors will be created to connect nodes on master/slave targets with each other
---

## Description

Create connectors between nodes, edges, and faces according to specified connection types. User selects master/slave targets and the connectors will be created to connect nodes on master/slave targets with each other.

## Syntax

```psj
Connections.Connector(...)
```

Macro: [Connector](/docs/cli/5.1.0/macro/connections/Connector)

Ribbon: <menuselection>Connections &#187; Connector</menuselection>

## Inputs

### `strName`

- A _String_ specifying the connection name to be created.
- The default value is "Connector_1".

### `iMethod`

- An _Integer_ specifying the connection method.
    - If _iMethod=1_, the method is Node to Node.
    - If _iMethod=2_, the method is Edge to Edge.
    - If _iMethod=3_, the method is Face to Face.
- The default value is 1.

### `iConnectType`

- An _Integer_ specifying the connection type.
    - If _iConnectType=0_, the connection type is Parallel.
    - If _iConnectType=1_, the connection type is Translation.
    - If _iConnectType=2_, the connection type is Rotation.
    - If _iConnectType=3_, the connection type is Bushing.
    - If _iConnectType=4_, the connection type is Cylindrical.
    - If _iConnectType=5_, the connection type is Joint.
    - If _iConnectType=6_, the connection type is RigidRod.
    - If _iConnectType=7_, the connection type is RigidBar.
- The default value is 0.

### `iRefNode`

- An _Integer_ specifying a node to refer to when determining the coordinate system.
    - If _iRefNode=0_, reference to the first node.
    - If _iRefNode=1_, reference to the second node.
- The default value is 0.

### `iElemCs`

- An _Integer_ specifying the option whether or not an element coordinate system is used.
    - If _iElemCs=0_, do not use element coordinate system.
    - If _iElemCs=1_, use element coordinate system.
- The default value is 0.

### `crLocalCS`

- A _Cursor_ specifying the local coordinate system.
- The default value is None.

### `crlElasticity`

- A _List of Cursor_ specifying the table data of elastic property.
- The default value is [].

### `crlDamp`

- A _List of Cursor_ specifying the table data of viscosity characteristics.
- The default value is [].

### `crlMasterTargets`

- A _List of Cursor_ specifying the list of master targets.
    - The targets are nodes when the _iMethod_ is equal to 1.
    - The targets are edges when the _iMethod_ is equal to 2.
    - And the targets are faces when the _iMethod_ is equal to 3.
- The default value is [].

### `crlSlaveTargets`

- A _List of Cursor_ specifying the list of slave targets.
    - The targets are nodes when the _iMethod_ is equal to 1.
    - The targets are edges when the _iMethod_ is equal to 2.
    - And the targets are faces when the _iMethod_ is equal to 3.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing connection.
    - If this parameter is used, the specified connection will be modified.
    - If it is left _None_, a new connection will be created.
- The default value is _None_.

### `iEffectiveDofs`

- An _Integer_ specifying the effective degrees of freedom as a bitmask.
    - If _iEffectiveDofs=1_, the DOF is Tx (Translation X).
    - If _iEffectiveDofs=2_, the DOF is Ty (Translation Y).
    - If _iEffectiveDofs=4_, the DOF is Tz (Translation Z).
    - If _iEffectiveDofs=8_, the DOF is Rx (Rotation X).
    - If _iEffectiveDofs=16_, the DOF is Ry (Rotation Y).
    - If _iEffectiveDofs=32_, the DOF is Rz (Rotation Z).
    - Example: To enable Tx + Rx + Ry → `1 + 8 + 16 = 25`.
- The default value is 0.

## Return Code

A _Cursor_ specifying the created contact.

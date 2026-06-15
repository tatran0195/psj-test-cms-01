---
id: Connector
title: Connector()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create a connector

## Syntax

```psj
Connector(string nameConnector, int iMethod, int iConnectType, int ReferenceNode,
    int ElementCS, Cursor LocalCS, Cursor[] Elasticity, Cursor[] Damping,
    Cursor[] MasterTarget, Cursor[] SlaveTarget, Cursor Edit)
```

## Inputs

### `1. string`

name of connector

### `2. int`

Method [1: NODE_TO_NODE;2:EDGE_TO_EDGE;3:FACE_TO_FACE]

### `3. int`

Connection type [0:PARALLEL; 1:TRANSLATION; 2:ROTATION; 3:BUSHING; 4:CYLINDRICAL; 5:JOINT; 6:RIGIDROD; 7:RIGIDBAR]

### `4. int`

Reference node

### `5. int`

Element coordinate system [0-no; 1-yes]

### `6. Cursor`

Local Coordinate System

### `7. Cursor[]`

Elasticity

### `8. Cursor[]`

Damping

### `9. Cursor[]`

Master targets

### `10. Cursor[]`

Slave targets

### `11. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Connector("Connector_1", 1, 1, 0, 0, 0:0, [0:0, 0:0, 0:0, 0:0, 0:0, 0:0],
    [0:0, 0:0, 0:0, 0:0, 0:0, 0:0], [10:1], [10:2], 0:0)
```

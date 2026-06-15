---
id: Mpc
title: Mpc()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create mpc connection

## Syntax

```psj
Mpc(int method, String name, Cursor[] master, Cursor[] slave, MPCTermAttribute[] termAtb,
    double tol, double value, double mpcType, int searchType, int coordId, Cursor editObj)
```

## Inputs

### `1. Int`

method to create mpc,1:2Nodes, 2: 2Edges, 3: 2Faces, 4: Node to Any, 7: Semi Auto, 8: Nodes to Nodes, 9: Node to Edge, 10: Node to Face, 14: Faces to faces, 16: Any Entities

### `2. String`

Name of MPC

### `3. Cursor[]`

master entities of mpc

### `4. Cursor[]`

slave entities of mpc

### `5. MPCTermAttribute[]`

stores attribute for each mpc term, includes coef. and DoF

### `6. Double`

tolerance to find node pair

### `7. Double`

constant value for equation mpc

### `8. Int`

mpc type, 0:General, 1: equation

### `9. Int`

mode to find node pair between master and slave, 0: free, 1: 1 to 1

### `10. Int`

id of referred coordinate system

### `11. Cursor`

used for edit mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Mpc(1, "MPC_1", [10:10546], [10:483], [(2, 1), (0, 2), (0, 4), (0, 0), (0, 0), (0, 0)], 0, 0, 0, 1, 0, 0:0)
```

---
id: Assemble-CylinderLayer
title: Assemble.CylinderLayer()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create an inner cylindrical face based on specified top face/bottom face of the cylinder
---

## Description

Create an inner cylindrical face based on specified top face/bottom face of the cylinder.

## Syntax

```psj
Assemble.CylinderLayer(...)
```

Macro: [CylinderLayer](/docs/cli/5.1.0/macro/assemble/CylinderLayer)

Ribbon: <menuselection>Assemble &#187; Cylinder Layer</menuselection>

## Inputs

### `crFace`

- A _Cursor_ specifying the list of cylindrical face.
- The default value is None.

### `crNode`

- A _Cursor_ specifying the node that determines the face and the length including the extension you want for the edge.
- The default value is None.

## Return Code

A _Boolean_ specifying whether the process is executed successfully or not:

- _True_: The process is executed successfully.
- _False_: Cannot execute the function.

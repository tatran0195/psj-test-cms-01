---
id: Assemble-GeneralLayer
title: Assemble.GeneralLayer()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a new face inside the part by offsetting a preceding face
---

## Description

Create a new face inside the part by offsetting a preceding face.

## Syntax

```psj
Assemble.GeneralLayer(...)
```

Ribbon: <menuselection>Assemble &#187; General Layer</menuselection>

## Inputs

### `crlFaces`

- A _List of Cursor_ specifying the list of faces to make layer.
- This is the require input.

### `dWidth`

- A _Double_ specifying the offset amount for the surface to be created.
- The default value is 1.0.

### `iLayer`

- An _Integer_ specifying the number of layers to be created.
- The default value is 1.

### `bSeparatePart`

- A _Boolean_ enable/disable the option that new layer part will be created in a different body. Boundary layer part and original part have a shared surface.
- The default value is False.

### `bForceStitchToSide`

- A _Boolean_ enable/disable conform to outside of the model geometry and offset.
- The default value is False.

### `bSmoothingEdge`

- A _Boolean_ enabledisable prepare the edge of the offset face.
- The default value is False.

### `bNoImprint`

- A _Boolean_ specifying whether or not imprint the adjacent surface after the creation of the offset face..
- The default value is False.

### `bWidthOnSurface`

- A _Boolean_ specifying whether or not interpreted as the amount of offsets along the shape of the model plane.
- The default value is False.

### `bMakeHexa`

- A _Boolean_ specifying whether or not the make hexa element between layer face and boundary face.
- The default value is False.

## Return Code

A _Boolean_ specifying whether the process is executed successfully or not:

- _True_: The process is executed successfully.
- _False_: Cannot execute the function.

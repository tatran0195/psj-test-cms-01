---
id: Assemble-FullLayer
title: Assemble.FullLayer()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a layer (PRISM6 part) with the entire surface mesh of the part offset inward
---

## Description

Create a layer (PRISM6 part) with the entire surface mesh of the part offset inward.

## Syntax

```psj
Assemble.FullLayer(...)
```

Ribbon: <menuselection>Assemble &#187; Full Layer</menuselection>

## Inputs

### `crPart`

- A _Cursor_ specifying the target part for create new layers.
- This is a required input.

### `dLayerWidth`

- A _Double_ specifying the layer width.
- The default value is 1.0.

### `iLayer`

- An _Integer_ specifying number of layer will be created.
- The default value is 1.

### `bUsePyramid`

- A _Boolean_ enable/disable option that create a pyramid element to tie the layer parts and the internal parts .
- The default value is False.

## Return Code

A _Boolean_ specifying whether the function is executed correctly or not:

- _True_: The function is executed without any problems.
- _False_: The function cannot be executed.

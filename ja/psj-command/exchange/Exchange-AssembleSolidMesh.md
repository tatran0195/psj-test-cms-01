---
id: Exchange-AssembleSolidMesh
title: Exchange.AssembleSolidMesh()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Assemble solid mesh parts
---

## Description

Assemble solid mesh parts.

## Syntax

```psj
Exchange.AssembleSolidMesh(...)
```

Macro:

Ribbon: <menuselection>Exchange &#187; AssembleSolidMesh</menuselection>

## Inputs

### `crNewPart`

- A _Cursor_ specifying the new assembly part.
- The default value is _None_.

### `crlAssembleParts`

- A _List of Cursor_ specifying the original assembly part.
- The default value is [].

### `crlNewFaces`

- A _List of Cursor_ specifying the face to be shared on the new assembly part.
- The default value is [].

### `crlAssembleFaces`

- A _List of Cursor_ specifying the face to be shared on the original assembly part.
- The default value is [].

### `dTolerance`

- A _Double_ specifying the tolerance value.
- The default value is 0.0.

### `iConnectPosition`

- An _Integer_ specifying the position to create the shared face.
    - 0: Mid
    - 1: Mater
- The default value is 0.

### `iRemeshLayer`

- An _Integer_ specifying the number of layers to be remeshed around the new shared face.
- The default value is 2.

### `bRemeshAuto`

- A _Boolean_ specifying whether to set the mesh size automatically.
- The default value is _True_.

### `dAvg`

- A _Double_ specifying the average mesh size.
- The default value is 0.0.

### `dMin`

- A _Double_ specifying the minimum mesh size.
- The default value is 0.0.

### `dMax`

- A _Double_ specifying the maximum mesh size.
- The default value is 0.0.

## Return Code

A _Boolean_ specifying the function successfully executed or not.

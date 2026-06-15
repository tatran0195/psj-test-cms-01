---
id: Assemble-FindMatingFaceEx
title: Assemble.FindMatingFaceEx()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Find the mating faces which can be used in Assemble.AssembleFaceEx() function
---

## Description

Find the mating faces which can be used in [Assemble.AssembleFaceEx()](/docs/cli/5.1.0/psj-command/assemble/Assemble.AssembleFaceEx) function.

## Syntax

```psj
Assemble.FindMatingFaceEx(...)
```

Ribbon: <menuselection>Assemble &#187; Find Mating Face</menuselection>

## Inputs

### `crlTaBodies`

- A _List of Cursor_ specifying the parts to make assemble faces.
- This is the required input.

### `crlMasterFace`

- A _List of Cursor_ specifying the master faces.
- The default value is [].

### `crlSlaveFace`

- A _List of Cursor_ specifying the slave faces.
- The default value is [].

### `dTolerance`

- A _Double_ specifying the tolerance.
- The default value is 0.1.

## Return Code

A list of pair mating faces ID found.

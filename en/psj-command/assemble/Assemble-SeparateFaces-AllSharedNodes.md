---
id: Assemble-SeparateFaces-AllSharedNodes
title: Assemble.SeparateFaces.AllSharedNodes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Separate all shared nodes existing on the current model (Also separate all the existing shared faces)
---

## Description

Separate all shared nodes existing on the current model (Also separate all the existing shared faces).

## Syntax

```psj
Assemble.SeparateFaces.AllSharedNodes(...)
```

Macro: [ASMSeparateAll2](/docs/cli/5.1.0/macro/assemble/ASMSeparateAll2)

Ribbon: <menuselection>Assemble &#187; Separate Faces &#187; All Shared Nodes</menuselection>

## Inputs

This function does not contains any input values.

## Return Code

A _Boolean_ specifying whether the shared nodes are separated successfully or not:

- _True_: All the shared nodes are separated successfully.
- _False_: Cannot separate shared nodes/The model does not contains any shared nodes.

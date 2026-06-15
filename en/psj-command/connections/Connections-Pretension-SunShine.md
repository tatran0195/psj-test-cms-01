---
id: Connections-Pretension-SunShine
title: Connections.Pretension.SunShine()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create bolt pretension for the SunShine solver
---

## Description

Create bolt pretension for the SunShine solver.

## Syntax

```psj
Connections.Pretension.SunShine(...)
```

Ribbon: <menuselection>Connections &#187; Pretension &#187; SunShine</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying the list of targets. It can be parts, faces or edges.
- This is a required input.

### `dForceValue`

- A _Double_ specifying the value of pretension force.
- This is a required input.

### `strName`

- A _String_ specifying the name of pretension force.
- The default value is "PreTensionSunShine1".

### `iLocalUnit`

- An _Integer_ specifying local unit.
- The default value is 0.

### `crLbcPretensionSunShine`

- A _Cursor_ specifying an existing pretension force (SunShine).
    - If this parameter is used, the specified pretension force (SunShine) will be modified.
    - If it is left _None_, a new pretension force (SunShine) will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created SunShine pretension.

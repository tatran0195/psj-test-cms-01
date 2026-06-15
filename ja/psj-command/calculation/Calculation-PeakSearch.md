---
id: Calculation-PeakSearch
title: Calculation.PeakSearch()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Find peak nodes with higher or lower results (peaked) than nearby vertices at each node in the model and flag them
---

## Description

Find peak nodes with higher or lower results (peaked) than nearby vertices at each node in the model and flag them.

## Syntax

```psj
Calculation.PeakSearch(...)
```

Macro: [CmdPostPeakSearch](/docs/cli/5.1.0/macro/calculation/CmdPostPeakSearch)

Ribbon: <menuselection>Calculation &#187; PeakSearch</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying the target. The target can be part or face.
- The default value is [].

### `crlExcludedNodes`

- A _List of Cursor_ specifying the excluded nodes.
- The default value is [].

### `iOption`

- An _Integer_ specifying the peak option.
    - 0: Max
    - 1: Min
    - 2: ABS Max
- The default value is 0.

### `dParameter`

- A _Double_ specifying the value for micro peak removal.
- The default value is 0.1.

### `bStep`

- A _Boolean_ specifying whether to use the Step option.
- The default value is _True_.

## Return Code

A _List of Cursor_ specifying the peak nodes.

---
id: Connections-Plot
title: Connections.Plot()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create 1D plot connection
---

## Description

Create 1D plot connection.

## Syntax

```psj
Connections.Plot(...)
```

Macro: [Property1DPlot](/docs/cli/5.1.0/macro/connections/Property1DPlot)

Ribbon: <menuselection>Connections &#187; Plot</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the 1D plot connection to be created.
- The default value is "PLOT_1".

### `iPID`

- An _Integer_ specifying the ID of the 1D plot connection to be created.
- The default value is 1.

### `crlTargets`

- A _List of Cursor_ specifying the list of the selected targets to set Nastran data plot. This targets can be bar part, 1D edge, element edge, or node.
- This is the require input.

### `crEdit`

- A _Cursor_ specifying an existing connection plot.
    - If this parameter is used, the specified connection plot will be modified.
    - If it is left _None_, a new connection plot will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created or the modified connection.

---
id: BoundaryConditions-InitialTemperature-ADVC
title: BoundaryConditions.InitialTemperature.ADVC()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Read the temperature result output from format of Adventure Cluster solver and defines it as the initial temperature
---

## Description

Read the temperature result output from format of Adventure Cluster solver and defines it as the initial temperature.

## Syntax

```psj
BoundaryConditions.InitialTemperature.ADVC(...)
```

Ribbon: <menuselection>Boundary Conditions &#187; Initial Temperature &#187; ADVC file</menuselection>

## Inputs

### `strName`

- A _String_ specifying the initial temperature name.
- The default value is "InitialTemperature1".

### `strFilePathName`

- A _String_ specifying the ADVC temperature result file path.
- This is a required input.

### `iLocalTemperatureUnit`

- An _Ingeter_ specifying the local temperature.
- The default value is 0.

### `bUseDefault`

- A _Boolean_ specifying whether enable or disable the default temperature.
- The default value is _False_.

### `crlTargets`

- A _List of Cursor_ specifying list of target part for initial temperature.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing initial temperature.
    - If this parameter is used, the specified initial temperature will be modified.
    - If it is left _None_, a new initial temperature will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created LBC.

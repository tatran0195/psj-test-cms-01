---
id: BoundaryConditions-ThermalAttributes
title: BoundaryConditions.ThermalAttributes()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a thermal attribute.
---

## Description

Create a thermal attribute.

## Syntax

```psj
BoundaryConditions.ThermalAttributes(...)
```

Macro: LbcThermalAttributes

Ribbon: <menuselection>BoundaryConditions &#187; ThermalAttributes</menuselection>

## Inputs

### `dStefanBoltzmannConstant`

- A _Double_ specifying Stefan Boltzmann Constant
- The default value is 5.670000E-8.

### `dAbsoluteZero`

- A _Double_ specifying Absolute Zero.
- The default value is 0 (degC).

### `crEdit`

- A _Cursor_ specifying existing thermal attribute.
- The default value is _None_ (create new).

## Return Code

A _Cursor_ specifying the created thermal attribute.

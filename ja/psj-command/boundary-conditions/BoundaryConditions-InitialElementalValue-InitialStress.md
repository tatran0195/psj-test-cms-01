---
id: BoundaryConditions-InitialElementalValue-InitialStress
title: BoundaryConditions.InitialElementalValue.InitialStress()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create mapping stress
---

## Description

Create mapping stress.

## Syntax

```psj
BoundaryConditions.InitialElementalValue.InitialStress(...)
```

Ribbon: <menuselection>BoundaryConditions &#187; InitialElementalValue &#187; InitialStress</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "InitialStress1".

### `iDimension`

- An _Integer_ specifying the dimension.
- The default value is 2.

### `iElemCs`

- An _Integer_ specifying the element cs.
- The default value is 0.

### `dSXX`

- A _Double_ specifying the s x x.
- The default value is DFLT_DBL.

### `dSYY`

- A _Double_ specifying the s y y.
- The default value is DFLT_DBL.

### `dSXY`

- A _Double_ specifying the s x y.
- The default value is DFLT_DBL.

### `crTable`

- A _Cursor_ specifying the table.
- The default value is None.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

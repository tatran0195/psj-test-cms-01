---
id: Assembly-RightClick-ChangeEntityColor
title: Assembly.RightClick.ChangeEntityColor()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Change color of a specific entity/a list of entities (By ID)
---

## Description

Change color of a specific entity/a list of entities (By ID).

## Syntax

```psj
Assembly.RightClick.ChangeEntityColor(...)
```

Ribbon: <menuselection>None</menuselection>

## Inputs

### `crlEntities`

- A _List of Cursor_ specifying a list of entitiy/entities that its/theirs color will be changed.
- This is a required input.

### `iColor`

- An _Integer_ specifying the color for entities.
- The default value is 0.

## Return Code

A _String_ specifying whether the color of the inputted entity/entities is changed or not:

- **1**: The color of the inputted entity/entities is changed successfully.
- **0**: The color of the inputted entity/entities cannot be changed.

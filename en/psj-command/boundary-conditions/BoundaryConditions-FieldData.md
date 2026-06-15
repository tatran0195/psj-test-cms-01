---
id: BoundaryConditions-FieldData
title: BoundaryConditions.FieldData()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a field data table that can be used when you set load, the boundary conditions, etc.
---

## Description

Create a field data table that can be used when you set load, the boundary conditions, etc.

## Syntax

```psj
BoundaryConditions.FieldData(...)
```

Macro:

Ribbon: <menuselection>BoundaryConditions &#187; FieldData</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the table to be created.
- The default value is "".

### `iType`

- An _Integer_ specifying the type of table to be created.
- The default value is 0.

### `ilSheet`

- A _List of Integer_ specifying the table data.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing Field Data. If this parameter is used, the specified Field Data will be modified. If it is left _None_, a new Field Data will be created.
- The default value is _None_.

### `bAbaqusAmp`

- A _Boolean_ specifying whether the Abaqus amplitude is enabled or not.
- The default value is _False_ (Disabled).

### `iAmpType`

- An _Integer_ specifying the amplitude type.
- The default value is 0.

### `bFrequencyPSDLogX`

- A _Boolean_ specifying whether or not enable data interplation of LogX for Frequency-PSD table.
- The default value is _False_.

### `bFrequencyPSDLogY`

- A _Boolean_ specifying whether or not enable data interplation of LogY for Frequency-PSD table.
- The default value is _False_.

## Return Code

A _Cursor_ specifying the created LBC.

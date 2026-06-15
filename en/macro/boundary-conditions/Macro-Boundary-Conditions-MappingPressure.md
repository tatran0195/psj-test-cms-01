---
id: MappingPressure
title: MappingPressure()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create mapping pressure

## Syntax

```psj
MappingPressure(string name, Cursor[] target, int pos, int conflictMode, int component,
    int srcType, int mappedComponentIndex, double dSclFact, double[3] transitionVct, double[3] rotVct,
    double coordScl, double dSearchRange, int iInputUnit, string strDataScrFile, Cursor editCursor)
```

## Inputs

### `1. String`

name of mapping pressure

### `2. Cursor[]`

mapping target entities

### `3. Int`

mapping position, 0: surface node, 1:solid node, 2:surface element, 3: solid element

### `4. Int`

how to deal conflict case

### `5. Int`

component number, 1 for pressure

### `6. Int`

source data type, 0: fluent, 1: starCD, 2:text

### `7. Int`

pressure data index in file

### `8. Double`

Scale factor for mapping pressure

### `9. Double[3]`

Transition vector

### `10. Double[3]`

Rotation vector

### `11. Double`

Coordinate scale value

### `12. Double`

Search range

- 0: Auto search range
- Value: Tolerance search range

### `13. Int`

Input Unit

- 0: MPa
- 1: Pa
- 2: kPa
- 3: kgf/mm^2
- 4: lbf/ft^2
- 5: tf/m^2
- 6: GPa

### `14. string`

pressure data index in file

### `15. Cursor`

Edit mapping pressure

## Return Code

- "0": The function cannot be executed

## Sample Code

```psj
MappingPressure("MappingPressure1", [6:30, 6:22], 2, 0, 1, 1, -1, 1, [0, 0, 0],
    [0, 0, 0], 1, 0, 0, "D:/Fluent.dat", 0:0)
```

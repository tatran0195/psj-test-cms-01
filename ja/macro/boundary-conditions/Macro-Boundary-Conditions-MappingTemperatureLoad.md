---
id: MappingTemperatureLoad
title: MappingTemperatureLoad()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create mapping pressure

## Syntax

```psj
MappingTemperatureLoad(String name, Cursor[] target, int pos, int conflictMode,
    int component, int srcType, int mappedComponentIndex,double rltScale,
    double[3] tOffset, double[3] tRotateAngle, double tScale, String path, Cursor editObj )
```

## Inputs

### `1. String`

name of mapping temperature

### `2. Cursor[]`

mapping target entities

### `3. Int`

mapping position, 0: surface node, 1:solid node, 2:surface element, 3: solid element

### `4. Int`

how to deal conflict case

### `5. Int`

component number, 1 for temperature

### `6. Int`

source data type, 0: fluent, 1: starCD, 2:text

### `7. Int`

temperature data index in file

### `8. Double`

scale for result data

### `9. Double[3]`

transform offset vector

### `10. Double[3]`

rotate angle vector

### `11. Double`

transform scale

### `12. String`

data source file

### `13. Cursor`

used for edit mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
MappingTemperatureLoad("Mapping", [], 2, 0, 1, 0, 0, 1, [0, 0, 0], [0, 0, 0], 1, "D:\Fluent.dat", 0:0)
```

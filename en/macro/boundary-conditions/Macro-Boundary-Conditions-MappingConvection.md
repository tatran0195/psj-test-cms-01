---
id: MappingConvection
title: MappingConvection()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create mapping pressure

## Syntax

```psj
MappingConvection(String name, Cursor[] Target, int Position, int ViewCp, int Cp,
    int SourceType, int[6] MappedCpIndex, int[6] MappedCpIndex, double RScale,
    double[3] Offset, double[3] Rotate, double TScale, double seachRange, int HTCunit,
    int tempUnit, String path, Cursor editMapping)
```

## Inputs

### `1. String`

Name of mapping convection

### `2. Cursor[]`

Target list

### `3. Int`

mapping position, 0: surface node, 1:solid node, 2:surface element, 3: solid element

### `4. Int`

View component (Cp)

### `5. Int`

component number, 2 for convection

### `6. Int`

source data type, 0: fluent, 1: starCD, 2:text

### `7. Int[6]`

Mapped Cp Index List

### `8. Int[6]`

Mapped Cp Index List

### `9. Double`

Rscale

### `10. Double[3]`

Offset List

### `11. Double[3]`

Rotate List

### `12. Double`

Tscale

### `13. Double`

Search range

### `14. Int`

HTC Unit

### `15. Int`

Temperature unit

### `16. String`

Path

### `17. Cursor`

Edit mapping convection

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
MappingConvection("MappingConvection2", [6:23], 2, 0, 2, 2, 0, 1, 1, [0, 0, 0],
    [1, 0, 0], 1, 0, 0, 1, "D:/wj-block-cold.csv", 0:0)
```

---
id: ImportSpatial
title: ImportSpatial()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Import CAD file by Spatial interface

## Syntax

```psj
ImportSpatial(String[] vecPath, double surface_plane_tolerance, double surface_plane_angle,
    double max_facet_width, int isNXDirect)
```

## Inputs

### `1. String[]`

multiple CAD file paths

### `2. Double`

surface plane tolerance option

### `3. Double`

surface plane angle option

### `4. Double`

max facet width option

### `5. Int`

flag of NXDirect

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ImportSpatial(["D:/assy1.sat"], 0.002, 30, 0, 0)
```

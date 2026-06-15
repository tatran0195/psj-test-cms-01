---
id: PropertiesCopyProperty
title: PropertiesCopyProperty()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Copy properties by translation

## Syntax

```psj
PropertiesCopyProperty(String strPathSource,String strPathTarget,int[] keyTarget,int axis,
    Cursor crCoord,Vector transVec,double dMag,double dOffset,double dTol)
```

## Inputs

### `1. String`

source file path

### `2. String`

target file path

### `3. int[]`

property key need copy

### `4. int`

Axis [0:Arbitrary Axis; 1:X Axis; 2:Y Axis; 3:Z Axis; 4:2Nodes; 5:Edge]

### `5. Cursor`

coordinate system

### `6. Vector`

translate vector

### `7. double`

magnitude

### `8. double`

offset

### `9. double`

tolerance

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PropertiesCopyProperty("D:/Source","D:/Target",[1,2],1,1:11,,0.001,0.001,0.001)
```

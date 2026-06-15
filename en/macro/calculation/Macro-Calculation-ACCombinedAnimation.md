---
id: ACCombinedAnimation
title: ACCombinedAnimation()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

let update

Animate deformations, contour colors, and vectors with separately selected physical quantities.

## Syntax

```psj
ACCombinedAnimation(int iTimeStep, int iAnalysisType, str strTargetAnalysisName, bool bDeform, bool bContour, bool bVector,  int iContourSetting, int iVectorSetting)
```

## Inputs

### `1. int`

- The time step for the animation

### `2. int`

- The type of analysis

### `3. str`

- The name of the target analysis for the animation

### `4. bool`

- Deformmation (True = 1, False = 0)

### `5. bool`

- Contour (True = 1, False = 0)

### `6. Bool`

- Vector (True = 1, False = 0)

### `7. int`

- Contour option

### `8. int`

- Vector option

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ACCombinedAnimation(1, 1, "Fluid Pressure", 1, 1, 1, 0, 0)
```

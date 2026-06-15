---
id: Calculation-AcousticAnalysis-ACCombinedAnimation
title: Calculation.AcousticAnalysis.ACCombinedAnimation()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Perform the animation with physical quantities that select deformation, contour color, and vector separately
---

## Description

Perform the animation with physical quantities that select deformation, contour color, and vector separately.

## Syntax

```psj
Calculation.AcousticAnalysis.ACCombinedAnimation(...)
```

Macro: [ACCombinedAnimation](/docs/cli/5.1.0/macro/calculation/ACCombinedAnimation)

Ribbon: <menuselection>Calculation &#187; AcousticAnalysis &#187; ACCombinedAnimation</menuselection>

## Inputs

### `iTimeStep`

- An _Integer_ specifying the time step.
- The default value is 1.

### `iAnalysisType`

- An _Integer_ specifying the analysis type.
- The default value is 1.

### `strName`

- A _String_ specifying the subcase name.
- The default value is "FluidPressure".

### `bDeformation`

- A _Boolean_ specifying whether to use the deformation result.
- The default value is _True_.

### `bContour`

- A _Boolean_ specifying whether to display the contour.
- The default value is _True_.

### `bVector`

- A _Boolean_ specifying whether to display the vector.
- The default value is _True_.

### `iContour`

- An _Integer_ specifying the contour option.
    - 0: Fluid Pressure
    - 1: Acoustic Intensity Normal
- The default value is 0.

### `iVector`

- An _Integer_ specifying the vector option.
    - 0: Fluid Velocity
    - 1: Instantaneous Intensity
- The default value is 0.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

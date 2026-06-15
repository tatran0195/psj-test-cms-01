---
id: Calculation-FatigueStrength
title: Calculation.FatigueStrength()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Calculate fatigue strength (safety factor, mean stress, stress amplitude) at any location
---

## Description

Calculate fatigue strength (safety factor, mean stress, stress amplitude) at any location.

## Syntax

```psj
Calculation.FatigueStrength(...)
```

Macro:

Ribbon: <menuselection>Post &#187; Calculation &#187; FatigueStrength</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying the target. The target can be Part, Face, or Group.
- The default value is [].

### `listPropAndMat`

- A _List of Cursor Pair_ specifying the property and fatigue material.
- The default value is [].

### `iResAngle`

- A _Integer_ specifying the resolution angle (degree) for calculating the stress in the direction with the minimum safety factor.
- The default value is 90.

### `iFatigueCriterion`

- A _Integer_ specifying calculation method to be used in fatigue calculations.
    - 0: Calculate the fatigue criterion based on uniaxial fatigue.
    - 1: Calculate the fatigue criterion based on biaxial fatigue.
- The default value is 0.

### `iTargetElement`

- A _Integer_ specifying whether to recover stress only for elements on the free faces or for all elements in case a solid element part is selected.
    - 0: Recover stress for elements on free faces only.
    - 1: Recover stress for all elements.
- The default value is 0.

### `strNewSubcaseName`

- A _String_ specifying new subcase name to be created in the created result window.
- The default value is "".

### `iSubcaseID`

- A _Integer_ specifying the ID of new created subcase.
- The default value is 0.

### `strCycleName`

- A _String_ specifying the cycle name.
- The default value is "".

### `ilSelectedSubcases`

- A _List of Integer_ specifying selected subcases.
- The default value is [].

### `iCalculationType`

- A _Integer_ specifying the calculation type.
    - 0: Minimum Search (Under Development)
    - 1: Node Average (Under Development)
    - 2: Result Average (Under Development)
- The default value is 0.

### `ilInitStressSubcases`

- A _List of Integer_ specifying selected initial stress subcases.
- The default value is [0,0,0].

### `ilTempSubcases`

- A _List of Integer_ specifying selected initial stress subcases.
- The default value is [0,0,0].

### `iShellResultType`

- A _Integer_ specifying the shell result type.
    - 0: Both
    - 1: Top
    - 2: Bottom
- The default value is 0.

### `iStressRange`

- A _Integer_ specifying the stress range type.
    - 0: Rainflow
    - 1: MaxMin
- The default value is 0.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

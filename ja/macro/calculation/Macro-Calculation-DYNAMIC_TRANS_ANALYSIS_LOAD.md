---
id: DYNAMIC_TRANS_ANALYSIS_LOAD
title: DYNAMIC_TRANS_ANALYSIS_LOAD()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Set the transient response arbitrary excitation input.

## Syntax

```psj
DYNAMIC_TRANS_ANALYSIS_LOAD(cursor crParentAnalysis, cursor crCoordinate, str strName, int iLoadType, iLoadDirection, double[] dlForce, double dAmplitude, double dDelay, double dPhase, bool bFt, double dFt, cursor crFtTable, double dT1, double dT2, double dFrequency, double dExponent, double dPower, cursor[] crlTargetNodes, cursor crEdit)
```

## Inputs

### `1. cursor`

- A Cursor specifying the target analysis. A new analysis is created if this parameter is set as None.

### `2. cursor`

- A Cursor specifying the coordinate system.

### `3. str`

- A String specifying the name of load condition to be created.

### `4. int`

- An Integer specifying the load type.

### `5. int`

- An Integer specifying the direction of vibration.

### `6. double[]`

- A List of Double specifying the vector of vibration force.

### `7. double`

- A Double specifying the amplitude of vibration load.

### `8. double`

- A Double specifying the value of time delay (seconds).

### `9. double`

- A Double specifying the value of phase delay (angle) in load type Cosine(TLOAD2).

### `10. bool`

- A Boolean specifying whether to use the time history load as inputted value or table.

### `11. double`

- A Double specifying the value of the time history load.

### `12. cursor`

- A Cursor specifying the field data of the time history load.

### `13. double`

- A Double specifying the vibration start time of load type Cosine(TLOAD2).

### `14. double`

- A Double specifying the vibration end time of load type Cosine(TLOAD2).

### `15. double`

- A Double specifying the value of frequency in load type Cosine(TLOAD2).

### `16. double`

- A Double specifying the value of exponential function in load type Cosine (TLOAD2).

### `17. double`

- A Double specifying the value of growth factor in load type Cosine (TLOAD2).

### `18. cursor[]`

- A List of Cursor specifying the selected nodes which can be assigned the load condition.

### `19. cursor`

- A Cursor specifying an existing Load condition

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
DYNAMIC_TRANS_ANALYSIS_LOAD(0:0, 0:0, "TRNLoad1", 0, 0, [1, 0, 0], 1.0, 0.0, 0.0, 1, 1.0, 0:0, 0.0, 1.0, 0.0, 0.0, 0.0, [0:0], 0:0)
```

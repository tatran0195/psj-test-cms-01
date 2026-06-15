---
id: Calculation-TransRespSolver-LoadCondition
title: Calculation.TransRespSolver.LoadCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Set the arbitrary excitation input for transient response (Solver)
---

## Description

Set the arbitrary excitation input for transient response (Solver).

## Syntax

```psj
Calculation.TransRespSolver.LoadCondition(...)
```

Macro:

Ribbon: <menuselection>Calculation &#187; TransRespSolver &#187; LoadCondition</menuselection>

## Inputs

### `crTargetAnalysis`

- A _Cursor_ specifying the target analysis. A new analysis is created if this parameter is set as None.
- The default value is _None_.

### `crCoordinate`

- A _Cursor_ specifying the output coordinate system.
- The default value is _None_.

### `strName`

- A _String_ specifying the name of load condition to be created.
- The default value is "TRNLoad".

### `iLoadType`

- An _Integer_ specifying the load type.
    - 0: Table(TLOAD1)
    - 1: Cosine(TLOAD2)
- The default value is 0.

### `iResultType`

- An _Integer_ specifying the result type.
    - 0: Force
    - 1: Displacement
    - 2: Velocity
    - 3: Acceleration
- The default value is 0.

### `iLoadDirection`

- An _Integer_ specifying the direction of vibration.
    - 0: X
    - 1: Y
    - 2: Z
    - 3: RX
    - 4: RY
    - 5: RZ
    - 6: Normal
- The default value is 0.

### `dlForce`

- A _List of Double_ specifying the vector of vibration force.
- The default value is [1,0,0].

### `dAmplitude`

- A _Double_ specifying the amplitude of vibration force.
- The default value is 1.0.

### `dInitialDisplacement`

- A _Double_ specifying the initial displacement.
- The default value is 0.0.

### `dInitialVelocity`

- A _Double_ specifying the initial displacement.
- The default value is 0.0.

### `dT1`

- A _Double_ specifying the vibration start time of load type Cosine(TLOAD2).
- The default value is 0.0.

### `dT2`

- A _Double_ specifying the vibration end time of load type Cosine(TLOAD2).
- The default value is 1.0.

### `dFrequency`

- A _Double_ specifying the value of frequency in load type Cosine(TLOAD2).
- The default value is 0.0.

### `dPhase`

- A _Double_ specifying the value of phase delay (angle) in load type Cosine(TLOAD2)
- The default value is 0.0.

### `dExponent`

- A _Double_ specifying the value of exponential function in load type Cosine (TLOAD2).
- The default value is 0.0.

### `dPower`

- A _Double_ specifying the value of growth factor in load type Cosine (TLOAD2).
- The default value is 0.0.

### `bFt`

- A _Boolean_ specifying whether to use the time history load as inputted value or table.
- The default value is _False_.

### `dFt`

- A _Double_ specifying the value of the time history load.
- The default value is 0.0.

### `crFtCurve`

- A _Cursor_ specifying the field data of the time history load.
- The default value is _None_.

### `crlTargets`

- A _List of Cursor_ specifying the selected nodes which can be assigned the load condition.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing Load condition
    - If this parameter is used, the specified Load condition will be modified.
    - If it is left None, a new Load condition will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created transient load condition (Solver).

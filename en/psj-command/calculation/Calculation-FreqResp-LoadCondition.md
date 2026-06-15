---
id: Calculation-FreqResp-LoadCondition
title: Calculation.FreqResp.LoadCondition()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Set the steady-state excitation input for frequency response
---

## Description

Set the steady-state excitation input for frequency response.

## Syntax

```psj
Calculation.FreqResp.LoadCondition(...)
```

Macro: [DYNAMIC_FREQ_ANALYSIS_LOAD](/docs/cli/5.1.0/macro/calculation/DYNAMIC_FREQ_ANALYSIS_LOAD)

Ribbon: <menuselection>Calculation &#187; FreqResp &#187; LoadCondition</menuselection>

## Inputs

### `crTargetAnalysis`

- A _Cursor_ specifying the target analysis. A new analysis is created if this parameter is set as None.
- The default value is _None_.

### `crCoordinate`

- A _Cursor_ specifying the output coordinate system.
- The default value is _None_.

### `strName`

- A _String_ specifying the name of load condition to be created.
- The default value is "FRQLOAD1".

### `iLoadDirection`

- An _Integer_ specifying the direction of vibration.
- The default value is 0.

### `dlForce`

- A _List of Double_ specifying the vector of vibration force.
- The default value is [1,0,0].

### `dAmplitude`

- A _Double_ specifying the amplitude of vibration force.
- The default value is 1.0.

### `dDelay`

- A _Double_ specifying the value of time delay (seconds).
- The default value is 0.0.

### `dPhase`

- A _Double_ specifying the value of phase delay (angle).
- The default value is 0.0.

### `bBf`

- A _Boolean_ specifying whether to use frequency-dependent load as Table input.
- The default value is _False_.

### `dBf`

- A _Double_ specifying the value of frequency-dependent load (Bf).
- The default value is 1.0.

### `crBfCurve`

- A _Cursor_ specifying the field data of frequency-dependent load.
- The default value is _None_.

### `bFf`

- A _Boolean_ specifying whether to use frequency-dependent phase as Table input.
- The default value is _False_.

### `dFf`

- A _Double_ specifying the value of Frequency-dependent phase.
- The default value is 0.0.

### `crFfCurve`

- A _Cursor_ specifying the field data of frequency-dependent phase.
- The default value is _None_.

### `bUnitLoad`

- A _Boolean_ specifying whether to create a load and load case under the condition that each selected node is subjected to unit vibration.
- The default value is _False_.

### `bCentrifugalForce`

- A _Boolean_ specifying whether to use the centrifugal force.
- The default value is _False_.

### `crlTargets`

- A _List of Cursor_ specifying the selected nodes which can be assigned the load condition.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing load condition
    - If this parameter is used, the specified load condition will be modified.
    - If it is left None, a new load condition will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created frequency load condition.

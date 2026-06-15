---
id: DYNAMIC_FREQ_ANALYSIS_LOAD
title: DYNAMIC_FREQ_ANALYSIS_LOAD()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Set the frequency response steady-state excitation input for the Gururi.

## Syntax

```psj
DYNAMIC_FREQ_ANALYSIS_LOAD(int AnalysisType, cursor ParentAnalysis, cursor Coordinate, string Name, int LoadDirection, double[] Force, double Amplitude, double Delay, double Phase, bool Bf, double Bf, cursor BfTable, bool Ff, double Ff, cursor FfTable, bool UnitLoad, bool CentrifugalForce, cursor[] TargetNode, cursor Edit)
```

## Inputs

### `1. Int`

Choose type of analysis.

### `2. Cursor`

A Cursor specifying the parent analysis.

### `3. Cursor`

A Cursor specifying the coordinate.

### `4. String`

Name of the load case.

### `5. Int`

Choose the direction of load.

### `6. Double[]`

A Double List specifying the force.

### `7. Double`

A Double specifying amplitude of the force.

### `8. Double`

A Double specifying delay of the force.

### `9. Double`

A Double specifying phase of the force.

### `10. Bool`

Specify whether to input value of B(f) with double format or table format.

### 11. `Double`

A Double specifying value of B(f) with double format.

### `12. Cursor`

A Cursor specifying value of B(f) with table format.

### `13. Bool`

Specify whether to input value of F(f) with double format or table format.

### `14. Double`

A Double specifying value of F(f) with double format.

### `15. Cursor`

A Cursor specifying value of F(f) with table format.

### `16. Bool`

A Boolean specifying whether to use the unit load.

### `17. Bool`

A Boolean specifying whether to use the centrifugal force.

### `18. Cursor[]`

A Cursor List specifying the target node.

### `19. Cursor`

A Cursor specifying an existing load condition.

## Return Code

A Cursor specifying the created gururi load condition.

## Sample Code

```psj
DYNAMIC_FREQ_ANALYSIS_LOAD(0, 3:1, 2:1, "FRQLOAD_1", 0, [1.0,0.0,0.0], 1.0, 0.0, 0.0, False, 1.0, 2:1, False, 0.0, 2:1, False, False, [], 2:1)
```

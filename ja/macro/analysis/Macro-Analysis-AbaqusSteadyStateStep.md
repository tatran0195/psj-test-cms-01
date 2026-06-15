---
id: AbaqusSteadyStateStep
title: AbaqusSteadyStateStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ABAQUS steady state step.

All the parameters except for the setting and process indications are the same among there settings.

## Syntax

```psj
AbaqusSteadyStateStep(string m_strName, string m_strDesp, int m_bAutomatic, int m_maxInc, double m_initSize, double m_minSize, double m_maxSize, double  m_MaxAllowTChange, int m_EndStepT.bChecked,               std::vector<double> m_EndStepT.TList double m_MaxAllowEmissivityChange, int m_Method, int m_MatrixStorage, int m_SolutionTech,	int m_AllowedIters,	double m_AdjustFactor, int m_MaxContactIter,
int m_bNlgeom, double m_TimePeriod, int m_ConvertDscntIter,	int m_Ramp,	int m_ExtrapolateMethod, AbaOutputParam[] m_Output)
```

## Inputs

### `1. String`

name of Abaqus Steady State Step

### `2. String`

description of Abaqus Steady State Step

### `3. Int`

Automatic[0:fixed; 1:automatic;]

### `4. Int`

maximum number of increments

### `5. Double`

initial increment size

### `6. Double`

min increment size

### `7. Double`

max increment size

### `8. Double`

max allow termperature change

### `9. Int`

End Step Time[0:off; 1:on]

### `10. std::vector<Double>`

End Step Time list

### `11. Double`

Max allow emissivity change

### `12. Int`

Equation Solver Method[0:direct;1:iterative]

### `13. int`

Matrix Storage[0:use solver default;1:Unsymmetric;2:Symmetric]

### `14. Int`

SolutionTech[0:full new ton; 1:quasi-newton;2:contact iterations]

### `15. Int`

Number of iterations allowed before the kernal matrix is reformed

### `16. Double`

Adjust Factor

### `17. Int`

Maximum of contact iterations

### `18. Int`

Nlgem[0:off; 1:on;]

### `19. Double`

Time Period

### `20. Int`

Convert severe discontinuity iterations

### `21. Int`

Ramp[0:instantaneous; 1:ramp linearly over step]

### `22. Int`

ExtrapolateMethod[0:none; 1:linear; 2:parabolic]

### `23. AbaOutputParam[]`

output setting

### `30. Cursor`

Indicate AbaqusSteadyStateStep when edit it.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
JPT.Exec('AbaqusSteadyStateStep("Step1", "", 1, 100, 1, 1e-05, 1, 1.79769e+308, 0, [], 0.1, 0, 0, 0, 8, 1, 30, 0, 1, 0, 1, 0, [], 0:0)')
```

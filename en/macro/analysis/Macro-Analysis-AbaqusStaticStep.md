---
id: AbaqusStaticStep
title: AbaqusStaticStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ABAQUS static step.

All the parameters except for the setting and process indications are the same among there settings.

## Syntax

```psj
AbaqusStaticStep(string m_strName, string m_strDescription,	int m_bAutomatic, int m_maxInc, double m_initSize, double m_minSize, double m_maxSize,
int m_Method, int m_MatrixStorage, int m_SolutionTech, int m_AllowedIters, double m_AdjustFactor, int m_MaxContactIter,  int m_Type, double m_dampingfactor,
int m_bUseAdaptive, double m_maxRationofStrainEnergy, int m_bNlgeom, double m_TimePeriod, int m_bIncldHeatEffect, int m_ConvertDscntIter, int m_Ramp,
int m_ExtrapolateMethod, int m_bAcceptByMaxIters, int m_bLongTerm, int m_bPerturbation, int m_FullPlasticRegion.bchecked, string[] m_FullPlasticRegion, AbaOutputParam[] m_Output)
```

## Inputs

### `1. String`

name of Abaqus Static Step

### `2. String`

description of Abaqus Static Step

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

### `8. Int`

Equation Solver Method[0:direct;1:iterative]

### `9. int`

Matrix Storage[0:use solver default;1:Unsymmetric;2:Symmetric]

### `10. Int`

SolutionTech[0:full new ton; 1:quasi-newton;2:contact iterations]

### `11. Int`

Number of iterations allowed before the kernal matrix is reformed

### `12. Double`

Adjust Factor

### `13. Int`

Maximum of contact iterations

### `14. Int`

Automatic static stablization[0:none; 1:specify dissipated energy fraction; 2:specify damping factor;3:use daming factors from previous general step]

### `15. Double`

Damping factor

### `16. Int`

Use adaptive stablization with max.

### `17. Double`

Max radio strain energy

### `18. Int`

Nlgem[0:off; 1:on]

### `19. Double`

Time Period

### `20. Int`

Include adiabatic heating effects[0:off;1:on]

### `21. Int`

Convert severe discontinuity iterations

### `22. Int`

Ramp[0:instantaneous; 1:ramp linearly over step]

### `23. Int`

ExtrapolateMethod[0:none; 1:linear; 2:parabolic]

### `24. Int`

Accept solution after reaching maximum iterations[0:off;1:on]

### `25. Int`

Obtain long-term solution with time-domain material properties[0:off;1:on]

### `26. Int`

Perturbation[0:no;1:yes]

### `27. Int`

Full Plastic Region[0:off;1:on]

### `28. String[] `

Indicate full plastic region.

### `29. AbaOutputParam[]`

output setting

### `30. Cursor`

Indicate AbaqusStaticStep when edit it.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
JPT.Exec('AbaqusStaticStep("Step2", "", 1, 100, 1, 1e-05, 1, 0, 0, 0, 8, 1, 30, 0, 0.0002, 1, 0.05, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, [""], [], 0:0)')
```

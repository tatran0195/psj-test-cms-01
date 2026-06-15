---
id: LbcContactShareFaceAdvcCr
title: LbcContactShareFaceAdvcCr()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create contact at shared face for advc

## Syntax

```psj
LbcContactShareFaceAdvcCr(String m_strName,int m_iType,int slidingType,int InitialState,
    double initialStateTol,double kineticFrictionCoef,double exponentialCoef,
    int Behavior,double Clearance,int adjust2Clearance,double interference,
    int adjust2Interference,int autoShrink,int badvAdjust,double adjustValue,
    double FrictionCoef,double MaxShear,double elastic_slip,double slip_tolerance,
    double searchWidth,double SearchGap,double searchDepth,double critialPenetration,
    int estimation_impact_time,int formula,int constraintType,int iDataType,
    int m_TypeId,bool m_btemperatureDependency,int m_idependencies,TSheetd m_table,
    int stabilized,int type,double residual_factor,double effective_dist,double cn,
    double ct,Cursor[] m_taCClearance,Cursor[] m_taTarget,Cursor m_crEdit,
    double searchAngle,int constraintType_explicit,double penaltyFact,
    double penaltyFactExplicit,int m_Color,int m_iAlg,int m_iMethod,
    int iTypeId_pressure, bool bPressureTemperatureDependency, int iPressureDependencies,
    double[] tshPressureData, int iTyingType)
```

## Inputs

### `1. String`

name of contact

### `2. Int`

contact type[0:General; 1:Tied]

### `3. Int`

Sliding Type [0: blank; 1: Finite sliding; 2: Small sliding; 3: Not sliding]

### `4. Int`

initial state[0:blank; 1:Auto; 2:Open; 3:Close]

### `5. Double`

initial state tol

### `6. Double`

kinetic friction coef

### `7. Double`

exponential coef

### `8. Int`

behavior[0:blank; 1:Separation; 2:No Separation]

### `9. Double`

clearance

### `10. Int`

adjust to clearance[0:blank; 1:Yes; 2:No]

### `11. Double`

interference

### `12. Int`

adjust to Interference[0:blank; 1:Yes; 2:No]

### `13. Int`

auto shrink[0:blank; 1:Yes; 2:No]

### `14. Int`

adjust[0:blank; 1:Yes; 2:Value]

### `15. Double`

adjust value

### `16. Double`

friction coef

### `17. Double`

max shear stress

### `18. Double`

elastic slip

### `19. Double`

slip tolerance

### `20. Double`

search width

### `21. Double`

search gap

### `22. Double`

search depth

### `23. Double`

critial penetration

### `24. Int`

impact time estimation[0:blank; 1:Yes; 2:No]

### `25. Int`

formulation[0:blank; 1:node to segment; 2:segment to segment]

### `26. Int`

constraint type[0:blank; 1:Lagrange; 2:Penalty]

### `27. Int`

thermal conductance type[0:blank; 1:Clearance Dependence]

### `28. Int`

type[0:CLEARANCE_DEPENDENCY; 1:PRESSURE_DEPENDENCY]

### `29. Bool`

if use temperature dependent data

### `30. Int`

number of field variables

### `31. TSheetd`

table of clearance dependency

### `32. Int`

if stabilization parameter defined[0:not defined; 1:defined]

### `33. Int`

type[0:blank; 1:stiffness; 2:Area]

### `34. Double`

residual factor

### `35. Double`

effective distance

### `36. Double`

normal factor cn

### `37. Double`

normal factor ct

### `38. Cursor[]`

clearance list

### `39. Cursor[]`

targets

### `40. Cursor`

edit cursor

### `41. Double`

Search Angle Value

### `42. Int`

Constraint for Explicit type [0:blank; 1:kinematic; 2:penalty]

### `43. Double`

Penalty Scale Factor

### `44. Double`

Penalty Scale Factor for Explicit

### `45. Int`

contact maker color

### `46. Int`

algorithm[0:face to face]

### `47. Int`

method type (specify 3)

### `48. Int`

pressure type ID

### `49. Bool`

Flag whether to use temperature dependent data for pressure dependency.

### `50. Int`

The number of pressure dependency

### `51. double[]`

table of pressure dependency.

### `52. int`

tying type [0:blank, 1:Rigid, 2:Shear Tying]

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
LbcContactShareFaceAdvcCr([6:49], "ContactADVC_1", 0, 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 0, 1.79769e+308, 0, 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 0, 0, 0, 1, 0, 0, [1, 2, 0, 0], 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, [], 0:0, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 16711680, 0, 3, 2, 0, 0, [1, 2, 0, 0], 0)
```

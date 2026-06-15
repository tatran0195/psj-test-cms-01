---
id: ContactManualFaceADVC
title: ContactManualFaceADVC()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create contact for advc

## Syntax

```psj
ContactManualFaceADVC(cursor[] m_crlMasterFaces, cursor[] crlSlaveFaces,
    string m_strName,int m_iType,int slidingType,int InitialState,
    double initialStateTol,double kineticFrictionCoef,double exponentialCoef,
    int Behavior,double Clearance,int adjust2Clearance,double interference,
    int adjust2Interference,int autoShrink,int badvAdjust,double adjustValue,
    double FrictionCoef,double MaxShear,double elastic_slip,double slip_tolerance,
    double searchWidth,double SearchGap,double searchDepth,double critialPenetration,
    int estimation_impact_time,int formula,int constraintType,int iDataType,
    int m_TypeId,bool m_btemperatureDependency,int m_idependencies,TSheetd m_table,
    int stabilized,int type,double residual_factor,double effective_dist,double cn,
    double ct,Cursor[] m_taCClearance, Cursor m_crEdit,
    double searchAngle,int constraintType_explicit,double penaltyFact,
    double penaltyFactExplicit,int m_Color,int m_iAlg,int m_iMethod,
    int iTypeId_pressure, bool bPressureTemperatureDependency, int iPressureDependencies,
    double[] tshPressureData, int iTyingType)
```

## Inputs

### `1. Cursor[]`

Mastar faces

### `2. Cursor[]`

Slave faces

### `3. String`

name of contact

### `4. Int`

contact type[0:General; 1:Tied]

### `5. Int`

Sliding Type [0: blank; 1: Finite sliding; 2: Small sliding; 3: Not sliding]

### `6. Int`

initial state[0:blank; 1:Auto; 2:Open; 3:Close]

### `7. Double`

initial state tol

### `8. Double`

kinetic friction coef

### `9. Double`

exponential coef

### `10. Int`

behavior[0:blank; 1:Separation; 2:No Separation]

### `11. Double`

clearance

### `12. Int`

adjust to clearance[0:blank; 1:Yes; 2:No]

### `13. Double`

interference

### `14. Int`

adjust to Interference[0:blank; 1:Yes; 2:No]

### `15. Int`

auto shrink[0:blank; 1:Yes; 2:No]

### `16. Int`

adjust[0:blank; 1:Yes; 2:Value]

### `17. Double`

adjust value

### `18. Double`

friction coef

### `19. Double`

max shear stress

### `20. Double`

elastic slip

### `21. Double`

slip tolerance

### `22. Double`

search width

### `23. Double`

search gap

### `24. Double`

search depth

### `25. Double`

critial penetration

### `26. Int`

impact time estimation[0:blank; 1:Yes; 2:No]

### `27. Int`

formulation[0:blank; 1:node to segment; 2:segment to segment]

### `28. Int`

constraint type[0:blank; 1:Lagrange; 2:Penalty]

### `29. Int`

thermal conductance type[0:blank; 1:Clearance Dependence]

### `30. Int`

type[0:CLEARANCE_DEPENDENCY; 1:PRESSURE_DEPENDENCY]

### `31. Bool`

if use temperature dependent data

### `32. Int`

number of field variables

### `33. TSheetd`

table of clearance dependency

### `34. Int`

if stabilization parameter defined[0:not defined; 1:defined]

### `35. Int`

type[0:blank; 1:stiffness; 2:Area]

### `36. Double`

residual factor

### `37. Double`

effective distance

### `38. Double`

normal factor cn

### `39. Double`

normal factor ct

### `40. Cursor[]`

clearance list

### `41. Cursor`

edit cursor

### `42. Double`

Search Angle Value

### `43. Int`

Constraint for Explicit type [0:blank; 1:kinematic; 2:penalty]

### `44. Double`

Penalty Scale Factor

### `45. Double`

Penalty Scale Factor for Explicit

### `46. Int`

contact maker color

### `47. Int`

algorithm[0:face to face]

### `48. Int`

method type (specify 0)

### `49. Int`

pressure type ID

### `50. Bool`

Flag whether to use temperature dependent data for pressure dependency.

### `51. Int`

The number of pressure dependency

### `52. double[]`

table of pressure dependency.

### `53. int`

tying type [0:blank, 1:Rigid, 2:Shear Tying]

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ContactManualFaceADVC([6:24], [6:49], "ContactADVC_1", 1, 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 0, 0, 1.79769e+308, 0, 0, 1, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 0, 0, 1, 1, 0, 0, [1, 2, 0, 0], 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, [], 0:0, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 65280, 0, 0, 2, 0, 0, [1, 2, 0, 0], 0)
```

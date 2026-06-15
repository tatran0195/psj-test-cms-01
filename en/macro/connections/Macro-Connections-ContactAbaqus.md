---
id: ContactAbaqus
title: ContactAbaqus()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Contact for ABAQUS

## Syntax

```psj
ContactAbaqus(String m_strName,int m_iMethod,int m_iType,int m_iAlg,double AdjustVal,
    double ExtensionZone,double MaxPenetration,int SmallSliding,double Smooth,
    int FrictionType,double FrictionCoef1,double FrictionCoef2,double ShearLimit,
    double SlipTol,double StaticFrictionCoef,double KineticFrictionCoef,double DecayCoef,
    int bAdjust,double PositonTol,int formula,int tie,int m_type,int m_bAllowSeparation,
    double m_slope,TSheetd m_table,int m_clearanceType,int m_TypeId,
    bool m_btemperatureDependency,int m_idependencies,TSheetd m_table,int m_TypeId,
    bool m_btemperatureDependency,int m_idependencies,TSheetd m_table,Cursor[] m_taTarget,
    Cursor m_crEditCursor,int m_Color)
```

## Inputs

### `1. String`

name of contact

### `2. Int`

method type[0:MANUAL_FACE; 1:MANUAL_GROUP; 2:BY_GROUP_MATRIX; 3:SHARE_FACE; 4:AUTO_SETTING; 5:METHOD_UNKNOWN]

### `3. Int`

contact type[0:CONTACT_GENERAL; 1:CONTACT_TIED; 2:CONTACT_ALL_SELF]

### `4. Int`

algorithm[0:face to face; 1:node to face]

### `5. Double`

adjust value

### `6. Double`

extension Zone

### `7. Double`

max pretension

### `8. Int`

small sliding[0:Off; 1:On]

### `9. Double`

smooth

### `10. Int`

friction type[0:None; 1:General; 2:Lagrange; 3:Rough; 4:Static and Kinematic]

### `11. Double`

friction coef1

### `12. Double`

friction coef2

### `13. Double`

shear limit

### `14. Double`

slip tolerance

### `15. Double`

static friction coef

### `16. Double`

kinetic friction coef

### `17. Double`

decay coef

### `18. Int`

adjust[0:No; 1:Yes]

### `19. Double`

position tol

### `20. Int`

formulation[0:Node to Surface; 1:Surface to Surface]

### `21. Int`

TIE[0:No]

### `22. Int`

pressure-Overclosure type[0:Hard Contact; 1:Exponential; 2:Linear; 3:Tabular]

### `23. Int`

allow separation

### `24. Double`

contact stiffness

### `25. TSheetd`

table of pressure-Overclosure

### `26. Int`

thermal conductance type[0:Clearance Dependence; 1:Pressure Dependence; 2:Clearance and Pressure Dependence]

### `27. Int`

type[0:CLEARANCE_DEPENDENCY; 1:PRESSURE_DEPENDENCY]

### `28. Bool`

if use temperature dependent data

### `29. Int`

number of field variables

### `30. TSheetd`

table of clearance dependency

### `31. Int`

type[0:CLEARANCE_DEPENDENCY; 1:PRESSURE_DEPENDENCY]

### `32. Bool`

if use temperature dependent data

### `33. Int`

number of field variables

### `34. TSheetd`

table of pressure dependency

### `35. Cursor[]`

targets

### `36. Cursor`

edit cursor

### `37. Int`

contact maker color

## Return Code

**1** - The function is executed correctly.

**0** - Cannot execute.

## Sample Code

```psj
ContactAbaqus("Test",1,1,1,0.001,0.001,0.001,1,0.001,1,0.001,0.001,0.001,0.001,
    0.001,0.001,0.001,1,0.001,1,1,1,1,0.001,,1,1,1,1,,1,1,1,,[1:11,2:12],1:11,1)
```

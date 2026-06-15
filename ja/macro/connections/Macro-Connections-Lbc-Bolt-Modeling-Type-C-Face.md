---
id: Lbc_Bolt_Modeling_Type_C_Face
title: Lbc_Bolt_Modeling_Type_C_Face()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Lbc TypeC Bolt Face method()

## Syntax

```psj
Lbc_Bolt_Modeling_Type_C_Face(Cursor taFaceCur1,Cursor taFaceCur2,string strRbeName,
    double dPlaneTol,double dMaxBoltHeight,double dMaxDiameter,double dMinDiameter,
    int nConnectionType,int nCoincidentNodes, double dTolerance, int nGround,double dStiffnessX,
    double dStiffnessY,double dStiffnessZ, int nLocalStiffUnit, double dRotateStiffX,
    double dRotateStiffY,double dRotateStiffZ, int nLocalRotateStiffUnit, double dDampCoef,
    double dStressCoef,Cursor curCoord,int nTopRbeType,double dTopPitch,double dTopRemoveDepth,
    int nBotRbeType,double dBotPitch,double dBotRemoveDepth)
```

## Inputs

### `1. Cursor[]`

circular edges in top side

### `2. Cursor[]`

circular edges in bottom side

### `3. String`

name of Rbe

### `4. Double`

Plane tolerance angle around the selected edge.

### `5. Double`

Maximum distance between top and bottom rbe

### `6. Double`

Maximum distance between top and bottom rbe

### `7. Double`

Maximum diameter range of bolt hole

### `8. Int`

connection type,0=Spring,1=Rbe2

### `9. Int`

Coincident Nodes

### `10. Double`

Tolerance

### `11. Int`

Ground

### `12. Double`

Stiffness X value

### `13. Double`

Stiffness Y value

### `14. Double`

Stiffness Z value

### `15. Int`

### `16. Double`

Rotation Stiffness X value

### `17. Double`

Rotation Stiffness Y value

### `18. Double`

Rotation Stiffness Z value

### `19. Int`

Local Rotate Stiffness Unit

### `20. Double`

Damping Coefficient

### `21. Double`

Stress Coefficient

### `22. Cursor`

referred coordinate system, NULL is global

### `23. Int`

top Rbe type,0=RBE3,1=Rbe2

### `24. Double`

Top bolt hole rbe range

### `25. Double`

top slave nodes in this range will not be considered

### `26. Int`

bottom Rbe type,0=RBE3,1=Rbe2

### `27. Double`

bottom bolt hole rbe range

### `28. Double`

bottom slave nodes in this range will not be considered

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Lbc_Bolt_Modeling_Type_C_Face([6:60], [6:49], "RBE", 20.0002, 0.1, 0.1, 0.001,
    0, 1, 2.22507e-308, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308,
    1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 0:0, 0, 0.01, 0, 0, 0.01, 0)
```

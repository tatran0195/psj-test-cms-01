---
id: Lbc_Bolt_Modeling_Type_C_Edge
title: Lbc_Bolt_Modeling_Type_C_Edge()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Lbc TypeC Bolt Edge method

## Syntax

```psj
Lbc_Bolt_Modeling_Type_C_Edge(Cursor taEdgeCur1,Cursor taEdgeCur2,string strRbeName,
    double dPlaneTol,double dMaxBoltHeight,int nConnectionType, int nCoincidentNodes,
    double dTolerance, int nGround,double dStiffnessX,double dStiffnessY,double dStiffnessZ,
    int nLocalStiffUnit,double dRotateStiffX,double dRotateStiffY,double dRotateStiffZ,
    int nLocalRotateStiffUnit, double dDampCoef, double dStressCoef,Cursor curCoord,
    int nTopRbeType,double dTopPitch,double dTopRemoveDepth,int nBotRbeType,double dBotPitch,
    double dBotRemoveDepth)
```

## Inputs

### `1. Cursor[]`

faces with circular edges in top side

### `2. Cursor[]`

faces with circular edges in bottom side

### `3. String`

name of Rbe

### `4. Double`

Plane tolerance angle around the selected edge.

### `5. Double`

Maximum distance between top and bottom rbe

### `6. Int`

connection type,0 = Spring,1 = Rbe2

### `7. Int`

Coincident Nodes

### `8. Double`

Tolerance

### `9. Int`

Ground

### `10. Double`

Stiffness X value

### `11. Double`

Stiffness Y value

### `12. Double`

Stiffness Z value

### `13. Int`

Local Stiffness Unit

### `14. Double`

Rotation Stiffness X value

### `15. Double`

Rotation Stiffness Y value

### `16. Double`

Rotation Stiffness Z value

### `17. Int`

Local Rotate Stiffness Unit

### `18. Double`

Damping Coefficient

### `19. Double`

Stress Coefficient

### `20. Cursor`

referred coordinate system, NULL is global

### `21. Int`

top Rbe type,0=RBE3,1=Rbe2

### `22. Double`

Top bolt hole rbe range

### `23. Double`

top slave nodes in this range will not be considered

### `24. Int`

bottom Rbe type,0=RBE3,1=Rbe2

### `25. Double`

bottom bolt hole rbe range

### `26. Double`

bottom slave nodes in this range will not be considered

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Lbc_Bolt_Modeling_Type_C_Edge([5:66319], [5:10000031], "RBE", 20, 0.1, 0, 1, 2.22507e-308,
    0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308,
    0, 1.79769e+308, 1.79769e+308, 0:0, 0, 0.01, 0, 0, 0.01, 0)
```

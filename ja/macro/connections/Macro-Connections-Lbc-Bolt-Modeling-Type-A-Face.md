---
id: Lbc_Bolt_Modeling_Type_A_Face
title: Lbc_Bolt_Modeling_Type_A_Face()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Lbc TypeA Bolt Face method

## Syntax

```psj
Lbc_Bolt_Modeling_Type_A_Face(Cursor taFaceCur1,Cursor taFaceCur2,string strRbeName,
    string strBarName,int nShaftType,Cursor curBarProperty,double dPlaneTol,double dMaxBoltHeight,
    double dMaxDiameter,double dMinDiameter,bool bPretensionLoad,int nSolverType,
    double dForceValue,int nPreTenDof,Cursor curCoord,int nBoltFixLength,int nTopSlot,
    double dRBE1,int nBotSlot,double dRBE2,double dScale1, bool IsCreate2ADVCStaticProcessForFixLength)
```

## Inputs

### `1. Cursor[]`

faces with circular edges in top side

### `2. Cursor[]`

faces with circular edges in bottom side

### `3. String`

name of Rbe

### `4. String`

name of BarBody

### `5. Int`

Connection type, 0: cbar, 1: rbe2

### `6. Cursor`

bar property cursor,

### `7. Double`

Plane tolerance angle around the selected edge.Used in finding slave nodes around the selected edge

### `8. Double`

Maximum distance between top and bottom rbe

### `9. Double`

Maximum diameter range of bolt hole

### `10. Double`

Minimum diameter range of bolt hole

### `11. Bool`

PretensionLoad flag,0=false,1=true

### `12. Int`

Type of pretension Solver,0=All option pretension,1=Abaqus pretension

### `13. Double`

force value.Used in pretension connection

### `14. Int`

Pretension DoF at target

### `15. Cursor`

referred coordinate system, NULL is global

### `16. Int`

BoltFixLength used in Pretension

### `17. Int`

top side slot bolt flag,0=false,1=true

### `18. Double`

top rbe slave node diameter range

### `19. Int`

bottom side slot bolt flag,0=false,1=true

### `20. Double`

bottom rbe slave node diameter range

### `21. Double`

scale value for showing range,used in preview

### `22. Bool`

Option ADVC Static process, 0: No, 1:Yes

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Lbc_Bolt_Modeling_Type_A_Face([6:60], [6:49], "RBE", "Bar_1", 1, 0:0, 20.0002, 0.1,
    0.1, 0.001, 0, 0, 0, 0, 0:0, 0, 1, 0.06, 1, 0.06, 3, 0)
```

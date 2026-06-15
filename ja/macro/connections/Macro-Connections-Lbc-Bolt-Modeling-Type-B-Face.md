---
id: Lbc_Bolt_Modeling_Type_B_Face
title: Lbc_Bolt_Modeling_Type_B_Face()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Lbc TypeB Bolt Face method

## Syntax

```psj
Lbc_Bolt_Modeling_Type_B_Face(Cursor taFaceCur1,Cursor taFaceCur2,string strRbeName,
    string strBarName,int nShaftType,Cursor curBarProperty,double dPlaneTol,
    double dMaxBoltHeight,double dMaxDiameter,double dMinDiameter,bool bPretensionLoad,
    int nSolverType,double dForceValue,int nPreTenDof,Cursor curCoord,
    int nBoltFixLength,int nTopSlot,double dRBE1,double dRBE2,double dBotDtDia,
    double dPitch,int nBotRbeConnType,double dScale1, bool IsCreate2ADVCStaticProcessForFixLength)
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

bar property cursor

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

### `19. Double`

Always zero.No need to consider here

### `20. Double`

bottom bolt hole diameter.works with zero as default.User can specify value.

### `21. Double`

bottom Rbe Pitch distance

### `22. Int`

bottom Rbe connection type,0=down,1=up,2=center

### `23. Double`

scale value for showing range,used in preview

### `24. Bool`

Option ADVC Static process, 0: No, 1:Yes

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Lbc_Bolt_Modeling_Type_B_Face([6:60], [6:49], "RBE", "Bar_1", 0, 0:0, 20.0002, 0.1, 0.1,
    0.001, 0, 0, 0, 0, 0:0, 0, 1, 0.06, 0, 0, 0.01, 0, 3, 0)
```

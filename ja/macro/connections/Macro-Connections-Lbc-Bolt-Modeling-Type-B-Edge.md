---
id: Lbc_Bolt_Modeling_Type_B_Edge
title: Lbc_Bolt_Modeling_Type_B_Edge()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Lbc TypeB Bolt Edge method

## Syntax

```psj
Lbc_Bolt_Modeling_Type_B_Edge(Cursor taEdgeCur1,TCursor taEdgeCur2,string strRbeName,
    string strBarName,int nShaftType,Cursor curBarProperty,double dPlaneTol,
    double dMaxBoltHeight,bool bPretensionLoad,int nSolverType,double dForceValue,
    int nPreTenDof,Cursor curCoord,int nBoltFixLength,int nTopSlot,double dRBE1,
    double dRBE2,double dBotDtDia,double dPitch,int nBotRbeConnType, bool IsCreate2ADVCStaticProcessForFixLength)
```

## Inputs

### `1. Cursor[]`

circular edges in top side

### `2. Cursor[]`

circular edges in bottom side

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

### `9. Bool`

PretensionLoad flag,0=false,1=true

### `10. Int`

Type of pretension Solver,0=All option pretension,1=Abaqus pretension

### `11. Double`

force value.Used in pretension connection

### `12. Int`

Pretension DoF at target

### `13. Cursor`

referred coordinate system, NULL is global

### `14. Int`

BoltFixLength used in Pretension

### `15. Int`

top side slot bolt flag,0=false,1=true

### `16. Double`

top rbe slave node diameter range

### `17. Double`

Always zero.No need to consider here

### `18. Double`

bottom bolt hole diameter

### `19. Double`

bottom Rbe Pitch distance

### `20. Int`

bottom Rbe connection type,0=down,1=up,2=center

### `21. Bool`

Option ADVC Static process, 0: No, 1:Yes

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Lbc_Bolt_Modeling_Type_B_Edge([5:66319], [5:10000031], "RBE", "Bar_2", 0, 0:0, 20,
    0.1, 0, 0, 0, 0, 0:0, 0, 0, 0.0081206, 0, 0.0027248, 0.01, 0, 0)
```

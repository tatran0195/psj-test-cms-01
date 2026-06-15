---
id: EnforcedAcceleration
title: EnforcedAcceleration()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create enforced acceleration

## Syntax

```psj
EnforcedAcceleration(String m_strName,int dwDof,double fVel[0],double fVel[1],double fVel[2],
    double fVel[3],double fVel[4],double fVel[5],Cursor curCoord,int enArrowDir,Cursor crTable,
    Cursor crNodeSet,double m_fPhase,double m_fDelay,Cursor crPhaseTable,BOOL bExport,
    Cursor crMEExport[0],Cursor crMEExport[1],Cursor crMEExport[2],Cursor crMEExport[3],
    Cursor crMEExport[4],Cursor crMEExport[5],int iAcUnit,int iRotUnit,Cursor[] m_taTarget,Cursor m_crEdit)
```

## Inputs

### `1. String`

name of enforced acceleration

### `2. Int`

dof

### `3. Double`

translation x

### `4. Double`

translation y

### `5. Double`

translation z

### `6. Double`

rotate x

### `7. Double`

rotate y

### `8. Double`

rotate z

### `9. Cursor`

coordinate system

### `10. Int`

arrow direction[0:Start at Node; 1:End at Node]

### `11. Cursor`

select table

### `12. Cursor`

node set table

### `13. Double`

phase

### `14. Double`

delay

### `15. Cursor`

phase table

### `16. Bool`

if export defined

### `17. Cursor`

translation x

### `18. Cursor`

translation y

### `19. Cursor`

translation z

### `20. Cursor`

rotation x

### `21. Cursor`

rotation y

### `22. Cursor`

rotation z

### `23. Int`

unit of acceleration

### `24. Int`

unit of rotate

### `25. Cursor[]`

targets

### `26. Cursor`

edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
EnforcedAcceleration("EnforcedAcceleration1", 63, 0.001, 0.002, 0.003, 3, 2, 1,0:0, 0, 0:0,
    0:0, 1.79769e+308, 1.79769e+308, 0:0, 0, 0:0, 0:0, 0:0, 0:0, 0:0, 0:0, 0, 0, [6:26], 0:0)
```

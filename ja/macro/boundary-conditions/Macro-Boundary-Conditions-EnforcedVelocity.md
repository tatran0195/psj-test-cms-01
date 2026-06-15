---
id: EnforcedVelocity
title: EnforcedVelocity()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create enforced velocity

## Syntax

```psj
EnforcedVelocity(String m_strName,int dwDof,double fVel[0],double fVel[1],double fVel[2],
    double fVel[3],double fVel[4],double fVel[5],Cursor curCoord,int enArrowDir,
    Cursor crTable,Cursor crNodeSet,double m_fPhase,double m_fDelay,Cursor crPhaseTable,
    int m_iVelUnit,int m_iRotUnit,bool bExport,Cursor iExportData[0],Cursor iExportData[1],
    Cursor iExportData[2],Cursor iExportData[3],Cursor iExportData[4],Cursor iExportData[5],
    Cursor[] m_taTarget,Cursor m_crEdit,bool m_bIfCreate2ADVCStaticProcessForBoltFixLength)
```

## Inputs

### `1. String`

name of enforced velocity

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

### `16. Int`

unit of velocity

### `17. Int`

unit of rotate

### `18. Bool`

if export defined

### `19. Cursor`

translation x

### `20. Cursor`

translation y

### `21. Cursor`

translation z

### `22. Cursor`

rotation x

### `23. Cursor`

rotation y

### `24. Cursor`

rotation z

### `25. Cursor[]`

targets

### `26. Cursor`

edit cursor

### `27. Bool`

If Create 2 ADVC Static Process For Bolt Fix Length

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
EnforcedVelocity("EnforcedVelocity1", 63, 0.001, 0.002, 0.003, 1, 2, 3, 0:0, 0,0:0, 0:0,
    1.79769e+308, 1.79769e+308, 0:0, 0, 0, 0, 0:0, 0:0, 0:0, 0:0, 0:0, 0:0, [6:26], 0:0, 0)
```

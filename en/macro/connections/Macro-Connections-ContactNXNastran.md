---
id: ContactNXNastran
title: ContactNXNastran()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create contact for Nastran

## Syntax

```psj
ContactNXNastran(String m_strName,int iType,int iAlg,double dNorPenFactor,
    double dTanPenFactor,double dForceConTol,double dMaxForceIter,double dMaxStaIter,
    double dChangeNum,double dMinContactPer,int iShellThickness,int iContactStatus,
    int iInitGapPenetra,int iRegionRefine,int iEvaluPts,double dMinSearDist,
    double dMaxSearDist,double dFricCoef,double dSearchDist,double dPenatlyFactor,
    int iShellOffset,Cursor[] m_taTarget,Cursor m_crEdit,int m_Color,int m_iMethod)
```

## Inputs

### `1. String`

name of contact

### `2. Int`

contact type[0:General; 1:Tied]

### `3. Int`

algorithm[0:face to face]

### `4. Double`

normal penalty factor

### `5. Double`

tangential penalty factor

### `6. Double`

force convergence tol

### `7. Double`

max force iterations

### `8. Double`

max status iterations

### `9. Double`

change number

### `10. Double`

min contact percentage

### `11. Int`

shell thickness[0:Include; 1:Not Include]

### `12. Int`

contact status[0:Previous; 1:Initial]

### `13. Int`

initial gap or penetration[0:No Correction; 1:Reset Penetration; 2:Reset Both]

### `14. Int`

region refine[0:Refine; 1:Not Refine]

### `15. Int`

evaluation points[0:Low; 1:Mid; 2:High]

### `16. Double`

min search dist

### `17. Double`

max search dist

### `18. Double`

friction coef

### `19. Double`

search dist

### `20. Double`

penalty factor

### `21. Int`

shell thickness[0:Include; 1:Not Include]

### `22. Cursor[]`

targets

### `23. Cursor`

edit cursor

### `24. Int`

contact maker color

### `25. Int`

method type[0:MANUAL_FACE; 1:MANUAL_GROUP; 2:BY_GROUP_MATRIX; 3:SHARE_FACE; 4:AUTO_SETTING; 5:METHOD_UNKNOWN]

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ContactNXNastran("ContactNXNastran_1", 0, 0, 10, 1, 0.01, 10, 20, 0.02, 100, 0, 0, 0,
    0, 1, 0, 0.01, 0, 10, 1, 0, [79:1-79:2], 0:0, 16711680, 1)
```

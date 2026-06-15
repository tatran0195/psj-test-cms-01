---
id: ContactMSCNastran
title: ContactMSCNastran()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create contact for nastran

## Syntax

```psj
ContactMSCNastran(String m_strName,int iType,int iAlg,double dRROR,double dFNTOL,
    double dFRIC,double dCINTERF,int iISEARCH,int iICOORD,double dFRLIM,double dBIAS,
    int iISTYP,int faceSlave, int faceMaster, int slaveEdge,int masterEdge,
    Cursor[] m_taTarget,Cursor m_crEdit,int m_Color,int m_iMethod)
```

## Inputs

### `1. String`

name of contact

### `2. Int`

contact type[0:General; 1:Tied; 2:Tied & MaIntain Gap; 3:Tied & Full moment; 4:Tied & Full moment & MaIntain Gap]

### `3. Int`

algorithm[0:face to face]

### `4. Double`

Touching Distance Range

### `5. Double`

Separation Force

### `6. Double`

Friction Coefficient

### `7. Double`

Interference Closure

### `8. Int`

Searching Order[0:Double; 1:Slave to Master; 2:Program decision]

### `9. Int`

Modify coordinates[0:None; 1:Modify position; 2:Delay sliding; 3:Both effect]

### `10. Double`

Friction stress limit

### `11. Double`

Tolerance Bias Factor

### `12. Int`

Condition check[0:Double Side; 1:Optimized]

### `13. Int`

Shell element face Slave\[1:Top&Btm Thk. offset; 2:Btm w/ Thk. offset; 3:Btm w/o Thk. offset; 4:Top w/ Thk. offset; 5:Top w/o Thk. Offset; 6:Top&Btm w/o Thk. offset\]

### `14. Int`

Shell element face Master\[1:Top&Btm Thk. offset; 2:Btm w/ Thk. offset; 3:Btm w/o Thk. offset; 4:Top w/ Thk. offset; 5:Top w/o Thk. Offset; 6:Top&Btm w/o Thk. offset\]

### `15. Int`

Beam/Bar Shell Elem. Edge Slave\[1:Beam/Bar Edge only; 10:Free&Hard Edge only; 11:Both\]

### `16. Int`

Beam/Bar Shell Elem. Edge Master\[1:Beam/Bar Edge only; 10:Free&Hard Edge only; 11:Both\]

### `17. Cursor[]`

targets

### `18. Cursor`

edit cursor

### `19. Int`

contact maker color

### `20. Int`

method type[0:MANUAL_FACE; 1:MANUAL_GROUP; 2:BY_GROUP_MATRIX; 3:SHARE_FACE; 4:AUTO_SETTING; 5:METHOD_UNKNOWN]

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ContactMSCNastran("ContactMSCNastran_1", 0, 0, 0.0005, 1.79769e+308, 1.79769e+308,
    1.79769e+308, 2147483647, 2147483647, 1.79769e+308, 1.79769e+308, 2147483647,
    0, 0, 0, 0, [79:1-79:2], 0:0, 16711680, 1)
```

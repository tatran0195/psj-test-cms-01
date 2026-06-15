---
id: AdvcSpectrumProcess
title: AdvcSpectrumProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC response spectrum process

## Syntax

```psj
AdvcSpectrumProcess(string m_strName,string strRefEigenDir,double dRefLowFreq,
    double dRefHighFreq,int iPropMethod,int iSpttype,double dSptFactor[0],
    cursor crSpt[0],double dSptFactor[1],cursor crSpt[1],double dSptFactor[2],
    cursor crSpt[2],cursor m_crEdit,list m_LoadNodeList,list m_LoadCaseNodeList,
    list m_LoadNodeContactList,list m_OutputParamList,int m_iRefType,
    String m_strRefPath,list m_ReferenceResultList)
```

## Inputs

### `1. String`

name of ADVC response spectrum process

### `2. String`

the path of result file

### `3. Double`

refer low frequency

### `4. Double`

refer high frequency

### `5. Int`

method[0:ABS; 1:SRSS]

### `6. Int`

spectrum type[0:Displacement; 1:Velocity; 2:Acceleration]

### `7. Double`

factor in CO x

### `8. Cursor`

spectrum cursor in CO x

### `9. Double`

factor in CO y

### `10. Cursor`

spectrum cursor in CO y

### `11. Double`

factor in CO z

### `12. Cursor`

spectrum cursor in CO z

### `13. Cursor`

edit cursor

### `14. List`

status of Loads

### `15. List`

status of Load Cases

### `16. List`

status and other data of Contacts

### `17. List`

output parameters

### `18. Int`

reference result type[0:Temperature Load; 1:Stress]

### `19. String`

path of reference result

### `20. List`

data of reference result

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcSpectrumProcess("Test",,0.001,0.001,1,1,0.001,1:11,0.001,1:11,0.001,1:11,1:11,,,,,1,"Test",)
```

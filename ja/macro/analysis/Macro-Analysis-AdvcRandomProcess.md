---
id: AdvcRandomProcess
title: AdvcRandomProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC random response process

## Syntax

```psj
AdvcRandomProcess(string m_strName,string strRefEigenDir,double dRefLowFreq,
    double  dRefHighFreq,cursor crModalDampingRatio,cursor crExcitationFreq,
    Bool bAutoFreqInterval,double dMaxFreq,double dMinFreq,int iNumFreqPoint,
    double  dBiasParam,int iPropMethod,int iPSDtype,int iPSDdir,cursor crPSDLoad,
    double  dPSDFactor,double dGravityAccel,int iOutputEigenFreqStep,
    cursor m_crEdit,list m_LoadNodeList,list m_LoadCaseNodeList,
    list m_LoadNodeContactList,list m_OutputParamList,int m_iRefType,
    string m_strRefPath,list m_ReferenceResultList)
```

## Inputs

### `1. String`

name of ADVC random response process

### `2. String`

the path of result file

### `3. Double`

refer low frequency

### `4. Double`

refer high frequency

### `5. Cursor`

modal damping ratio

### `6. Cursor`

Excitation Frequencies

### `7. Bool`

if auto frequency Interval

### `8. Double`

Max Frequency

### `9. Double`

Min Frequency

### `10. Int`

Number Frequency Point

### `11. Double`

Bias Parameter

### `12. Int`

MultiPointExcitation_Correlation[0:Uncorrelated; 1:Correlated]

### `13. Int`

PSD type[0:Displacement; 1:Velocity; 2:Acceleration]

### `14. Int`

PSD direction[0:X; 1:Y; 2:Z]

### `15. Cursor`

PSD Load

### `16. Double`

PSD Amplitude_Scale_Factor

### `17. Double`

Gravity Acceleration

### `18. Int`

Output Frequency Step[-1:default; 0:No; 1:Yes]

### `19. Cursor`

edit cursor

### `20. List`

status of Loads

### `21. List`

status of Load Cases

### `22. List`

status and other data of Contacts

### `23. List`

output parameters

### `24. Int`

reference result type[0:Temperature Load; 1:Stress]

### `1. String`

path of reference result

### `25. List`

data of reference result

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcRandomProcess("Test",,0.001,0.001,1:11,1:11,1,0.001,0.001,1,0.001,
    1,1,1,1:11,0.001,0.001,1,1:11,,,,,1,"Test",)
```

---
id: AdvcModalFreqRespProcess
title: AdvcModalFreqRespProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC modal frequency response process

## Syntax

```psj
AdvcModalFreqRespProcess(string m_strName,string strRefEigenDir,double dRefLowFreq,
    double dRefHighFreq,Cursor crModalDampingRatio,Cursor crExcitationFreq,
    bool bAutoFreqInterval,double dMaxFreq,double dMinFreq,int iNumFreqPoint,
    double dBiasParam,Cursor m_crEdit,list m_LoadNodeList,list m_LoadCaseNodeList,
    list m_LoadNodeContactList,list m_OutputParamList,int m_iRefType,string m_strRefPath,
    list m_ReferenceResultList)
```

## Inputs

### `1. String`

name of ADVC modal frequency response process

### `2. string`

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

### `10 Int`

Number Frequency Point

### `11. Double`

Bias Parameter

### `12. Cursor`

edit cursor

### `13. List`

status of Loads

### `14. List`

status of Load Cases

### `15. List`

status and other data of Contacts

### `16. List`

output parameters

### `17 Int`

reference result type[0:Temperature Load; 1:Stress]

### `18. String`

path of reference result

### `19. List`

data of reference result

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcModalFreqRespProcess("Test",,0.001,0.001,1:11,1:11,1,0.001,0.001,1,0.001,1:11,,,,,1,"Test",)
```

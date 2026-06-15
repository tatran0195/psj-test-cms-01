---
id: AdvcFatigueProcess
title: AdvcFatigueProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC fatigue process

## Syntax

```psj
AdvcFatigueProcess(string m_strName,bool m_bFatigue,int method,int stress_axis,
    int safety_type,double search_resolution,double safety_max,cursor m_crEdit,
    list m_LoadNodeList,list m_LoadCaseNodeList,list m_LoadNodeContactList,
    list m_OutputParamList,int m_iRefType,string m_strRefPath,list m_ReferenceResultList)
```

## Inputs

### `1. String`

name of ADVC fatigue process

### `2. Bool`

if fatigue parameter defined

### `3. Int`

method[-1:default; 0:Mises; 1:MaxDamage; 2:MaxDamageAllDir]

### `4. Int`

stress axis[-1:default; 0:Uniaxial; 1:Biaxial]

### `5. Int`

safety type[-1:default; 0:AmpMean; 1:Mean]

### `6. Double`

search resolution

### `7. Double`

safety max

### `8. Cursor`

edit cursor

### `9. List`

status of Loads

### `10. List`

status of Load Cases

### `11. List`

status and other data of Contacts

### `12. List`

output parameters

### `13. Int`

reference result type[0:Temperature Load; 1:Stress]

### `14. String`

path of reference result

### `15. List`

data of reference result

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcFatigueProcess("Test",1,1,1,1,0.001,0.001,1:11,,,,,1,"Test",)
```

---
id: AdvcEigenProcess
title: AdvcEigenProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC eigen value process

## Syntax

```psj
AdvcEigenProcess(string m_strName,bool m_bEigenValue,int number_of_modes,
    int eigenvec_norm,double shift,double cgcgpi_tol,double cgcgpi_eig_tol,
    int cgcgpi_loop_max,double cgcgpi_inner_tol,int cgcgpi_block_size,
    int cgcgpi_extra_mode,Cursor m_crEdit,list m_LoadNodeList,
    list m_LoadCaseNodeList,list m_LoadNodeContactList,list m_OutputParamList,
    int m_iRefType,string m_strRefPath,list m_ReferenceResultList)
```

## Inputs

### `1. string`

Name of ADVC eigen value process

### `2. Bool`

If eigen value parameter defined

### `3. Int`

Number of modes

### `4. Int`

Eigenvec_norm[-1:default; 0:mass; 1:max; 2:unity]

### `5. Double`

Shift

### `6. Double`

cgcgpi_tol

### `7. Double`

cgcgpi_eig_tol

### `8. Int`

cgcgpi_loop_max

### `9. Double`

cgcgpi_inner_tol

### `10. Int`

cgcgpi_block_size

### `11. Int`

cgcgpi_extra_mode

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

### `17. Int`

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
AdvcEigenProcess("Test",1,1,1,0.001,0.001,0.001,1,0.001,1,1,1:11,,,,,1,"Test",)
```

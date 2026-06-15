---
id: SubmodelForcedDisp
title: SubmodelForcedDisp()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create sub model forced displacement

## Syntax

```psj
SubmodelForcedDisp(string m_strName,int iSolver,string strFilePathName,int iProcessNo,
    bool bTranslationX,bool bTranslationY,bool bTranslationZ,int iReferType,
    double dExtensionRange,double dExtensionTol,double dExtensionLimitTol,
    string strFilePathName,int iUseBucket,int iNumBucketMaxX,int iNumBucketMaxY,
    int iNumBucketMaxZ,int iPrevBc,Cursor[] m_taTarget,Cursor m_crEdit)
```

## Inputs

### `1. String`

name of sub model forced displacement

### `2. Int`

solver [0:ADVC]

### `3. String`

file path

### `4. Int`

process number

### `5. BOOL`

if translation X used

### `6. BOOL`

if translation Y used

### `7. BOOL`

if translation Z used

### `8. Int`

refer type[0:blank; 1:result; 2:restart]

### `9. Double`

extension_range

### `10. Double`

extension_tol

### `11. Double`

extension_limit_tol

### `12. String`

global_element_set

### `13. Int`

use_bucket[0:blank; 1:Yes; 2:No]

### `14. Int`

num_bucket_max_x

### `15. Int`

num_bucket_max_y

### `16. Int`

num_bucket_max_z

### `17. Int`

prev_bc[0:blank; 1:default hold]

### `18. Cursor[]`

targets

### `19. Cursor`

edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
SubmodelForcedDisp("SubmodelForcedDisplacement1", 0, "D:/test", 0, 1, 1, 1, -1, 1.79769e+308,
    1.79769e+308, 1.79769e+308, "", -1, 2147483647, 2147483647, 2147483647, -1, [6:21], 0:0)
```

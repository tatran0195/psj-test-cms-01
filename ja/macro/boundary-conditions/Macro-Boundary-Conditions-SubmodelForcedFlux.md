---
id: SubmodelForcedFlux
title: SubmodelForcedFlux()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create sub model forced flux

## Syntax

```psj
SubmodelForcedFlux(string m_strName,int iSolver,String strFilePathName,int iProcessNo,
    int iReferType,double dExtensionRange,double dExtensionTol,double dExtensionLimitTol,
    string strGlobalElementSet,int iUseBucket,int iNumBucketMaxX,int iNumBucketMaxY,
    int iNumBucketMaxZ,int iPrevBc,Cursor[] m_taTarget,Cursor m_crEdit)
```

## Inputs

### `1. String`

name of sub model forced flux

### `2. Int`

solver [0:ADVC]

### `3. String`

file path

### `4. Int`

process number

### `5. Int`

refer type[0:blank; 1:result; 2:restart]

### `6. Double`

extension_range

### `7. Double`

extension_tol

### `8. Double`

extension_limit_tol

### `9. String`

global_element_set

### `10. Int`

use_bucket[0:blank; 1:Yes; 2:No]

### `11. Int`

num_bucket_max_x

### `12. Int`

num_bucket_max_y

### `13. Int`

num_bucket_max_z

### `14. Int`

prev_bc[0:blank; 1:default hold]

### `15. Cursor[]`

targets

### `16. Cursor`

edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
SubmodelForcedFlux("SubmodelForcedFlux2", 0, "D:/test", 0, -1, 1.79769e+308, 1.79769e+308,
    1.79769e+308, "", -1, 2147483647, 2147483647, 2147483647, -1, [6:21, 11:252, 11:251], 0:0)
```

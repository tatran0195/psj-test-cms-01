---
id: ACM_ShowAdjacent
title: ACM_ShowAdjacent()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Select face(s) then it results the Adjacent faces with the given constrainsts

## Syntax

```psj
ACM_ShowAdjacent(double stopAngle,bool IncludeStopFace,int Layer,bool IsPreview,
    bool bStopByNonma, bool bShowPartOnly,cursor[] startFaceCursor, cursor[] stopFaceCursor)
```

## Inputs

### `1. Double`

Stop Angle value

### `2. Bool`

Include stop faces bool flag True = 1, False = 0

### `3. Int`

Number of Layers

### `4. Bool`

Whether the result is preview or Run

### `5. Bool`

Stop by nonmanifold bool flag True = 1, False = 0

### `6. Bool`

Show part only bool flag True = 1, False = 0

### `7. Cursor[]`

List of Start face cursor([11:Elem ID])

### `8. Cursor[]`

List of Stop face cursor([11:Elem ID])

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ACM_ShowAdjacent(0, 0, 100, 0, 0, 0, [6:22], [])
```

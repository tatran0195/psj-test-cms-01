---
id: CentrifugalForceCoordinateSystem
title: CentrifugalForceCoordinateSystem()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create centrifugal force by coordinate system

## Syntax

```psj
CentrifugalForceCoordinateSystem(String m_strName,double fVelocity,double fAcceleration,
    int iAxisDirection,int iVelocityUnit,int iAccelerationUnit,Cursor curCoord,
    Cursor[] m_taTarget,Cursor m_crEdit)
```

## Inputs

### `1. String`

name of centrifugal force

### `2. Double`

rotational velocity

### `3. Double`

rotational acceleration

### `4. Int`

axis[0:X; 1:Y; 2:Z]

### `5. Int`

unit of velocity

### `6. Int`

unit of acceleration

### `7. Cursor`

coordinate system

### `8. Cursor[]`

targets

### `9. Cursor`

edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CentrifugalForceCoordinateSystem("Test",0.001,0.001,1,1,1,1:11,[1:11,2:12],1:11)
```

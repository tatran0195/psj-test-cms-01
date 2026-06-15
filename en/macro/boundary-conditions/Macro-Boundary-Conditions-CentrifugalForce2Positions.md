---
id: CentrifugalForce2Positions
title: CentrifugalForce2Positions()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create centrifugal force by 2 positions

## Syntax

```psj
CentrifugalForce2Positions(String m_strName,double fBasePoint[0],double fBasePoint[1],
    double fBasePoint[2],double fTipPoint[0],double fTipPoint[1],double fTipPoint[2],
    double fVelocity,double fAcceleration,int iVelocityUnit,int iAccelerationUnit,
    cursor[] m_taTarget,cursor m_crEdit)
```

## Inputs

### `1. String`

name of centrifugal force

### `2. Double`

base point x

### `3. Double`

base point y

### `4. Double`

base point z

### `5. Double`

tip point x

### `6. Double`

tip point y

### `7. Double`

tip point z

### `8. Double`

rotational velocity

### `9. Double`

rotational acceleration

### `10. Int`

unit of velocity

### `11. Int`

unit of acceleration

### `12. Cursor[]`

targets

### `13. Cursor`

edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CentrifugalForce2Positions("CentrifugalForce1", 0.01, 0.0022222, 0.01, 0.01,
    0.0044444, 0.01, 0.174533, 0.0872665, 0, 0, [3:1, 10:82, 10:84], 0:0)
```

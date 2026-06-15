---
id: RotateBody
title: RotateBody()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Rotate Body

## Syntax

```psj
RotateBody(cursor[] body, double[3] rotate_centre, double[3] rotate_axis, double rotate_angle,
    bool create_new, bool copy_lbc, int copy_count, bool merge_node, double tolerance)
```

## Inputs

### `1. Cursor[]`

Body List

### `2. Double[3]`

Rotate Centre

### `3. Double[3]`

Rotate Axis

### `4. Double`

Rotate Angle(Radian)

### `5. Bool`

Create New Body 1=Yes, 0=No

### `6. Bool`

Copy LBC 1=Yes, 0=No

### `7. Int`

Copy Count

### `8. Bool`

Merge Node 1=Yes, 0=No

### `9. Double`

Merge Node Tolerance

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
RotateBody([3:1], [0.005, 0, 0.01], [0.001, 0, 0], 0.785398, 0, 0, 0, 0, 0)
```

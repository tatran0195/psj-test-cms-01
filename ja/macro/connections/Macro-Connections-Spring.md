---
id: Spring
title: Spring()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create spring connection

## Syntax

```psj
Spring(int method, String name, Cursor[] master, Cursor[] slave,Cursor coord, int springType,
    int ground, double tol, int dir, int distMode, int dof1, int dof2, double dampCoef,
    double stressCoef, double[3] transStiffness, double[3] rotStiffness, Cursor editObj )
```

## Inputs

### `1. Int`

method to create spring, 17: any entities(1:1)

### `2. String`

name of spring

### `3. Cursor[]`

master entities of spring

### `4. Cursor[]`

master entities of spring

### `5. Cursor`

referred coordinate system, NULL is global

### `6. Int`

type of spring, 0: general, 1: DoF, 2: uniform DoF

### `7. Int`

ground or not, 0: no, 1: yes

### `8. Double`

tolerance to find node pair

### `9. Int`

direction of spring, 0: isotropic, 1: anisotropic

### `10. Int`

distribute mode, not used

### `11. Int`

DoF at reference

### `12. Int`

DoF at target

### `13. Double`

Damping coef.

### `14. Double`

Stress coef.

### `15. Double[3]`

stiffness

### `16. Double[3]`

Rotate stiffness

### `17. Cursor`

used for edit mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
Spring(17, "Spring_1", [5:66316], [5:66299], 0:0, 2, 0, 0, 0, 0, 0, 0, 1.2, 1.5,
    [1000, 2000, 1000], [1.7976931e+308, 1.7976931e+308, 1.7976931e+308], 1, 0:0)
```

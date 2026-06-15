---
id: Mass
title: ConnectionNewMass()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

## Syntax

```psj
ConnectionNewMass(String m_strName, Cursor[] m_taTarget, double value, int dof, bool designer, Cursor coordinate, double offset0, double offset1, double offset2, double inertia0, double inertia1, double inertia2, double inertia3, double inertia4, double inertia5,Cursor m_crEdit)
```

## Inputs

### `1. String`

Name

### `2. Cursor[]`

Target Entity

### `3. Double`

Mass value

### `4. int`

DOF

### `5. Bool`

License switcher: Designer or Base

### `6. Cursor[]`

Coordinate

### `7. Double`

Offset0

### `8. Double`

Offset1

### `9. Double`

Offset2

### `10. Double`

Inertia0

### `11. Double`

Inertia1

### `12. Double`

Inertia2

### `13. Double`

Inertia3

### `14. Double`

Inertia4

### `15. Double`

Inertia5

### `16. Cursor`

Edit Cursor

### `17. Bool`

Update displacement CS or not.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

ConnectionNewMass("Mass_1", [10:471], 1000, 6, 0, 0:0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0:0, 1)

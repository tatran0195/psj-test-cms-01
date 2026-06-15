---
id: ForceGeneral
title: ForceGeneral()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Force general

## Syntax

```psj
ForceGeneral(string name, vector force, vector moment, int arrowDir, int distributionMethod,
    cursor crCoordinate, cursor crTable, cursor crNodeSet, double phase, double delay,
    cursor crPhaseTable, string formulaFX, string formulaFY, string formulaFZ,
    string formulaMX, string formulaMY, string formulaMZ, Cursor[] targets, cursor crEdit)
```

## Inputs

### `1. String`

name

### `2. Vector`

force

### `3. Vector`

moment

### `4. Int`

arrorDir (0: Start at node, 1: End at node)

### `5. Int`

distributionMethod (0: Per selected entity, 1: Per node, 2: Total of select

### `6. Cursor`

coordinate system

### `7. Cursor`

table

### `8. Cursor`

node set

### `9. Double`

phase

### `10. Double`

delay

### `11. Cursor`

phase table

### `12. String`

formula of Force X

### `13. String`

formula of Force Y

### `14. String`

formula of Force Z

### `15. String`

formula of Moment X

### `16. String`

formula of Moment Y

### `17. String`

formula of Moment Z

### `18. Cursor[]`

targets

### `19. Cursor`

edit target

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ForceGeneral("Force2", [1, 2, 3], [0.004, 0.005, 0.006], 0, 0, 0:0, 0:0, 0:0,
    0, 0, 0:0, "", "", "", "", "", "", [6:25], 0:0)
```

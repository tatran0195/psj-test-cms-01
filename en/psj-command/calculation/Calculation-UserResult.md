---
id: Calculation-UserResult
title: Calculation.UserResult()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Any desired result can be created and added to the document by treating the results as variables and passing them to functions.
---

## Description

Any desired result can be created and added to the document by treating the results as variables and passing them to functions.

## Syntax

```psj
Calculation.UserResult(...)
```

Macro: [PostCreateUserResult](/docs/cli/5.1.0/macro/calculation/ACCombinedAnimation)

Ribbon: <menuselection>Calculation &#187; UserResult</menuselection>

## Inputs

### `crPostJob`

- A _Cursor_ specifying the target post job.
- The default value is _None_.

### `iResultVariableType`

- An _Integer_ specifying the result type to make a variable.
    - 0: Unknown
    - 1: Step
    - 2: Result
    - 3: Component
- The default value is 1.

### `strResultName`

- A _String_ specifying the result name to make a variable.
- The default value is "Expr1".

### `iResultSet`

- An _Integer_ specifying the result set.
- The default value is 1.

### `iTimeStep`

- An _Integer_ specifying the time step.
- The default value is 1.

### `listResultVariables`

- A _List of [RESULT_VARIABLE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/RESULT_VARIABLE)_ specifying the attributes of the selected result to make a variable.
- The default value is RESULT_VARIABLE().

### `bResultExpression`

- A _Boolean_ specifying whether to use the expression to display the result.
- The default value is _True_.

### `bContourExpression`

- A _Boolean_ specifying whether to use the expression to display the contour.
- The default value is _False_.

### `bVectorExpression`

- A _Boolean_ specifying whether to use the expression to display the vector.
- The default value is _False_.

### `bDisplacementExpression`

- A _Boolean_ specifying whether to use the expression to display the displacement.
- The default value is _False_.

### `iVectorType`

- An _Integer_ specifying the type to display the vector.
    - 0: Vector
    - 1: Magnitude and Direction
- The default value is 0.

### `strResultExpression`

- A _String_ specifying the calculation formula of the result used for the result display.
- The default value is "".

### `strContourExpression`

- A _String_ specifying the calculation formula for the result used for the contour display.
- The default value is "".

### `strVectorExpressionMagnitude`

- A _String_ specifying the calculation formula for the result used for the vector display in magnitude. This variable was used when iVectorType = 1.
- The default value is "".

### `strVectorExpressionX`

- A _String_ specifying the calculation formula for the result used for the vector display in X direction.
- The default value is "".

### `strVectorExpressionY`

- A _String_ specifying the calculation formula for the result used for the vector display in Y direction.
- The default value is "".

### `strVectorExpressionZ`

- A _String_ specifying the calculation formula for the result used for the vector display in Z direction.
- The default value is "".

### `strDisplacementExpressionX`

- A _String_ specifying the calculation formula of the result used for the deformation display in X direction.
- The default value is "".

### `strDisplacementExpressionY`

- A _String_ specifying the calculation formula of the result used for the deformation display in Y direction.
- The default value is "".

### `strDisplacementExpressionZ`

- A _String_ specifying the calculation formula of the result used for the deformation display in Z direction.
- The default value is "".

### `bIncrementName`

- A _Boolean_ specifying whether to input the increment name.
- The default value is _False_.

### `strIncrementName`

- A _String_ specifying the increment name.
- The default value is "".

### `crEdit`

- A _Cursor_ specifying an existing user result item
    - If this parameter is used, the specified user result item will be modified.
    - If it is left None, a new user result item will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created user result item.

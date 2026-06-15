---
id: PostToolsSubcaseRelativeOffset
title: PostToolsSubcaseRelativeOffset()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create a subcase of relative displacement with zero displacement for any selected nodal ID.

## Syntax

```psj
PostToolsSubcaseRelativeOffset(int iAnalysisType, int iResultSet, int iTimeStep, int iNodeID, int iSubcaseID, str strSubcaseName)
```

## Inputs

### `1. int`

- An Integer specifying the analysis type.

### `2. int`

- An Integer specifying the result set.

### `3. int`

- An Integer specifying the time step.

### `4. int`

- An Integer specifying the ID of the selected node.

### `5. int`

- An Integer specifying the ID of the subcase to be created.

### `6. str`

- A String specifying the name of subcase to be created.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PostToolsSubcaseRelativeOffset(1, 1, 0, 0, 0, "strSubcaseName")
```

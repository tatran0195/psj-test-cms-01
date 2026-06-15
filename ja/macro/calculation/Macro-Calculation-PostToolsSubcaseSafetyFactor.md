---
id: PostToolsSubcaseSafetyFactor
title: PostToolsSubcaseSafetyFactor()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create a subcase by calculating the safety factor from the selected subcases based on the tolerance of each part.

## Syntax

```psj
PostToolsSubcaseSafetyFactor(int iAnalysisType, int iResultSet, list int listSubcases, list SAFETY_ITEM listSafetyItems, int iSafetyType, str strResultName)
```

## Inputs

### `1. int`

- An Integer specifying the analysis type.

### `2. int`

- An Integer specifying result set.

### `3. list int`

- A List of Integer specifying the IDs of selected subcases.

### `4. list SAFETY_ITEM`

- A _List of [SAFETY_ITEM](../../data-type/psj-command/parameter-types/SAFETY_ITEM)_ specifying the safety information of each selected target.

### `5. int`

- An Integer specifying the type of safety calculation.

### `6. str`

- A String specifying the name of subcase to be created.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
PostToolsSubcaseSafetyFactor(2, 1, [(1, "", 1, 1), (2, "", 1, 1), (3, "", 1, 1), (4, "", 1, 1), (5, "", 1, 1)], [(3:1, 1), (3:2, 1), (3:3, 1)], 1, "Safety Break2")
```

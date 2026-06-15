---
id: Calculation-Subcase-ShowSafety
title: Calculation.Subcase.ShowSafety()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a subcase by calculating the safety factor from the selected subcases based on the tolerance of each part
---

## Description

Create a subcase by calculating the safety factor from the selected subcases based on the tolerance of each part.

## Syntax

```psj
Calculation.Subcase.ShowSafety(...)
```

Macro: [PostToolsSubcaseSafetyFactor](/docs/cli/5.1.0/macro/calculation/PostToolsSubcaseSafetyFactor)

Ribbon: <menuselection>Calculation &#187; Subcase &#187; ShowSafety</menuselection>

## Inputs

### `iAnalysisType`

- An _Integer_ specifying the analysis type.
- The default value is 1.

### `iResultSet`

- An _Integer_ specifying result set.
- The default value is 1.

### `listSubcaseIDs`

- A _List of Integer_ specifying the IDs of selected subcases.
- The default value is [].

### `listSafetyItems`

- A _List of [SAFETY_ITEM](/docs/cli/5.1.0/data-type/psj-command/parameter-types/SAFETY_ITEM)_ specifying the safety information of each selected target.
- The default value is [SAFETY_ITEM](/docs/cli/5.1.0/data-type/psj-command/parameter-types/SAFETY_ITEM).

### `iSafetyType`

- An _Integer_ specifying the type of safety calculation.
    - 0: YIELD STRESS
    - 1: BREAK STRESS
    - 2: FATIGUE LIMIT
- The default value is 0.

### `strResultName`

- A _String_ specifying the name of subcase to be created.
- The default value is "SafetyYield".

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

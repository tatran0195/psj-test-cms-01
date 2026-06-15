---
id: Calculation-Subcase-RelativeOffset
title: Calculation.Subcase.RelativeOffset()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a subcase of relative displacement with zero displacement for any selected nodal ID
---

## Description

Create a subcase of relative displacement with zero displacement for any selected nodal ID.

## Syntax

```psj
Calculation.Subcase.RelativeOffset(...)
```

Macro: [PostToolsSubcaseRelativeOffset](/docs/cli/5.1.0/macro/calculation/PostToolsSubcaseRelativeOffset)

Ribbon: <menuselection>Calculation &#187; Subcase &#187; RelativeOffset</menuselection>

## Inputs

### `iAnalysisType`

- An _Integer_ specifying the analysis type.
- The default value is 1.

### `iResultSet`

- An _Integer_ specifying the result set.
- The default value is 1.

### `iTimeStep`

- An _Integer_ specifying the time step.
- The default value is 0.

### `iNodeID`

- An _Integer_ specifying the ID of the selected node.
- The default value is 0.

### `iSubcaseID`

- An _Integer_ specifying the ID of the subcase to be created.
- The default value is 0.

### `strSubcaseName`

- A _String_ specifying the name of subcase to be created.
- The default value is "Subcase1PeakHold".

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

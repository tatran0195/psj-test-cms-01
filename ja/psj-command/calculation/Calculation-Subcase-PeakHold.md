---
id: Calculation-Subcase-PeakHold
title: Calculation.Subcase.PeakHold()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create a subcase with the maximizes stress, MISES stress, beam MAX, MIN, and AXILAL from two or more selected subcases
---

## Description

Create a subcase with the maximizes stress, MISES stress, beam MAX, MIN, and AXILAL from two or more selected subcases.

## Syntax

```psj
Calculation.Subcase.PeakHold(...)
```

Macro: [PostToolsSubcasePeakHoldEx](/docs/cli/5.1.0/macro/calculation/PostToolsSubcasePeakHoldEx)

Ribbon: <menuselection>Calculation &#187; Subcase &#187; PeakHoldEX</menuselection>

## Inputs

### `iAnalysisType`

- An _Integer_ specifying the analysis type.
- The default value is 1.

### `bFatigue`

- A _Boolean_ specifying whether to use the fatigue calculation.
- The default value is _False_.

### `dQb`

- A _Double_ specifying the tension strength of the materia
- The default value is 270.0.

### `dQw`

- A _Double_ specifying the material fatigue limit.
- The default value is 130.0.

### `dQy`

- A _Double_ specifying the yield stress of the material.
- The default value is 165.0.

### `strSubcaseName`

- A _String_ specifying the name of new subcase to be created.
- The default value is "Subcase1PeakHold".

### `iSubcaseID`

- An _Integer_ specifying the ID of new subcase to be created.
- The default value is 1.

### `mapPeakHoldSubcases`

- A _Map of [PEAKHOLD_SUBCASE_MAP](/docs/cli/5.1.0/data-type/psj-command/parameter-types/PEAKHOLD_SUBCASE_MAP)_ specifying the selected subcases to create peakhold results.
- The default value is PEAKHOLD_SUBCASE_MAP().

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

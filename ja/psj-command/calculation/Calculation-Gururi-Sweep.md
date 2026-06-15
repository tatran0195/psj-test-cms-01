---
id: Calculation-Gururi-Sweep
title: Calculation.Gururi.Sweep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Output specified element/frequency result output to external file
---

## Description

Output specified element/frequency result output to external file.

## Syntax

```psj
Calculation.Gururi.Sweep(...)
```

Macro: [DYNAMIC_GURURI_ANALYSIS_SWEEP](/docs/cli/5.1.0/macro/calculation/DYNAMIC_GURURI_ANALYSIS_SWEEP)

Ribbon: <menuselection>Calculation &#187; Gururi &#187; Sweep</menuselection>

## Inputs

### `strExportPath`

- A _String_ specifying the path of result file to be exported.
- This is a required input.

### `crlTargets`

- A _List of Cursor_ specifying the target solid elements.
- This is a required input.

### `crTargetAnalysis`

- A _Cursor_ specifying the target job to be processed.
- The default value is _None_.

### `crCoordinate`

- A _Cursor_ specifying the response points coordinate system.
- The default value is _None_.

### `bAllModesUsed`

- A _Boolean_ specifying whether to use all modes.
- The default value is _True_.

### `strlModesSelected`

- A _List of String_ specifying the selected modes using for response calculation. This option was used if bAllModesUsed is _False_.
- The default value is [].

### `bDampingFactor`

- A _Boolean_ specifying whether to use damping factor for calculation.
- The default value is _True_.

### `dDampingFactor`

- A _Double_ specifying the value of damping factor.
- The default value is 1.0.

### `crDampingFactor`

- A _Cursor_ specifying the field data of damping factor.
- The default value is _None_.

### `dlInputFrequency`

- A _Double List_ specifying the frequency value for analysis.
- The default value is [].

### `dStartPhrase`

- A _Double_ specifying the starting phase to analyze.
- The default value is 0.0.

### `iStepNumber`

- An _Integer_ specifying the number division of one cycle.
- The default value is 10.

### `bOutputMaximumGururiResult`

- A _Boolean_ specifying whether to output the maximum result of the selected Principal type and store it in a separated tree of assembly window.
- The default value is _True_.

### `iPrincipalType`

- An _Integer_ specifying the principal result type that will be analyzed.
- The default value is 3.

### `bAllLoadCases`

- A _Boolean_ specifying whether to use all current load cases.
- The default value is _True_.

### `crSelectedLoadCase`

- A _Cursor_ specifying the selected load case to analyze. This option was used if bAllLoadCases is _False_.
- The default value is _None_.

### `crEdit`

- A _Cursor_ specifying an existing Load condition
    - If this parameter is used, the specified Load condition will be modified.
    - If it is left None, a new Load condition will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created gururi sweep condition.

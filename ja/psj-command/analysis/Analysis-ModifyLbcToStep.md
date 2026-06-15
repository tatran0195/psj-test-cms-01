---
id: Analysis-ModifyLbcToStep
title: Analysis.ModifyLbcToStep()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Add/Modify Loads, Boundary Conditions, etc. of an Abaqus step
---

## Description

Add/Modify Loads, Boundary Conditions, etc. of an Abaqus step.

## Syntax

```psj
Analysis.ModifyLbcToStep(...)
```

Ribbon: <menuselection>Analysis &#187; ModifyLbcToStep</menuselection>

## Inputs

### `listAbaqusLbcStepInfo`

- An _[ABAQUS_LBC_STEP_INFO](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ABAQUS_LBC_STEP_INFO)_ _list_ specifying the list of Abaqus steps from load boundary condition information.
- The default value is [].

## Return Code

A _Boolean_ specifying the status of the creating/modifying process:

- _True_: The specified step has been modified/created successfully.
- _False_: The specified step cannot be modified/created.

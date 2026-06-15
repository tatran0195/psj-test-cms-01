---
id: AcousticIntensity
title: AcousticIntensity()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Intensity is created from the sound pressure and particle velocity results.

## Syntax

```psj
AcousticIntensity(str strAnalysisName, cursor crEdit)
```

## Inputs

### `1. int`

- The name of the analysis.

### `2. cursor`

- A Cursor specifying the edit.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AcousticIntensity("MyAcousticIntensity", 0:0)
```

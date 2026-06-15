---
id: ImportBdf
title: ImportBdf()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Import Nastran bdf file

## Syntax

```psj
ImportBdf(String[] vecPath, int importType, double faceAngle, double edgeAngle)
```

## Inputs

### `1. String[]`

multiple bdf file paths

### `2. Int`

Import type

### `3. Double`

face angle (radian)

### `4. Double`

edge angle (radian)

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ImportBdf(["D:/test.bdf"], 2, 1.0472, 1.0472)
```

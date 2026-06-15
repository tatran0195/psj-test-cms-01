---
id: InitialTemperature
title: InitialTemperature()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

create initial temperature

## Syntax

```psj
InitialTemperature(string strName, int iLocalTemperatureUnit, int nType, double dTemp, string strFilePathName, bool bUseDefault, cursor crTable, cursor[] taTarget, cursor crEdit, int iTimeID, bool bSkipUnvailableNode, int[] vecUnvailableNodeId)
```

## Inputs

### `1. String`

Initial temperature name

### `2. Int`

Unit of local temperature

### `3. Int`

Thermal type

- 0: Constant
- 2: ADVC File
- 3: Nastran Punch

### `4. Double`

Temperature value

### `5. String`

directory file path
Corresponding to Thermal type 2 and 3

### `6. Bool`

Use default temperature bool flag True = 1, False = 0; corresponding to Thermal type 2 and 3

### `7. Cursor`

Table cursor

### `8. Cursor[]`

Target entities cursor

### `9. Cursor`

Edit cursor

### `10. Int`

Time Step ID in Result
Corresponding to Thermal type 3.

### `11. Bool`

Skip inexistent nodes or not.
Corresponding to Thermal type 3.

### `12. Int[]`

The list of skip nodes' ID
Corresponding to Thermal type 3.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
InitialTemperature("InitialTemperature_1", 1, 0, 274.15, "", 1, 0:0, [], 0:0, 0, 0, [])
```

---
id: WholeMappingTemperatureLoad
title: WholeMappingTemperatureLoad()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create temperature load

## Syntax

```psj
WholeMapping(string strName, int iMappingSrcType, string strPath, int iMappingMethod,
    int iMappingFromStepNo, cursor crEdit)
```

## Inputs

### `1. String`

Temperature load name

### `2. Int`

Result type

- 0: Nastran
- 1: Abaqus
- 2: ADVC format2
- 3: CSV

### `3. String`

directory file path name

### `4. Int`

Mapping method type

### `5. Int`

Mapping step (subcase) value

### `6. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
WholeMappingTemperatureLoad("TemperatureLoadsWholeMapping1", 3, "D:/CFD_Large_ForWholeMapping.csv", 0, 0, 0:0)
```

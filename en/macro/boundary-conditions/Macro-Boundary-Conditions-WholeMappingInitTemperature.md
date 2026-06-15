---
id: WholeMappingInitTemperature
title: WholeMappingInitTemperature()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create initial temperature by whole mapping

## Syntax

```psj
WholeMappingInitTemperature(cursor[] targetpParts, string strName, int iMappingSrcType, string strPath, int iMappingMethod, int iMappingFromStepNo, int iLocalUnit, cursor crEdit)
```

## Inputs

### `1. Cursor[]`

Target parts

### `2. String`

Temperature load name

### `3. Int`

Result type

- 0: Nastran
- 1: Abaqus
- 2: ADVC format2
- 3: CSV

### `4. String`

directory file path name

### `5. Int`

Mapping method type

### `6. Int`

Mapping step (subcase) value

### `7. Int`

Unit of Temperature

### `8. Cursor`

Edit cursor

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
WholeMappingInitTemperature([], "TemperatureInitsWholeMapping_1", 0, "C:/Temp/transient.op2", 0, 0, 1, 0:0)
```

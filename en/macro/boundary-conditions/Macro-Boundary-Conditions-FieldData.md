---
id: FieldData
title: FieldData()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create field data table

## Syntax

```psj
FieldData(String m_strName,int m_iType,TSheetd m_Sheet,Cursor m_crEdit, bool bAbaqusAmp, int iChartType, bool bFrequencyPSDLogX, bool bFrequencyPSDLogY)
```

## Inputs

### `1. String`

name of table

### `2. Int`

type of table

### `3. TSheetd`

data of table

### `4. Cursor`

edit field table cursor(81:FieldData ID)

### `5. Bool`

Abaqus Amp bool flag True = 1, False = 0

### `6. Int`

Smooth step

### `7. Bool`

A _Boolean_ specifying whether or not enable data interplation of LogX for Frequency-PSD table.

### `8. Bool`

A _Boolean_ specifying whether or not enable data interplation of LogY for Frequency-PSD table.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
FieldData("Test", 15, [1, 2, 1000, 1e+08], 0:0, 0, 0, 0, 0)
```

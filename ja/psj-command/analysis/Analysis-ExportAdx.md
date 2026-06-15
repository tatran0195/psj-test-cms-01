---
id: Analysis-ExportAdx
title: Analysis.ExportAdx()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the ADVENTURECluster solver file in adx format with the existing Job in Assembly Tree. By pointing out the desired ADVC Job in Assembly Tree, exporting could be done multiple times with user's setting
---

## Description

Export the ADVENTURECluster solver file in adx format with the existing Job in Assembly Tree. By pointing out the desired ADVC Job in Assembly Tree, exporting could be done multiple times with user's setting.

## Syntax

```psj
Analysis.ExportAdx(...)
```

Macro: [ExportAdx](/docs/cli/5.1.0/macro/analysis/ExportAdx)

Ribbon: <menuselection>Analysis &#187; Export Adx</menuselection>

## Inputs

### `crJob`

- A _Cursor_ specifying the ADVC analysis Job in Assembly Tree by using identification number (ID number) of the Job.
- This is a required input.

### `strPath`

- A _String_ specifying the destination path file to export. The destination path should be different from C Drive (C:/) due to Window would deny saving any files to C Drive directly (It is recommended to save in User's Drive such as D Drive, E Drive,...)
- This is a required input.

### `iNumType`

- An _Integer_ specifying the numeric format type. This argument would allow numeric setting type of adx file.
    - If _iNumType=0_: Real Type - The numerical values in real number format (123.456).
    - If _iNumType=1_: Power Type - The numerical values in exponential/scientific format (1.234E-005).
    - If _iNumType=2_: Auto Type - The numerical values would show in both above types depending on value of model
- The default value is 0.

### `iUiWidth`

- An _Integer_ specifying the limitation number of digits before the point of the number. This option allows to control number digits of value in exported ADX file.
- The default value is 10.

### `iUiPrecision`

- An _Integer_ specifying the limitation number of digits after the point of the number. This option allows to control number digits of value in exported ADX file.
- The default value is 1.

## Return Code

- An _Boolean_ specifying the status of the exporting process:
    - _True_: The ADVC (\*.adx) file has been exported successfully.
    - _False_: The ADVC (\*.adx) file cannot be exported.

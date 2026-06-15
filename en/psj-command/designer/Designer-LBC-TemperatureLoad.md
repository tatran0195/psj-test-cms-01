---
id: Designer-LBC-TemperatureLoad
title: Designer.LBC.TemperatureLoad()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: create temperature load Desiner
---

## Description

Create temperature load Desiner

## Syntax

```psj
Designer.LBC.TemperatureLoad(strName="", iDnType=0, dFTemp=0, strDstrFilePathName="", crDcrTable=None, crlTargets=[], crEdit=None, bDbUseAsMaterialReferenceTemp=False)
```

Ribbon: <menuselection>Designer &#187; LBC &#187; TemperatureLoad</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `iDnType`

- An _Integer_ specifying the dn type.
- The default value is 0.

### `dFTemp`

- A _Double_ specifying the temperature.
- The default value is 0.

### `strDstrFilePathName`

- A _String_ specifying the dstr file path name.
- The default value is "".

### `crDcrTable`

- A _Cursor_ specifying the dcr table.
- The default value is None.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `bDbUseAsMaterialReferenceTemp`

- A _Boolean_ specifying the db use as material reference temperature.
- The default value is False.

## Return Code

A String of 1 if success, or 0 if fail.

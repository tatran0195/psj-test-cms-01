---
id: Connections-Contacts-TSSolver-Auto
title: Connections.Contacts.TSSolver.Auto()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Search and creat contact between the existing parts automatically based on the specified conditions
---

## Description

Search and creat contact between the existing parts automatically based on the specified conditions.

## Syntax

```psj
Connections.Contacts.TSSolver.Auto(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; TSSolver &#187; Auto</menuselection>

## Inputs

### `strlNames`

- A _List of String_ specifying the list of the contact names to be created.
- This is a required input.

### `crllMasterFaceTargets`

- A _List of Cursor_ specifying the list of master faces.
- This is a required input.

### `crllSlaveFaceTargets`

- A _List of Cursor_ specifying the list of slave faces.
- This is a required input.

### `crlContactTypes`

- A _List of Cursor_ specifying the list of contact types.
- The default value is [1].

### `dlInterferenceClosures`

- A _List of Double_ specifying the list interference closures.
- The default value is [1.0].

### `dlFrictionCoefficients`

- A _List of Double_ specifying the list friction coefficients.
- The default value is [DFLT_DBL].

### `blInitialAdjustments`

- A _Boolean_ specifying Whether or not using initial adjustments.
- The default value is _False_.

### `crlColors`

- A _List of Cursor_ specifying the list of contact colors.
- The default value is 65280.

### `crlEdit`

- A _List of Cursor_ specifying the list of existing contact settings item.
    - If this parameter is used, the specified contact settings item will be modified.
    - If it is left _None_, a new contact settings item will be created.
- The default value is [].

### `crlMasterGroups`

- A _List of Cursor_ specifying the list of master groups.
- The default value is [].

### `crlSlaveGroups`

- A _List of Cursor_ specifying the list of slave groups.
- The default value is [].

## Return Code

A _Cursor_ specifying the created contact.

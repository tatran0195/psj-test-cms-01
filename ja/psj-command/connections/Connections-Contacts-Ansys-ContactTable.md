---
id: Connections-Contacts-Ansys-ContactTable
title: Connections.Contacts.Ansys.ContactTable()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: create contact ansys Contact Table
---

## Description

Create contact ansys Contact Table

## Syntax

```psj
Connections.Contacts.Ansys.ContactTable(strName="ContactAnsys_1", iMethod=1, iType=0, iContactAlgorithm=0, ansysContact=ANSYS_CONTACT(), crplTarget=[], crEdit=None, iColor=16711680)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; Ansys &#187; ContactTable</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "ContactAnsys_1".

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 1.

### `iType`

- An _Integer_ specifying the type.
- The default value is 0.

### `iContactAlgorithm`

- An _Integer_ specifying the contact algorithm.
- The default value is 0.

### `ansysContact`

- A _ANSYS_CONTACT_ specifying the contact.
- The default value is ANSYS_CONTACT().

### `crplTarget`

- A _Cursor Pair List_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `iColor`

- An _Integer_ specifying the color.
- The default value is 16711680.

## Return Code

A String of 1 if success, or 0 if fail.

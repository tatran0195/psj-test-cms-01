---
id: Connections-Contacts-MSCNastran-ContactTable
title: Connections.Contacts.MSCNastran.ContactTable()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: create contacts of MSC Nastran Contact Table
---

## Description

Create contacts of MSC Nastran Contact Table

## Syntax

```psj
Connections.Contacts.MSCNastran.ContactTable(strName="", nastranContact=NASTRAN_CONTACT(), crplTarget=[], crEdit=None, iColor=65280, iMethod=1)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; MSCNastran &#187; ContactTable</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `nastranContact`

- A _NASTRAN_CONTACT_ specifying the contact.
- The default value is NASTRAN_CONTACT().

### `crplTarget`

- A _Cursor Pair List_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `iColor`

- An _Integer_ specifying the color.
- The default value is 65280.

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 1.

## Return Code

A String of 1 if success, or 0 if fail.

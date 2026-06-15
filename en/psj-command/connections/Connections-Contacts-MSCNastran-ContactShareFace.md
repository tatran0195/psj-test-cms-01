---
id: Connections-Contacts-MSCNastran-ContactShareFace
title: Connections.Contacts.MSCNastran.ContactShareFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: create contacts of MSC Nastran Contact Share Face
---

## Description

Create contacts of MSC Nastran Contact Share Face

## Syntax

```psj
Connections.Contacts.MSCNastran.ContactShareFace(crlShareFace=[], strName="", nastranContact=NASTRAN_CONTACT(), crEdit=None, iColor=65280, iMethod=3)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; MSCNastran &#187; ContactShareFace</menuselection>

## Inputs

### `crlShareFace`

- A _List of Cursor_ specifying the share face.
- The default value is [].

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `nastranContact`

- A _NASTRAN_CONTACT_ specifying the contact.
- The default value is NASTRAN_CONTACT().

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `iColor`

- An _Integer_ specifying the color.
- The default value is 65280.

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 3.

## Return Code

A String of 1 if success, or 0 if fail.

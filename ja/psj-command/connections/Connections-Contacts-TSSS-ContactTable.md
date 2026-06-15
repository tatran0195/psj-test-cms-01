---
id: Connections-Contacts-TSSS-ContactTable
title: Connections.Contacts.TSSS.ContactTable()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create contacts for TS Sunshine solver by using table
---

## Description

Create contacts for TS Sunshine solver by using table.

## Syntax

```psj
Connections.Contacts.TSSS.ContactTable(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; TSSS &#187; ContactTable</menuselection>

## Inputs

### `strName`

- A _String_ specifying the contact name.
- The default value is "ContactTS_SS_1".

### `nastranContact`

- A _[SUNSHINE_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/SUNSHINE_CONTACT)_ specifying the Sunshine contact parameters.
- The default value is _[SUNSHINE_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/SUNSHINE_CONTACT)_.

### `crplTarget`

- A _List of Cursor Pair_ specifying the list or pair of group master face and group slave face.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing contact settings item. If this parameter is used, the specified contact settings item will be modified. If it is left _None_, a new contact settings item will be created.
- The default value is None.

### `iColor`

- An _Integer_ specifying the contact color.
- The default value is 0.

## Return Code

A _Cursor_ specifying the created contact.

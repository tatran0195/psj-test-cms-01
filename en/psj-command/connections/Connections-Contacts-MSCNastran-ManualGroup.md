---
id: Connections-Contacts-MSCNastran-ManualGroup
title: Connections.Contacts.MSCNastran.ManualGroup()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings between specified groups for MSC Nastran solver. Create a group with master and slave surfaces beforehand to define the contact in the contact settings
---

## Description

Define contact settings between specified groups for MSC Nastran solver. Create a group with master and slave surfaces beforehand to define the contact in the contact settings.

## Syntax

```psj
Connections.Contacts.MSCNastran.ManualGroup(...)
```

Macro: [ContactMSCNastran](/docs/cli/5.1.0/macro/connections/ContactMSCNastran)

Ribbon: <menuselection>Connections &#187; Contacts &#187; MSCNastran &#187; ManualGroup</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the contact to be created.
- The default value is "ContactMSCNastran_1".

### `nastranContact`

- A _[NASTRAN_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_CONTACT)_ specifying the Nastran contact parameters.
- The default value is _[NASTRAN_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_CONTACT)_.

### `crplTarget`

- A _Cursor Pair List_ specifying the list or pair of master face group and slave face group.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying an existing contact settings item.
    - If this parameter is used, the specified contact settings item will be modified.
    - If it is left _None_, a new contact settings item will be created.
- The default value is _None_.

### `iColor`

- An _Integer_ specifying the contact color.
- The default value is 65280.

## Return Code

A _Cursor_ specifying the created contact.

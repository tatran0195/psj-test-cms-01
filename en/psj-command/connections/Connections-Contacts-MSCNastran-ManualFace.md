---
id: Connections-Contacts-MSCNastran-ManualFace
title: Connections.Contacts.MSCNastran.ManualFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings between specified faces for the MSC Nastran solver
---

## Description

Define contact settings between specified faces for the MSC Nastran solver.

## Syntax

```psj
Connections.Contacts.MSCNastran.ManualFace(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; MSCNastran &#187; ManualFace</menuselection>

## Inputs

### `crlMasterFaces`

- A _List of Cursor_ specifying the list of faces (Master faces).
- This is the require input.

### `crlSlaveFaces`

- A _List of Cursor_ specifying the list of faces (Slave faces).
- This is the require input.

### `strName`

- A _String_ specifying the contact name.
- The default value is "ContactMSCNastran_1".

### `iContactAlgorithm`

- An _Integer_ specifying the type of contact connection.
    - 0: Face to Face - Contact between shell or solid element faces and shell or solid element faces.
- The default value is 0.

### `iContactType`

- An _Integer_ specifying the behavior type of contact definition. The behavior type of contact definition is one of the following.
    - 0: General Type (Sliding Contact)
    - 1: Tied Type (Shell-Solid contact)
    - 2: Tied & Maintain Gap Type
    - 3: Tied & Full moment Type
    - 4: Tied & Full moment & Maintain Gap Type
- The default value is 0.

### `nastranContact`

- A _[NASTRAN_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_CONTACT)_ specifying the Nastran contact parameters.
- The default value is _[NASTRAN_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/NASTRAN_CONTACT)_.

### `crEdit`

- A _Cursor_ specifying an existing contact settings item. If this parameter is used, the specified contact settings item will be modified. If it is left _None_, a new contact settings item will be created.
- The default value is _None_.

### `iColor`

- An _Integer_ specifying the contact color.
- The default value is 65280.

## Return Code

A _Cursor_ specifying the created contact.

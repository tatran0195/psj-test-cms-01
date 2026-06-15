---
id: Connections-Contacts-Ansys-ContactShareFace
title: Connections.Contacts.Ansys.ContactShareFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings for ANSYS by using shared faces
---

## Description

Define contact settings for ANSYS by using shared faces.

## Syntax

```psj
Connections.Contacts.Ansys.ContactShareFace(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; Ansys &#187; Contact Share Face</menuselection>

## Inputs

### `crlShareFaces`

- A _List of Cursor_ specifying list of shared faces which are separated (faces with double nodal states are created), and contact pairs are defined between the faces. The _crlShareFaces_ and _crContactAnsys_ arguments are mutually exclusive. One of them must be specified.
- The default value is [].

### `strName`

- A _String_ specifying the contact name.
- The default value is "ContactAnsys_1".

### `iBehaviorType`

- An _Integer_ specifying the behavior type of contact definition. Possible values are 0 and 1.
    - 0: General Type (Sliding Contact)
    - 1: Shell-Solid Assembly (Original Mesh) Type
- The default value is 0.

### `iContactType`

- An _Integer_ specifying the type of contact connection.
    - 0: Face-To-Face - Contact between shell or solid element faces and shell or solid element faces.
- The default value is 0.

### `ansysContact`

- An _[ANSYS_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ANSYS_CONTACT)_ specifying the Ansys contact properties.
- The default value is _[ANSYS_CONTACT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ANSYS_CONTACT)_.

### `crContactAnsys`

- A _Cursor_ specifying an existing Ansys Contact (Contact Separate Face). If this parameter is used, the specified contact settings will be modified. Otherwise, a new contact settings will be created. The _crlShareFaces_ and _crContactAnsys_ arguments are mutually exclusive. One of them must be specified.
- The default value is _None_.

### `iContactColor`

- An _Integer_ specifying the contact color.
- The default value is 16711680.

## Return Code

A _Cursor_ specifying the created contact.

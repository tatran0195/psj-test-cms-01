---
id: Connections-Contacts-SunShine-ManualFace
title: Connections.Contacts.SunShine.ManualFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings between specified faces for the TechnoStar Sunshine solver
---

## Description

Define contact settings between specified faces for the TechnoStar Sunshine solver.

## Syntax

```psj
Connections.Contacts.SunShine.ManualFace(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; SunShine &#187; Manual Face</menuselection>

## Inputs

### `crlMasterFaces`

- A _List of Cursor_ specifying the faces to be the master faces.
- This is a required input.

### `crlSlaveFaces`

- A _List of Cursor_ specifying the faces to be the slave faces.
- This is a required input.

### `strName`

- A _String_ specifying the contact name.
- The default value is "ContactSunShine_1".

### `sunshineContact`

- A _Struct_ specifying the Sunshine contact parameters.
- The default value is SUNSHINE_CONTACT().

### `crContactSunShine`

- A _Cursor_ specifying an existing SunShine contact setting. If this argument is specified, the specified SunShine contact setting will be modified. If it is left _None_, a new SunShine contact setting will be created.
- The default value is _None_.

### `iContactColor`

- An _Integer_ specifying the contact-to-display marker color.
- The default value is 16711680.

### `bDesigner`

- A _Boolean_ specifying whether to create the sub-group of master and slave faces in Group window.
    - If _bDesigner=True_, create a new sub-group named "Contact Faces(SS)" under the parent group with master and slave face groups separately inside.
    - If _bDesigner=False_, create two new master and slave face separately group under the parent group.
- The default value is _False_.

## Return Code

A _Cursor_ specifying the created contact.

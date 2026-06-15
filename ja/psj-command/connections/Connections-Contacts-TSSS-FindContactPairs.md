---
id: Connections-Contacts-TSSS-FindContactPairs
title: Connections.Contacts.TSSS.FindContactPairs()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Find the contact pairs in model
---

## Description

Find the contact pairs in model.

## Syntax

```psj
Connections.Contacts.TSSS.FindContactPairs(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; TSSS &#187; ContactTable</menuselection>

## Inputs

### `crlParts`

- A _List of Cursor_ specifying the parts to find contact pairs.
- This is a required input.

### `dFindTolerance`

- A _Double_ specifying the gap distance in meters between parts to detect contact pairs.
- The default value is 0.001.

### `dTolForTIED`

- A _Double_ specifying the gap distance in meters between parts for tied definition. Among the detected contact pairs, the contact pair candidate that is less than the entered tolerance is automatically defined as the tied definition.
- The default value is 0.001.

### `iSearchArea`

- An _Integer_ specifying the search area criteria.
    - 0: Minimum, only faces found with the searching tolerance will take as potential contact pairs
    - 1: Maximum, it will display as a contact pair candidate up to the face that smoothly connects with the searched face
- The default value is 1.

### `bCheckFaceDir`

- A _Boolean_ specifying the option used to check face direction.
    - _True_: Check the face direction.
    - _False_: Does not check the face direction.
- The default value is _False_.

### `iMasterBasis`

- An _Integer_ specifying the contact segment judgment criteria to be the master face of the detected contact pairs.
    - 0: Mesh size, segment group with large element surface area average value
    - 1: Area, segment group with large total area
- The default value is 0.

## Return Code

A _List of pairs_ specifying the found contact pairs.

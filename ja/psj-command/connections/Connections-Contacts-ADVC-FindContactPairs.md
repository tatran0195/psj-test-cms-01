---
id: Connections-Contacts-ADVC-FindContactPairs
title: Connections.Contacts.ADVC.FindContactPairs()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Find contact pairs.
---

## Description

Find contact pairs.

## Syntax

```psj
Connections.Contacts.ADVC.FindContactPairs(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; ADVC &#187; FindContact</menuselection>

## Inputs

### `crlParts`

- A _List of Cursor_ specifying the target parts.
- This is the required input.

### `dFindTolerance`

- A _Double_ specifying tolerance to find contact.
- The default value is 0.0002.

### `dTolForTIED`

- A _Double_ specifying the distance to set tied.
- The default value is 0.1.

## Return Code

A _stAdvcParam_ specifying the parameters of contacts.

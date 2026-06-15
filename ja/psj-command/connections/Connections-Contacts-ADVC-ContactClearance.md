---
id: Connections-Contacts-ADVC-ContactClearance
title: Connections.Contacts.ADVC.ContactClearance()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: contact clearance for ADVC contact
---

## Description

Contact clearance for ADVC contact

## Syntax

```psj
Connections.Contacts.ADVC.ContactClearance(strName, dClearanceVal, iLocalUnit, iSolverType, crlTargets, crEdit=None)
```

Macro: [ContactClearance](/docs/cli/5.1.0/macro/connections/ContactClearance)

Ribbon: <menuselection>Connections &#187; Contacts &#187; ADVC &#187; ContactClearance</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `dClearanceVal`

- A _Double_ specifying the clearance value.
- This is a required input.

### `iLocalUnit`

- An _Integer_ specifying the local unit.
- This is a required input.

### `iSolverType`

- An _Integer_ specifying the solver type.
- This is a required input.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- This is a required input.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

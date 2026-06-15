---
id: Connections-Contacts-ADVC-ContactTable_Advc
title: Connections.Contacts.ADVC.ContactTable_Advc()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create contacts for ADVC solver by using table
---

## Description

Create contacts for ADVC solver by using table.

## Syntax

```psj
Connections.Contacts.ADVC.ContactTable_Advc(...)
```

Macro: [ContactTable_Advc](/docs/cli/5.1.0/macro/connections/ContactTable_Advc)

Ribbon: <menuselection>Connections &#187; Contacts &#187; ADVC &#187; ContactTable</menuselection>

## Inputs

### `taContactFound_ADVC`

- A list of _[`TCONTACTTABLEDATA_ADVC`](/docs/cli/5.1.0/data-type/psj-command/parameter-types/TCONTACTTABLEDATA_ADVC)_ specifying ADVC contact sets.
- The default value is [].

### `taContactDeleted_ADVC`

- A list of _Cursor_ of groups to delete ADVC contacts.
- The default value is [].

## Return Code

- A _Boolean_ specifying Succeeded or Failed.
    - True: Succeeded.
    - False: Failed.

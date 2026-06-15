---
id: JPT-BeginDatabaseTransaction
title: JPT.BeginDatabaseTransaction()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Get all the information of all the existing groups under the specified group's name
---

## Description

Disable screen animation, screen update, and status bar update information to improve Jupiter's performance.

<Callout type="warn" title="[JPT.EndDatabaseTransaction()](/docs/cli/5.1.0/psj-utility/JPT.EndDatabaseTransaction) should be used at the end of the process, to return Jupiter to the normal state.">

</Callout>
## Syntax

```psj
JPT.BeginDatabaseTransaction("transactionName")
```

## Inputs

### `transactionName`

- A _String_ specifying the transaction name (used to display the command name in Undo/Redo menu).
- This is a required input.

## Return Code

This utility function does not have output value.

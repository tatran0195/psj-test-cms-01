---
id: Assemble-BooleanEx
title: Assemble.BooleanEx()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Conduct a Boolean operation on selected bodies
---

## Description

Conduct a Boolean operation on selected bodies.

## Syntax

```psj
Assemble.BooleanEx(...)
```

Ribbon: <menuselection>Assemble &#187; Boolean</menuselection>

## Inputs

### `crlTargetsParts`

- A _List of Cursor_ specifying the target parts for boolean.
- This is a required input.

### `strNameSuffix`

- A _String_ specifying the target parts suffix name for after boolean.
- This is a required input.

### `iBooleanType`

- An _Integer_ specifying the boolean operation type.
- The default value is 0.

### `bLeaveOriginalPart`

- A _Boolean_ enable/disalbe the option that keep original parts.
- The default value is False.

### `bImprintCrossLine`

- A _Boolean_ enable/disalbe the option that imprint cross line on original parts.
- The default value is False.

### `iTargetPart`

- An _Integer_ specifying the index of keep body.
- The default value is 0.

## Return Code

A _Cursor_ of body if success, or _None_ if fail.

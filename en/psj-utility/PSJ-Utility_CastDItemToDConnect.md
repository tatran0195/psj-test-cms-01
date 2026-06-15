---
id: JPT-CastDItemToDConnect
title: JPT.CastDItemToDConnect()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Convert DItem object to DConnect object to get the information of the selected coordinate system
---

## Description

Convert _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object to _[DConnect](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DConnect)_ object to get the information of the selected coordinate system.

## Syntax

```psj
JPT.CastDItemToDConnect(DItemObject)
```

## Inputs

### `DItemObject`

- A _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object which will be used to convert.
- This is a required input.

## Return Code

A _[DConnect](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DConnect)_ object (Connection with relating information).

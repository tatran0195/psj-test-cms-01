---
id: JPT-CastDItemToDROElem
title: JPT.CastDItemToDROElem()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Convert DItem object to DPostElem object
---

## Description

Convert _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object to _[DPostElem](/docs/cli/5.1.0/data-type/psj-utility/post-utility/post-built-in-types/DPostElem)_ object to get the information of the selected Post element.

## Syntax

```psj
JPT.CastDItemToDROElem(DItemObject)
```

## Inputs

### `DItemObject`

- A _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object which will be used to convert.
- This is a required input.

## Return Code

A _[DPostElem](/docs/cli/5.1.0/data-type/psj-utility/post-utility/post-built-in-types/DPostElem)_ object (Post element with relating information).

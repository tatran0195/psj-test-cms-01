---
id: JPT-CastDItemToDRONode
title: JPT.CastDItemToDRONode()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Convert DItem object to DPostNode object
---

## Description

Convert _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object to _[DPostNode](/docs/cli/5.1.0/data-type/psj-utility/post-utility/post-built-in-types/DPostNode)_ object to get the information of the selected Post node.

## Syntax

```psj
JPT.CastDItemToDRONode(DItemObject)
```

## Inputs

### `DItemObject`

- A _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object which will be used to convert.
- This is a required input.

## Return Code

A _[DPostNode](/docs/cli/5.1.0/data-type/psj-utility/post-utility/post-built-in-types/DPostNode)_ object (Post node with relating information).

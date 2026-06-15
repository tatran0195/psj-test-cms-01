---
id: JPT-CastToDItem
title: JPT.CastToDItem()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Convert the selected object to DItem object
---

## Description

Convert the selected object to _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object to get all the related information.

## Syntax

```psj
JPT.CastToDItem(Object)
```

## Inputs

### `Object`

- An _Object_ in Jupiter such as _[DBody](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DBody)_, _[DFace](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DFace)_, _[DElem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DElem)_, _[DEdge](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DEdge)_, _[DGroup](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DGroup)_, _[DNode](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DNode)_, etc.
- This is a required input.

## Return Code

A _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object (Base object with all the information).

---
id: JPT-CastDItemToDLoadBC
title: JPT.CastDItemToDLoadBC()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Convert DItem object to DLoadBC object to get the information of the selected coordinate system
---

## Description

Convert _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object to _[DLoadBC](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DLoadBC)_ object to get the information of the selected coordinate system.

## Syntax

```psj
JPT.CastDItemToDLoadBC(DItemObject)
```

## Inputs

### `DItemObject`

- A _[DItem](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DItem)_ object which will be used to convert.
- This is a required input.

## Return Code

A _[DLoadBC](/docs/cli/5.1.0/data-type/psj-utility/pre-utility/built-in-types/DLoadBC)_ object (Boundary condition with relating information).

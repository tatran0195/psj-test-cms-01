---
id: FileMenu-AddJTDB
title: FileMenu.AddJTDB()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: add jtdb into model
---

## Description

Add jtdb into model

## Syntax

```psj
FileMenu.AddJTDB(strFileName, strMethod="AUTO", strTargetModel="IMPORTED", strOption="OFFSET", iInputNode=0, iInputElem=0, iInputPart=0, iInputMaterial=0, iInputProperty=0)
```

Ribbon: <menuselection>FileMenu &#187; AddJTDB</menuselection>

## Inputs

### `strFileName`

- A _String_ specifying the file name.
- This is a required input.

### `strMethod`

- A _String_ specifying the method.
- The default value is "AUTO".

### `strTargetModel`

- A _String_ specifying the target model.
- The default value is "IMPORTED".

### `strOption`

- A _String_ specifying the option.
- The default value is "OFFSET".

### `iInputNode`

- An _Integer_ specifying the input node.
- The default value is 0.

### `iInputElem`

- An _Integer_ specifying the input element.
- The default value is 0.

### `iInputPart`

- An _Integer_ specifying the input part.
- The default value is 0.

### `iInputMaterial`

- An _Integer_ specifying the input material.
- The default value is 0.

### `iInputProperty`

- An _Integer_ specifying the input property.
- The default value is 0.

## Return Code

A String of 1 if success, or 0 if fail.

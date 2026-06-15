---
id: dlg-add_combobox
title: dlg.add_combobox()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Add a ComboBox component to the dialog
---

## Description

Add a ComboBox component to the dialog.

## Syntax

```psj
dlg.add_combobox(...)
```

## Inputs

### `name`

- A _String_ specifying the name of the ComboBox component.
- This is a required input.

### `layout`

- A _String_ specifying the Layout name.
  The created Layout can be a GroupBox component, Layout component, etc.
- This is a required input.

### `index`

- An _Integer_ specifying the default option to be displayed of the ComboBox.
- The starting value is 0 (first option -> index=0).
- This is a required input.

### `options`

- A _List of String_ specifying the options of the ComboBox.
- The default value is [].

### `width`

- An _Integer_ specifying the width of the ComboBox.
- The default value is 0.

### `height`

- An _Integer_ specifying the height of the ComboBox.
- The default value is 0.

## Return Code

This function does not have output value.

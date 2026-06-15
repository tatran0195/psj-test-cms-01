---
id: dlg-add_checkbox
title: dlg.add_checkbox()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Add a CheckBox to the creating dialog
---

## Description

Add a CheckBox to the creating dialog.

## Syntax

```psj
dlg.add_checkbox(...)
```

## Inputs

### `name`

- A _String_ specifying the name of the created component.
- This is a required input.

### `layout`

- A _String_ specifying the created Layout name.
  The created Layout can be a GroupBox component, Layout component, etc.
- This is a required input.

### `text`

- A _String_ specifying text which will be displayed next to the CheckBox.
- The default value is "".

### `checked`

- A _Boolean_ specifying the default state of this component:
    - _True_: the default state of this component is checked.
    - _False_: the default state of this component is unchecked.
- The default value is _False_.

### `lefttext`

- A _Boolean_ specifying the text is on left side of CheckBox:
    - _True_: the text is on left side of the CheckBox.
    - _False_: the text is on right side of the CheckBox.
- The default value is _False_.

### `width`

- An _Integer_ specifying the width of the CheckBox.
- The default value is 0.

### `height`

- An _Integer_ specifying the height of the CheckBox.
- The default value is 0.

## Return Code

This function does not have output value.

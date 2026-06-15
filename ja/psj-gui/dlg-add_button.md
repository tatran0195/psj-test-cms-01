---
id: dlg-add_button
title: dlg.add_button()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Add a Button to the creating dialog
---

## Description

Add a Button to the creating dialog. The Button can be an image Button.

## Syntax

```psj
dlg.add_button(...)
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

- A _String_ specifying text which will be displayed on the Button.
- The default value is "".

### `width`

- An _Integer_ specifying the width of the Button.
- The default value is 0.

### `height`

- An _Integer_ specifying the height of the Button.
- The default value is 0.

### `text_color`

- An _Integer_ specifying the text color.
- The default value is 0.

### `bk_color`

- An _Integer_ specifying the background color.
- The default value is 15790320.

### `img`

- A _String_ specifying the path of an image to be displayed on the Button.
- The default value is "".

### `location`

- A _String_ specifying the location of an image to be displayed on the Button.
- The default value is "left".

## Return Code

This function does not have output value.

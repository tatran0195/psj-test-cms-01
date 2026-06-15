---
id: dlg-add_browser
title: dlg.add_browser()
author: TechnoStar Co., Ltd.
author_url: https://www.e-technostar.com/
description: Add a file/folder Browser component to the creating dialog
---

## Description

Add a file/folder Browser component to the creating dialog.

## Syntax

```psj
dlg.add_browser(...)
```

## Inputs

### `name`

- A _String_ specifying the name of the created component.
- This is a required input.

### `layout`

- A _String_ specifying the created Layout name.
  The created Layout can be a GroupBox component, Layout component, etc.
- This is a required input.

### `mode`

- A _String_ specifying the Browser type:
    - "file": allowing user to select a file/files.
    - "folder": allowing user to select a folder/folders.
- The default value is "file".

### `file_filter`

- A _String_ specifying the format of the selectable file/files with type (\*.extension).
    - For example: All Files (\*.\*), Abaqus (\*.inp)
- The default value is "".

### `default`

- A _String_ specifying the default text which will be shown on the textbox of this component.
- The default value is "".

### `multisel`

- A _Boolean_ specifying the possibility of the multiple selection:
    - _True_: allow user to select multiple files/folders at the same time.
    - _False_: allow user to select only one file/folder at a time.
- The default value is _False_.

## Return Code

This function does not have output value.

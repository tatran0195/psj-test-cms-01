---
id: Assembly-RightClick-ExportMeasureNote
title: Assembly.RightClick.ExportMeasureNote()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export content of measure notes to csv files.
---

## Description

Export content of measure notes to csv files.

## Syntax

```psj
Assembly.RightClick.ExportMeasureNote(...)
```

Macro: [ExportMeasureNote]

Ribbon: <menuselection>Assembly &#187; RightClick &#187; ExportMeasureNote</menuselection>

## Inputs

### `crlTargets`

- A _List of Cursor_ specifying measure notes.
- This is a required input.

### `strlPaths`

- A _List of String_ specifying export file paths.
- This is a required input.

### `iEncode`

- An _Integer_ specifying encoding.
    - 0: UTF-8
    - 1: SJIS
- The default value is -1.

### `bWithBOM`

- A _Boolean_ specifying whether or not export csv with BOM.
- The default value is _False_.

## Return Code

A _Boolean_ specifying succeeded or not.

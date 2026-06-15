---
id: CheckPattern
title: CheckPattern()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Check the mesh pattern on the selected faces. The matched/unmatched mesh pattern between selected entities will be shown based on the selected option.

## Syntax

```psj
CheckPattern(cursor[] Parts, bool bShowMismatch, bool bShowMatch, doulbe dTolerance)
```

## Inputs

### `1. cursor[]`

Target parts to check mesh pattern match.

### `2. bool`

Specify whether to display the part where the mesh pattern does not matches.

### `3. Int`

Specify whether to display the part where the mesh pattern matches.

### `4. double`

Specify the distance between faces to detect the mesh pattern.

## Return Code

Two lists of cursor list as a string: first list contains the entities mesh pattern matched, second list contains the entities mesh pattern isn't match.

## Sample Code

```psj
CheckPattern([3:1, 3:2], 0, 1, 1e-05)
```

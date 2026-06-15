---
id: ACM_ImportCmd_OnclickedImportButton
title: ACM_ImportCmd_OnclickedImportButton()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

ACM_ImportCmd_OnclickedImportButton

## Syntax

```psj
ACM_ImportCmd_OnclickedImportButton(string filePath, double dFaceAngle)
```

## Inputs

### `1. String`

File path directory

### `2. Double`

Nastran data face angle

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ACM_ImportCmd_OnclickedImportButton("D:/tri6.bdf", 15)
```

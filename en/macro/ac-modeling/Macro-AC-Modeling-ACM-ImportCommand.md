---
id: ACM_ImportCommand
title: ACM_ImportCommand()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

ACM_ImportCommand

## Syntax

```psj
ACM_ImportCommand(bool bOutShelFile, string srtImportFilePathTri6, string strImportFilePathTri3)
```

## Inputs

### `1. Bool`

Output Shell File bool flag True = 1, False = 0

### `2. String`

bdf file path of Tri6 model exported using bdf export

### `3. String`

bdf file path of Tri3 model exported using bdf export

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ACM_ImportCommand(1, "D:/tri6.bdf", "D:/tri3.bdf")
```

---
id: AcousticTLPCHResult
title: AcousticTLPCHResult()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Read a Punch file (\*.pch) containing information on the coupled surfaces output from a Nastran structural-acoustic coupled calculation and create a nodal group on the acoustic model.

## Syntax

```psj
AcousticTLPCHResult(str strPathName, cursor crEdit)
```

## Inputs

### `1. str`

- A String specifying the path of (\*.pch) file.

### `2. cursor`

- A Cursor specifying the edit.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AcousticTLPCHResult("path/to/the/file", 0:0)
```

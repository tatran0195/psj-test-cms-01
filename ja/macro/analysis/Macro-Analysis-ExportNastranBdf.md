---
id: ExportNastranBdf
title: ExportNastranBdf()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Export Nastran bdf file

## Syntax

```psj
ExportNastranBdf(string strPath, TCursor job, int modelCheckAnswer, int deleteSlaveNodesAnswer)
```

## Inputs

### `1. String`

bdf file path

### `2. Double`

job cursor

### `3. Int`

Model Check Answer

### `4. Int`

Delete Slave Nodes Answer

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ExportNastranBdf("D:/NastranBdf.bdf", 147:2, 1, 0)
```

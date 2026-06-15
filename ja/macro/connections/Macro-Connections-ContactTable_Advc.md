---
id: ContactTable_Advc
title: ContactTable_Advc()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create contact for advc by table.

## Syntax

```psj
ContactTable_Advc(TCONTACTTABLEDATA_ADVC[] taContactFound_ADVC, cursor[] taContactFound_ADVC)
```

## Inputs

### `1. TCONTACTTABLEDATA_ADVC[]`

List of contact setting.

### `2. Cursor[]`

List of group from where remove contact.

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
ContactTable_Advc([("Cube_2-G0002_Cube_1-G0001", "Cube_2", "Cube_1", [6:49], [6:24], 1, 0:0, (0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 0, 0, 1.79769e+308, 0, 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 0, 0, 0, 1, 0, 0, [1, 2, 0, 0], 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 2, 0, 0, [1, 2, 0, 0], 0), [], 65280, 0), ("Cube_3-G0004_Cube_2-G0003", "Cube_3", "Cube_2", [6:75], [6:50], 1, 0:0, (0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 0, 0, 1.79769e+308, 0, 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 0, 0, 0, 1, 0, 0, [1, 2, 0, 0], 0, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 2, 0, 0, [1, 2, 0, 0], 0), [], 65280, 0)], [])
```

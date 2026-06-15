---
id: CreateContactReport
title: CreateContactReport()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create a contact check report

## Syntax

```psj

CreateContactReport(string path, double zoomFactor, int fitGroupBy, int listBy, int listOrder, int listFormat)
```

## Inputs

### `1. String`

Exported report file path

### `2. Double`

Zoom factor

### `3. Int`

Fit group by:

- 0: Part
- 1: Face

### `4. Int`

List by:

- 0: Part
- 1: Contact Condition

### `5. Int`

List order:

- 0: Name
- 1: ID

### `6. Int`

List format:

- 0: html
- 1: excel

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CreateContactReport("D:/contact_report.html", 2, 0, 0, 0, 0)
```

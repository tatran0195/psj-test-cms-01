---
id: Connections-Contacts-ExportCheckReport
title: Connections.Contacts.ExportCheckReport()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the contact report of the current model to html/excel format. This function allows modifying report settings such as picture control, sort, and filter
---

## Description

Export the contact report of the current model to html/excel format. This function allows modifying report settings such as picture control, sort, and filter.

## Syntax

```psj
Connections.Contacts.ExportCheckReport(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; Export Check Report</menuselection>

## Inputs

### `strPath`

- A _String_ specifying the destination path of the HTML/Excel file to be exported. The destination path should be different from the C Drive (C:/) due to Window would deny saving any files to the C Drive directly (It is recommended to save in User's Drive such as D Drive, E Drive,...).
- This is a required input.

### `dZoomFactor`

- A _Double_ specifying the zoom factor when capturing the image.
    - If the zoom factor is greater than 1, the captured model will become larger (zoom in).
    - if the zoom factor is smaller than 1, the captured model will become smaller (zoom out).
- The default value is 1.2.

### `iFitBy`

- An _Integer_ specifying which entity type will be focused on when capturing the image.
    - If _iFitBy=0_: Part - Fit to Part. The part contains Master/Slave face of contact will be focused on when capturing.
    - If _iFitBy=1_: Face - Fit to Contact face. The face which is Master/Slave face of contact will be focused on when capturing.
- The default value is 0.

### `iListBy`

- An _Integer_ specifying the contact report will be listed by type.
    - If _iListBy=0_: Part - List by Part: This option will list contacts in all parts of the model. The duplication of contacts is allowable.
    - If _iListBy=1_: Contact Condition - List by contact condition: This option will list contacts by the existing contacts in the model, each contact will be declared only once a time. The duplication of contacts will not occur.
- The default value is 0.

### `iListOrder`

- An _Integer_ specifying the order sort type of contacts in report.
    - If _iListOther=0_: Name - Sort Result by Name: This option will list contacts in the report by Alphabetical order (from A-Z).
    - If _iListOther=1_: ID - Sort Result by identify number: This option will list contacts in the report by ID Numerical order (ascending order).
- The default value is 0.

### `iFormat`

- An _Integer_ specifying the file format type.
    - If _iFormat=0_: the contact report will be exported by HTML format file.
    - If _iFormat=1_: the contact report will be exported by Excel format file.
- The default value is 0.

## Return Code

A _Boolean_ specifying whether the HTML file is exported correctly or not:

- _True_: The HTML file is exported correctly.
- _False_: The HTML file is exported correctly.

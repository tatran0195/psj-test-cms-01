---
id: Analysis-ADVC-MakeProcess-Fatigue
title: Analysis.ADVC.MakeProcess.Fatigue()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create ADVC fatigue process
---

## Description

Create ADVC fatigue process.

## Syntax

```psj
Analysis.ADVC.MakeProcess.Fatigue(...)
```

Macro: [AdvcFatigueProcess](/docs/cli/5.1.0/macro/analysis/AdvcFatigueProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; MakeProcess &#187; Fatigue</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `bFatigue`

- A _Boolean_ specifying the fatigue.
- The default value is False.

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 0.

### `iStressAxis`

- An _Integer_ specifying the stress axis.
- The default value is 0.

### `iSafetyType`

- An _Integer_ specifying the safety type.
- The default value is 0.

### `dSearchResolution`

- A _Double_ specifying the search resolution.
- The default value is DFLT_DBL.

### `dSafetyMax`

- A _Double_ specifying the safety maximum.
- The default value is DFLT_DBL.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `listLoadNode`

- A _LOAD_NODE List_ specifying the load node.
- The default value is [].

### `listLoadCaseNode`

- A _LOAD_CASE_NODE List_ specifying the load case node.
- The default value is [].

### `listLoadNodeContact`

- A _LOAD_NODE_CONTACT List_ specifying the load node contact.
- The default value is [].

### `ilOutputParamList`

- A _List of Integer_ specifying the output param list.
- The default value is [].

### `iRefType`

- An _Integer_ specifying the reference type.
- The default value is -1.

### `strRefPath`

- A _String_ specifying the reference path.
- The default value is "".

### `listAdvcRefStressResult`

- A _ADVC_REF_STRESS_RESULT List_ specifying the advc reference stress result.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

---
id: Analysis-ADVC-MakeProcess-ResponseSpectrum
title: Analysis.ADVC.MakeProcess.ResponseSpectrum()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create advc response spectrum process
---

## Description

Create advc response spectrum process.

## Syntax

```psj
Analysis.ADVC.MakeProcess.ResponseSpectrum(...)
```

Macro: [AdvcSpectrumProcess](/docs/cli/5.1.0/macro/analysis/AdvcSpectrumProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; MakeProcess &#187; ResponseSpectrum</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `strRefEigenDir`

- A _String_ specifying the reference eigen direction.
- The default value is "".

### `dRefLowFreq`

- A _Double_ specifying the reference low frequence.
- The default value is DFLT_DBL.

### `dRefHighFreq`

- A _Double_ specifying the reference high frequence.
- The default value is DFLT_DBL.

### `iPropMethod`

- An _Integer_ specifying the property method.
- The default value is 0.

### `iSpttype`

- An _Integer_ specifying the spectrum type.
- The default value is 0.

### `dSptFactor0`

- A _Double_ specifying the spectrum factor0.
- The default value is DFLT_DBL.

### `crSpt0`

- A _Cursor_ specifying the spt0.
- The default value is None.

### `dSptFactor1`

- A _Double_ specifying the spectrum factor1.
- The default value is DFLT_DBL.

### `crSpt1`

- A _Cursor_ specifying the spectrum 1.
- The default value is None.

### `dSptFactor2`

- A _Double_ specifying the spectrum factor2.
- The default value is DFLT_DBL.

### `crSpt2`

- A _Cursor_ specifying the spectrum 2.
- The default value is None.

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
- The default value is 0.

### `strRefPath`

- A _String_ specifying the reference path.
- The default value is "".

### `listAdvcRefStressResult`

- A _ADVC_REF_STRESS_RESULT List_ specifying the advc reference stress result.
- The default value is [].

## Return Code

A String of 1 if success, or 0 if fail.

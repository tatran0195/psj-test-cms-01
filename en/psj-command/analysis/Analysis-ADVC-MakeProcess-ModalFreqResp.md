---
id: Analysis-ADVC-MakeProcess-ModalFreqResp
title: Analysis.ADVC.MakeProcess.ModalFreqResp()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create an ADVC Modal Frequency Response process. This process could be created in one time or multiple times
---

## Description

Create an ADVC Modal Frequency Response process.
This process could be created in one time or multiple times.

## Syntax

```psj
Analysis.ADVC.MakeProcess.ModalFreqResp(...)
```

Macro: [AdvcModalFreqRespProcess](/docs/cli/5.1.0/macro/analysis/AdvcModalFreqRespProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Structure &#187; ModalFreqResp</menuselection>

## Inputs

### `strName`

- A _String_ specifying the process name of ADVC - Modal Frequency Response process.
- This is a required input.

### `strRefEigenDir`

- A _String_ specifying the reference eigen direction which is the path of a folder.
- The default value is "".

### `dRefLowFreq`

- A _Double_ specifying the reference low frequency.
- The default value is DFLT_DBL.

### `dRefHighFreq`

- A _Double_ specifying the reference high frequency.
- The default value is DFLT_DBL.

### `crModalDampingRatio`

- A _Cursor_ specifying the modal damping ratio.
- The default value is _None_.

### `crExcitationFreq`

- A _Cursor_ specifying the excitation frequency.
- The default value is _None_.

### `bAutoFreqInterval`

- A _Boolean_ specifying whether to enable the auto frequency interval or not.
    - If _True_: All settings of frequency interval will be able to use.
    - If _False_: All settings of frequency interval won't be able to use.
- The default value is _False_.

### `dMaxFreq`

- A _Double_ specifying the maximum frequency.
- The default value is DFLT_DBL.

### `dMinFreq`

- A _Double_ specifying the minimum frequency.
- The default value is DFLT_DBL.

### `iNumFreqPoint`

- An _Integer_ specifying the number frequency point.
- The default value is DFLT_INT.

### `dBiasParam`

- A _Double_ specifying the bias parameter.
- The default value is DFLT_DBL.

### `crEdit`

- A _Cursor_ specifying an ADVC Modal Frequency Response process.
    - If this parameter is used, the specified job will be modified.
    - If it is left _None_, a new job will be created.
- The default value is _None_.

### `listLoadNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the list of nodes that assigned loads in the model.
- The default value is [].

### `listLoadCaseNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the list of nodes that assigned load cases in the model.
- The default value is [].

### `listLoadNodeContact`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the list of nodes that assigned contacts in the model.
- The default value is [].

### `ilOutputParamList`

- A _List of Integer_ specifying the list of output request for the result type such as Displacement, Stress, Strain,...
- The default value is [].

### `iRefType`

- An _Integer_ specifying the result reference type.
    - If _iRefType=0_: Temperature Load
    - If _iRefType=1_: Stress
- The default value is 0.

### `strRefPath`

- A _String_ specifying the path of reference result.
- The default value is "".

### `listAdvcRefStressResult`

- A _List of [ADVC_REF_STRESS_RESULT](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_REF_STRESS_RESULT)_ specifying the list of data of Reference Result.
- The default value is [].

## Return Code

A _Cursor_ specifying the newly created or the modified ADVC Modal Frequency Response process.

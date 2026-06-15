---
id: Analysis-ADVC-MakeProcess-Transient
title: Analysis.ADVC.MakeProcess.Transient()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create ADVC Heat Transfer for Transient process
---

## Description

Create ADVC Heat Transfer for Transient process.

## Syntax

```psj
Analysis.ADVC.MakeProcess.Transient(...)
```

Macro: [AdvcTHProcess](/docs/cli/5.1.0/macro/analysis/AdvcTHProcess)

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Heat Transfer &#187; Make Process</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name of the new process.
- The default value is "".

### `iEndType`

- An _Integer_ specifying the end connection type. The possible values that it can take are 0, 1, and 2. Each of these numbers corresponds to "Max Time", "Steady Rate", "Both".
- The default value is 1.

### `dMaxTime`

- A _Double_ specifying the maximum time. This argument is to be used when _iEndType=1_ or _iEndType=2_.
- The default value is 1.

### `dSteadyRate`

- A _Double_ specifying the steady rate. This argument is to be used when _iEndType=2_ or _iEndType=2_.
- The default value is 0.0.

### `iFixedOrAuto`

- An _Integer_ specifying the incrementation type.
- If _iFixedOrAuto=0_: Use the fixed dt time value _dFixedDt_.
- If _iFixedOrAuto=1_: Auto calculate the dt time value base on these parameters _dMaxChange_, _dInitDt_, _dMaxDt_, _dMinDt_.
- The default value is 0.

### `dMaxChange`

- A _Double_ specifying the maximum change of temperature. This argument is to be used when _iFixedOrAuto=1_.
- The default value is DFLT_DBL.

### `dInitDt`

- A _Double_ specifying the initial dt time. This argument is to be used when _iFixedOrAuto=1_.
- The default value is DFLT_DBL.

### `iDefineMaxDt`

- An _Integer_ specifying whether to use the maximum dt time to calculate the incrementation when _iFixedOrAuto=1_.
- The default value is 0.

### `dMaxDt`

- A _Double_ specifying the maximum dt time. This argument is to be used when _iFixedOrAuto=1_.
- The default value is DFLT_DBL.

### `iDefineMinDt`

- An _Integer_ specifying whether to use the minimum dt time to calculate the incrementation when _iFixedOrAuto=1_.
- The default value is 0.

### `dMinDt`

- A _Double_ specifying the minimum dt time. This argument is to be used when _iFixedOrAuto=1_.
- The default value is DFLT_DBL.

### `dFixedDt`

- A _Double_ specifying the fixed dt time value. This argument is to be used when _iFixedOrAuto=0_.
- The default value is DFLT_DBL.

### `iOutputLast`

- An _Integer_ specifying the output last.
- The default value is -1.

### `iOutputInterval`

- An _Integer_ specifying the output interval.
- The default value is DFLT_INT.

### `iRestartLast`

- An _Integer_ specifying the restart last.
- The default value is -1.

### `iRestartInterval`

- An _Integer_ specifying the restart interval.
- The default value is DFLT_INT.

### `dOutputTimeInterval`

- A _Double_ specifying the output time interval.
- The default value is DFLT_DBL.

### `dRestartTimeInterval`

- A _Double_ specifying the restart time interval.
- The default value is DFLT_DBL.

### `iOutputInit`

- An _Integer_ specifying the output initial.
- The default value is -1.

### `iListOutputInterval`

- An _Integer_ specifying the list output interval.
- The default value is DFLT_INT.

### `bConvergence`

- A _Boolean_ specifying the convergence.
- The default value is False.

### `dCgTol`

- A _Double_ specifying the convergence tolerance.
- The default value is DFLT_DBL.

### `dCgNrTol`

- A _Double_ specifying the convergence of Newton-Raphson method tolerance.
- The default value is DFLT_DBL.

### `dCgDispTol`

- A _Double_ specifying the convergence of displacement tolerance.
- The default value is DFLT_DBL.

### `dCgNrDispTol`

- A _Double_ specifying the convergence of Newton-Raphson method displacement tolerance.
- The default value is DFLT_DBL.

### `dCgDispLimitTol`

- A _Double_ specifying the convergence of displacement limit tolerance.
- The default value is DFLT_DBL.

### `dCgTotalDispLimitTol`

- A _Double_ specifying the convergence of total displacement limit tolerance.
- The default value is DFLT_DBL.

### `dNewtonTol`

- A _Double_ specifying the Newton tolerance.
- The default value is DFLT_DBL.

### `dNewtonDispTol`

- A _Double_ specifying the Newton displacement tolerance.
- The default value is DFLT_DBL.

### `dNewtonDispLimitTol`

- A _Double_ specifying the Newton displacement limit tolerance.
- The default value is DFLT_DBL.

### `dNewtonTotalDispLimitTol`

- A _Double_ specifying the Newton total displacement limit tolerance.
- The default value is DFLT_DBL.

### `iCgloopMax`

- An _Integer_ specifying the convergence of loop maximum.
- The default value is DFLT_INT.

### `iNewtonMax`

- An _Integer_ specifying the Newton maximum.
- The default value is DFLT_INT.

### `dHtNlLoopTol`

- A _Double_ specifying the heat transfer nl loop tolerance.
- The default value is DFLT_DBL.

### `iHtNlLoopMax`

- An _Integer_ specifying the heat transfer nl loop maximum.
- The default value is DFLT_INT.

### `crEdit`

- A _Cursor_ specifying the existing ADVC process to be modified. If the default value is specified, a new process will be created, otherwise the specified ADVC process will be modified.
- The default value is _None_.

### `listLoadNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the load node.
- If this argument is specified, the `listLoadCaseNode` will be empty.
- The default value is [].

### `listLoadCaseNode`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the loadcase node.
- If this argument is specified, the `listLoadNode` will be empty.
- The default value is [].

### `listLoadNodeContact`

- A _List of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE)_ specifying the load node contact.
- This argument uses the instance of [ADVC_LOAD_NODE](/docs/cli/5.1.0/data-type/psj-command/parameter-types/ADVC_LOAD_NODE) and won't be duplicated with `listLoadNode` or `listLoadCaseNode`
- The default value is [].

### `ilOutputParamList`

- A _List of Integer_ specifying the output param list.
- The default value is [].

## Return Code

A _Cursor_ specifying the created or the modified ADVC Transient process.

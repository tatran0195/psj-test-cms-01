---
id: Connections-GapsDetail
title: Connections.GapsDetail()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Unknown Description
---

## Description

Unknown Description

## Syntax

```psj
Connections.GapsDetail(crlMaster=[], crlSlave=[], iMethod=0, iOriMode=0, crCoord=None, strName="", dU0=DFLT_DBL, dF0=DFLT_DBL, dKa=DFLT_DBL, dKb=DFLT_DBL, dKt=DFLT_DBL, dMar=DFLT_DBL, dMu1=DFLT_DBL, dMu2=DFLT_DBL, dlOriVec=[], dTmax=DFLT_DBL, dTol=DFLT_DBL, dTrmin=DFLT_DBL, crEditCur=None)
```

Macro: [ConnectGap](/docs/cli/5.1.0/macro/connections/ConnectGap)

Ribbon: <menuselection>Connections &#187; GapsDetail</menuselection>

## Inputs

### `crlMaster`

- A _List of Cursor_ specifying the master.
- The default value is [].

### `crlSlave`

- A _List of Cursor_ specifying the slave.
- The default value is [].

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 0.

### `iOriMode`

- An _Integer_ specifying the ori mode.
- The default value is 0.

### `crCoord`

- A _Cursor_ specifying the coordinate.
- The default value is None.

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `dU0`

- A _Double_ specifying the u0.
- The default value is DFLT_DBL.

### `dF0`

- A _Double_ specifying the f0.
- The default value is DFLT_DBL.

### `dKa`

- A _Double_ specifying the ka.
- The default value is DFLT_DBL.

### `dKb`

- A _Double_ specifying the kb.
- The default value is DFLT_DBL.

### `dKt`

- A _Double_ specifying the kt.
- The default value is DFLT_DBL.

### `dMar`

- A _Double_ specifying the mar.
- The default value is DFLT_DBL.

### `dMu1`

- A _Double_ specifying the mu1.
- The default value is DFLT_DBL.

### `dMu2`

- A _Double_ specifying the mu2.
- The default value is DFLT_DBL.

### `dlOriVec`

- A _Double List_ specifying the ori vector.
- The default value is [].

### `dTmax`

- A _Double_ specifying the tmax.
- The default value is DFLT_DBL.

### `dTol`

- A _Double_ specifying the tolerance.
- The default value is DFLT_DBL.

### `dTrmin`

- A _Double_ specifying the trmin.
- The default value is DFLT_DBL.

### `crEditCur`

- A _Cursor_ specifying the edit cur.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

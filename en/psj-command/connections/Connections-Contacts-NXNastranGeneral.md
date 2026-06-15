---
id: Connections-Contacts-NXNastranGeneral
title: Connections.Contacts.NXNastranGeneral()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings for the NX solver.
---

## Description

Define contact settings for the NX solver.

## Syntax

```psj
Connections.Contacts.NXNastranGeneral(strName="", iPiType=0, iPiAlg=0, dPdNorPenFactor=0, dPdTanPenFactor=0, dPdForceConTol=0, dPdMaxForceIter=0, dPdMaxStaIter=0, dPdChangeNum=0, dPdMinContactPer=0, iPiShellThickness=0, iPiContactStatus=0, iPiInitGapPenetra=0, iPiRegionRefine=0, iPiEvaluPts=0, dPdMinSearDist=0, dPdMaxSearDist=0, dPdFricCoef=0, dPdSearchDist=0, dPdPenatlyFactor=0, iPiShellOffset=0, crlTargets=[], crEdit=None, iColor=0, iMethod=0)
```

Macro: [ContactNXNastran](/docs/cli/5.1.0/macro/connections/ContactNXNastran)

Ribbon: <menuselection>Connections &#187; Contacts &#187; NXNastranGeneral</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "".

### `iPiType`

- An _Integer_ specifying the pi type.
- The default value is 0.

### `iPiAlg`

- An _Integer_ specifying the pi algorithm.
- The default value is 0.

### `dPdNorPenFactor`

- A _Double_ specifying the pd nor pen factor.
- The default value is 0.

### `dPdTanPenFactor`

- A _Double_ specifying the pd tan pen factor.
- The default value is 0.

### `dPdForceConTol`

- A _Double_ specifying the pd force con tolerance.
- The default value is 0.

### `dPdMaxForceIter`

- A _Double_ specifying the pd maximum force iterator.
- The default value is 0.

### `dPdMaxStaIter`

- A _Double_ specifying the pd maximum sta iterator.
- The default value is 0.

### `dPdChangeNum`

- A _Double_ specifying the pd change number.
- The default value is 0.

### `dPdMinContactPer`

- A _Double_ specifying the pd minimum contact per.
- The default value is 0.

### `iPiShellThickness`

- An _Integer_ specifying the pi shell thickness.
- The default value is 0.

### `iPiContactStatus`

- An _Integer_ specifying the pi contact status.
- The default value is 0.

### `iPiInitGapPenetra`

- An _Integer_ specifying the pi initial gap penetra.
- The default value is 0.

### `iPiRegionRefine`

- An _Integer_ specifying the pi region refine.
- The default value is 0.

### `iPiEvaluPts`

- An _Integer_ specifying the pi evalu pts.
- The default value is 0.

### `dPdMinSearDist`

- A _Double_ specifying the pd minimum sear dist.
- The default value is 0.

### `dPdMaxSearDist`

- A _Double_ specifying the pd maximum sear dist.
- The default value is 0.

### `dPdFricCoef`

- A _Double_ specifying the pd fric coefficient .
- The default value is 0.

### `dPdSearchDist`

- A _Double_ specifying the pd search dist.
- The default value is 0.

### `dPdPenatlyFactor`

- A _Double_ specifying the pd penatly factor.
- The default value is 0.

### `iPiShellOffset`

- An _Integer_ specifying the pi shell offset.
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `iColor`

- An _Integer_ specifying the color.
- The default value is 0.

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 0.

## Return Code

A String of 1 if success, or 0 if fail.

---
id: Connections-Contacts-ADVC-ContactTable
title: Connections.Contacts.ADVC.ContactTable()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create contacts for ADVC solver by using table
---

## Description

Create contacts for ADVC solver by using table.

## Syntax

```psj
Connections.Contacts.ADVC.ContactTable(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; ADVC &#187; ContactTable</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- The default value is "ContactADVC".

### `iContactType`

- An _Integer_ specifying the contact type.
- The default value is 0.

### `iSlidingType`

- An _Integer_ specifying the sliding type.
- The default value is 0.

### `iInitialState`

- An _Integer_ specifying the initial state.
- The default value is 0.

### `dInitialStateTol`

- A _Double_ specifying the initial state tolerance.
- The default value is DFLT_DBL.

### `dKineticFrictionCoef`

- A _Double_ specifying the kinetic friction coefficient .
- The default value is DFLT_DBL.

### `dExponentialCoef`

- A _Double_ specifying the exponential coefficient .
- The default value is DFLT_DBL.

### `iBehavior`

- An _Integer_ specifying the behavior.
- The default value is 0.

### `dClearance`

- A _Double_ specifying the clearance.
- The default value is DFLT_DBL.

### `iAdjust2Clearance`

- An _Integer_ specifying the adjust2 clearance.
- The default value is 0.

### `dInterference`

- A _Double_ specifying the interference.
- The default value is DFLT_DBL.

### `iAdjust2Interference`

- An _Integer_ specifying the adjust2 interference.
- The default value is 0.

### `iAutoShrink`

- An _Integer_ specifying the auto shrink.
- The default value is 0.

### `iAdvAdjust`

- An _Integer_ specifying the adv adjust.
- The default value is 0.

### `dAdjustValue`

- A _Double_ specifying the adjust value.
- The default value is DFLT_DBL.

### `dFrictionCoef`

- A _Double_ specifying the friction coefficient .
- The default value is DFLT_DBL.

### `dMaxShear`

- A _Double_ specifying the maximum shear.
- The default value is DFLT_DBL.

### `dElasticSlip`

- A _Double_ specifying the elastic slip.
- The default value is DFLT_DBL.

### `dSlipTolerance`

- A _Double_ specifying the slip tolerance.
- The default value is DFLT_DBL.

### `dSearchWidth`

- A _Double_ specifying the search width.
- The default value is DFLT_DBL.

### `dSearchGap`

- A _Double_ specifying the search gap.
- The default value is DFLT_DBL.

### `dSearchDepth`

- A _Double_ specifying the search depth.
- The default value is DFLT_DBL.

### `dCritialPenetration`

- A _Double_ specifying the critial penetration.
- The default value is DFLT_DBL.

### `iEstimationImpactTime`

- An _Integer_ specifying the estimation impact time.
- The default value is 0.

### `iFormula`

- An _Integer_ specifying the formula.
- The default value is 0.

### `iConstraintType`

- An _Integer_ specifying the constraint type.
- The default value is 0.

### `iDataType`

- An _Integer_ specifying the data type.
- The default value is 0.

### `iTypeId`

- An _Integer_ specifying the type ID.
- The default value is 0.

### `bTemperatureDependency`

- A _Boolean_ specifying the temperature dependency.
- The default value is False.

### `iNumDependencies`

- An _Integer_ specifying the number dependencies.
- The default value is 0.

### `tshTableClearance`

- A _Table Sheet_ specifying the table clearance.
- The default value is [].

### `bStabilized`

- A _Boolean_ specifying the stabilized.
- The default value is 0.

### `iStabilizeType`

- An _Integer_ specifying the stabilize type.
- The default value is 0.

### `dResidualFactor`

- A _Double_ specifying the residual factor.
- The default value is DFLT_DBL.

### `dEffectiveDist`

- A _Double_ specifying the effective dist.
- The default value is DFLT_DBL.

### `dCN`

- A _Double_ specifying the c n.
- The default value is DFLT_DBL.

### `dCT`

- A _Double_ specifying the c t.
- The default value is DFLT_DBL.

### `crlClearance`

- A _List of Cursor_ specifying the clearance.
- The default value is [].

### `crplTarget`

- A _Cursor Pair List_ specifying the target.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

### `dSearchAngle`

- A _Double_ specifying the search angle.
- The default value is DFLT_DBL.

### `iConstraintTypeExplicit`

- An _Integer_ specifying the constraint type explicit.
- The default value is 0.

### `dPenaltyFact`

- A _Double_ specifying the penalty fact.
- The default value is DFLT_DBL.

### `dPenaltyFactExplicit`

- A _Double_ specifying the penalty fact explicit.
- The default value is DFLT_DBL.

### `iColor`

- An _Integer_ specifying the color.
- The default value is 16711680.

### `iAlg`

- An _Integer_ specifying the algorithm.
- The default value is 0.

### `iMethod`

- An _Integer_ specifying the method.
- The default value is 0.

## Return Code

A _Cursor_ specifying the created contact.

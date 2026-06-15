---
id: Connections-Contacts-ADVC-ManualFace
title: Connections.Contacts.ADVC.ManualFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings between specified faces for the ADVC solver
---

## Description

Define contact settings between specified faces for the ADVC solver.

## Syntax

```psj
Connections.Contacts.ADVC.ManualFace(...)
```

Macro: [ContactManualFaceADVC](/docs/cli/5.1.0/macro/connections/ContactManualFaceADVC)

Ribbon: <menuselection>Connections &#187; Contacts &#187; ADVC &#187; ManualFace</menuselection>

## Inputs

### `crlMasterFaces`

- A _List of Cursor_ specifying the master faces.
- This is the required input.

### `crlSlaveFaces`

- A _List of Cursor_ specifying the slave faces.
- This is the required input.

### `strName`

- A _String_ specifying the contact name.
- The default value is "ContactADVC".

### `iContactType`

- An _Integer_ specifying the behavior type of the contact definition. The behavior type of contact definition is one of the following.
    - 0: General Type (Sliding Contact)
    - 1: Tied Type (Shell-Solid contact)
- The default value is 0.

### `iSlidingType`

- An _Integer_ specifying the sliding type.
    - 0: Blank.
    - 1: Finite sliding.
    - 2: Small sliding.
    - 3: Not sliding.
- The default value is 0.

### `iInitialState`

- An _Integer_ specifying the initial contact state.
    - 0: Blank.
    - 1: Auto - Auto-detect.
    - 2: Open - Start analysis from the non-contact state
    - 3: Close - Start analysis from the contact state .
- The default value is 0.

### `dInitialStateTol`

- A _Double_ specifying the the tolerance value to determine the initial contact state.
- The default value is DFLT_DBL.

### `dKineticFrictionCoef`

- A _Double_ specifying the dynamic coefficient of friction.
- The default value is DFLT_DBL.

### `dExponentialCoef`

- A _Double_ specifying the exponential damping coefficient.
- The default value is DFLT_DBL.

### `iBehavior`

- An _Integer_ specifying the the presence or absence of contact.
    - 0: Blank.
    - 1: Separation - Remove the contact restraint when the tensile force is generated.
    - 2: No Separation - Binding on all of the contact pairs that were found at the beginning of the contact search.
- The default value is 0.

### `dClearance`

- A _Double_ specifying the clearance amount.
- The default value is DFLT_DBL.

### `iAdjustToClearance`

- An _Integer_ specifying whether or not avoid the collapse element in accordance with node movement by Adjust function. This argument is active when _iSlidingType=0_ or _iSlidingType=2_.
    - 0: Blank.
    - 1: Yes.
    - 2: No.
- The default value is 0.

### `dInterference`

- A _Double_ specifying the interference.
- The default value is DFLT_DBL.

### `iAdjustToInterference`

- An _Integer_ specifying whether or not adjust to interference. This argument is active when _iSlidingType=1_ or _iSlidingType=3_.
    - 0: Blank.
    - 1: Yes.
    - 2: No.
- The default value is 0.

### `iAutoShrink`

- An _Integer_ specifying the presence or absence of penetration elimination.
    - 0: Blank.
    - 1: Yes.
    - 2: No.
- The default value is 0.

### `iAdjust`

- An _Integer_ specifying the whether or not move the slave node on the master surface so that the clearance goes to zero.
    - 0: Blank.
    - 1: Yes - Move all of the slave node.
    - 2: Value - Defines the distance to enable the node movement.
- The default value is 0.

### `dAdjustValue`

- A _Double_ specifying the distance to enable the node movement.
- The default value is DFLT_DBL.

### `dFrictionCoef`

- A _Double_ specifying the coefficient of static friction.
- The default value is DFLT_DBL.

### `dMaxShear`

- A _Double_ specifying the maximum shear stress.
- The default value is DFLT_DBL.

### `dElasticSlip`

- A _Double_ specifying the allowable amount of slip.
- The default value is DFLT_DBL.

### `dSlipTolerance`

- A _Double_ specifying the allowable slip tolerance.
- The default value is DFLT_DBL.

### `dSearchWidth`

- A _Double_ specifying the inside and outside determination parameter in the direction of the contact surface.
- The default value is DFLT_DBL.

### `dSearchGap`

- A _Double_ specifying the normal direction search distance for the gap surface.
- The default value is DFLT_DBL.

### `dSearchDepth`

- A _Double_ specifying the the normal direction search distance for the penetration surface.
- The default value is DFLT_DBL.

### `dCriticalPenetration`

- A _Double_ specifying the critical penetration amount.
- The default value is DFLT_DBL.

### `iEstimationImpactTime`

- An _Integer_ specifying the contact pairs using prediction of collision and release time.
    - 0: Blank.
    - 1: Yes.
    - 2: No.
- The default value is 0.

### `iFormula`

- An _Integer_ specifying the contact formulation type.
    - 0: Blank.
    - 1: Node to Segment: Node - Face contact
    - 2: Segment to Segment: Face - Face contact.
- The default value is 0.

### `iConstraintType`

- An _Integer_ specifying the contact constraint type.
    - 0: Blank.
    - 1: Lagrange - Lagrange undetermined multiplier method.
    - 2: Penalty - Penalty method.
- The default value is 0.

### `iThermalDataType`

- An _Integer_ specifying the heat transfer coefficient of clearance dependency.
    - 0: Blank.
    - 1: Clearance Dependency - Define the heat transfer coefficient of the clearance dependency.
    - 2: Pressure Dependency - Define the heat transfer coefficient of the pressure dependency.
- The default value is 0.

### `iTypeId`

- An _Integer_ specifying the type ID.
    - 0:
- The default value is 0.

### `bTemperatureDependency`

- A _Boolean_ specifying whether or not using temperature dependency data .
- The default value is _False_.

### `iNumDependencies`

- An _Integer_ specifying the number of dependencies.
- The default value is 0.

### `tshTableClearance`

- A _Table Sheet_ specifying the table of clearance dependency.
- The default value is [].

### `bStabilized`

- A _Boolean_ specifying whether or not stabilization parameter is defined.
- The default value is 0.

### `iStabilizeType`

- An _Integer_ specifying the type of contact stabilization coefficient.
    - 0: Blank.
    - 1: Stiffness - Stiffness ratio.
    - 2: Area - Area ratio.
- The default value is 0.

### `dResidualFactor`

- A _Double_ specifying the residual factor used to define the correction coefficient C1.
- The default value is DFLT_DBL.

### `dEffectiveDist`

- A _Double_ specifying the effective distance that is used to define the correction coefficient C2.
- The default value is DFLT_DBL.

### `dCN`

- A _Double_ specifying the normal direction stabilization coefficient.
- The default value is DFLT_DBL.

### `dCT`

- A _Double_ specifying the tangential direction stabilization coefficient.
- The default value is DFLT_DBL.

### `crlClearances`

- A _List of Cursor_ specifying the list of clearances data.
- The default value is [].

### `crContactADVC`

- A _Cursor_ specifying an existing contact settings item. If this parameter is used, the specified contact settings item will be modified. If it is left _None_, a new contact settings item will be created.
- The default value is _None_.

### `dSearchAngle`

- A _Double_ specifying the search angle of normal vector of the master/slave surface
- The default value is DFLT_DBL.

### `iConstraintTypeExplicit`

- An _Integer_ specifying the contact constraint type in the explicit dynamic analysis.
    - 0: Blank.
    - 1: Kinematic: Constraint method.
    - 2: Penalty: Penalty method.
- The default value is 0.

### `dPenaltyFact`

- A _Double_ specifying the the penalty scale factor.
- The default value is DFLT_DBL.

### `dPenaltyFactExplicit`

- A _Double_ specifying the penalty scale factor in the explicit dynamic analysis.
- The default value is DFLT_DBL.

### `iColor`

- An _Integer_ specifying the contact color.
- The default value is 16711680.

### `iAlgorithm`

- An _Integer_ specifying the contact setting target entity.
    - 0: Face to Face
- The default value is 0.

### `iMethod`

- An _Integer_ specifying the method type.
    - 0: MANUAL_FACE.
    - 1: MANUAL_GROUP.
    - 2: BY_GROUP_MATRIX.
    - 3: SHARE_FACE.
    - 4: AUTO_SETTING.
- The default value is 0.

### `bPressureTemperatureDependency`

- A _Boolean_ specifying whether or not using pressure temperature dependency data .
- The default value is _False_.

### `iPressureDependencies`

- An _Integer_ specifying the number of pressure dependencies.
- The default value is 0.

### `tshPressureData`

- A _Table Sheet_ specifying the table of pressure dependency.
- The default value is [].

### `iTyingType`

- An _Integer_ specifying the TyingType.
    - 0: Blank
    - 1: Rigid
    - 2: Shear Tying

## Return Code

A _Cursor_ specifying the created contact.

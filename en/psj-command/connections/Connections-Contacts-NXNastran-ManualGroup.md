---
id: Connections-Contacts-NXNastran-ManualGroup
title: Connections.Contacts.NXNastran.ManualGroup()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings between specified groups for the NX solver
---

## Description

Define contact settings between specified groups for the NX solver.

## Syntax

```psj
Connections.Contacts.NXNastran.ManualGroup(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; NXNastran &#187; ManualGroup</menuselection>

## Inputs

### `crFaceMaster`

- A _Cursor_ specifying the group of faces to be the master faces.
- This is a required input.

### `crFaceSlave`

- A _Cursor_ specifying the group of faces to be the slave faces.
- This is a required input.

### `strName`

- A _String_ specifying the contact name.
- The default value is "ContactNXNastran_1".

### `iContactType`

- An _Integer_ specifying the behavior type of the contact definition. The behavior type of contact definition is one of the following.
    - 0: General contact (Sliding contact).
    - 1: Tied contact.
- The default value is 0.

### `iContactAlg`

- An _Integer_ specifying the type of contact connection.
    - 0: Face to Face - Contact between shell or solid element faces and shell or solid element faces.
- The default value is 0.

### `dNormalPenaltyFactor`

- A _Double_ specifying the penalty factor for the normal direction. This argument is available to be used if _iContactType=0_.
- The default value is 10.

### `dTangentialPenaltyFactor`

- A _Double_ specifying the penalty factor for the tangential direction. This argument is available to be used if _iContactType=0_.
- The default value is 1.

### `dForceConvergenceTol`

- A _Double_ designating the Contact Force convergence tolerance. This argument is available to be used if _iContactType=0_.
- The default value is 0.01.

### `dMaxForceIteration`

- A _Double_ designating the maximum number of iterations for a force (inner) loop. This argument is available to be used if _iContactType=0_.
- The default value is 10.

### `dMaxStatusIteration`

- A _Double_ designating the maximum number of iterations for a status (outer) loop. This argument is available to be used if _iContactType=0_.
- The default value is 20.

### `dNumberOfChange`

- A _Double_ specifying the allowable number of contact changes. This argument is available to be used if _iContactType=0_.
- The default value is 0.02.

### `dMinContactPercentage`

- A _Double_ specifying the minimum contact set percentage. This argument is available to be used if _iContactType=0_.
- The default value is 100.

### `iShellThickness`

- An _Integer_ specifying whether to include shell thickness for plate elements. The gap between connection regions will be independent of plate element thickness if this option is turned off. This argument is available to be used if _iContactType=0_.
    - 0: Includes half shell thickness as surface offset.
    - 1: Does not include thickness offset.
- The default value is 0.

### `iContactStatus`

- An _Integer_ specifying the flag to indicate if the contact status for a specific sub-case is to start from the final status of the previous subcase. This argument is available to be used if _iContactType=0_.
    - 0: Starts from previous subcase.
    - 1: Starts from initial state.
- The default value is 0.

### `iInitGapOrPenetration`

- An _Integer_ specifying how Nastran handles initial gap or penetration of the generated contact elements. This setting is particularly useful if some of your elements unintentionally penetrate each other and you do not wish to modify or rebuild your model. This argument is available to be used if _iContactType=0_.
    - 0: Uses the value calculated from the grid coordinates.
    - 1: Sets the penetration to zero for all contact elements.
    - 2: Sets the both penetration and gap to zero for all contact elements.
- The default value is 0.

### `iRegionRefine`

- An _Integer_ specifying whether or not the source region is refined. This argument is available to be used if _iContactType=0_.
    - 0: Refines the source region based on target surface definition.
    - 1: Does not refine the source region based on target surface definition.
- The default value is 0.

### `iEvaluateOrder`

- An _Integer_ specifying the number of “Linear Contact Points” for a single element on the source region.
    - 0: Lowest order of points on source region.
    - 1: Medium order of points on source region.
    - 2: Highest order of points on source region.
- The default value is 1.

### `dMinSearchDist`

- A _Double_ specifying the minimum distance for searching the contact elements. This argument is available to be used if _iContactType=0_.
- The default value is 0.

### `dMaxSearchDist`

- A _Double_ specifying the maximum distance for searching the contact elements. This argument is available to be used if _iContactType=0_.
- The default value is 0.01.

### `dFrictionCoef`

- A _Double_ specifying the static coefficient of friction for the contact pair. This argument is available to be used if _iContactType=0_.
- The default value is 0.

### `dSearchDist`

- A _Double_ specifying the search range. This argument is available to be used if _iContactType=1_.
- The default value is 0.

### `dPenaltyFactor`

- A _Double_ specifying the penalty proportional coefficient. This argument is available to be used if _iContactType=1_.
- The default value is 0.

### `iShellZOffset`

- An _Integer_ specifying whether the Z-Offset on shell elements should be included in the contact analysis.
    - 0: Z offset of shells is included as surface offset.
    - 1: Z offset of shells is NOT included as surface offset.
- The default value is 0.

### `iContactColor`

- An _Integer_ specifying the contact-to-display marker color.
- The default value is 0.

### `crContactNXNastran`

- A _Cursor_ specifying an existing contact setting (NX Nastran). If this parameter is used, the specified contact setting (NX Nastran) will be modified. When the default value is used, a new contact setting (NX Nastran) will be created.
- The default value is _None_.

## Return Code

A _Cursor_ specifying the created contact.

---
id: Connections-Contacts-Abaqus-ManualFace
title: Connections.Contacts.Abaqus.ManualFace()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define contact settings between specified faces for the Abaqus solver
---

## Description

Define contact settings between specified faces for the Abaqus solver.

## Syntax

```psj
Connections.Contacts.Abaqus.ManualFace(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; Abaqus &#187; ManualFace</menuselection>

## Inputs

### `strName`

- A _String_ specifying the contact name.
- The default value is "ContactAbaqus_1".

### `iContactAlgorithm`

- An _Integer_ specifying the type of contact connection.
    - 0: Face to Face - Contact between shell or solid element faces and shell or solid element faces.
    - 1: Node to Face - Contact between node and shell or solid element faces.
- The default value is 0.

### `iContactType`

- An _Integer_ specifying the behavior type of contact definition. The behavior type of contact definition is one of the following.
    - 0: General Type (Sliding Contact)
    - 1: Tied Type (Shell-Solid contact)
    - 2: All with self Type
- The default value is 0.

### `iAlg`

- An _Integer_ specifying the contact setting target entity.
- The default value is 0.

### `dAdjustVal`

- A _Double_ specifying the adjustment width of the initial node position.
- The default value is 0.0.

### `dExtensionZone`

- A _Double_ specifying the extended area.
- The default value is 0.0.

### `dMaxPenetration`

- A _Double_ specifying the maximum penetration distance value.
- The default value is 0.0.

### `iSmallSliding`

- An _Integer_ specifying the consideration of small-slip.
    - 0: OFF
    - 1: ON
- The default value is 0.

### `dSmooth`

- A _Double_ specifying the smoothing angle.
- The default value is 0.0.

### `iFrictionType`

- An _Integer_ specifying the friction characteristics type. The friction characteristics type is one of the following.
    - 0: None
    - 1: General
    - 2: Lagrange
    - 3: Rough
    - 4: Static & Kinetic
- The default value is 0.

### `dFrictionCoef1`

- A _Double_ specifying the friction coefficient 1 when Friction type is set as General or Lagrange.
- The default value is 0.0.

### `dFrictionCoef2`

- A _Double_ specifying the friction coefficient 2 when Friction type is set as General or Lagrange.
- The default value is 0.0.

### `dShearLimit`

- A _Double_ specifying the Shear stress limit when Friction type is set as General or Lagrange.
- The default value is 0.0.

### `dSlipTol`

- A _Double_ specifying the maximum allowable elastic slip for surface dimension ratio when Friction type is set as General or Static & Kinetic.
- The default value is 0.0.

### `dStaticFrictionCoef`

- A _Double_ specifying the Coefficient of static friction when Friction type is set as Static & Kinetic.
- The default value is 0.0.

### `dKineticFrictionCoef`

- A _Double_ specifying the Coefficient of dynamic friction when Friction type is set as Static & Kinetic.
- The default value is 0.0.

### `dDecayCoef`

- A _Double_ specifying the Reduction factor when Friction type is set as Static & Kinetic.
- The default value is 0.0.

### `iAdjust`

- An _Integer_ specifying the consideration of adjustment.
- The default value is 0.

### `dPositionTol`

- A _Double_ specifying the position tolerance value.
- The default value is 0.0.

### `iFormula`

- An _Integer_ specifying the contact formulation type.
    - 0: Node to Surface
    - 1: Surface to Surface
- The default value is 0.

### `iTie`

- An _Integer_ specifying the fixed conditions and contact pair.
- The default value is 0.

### `iPOCType`

- An _Integer_ specifying the Contact thickness of the contact direction behavior, to define the penetration characteristics type.
- The default value is 0.

### `iAllowSeparation`

- An _Integer_ specifying the separation option when pressure-overclosure type is set as Hard Contact.
- The default value is 0.

### `dSlope`

- A _Double_ specifying the contact stiffness when pressure-overclosure type is set as Linear.
- The default value is 0.0.

### `tshPOCTsheet`

- A _Table Sheet_ specifying the table of pressure-Overclosure when pressure-overclosure type is set as Exponential.
- The default value is [].

### `iClearanceType`

- An _Integer_ specifying the contact characteristic definition method of heat conduction.
    - 0: None
    - 1: Clearance Dependency
    - 2: Pressure Dependency
    - 3: Clearance & Pressure Dependency
- The default value is 0.

### `iClearanceTypeId`

- An _Integer_ specifying the clearance dependency type ID.
- The default value is 0.

### `bTemperatureDependency`

- A _Boolean_ enable/disable using temperature dependency data.
- The default value is _False_.

### `iDependencies`

- An _Integer_ specifying number of the field variables.
- The default value is 0.

### `tshCDTsheet`

- A _Table Sheet_ specifying the table of clearance dependency.
- The default value is [].

### `iPrsTypeId`

- An _Integer_ specifying the pressure dependency type ID.
- The default value is 0.

### `bPrsTemperatureDependency`

- A _Boolean_ enable/disable using temperature dependency data.
- The default value is _False_.

### `iPrsDependencies`

- An _Integer_ specifying number of the field variables.
- The default value is 0.

### `tshPrsDTsheet`

- A _Table Sheet_ specifying the table of pressure dependency.
- The default value is [].

### `crplTargets`

- A _Cursor Pair List_ specifying the list or pair of group master face and group slave face.
- The default value is [].

### `crEdit`

- A _Cursor_ specifying an existing contact settings item. If this parameter is used, the specified contact settings item will be modified. If it is left _None_, a new contact settings item will be created.
- The default value is _None_.

### `iColor`

- An _Integer_ specifying the contact color.
- The default value is 0.

## Return Code

A _Cursor_ specifying the created contact.

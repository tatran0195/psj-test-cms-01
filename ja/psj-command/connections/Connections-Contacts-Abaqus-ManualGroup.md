---
id: Connections-Contacts-Abaqus-ManualGroup
title: Connections.Contacts.Abaqus.ManualGroup()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Define the contact set between the specified group for Abaqus. Create a group with master and slave surfaces beforehand to define the contact in the contact settings
---

## Description

Define the contact set between the specified group for Abaqus. Create a group with master and slave surfaces beforehand to define the contact in the contact settings.

## Syntax

```psj
Connections.Contacts.Abaqus.ManualGroup(...)
```

Ribbon: <menuselection>Connections &#187; Contacts &#187; Abaqus &#187; Manual Group</menuselection>

## Inputs

### `strName`

- A _String_ specifying the new Abaqus Contact name.
- The default value is "ContactAbaqus_1".

### `iContactType`

- An _Integer_ specifying the behavior type of contact definition. The behavior type of contact definition is one of the following:
    - 0: General (Sliding Contact)
    - 1: Tied (Shell-Solid contact)
    - 2: All with self - Automatic contact detection
- The default value is 0.

### `iContactAlgorithm`

- An _Integer_ specifying the contact setting target entity.
    - 0: Face to Face - Contact between shell or solid element faces and shell or solid element faces.
    - 1: Node to Face - Contact between node and shell or solid element faces.
- The default value is 0.

### `dAdjustWidth`

- A _Double_ specifying a value to adjust the initial positions of the surfaces specified. This is required when the _iTied_ parameter is used with ON value. This argument is used only when _iContactType=0_.
- The default value is 0.0.

### `dExtensionZone`

- A _Double_ specifying a value that is equal to a fraction of the end segment or facet edge length by which Abaqus extends the master surface to avoid numerical round-off errors associated with contact modeling. The value given must lie between 0.0 and 0.2. This parameter affects only node-to-surface contact. This argument is used only when _iContactType=0_.
- The default value is 0.0.

### `dMaxPenetration`

- A _Double_ specifying the maximum distance by which a point on the slave surface must penetrate the master surface before Abaqus abandons the current increment and tries again with a smaller increment. This parameter does not apply to contact pairs that use the finite-sliding, surface-to-surface contact formulation. This argument is used only when _iContactType=0_.
- The default value is 0.0.

### `iSmallSliding`

- An _Integer_ specifying whether to use the small-sliding contact formulation. This parameter is not allowed with self-contact. This argument is used only when _iContactType=0_.
    - 0: OFF
    - 1: ON
- The default value is 0.

### `dSmoothAngle`

- A _Double_ specifying the degree of smoothing used for element-based master surfaces in the finite-sliding, node-to-surface contact formulation. The value given must lie between 0.0 and 0.5. This parameter does not affect contact pairs with analytical rigid surfaces or contact formulations other than the finite-sliding, node-to-surface contact formulation. This argument is used only when _iContactType=0_.
- The default value is 0.0.

### `iFrictionType`

- An _Integer_ specifying the friction characteristics type. This argument is used only when _iContactType=0_.
    - 0: None
    - 1: General
    - 2: Lagrange
    - 3: Rough
    - 4: Static & Kinetic
- The default value is 0.

### `dFrictionCoeff1`

- A _Double_ specifying the first friction coefficient to be defined in terms of slip rate. This argument is used only when _iFrictionType=1_ or _iFrictionType=2_.
- The default value is 0.0.

### `dFrictionCoeff2`

- A _Double_ specifying the second friction coefficient to be defined in terms of slip rate. This argument is used only when _iFrictionType=1_ or _iFrictionType=2_.
- The default value is 0.0.

### `dShearStressLimit`

- A _Double_ specifying an optional equivalent shear stress limit, so that regardless of the magnitude of the contact pressure stress, sliding will occur if the magnitude of the equivalent shear stress reaches this value. A value of zero is not allowed. This argument is used only when _iFrictionType=1_ or _iFrictionType=2_.
- The default value is 0.0.

### `dSlipTolerance`

- A _Double_ specifying the maximum allowable elastic slip for surface dimension ratio. This argument is used only when _iFrictionType=1_ or _iFrictionType=4_.
- The default value is 0.0.

### `dStaticFrictionCoeff`

- A _Double_ specifying the static friction coefficient. This argument is used only when _iFrictionType=4_.
- The default value is 0.0.

### `dKineticFrictionCoeff`

- A _Double_ specifying the dynamic friction coefficient. This argument is used only when _iFrictionType=4_.
- The default value is 0.0.

### `dDecayCoeff`

- A _Double_ specifying the decay coefficient. This argument is used only when _iFrictionType=4_.
- The default value is 0.0.

### `bAdjustPosition`

- An _Integer_ specifying whether to adjust the position of surfaces in the contact pair. This argument is used only when _iContactType=1_.
- The default value is _False_.

### `dPositionTolerance`

- A _Double_ specifying the tolerance of position of surfaces used for adjustment. This argument is used only when _bAdjustPosition=1_.
- The default value is 0.0.

### `iFormulationType`

- An _Integer_ specifying how Abaqus generates the contact constraint coefficients. This argument is used only when _iContactType=0_.
    - 0: Node to Surface
    - 1: Surface to Surface
- The default value is 0.

### `iTied`

- An _Integer_ specifying whether the surfaces in the contact pair are to be tied together for the duration of the analysis. This argument is used only when _iContactType=0_.
    - 0: Not specified - Not want to tie the surfaces together.
    - 1: ON - Tie the surfaces together.
- The default value is 0.

### `iPressureOverclosureType`

- An _Integer_ specifying a contact pressure-overclosure relationship.
    - 0: Hard Contact - Pressure-overclosure relationship without physical softening.
    - 1: Exponential - Exponential pressure-overclosure relationship.
    - 2: Linear - Linear pressure-overclosure relationship.
    - 3: Tabular - Piecewise linear pressure-overclosure relationship in tabular form.
    - 4: None
- The default value is 0.

### `bAllowSeparation`

- An _Integer_ specifying whether to allow separation of the two surfaces once contact has been established. This argument is used when _iPressureOverclosureType=0_.
- The default value is _False_.

### `dContactStiffness`

- A _Double_ specifying the slope of the pressure-overclosure curve. This value must be positive and is required when _iPressureOverclosureType=2_.
- The default value is 0.0.

### `tshPressureOverclosure`

- A _Table Sheet_ specifying the tabular data of Pressure-Overclosure used for exponential pressure-overclosure relationship. This argument must be specified when _iPressureOverclosureType=1_ or _iPressureOverclosureType=3_.
- The default value is [].

### `iThermalConductanceDef`

- An _Integer_ specifying the contact characteristic definition method of heat conduction.
    - 0: None
    - 1: Clearance Dependency
    - 2: Pressure Dependency
    - 3: Clearance & Pressure Dependency
- The default value is 0.

### `bClearanceTemperatureDependency`

- A _Boolean_ specifying whether the tabular data have Temperature-Dependent property.
- The default value is _False_.

### `iClearanceDependencies`

- An _Integer_ specifying the number of field variables in the data table. This argument must be specified when _iThermalConductanceDef=1_ or _iThermalConductanceDef=3_.
- The default value is 0.

### `tshClearanceData`

- A _Table Sheet_ specifying the tabular data of clearance dependency.
- The default value is [].

### `bPressureTemperatureDependency`

- A _Boolean_ enable/disable using temperature dependency data.
- The default value is False.

### `iPressureDependencies`

- An _Integer_ specifying number of the field variables.
- The default value is 0.

### `tshPressureData`

- A _Table Sheet_ specifying the table of pressure dependency.
- The default value is [].

### `crplTargets`

- A _List of Pair of Cursor_ specifying the list or pair of group master face and group slave face. The _crplTargets_ and _crContactAbaqus_ arguments are mutually exclusive. One of them must be specified.
- The default value is [].

### `crContactAbaqus`

- A _Cursor_ specifying an existing Abaqus Contact (Manual Group). If this parameter is used, the specified contact settings will be modified. Otherwise, a new contact settings will be created. The _crplTargets_ and _crContactAbaqus_ arguments are mutually exclusive. One of them must be specified.
- The default value is None.

### `iContactColor`

- An _Integer_ specifying the contact color.
- The default value is 0.

## Return Code

A _Cursor_ specifying the created contact.

---
id: Analysis-ADVC-Structure
title: Analysis.ADVC.Structure()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create and export the ADVC (*.adx) file for the Structure analysis
---

## Description

Create and export the ADVC (\*.adx) file for the Structure analysis.

## Syntax

```psj
Analysis.ADVC.Structure(...)
```

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Structure</menuselection>

## Inputs

### `strName`

- A _String_ specifying the job name of ADVC analysis. This name would be the name of analysis job in Assembly Tree and the name of the ADX file after exported.
- The default value is "".

### `strDescription`

- A _String_ specifying the description for ADVC analysis job. The description would write in the ADX file, where contents will be written below ModelInfo.
- The default value is "".

[comment]: # 'This argument `iEJobType` is removed and not available in V5.0.1 or higher version'

<!-- ### `iEJobType`

- An _Integer_ specifying the job type of ADVC analysis. ADVC supports 2 types of analysis.
  - If _iEJobType=0_: The analysis job is Structure analysis
  - If _iEJobType=1_: The analysis job is Heat Transfer analysis
- The default value is 0. -->

### `crlProcessSequence`

- A _List of Cursor_ specifying the list of ADVC process sequence. This argument controls the Process solution type and its setting information depended on solution type.
- The default value is [].

### `crlElemLocationGroup`

- A _List of Cursor_ specifying the list of element location. The model contains element group such as 3D Element, 2D Element, 1D Element to use this argument.
- The default value is [].

### `crlNodeLocationGroup`

- A _List of Cursor_ specifying the list of node location. The model contains node group to use this argument.
- The default value is [].

### `bWriteGroup`

- A _Boolean_ specifying to be enable/disable the write group option which output a selected group of faces, elements, nodes as Surface Segment, Element Set and Node set respectively.
    - If _True_, ADX file would contained group information such as Part, Face, Element(3D,2D,1D), Node,...
    - If _False_, ADX won't write group information.
- The default value is _False_.

### `crEdit`

- A _Cursor_ specifying an existing ADVC job in Assembly Tree to modify it. If this parameter is used, the specified ADVC job will be modified. If it is left _None_, a new ADVC job will be created.
- The default value is _None_.

### `bResultReference`

- A _Boolean_ specifying to be enable/disable the Result Reference option is defined or not.
    - If _True_, this option will allow to active settings of Result Reference. The settings of Result Reference arguments will be valid to use.
    - If _False_, this option will be disable settings of Result Reference. In this case, the settings of Result Reference arguments will be ignored even though User has set value or not.
- The default value is _False_.

### `iSeparateFile`

- An _Integer_ specifying the separate file type. This option allows to separate information into many exported ADX files by selected type.
    - If _iSeparateFile=0_: None, this option would export only 1 ADX file contains all information of all bodies/parts in the model (ModelInfo, Unit, Geometry, LBCs, Process Sequence,...)
    - If _iSeparateFile=1_: By Model, this option would export 2 ADX files, which the first ADX file has same name as analysis Job will contain general information (such as ModelInfo, Unit, LBCs, Job name, Process Sequence, other settings of ADVC Structure analysis).
      When the last one ADX file which has suffix name "\_model", contains Geometry information (such as Node, Part, Element,...)
    - If _iSeparateFile=2_: By Body, this option would export ADX files, which each body/part in model would be written individually Geometry information, Group in model would be written in another file, while other information would be written in the ADX file has same name as analysis Job.
    - If _iSeparateFile=3_: By Selected Body, this option would export ADX file that write information of selected part/body. If selection does not have at least a specific body/part, Jupiter would write all bodies/part (same option as None).
    - If _iSeparateFile=4_: By Selected LBCs, this option would export 1 ADX file contains LBCs information of the chosen LBCs.
- The default value is 0.

### `bExportRelatedAllLBCs`

- A _Boolean_ specifying to be enable/disable the option that export all related Load Boundary Condition. This option could be used when _iSeparateFile=3_(By Selected Body), if not, this setting is not activated for both _True_ or _False_.
    - If _True_, this option would export the ADX file contains related information to LBCs such as Contact, Connection RBE, Bolt Pretension,...
    - If _False_, this option won't export related information to LBCs such as Contact, Connection RBE, Bolt Pretension,...
- The default value is _False_.

### `bUseEntityName`

- A _Boolean_ specifying to be enable/disable the option that use entity name in exported file or not.
    - If _True_, this option would export the ADX file that write Entity name(Name of the Part/Entity) to Geometry information such as Part, Face,...
    - If _False_, this option would export the ADX file without writing Entities name to Geometry information.
- The default value is _False_.

### `bMatrixSolverParam`

- A _Boolean_ specifying to be enable/disable the option that the Matrix Solver Parameter is defined ot not.
    - If _True_, this option will allow to active settings of Matrix Solver Parameter. The settings of Matrix Solver Parameter arguments will be valid to use.
    - If _False_, this option will be disable settings of Matrix Solver Parameter. In this case, the settings of Matrix Solver Parameter arguments will be ignored even though User has set value or not.
- The default value is _False_.

### `iPreconditionType`

- An _Integer_ specifying the precondition type.
    - If _iPreconditionType=0_: Scaling
    - If _iPreconditionType=1_: CGCG
    - If _iPreconditionType=2_: CGCG2
    - If _iPreconditionType=3_: CGCG2_Diag
    - If _iPreconditionType=4_: CGCG2-SOR
    - If _iPreconditionType=5_: (Blank)
- The default value is 0.

### `iMatrixStructure`

- An _Integer_ specifying the matrix structure type.
    - If _iMatrixStructure=0_: Symmetry
    - If _iMatrixStructure=1_: Asymmetry
- The default value is 0.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets. The target could be Part or LBCs item.
- The default value is [].

### `iLoadType`

- An _Integer_ specifying the load type uses for analysis.
    - If _iLoadType=0_: Load Case, which is a group of specific Loads, BCs applies on model. The model could apply many Load Cases which may have same setting of LBCs. Exporting ADX file would write all Load Cases.
    - If _iLoadType=1_: Load, which will export the ADX file stores all Loads, BCs as a 1 Load case only.
- The default value is 1.

### `bSameOutputOnAllProcess`

- A _Boolean_ specifying to be enable/disable the same output request for all processes.
    - If _True_, this option would set same output request (Displacement, Stress, Strain,...) for all defined processes.
    - If _False_, this option would set output request which will base on user's desired result for each process.
- The default value is _True_.

### `bDeleteFloatingNode`

- A _Boolean_ specifying to be enable/disable the option that would delete floating node or not.
    - If _True_, this option would export an ADX file without writing floating nodes information.
    - If _False_, this option would export an ADX file with floating nodes information.
- The default value is _True_.

### `bBC`

- A _Boolean_ specifying to be enable/disable the option that would separate boundary condition. This option could be used when _iSeparateFile=3_ (By Selected Body), if not, this setting is not activated for both _True_ or _False_.
    - If _True_, this option would export an ADX file would write LBCs information.
    - If _False_, this option won't export an ADX file would write LBCs information.
- The default value is _True_.

### `bCheckBCDuplicate`

- A _Boolean_ specifying to be enable/disable checking whether boundary conditions are duplicated or not.
    - If _True_, this option checks LBCs duplication when export the ADX file.
    - If _False_, this option won't check LBCs duplication when export the ADX file.
- The default value is _False_.

### `bAutoAssignDummyProp`

- A _Boolean_ specifying to be enable/disable automatically assign dummy property option. This option used when model that has not assign property yet. If the model already has property
    - If _True_, the model would be exported with dummy property for the Part that does not have property. The others Part (which already assigned property) will export with its property setting.
    - If _False_, the model will export ADX file in case of the model has all property in all Parts, but if there is one Part that does not have property in the model, this option will not export file.
- The default value is _False_.

### `crDummyPropMaterial`

- A _Cursor_ specifying the dummy property material for automatically assigning dummy property when export the ADX file.
- The default value is _None_.

### `bReferenceRestartData`

- A _Boolean_ specifying to be enable/disable the Reference Restart Data is defined or not.
    - If _True_, this option will allow to active settings of Reference Restart Data. The settings of Reference Restart Data arguments will be valid to use.
    - If _False_, this option will be disable settings of Reference Restart Data. In this case, the settings of Reference Restart Data arguments will be ignored even though User has set value or not.
- The default value is _False_.

### `strReferenceRestartDataPath`

- A _String_ specifying the path of Reference Restart Data.
- The default value is "".

### `iReferenceRestartDataProcessNum`

- An _Integer_ specifying the number of process for Reference Restart Data.
- The default value is DFLT_INT.

### `iReferenceRestartDataStepNum`

- An _Integer_ specifying the number of Reference Restart Data step.
- The default value is DFLT_INT.

### `iReferenceRestartDataCoordType`

- An _Integer_ specifying the coordinate type of Reference Restart Data.
    - If _iReferenceRestartDataCoordType=0_: Initial type
    - If _iReferenceRestartDataCoordType=1_: Deformation type
- The default value is 0.

### `iReferenceRestartDataUpdateContactSearch`

- An _Integer_ specifying the update contact search for Reference Restart Data.
    - If _iReferenceRestartDataUpdateContactSearch=0_: No
    - If _iReferenceRestartDataUpdateContactSearch=1_: Yes
- The default value is 1.

### `listLoadNodeContact`

- A _LOAD_NODE_CONTACT List_ specifying the list of load node contact.
- The default value is [].

[comment]: # 'This argument `iHeatConvection` is removed and not available in V5.0.1 or higher version'

<!-- ### `iHeatConvection`

- An _Integer_ specifying the heat convection.
- The default value is 1. -->

### `bCreateProcessForBoltFixedLength`

- A _Boolean_ specifying the option that creates process for bolt fixed length.
    - If _True_, this option will set the "Bolt Fixed Length" given in the initial process to hold in the next process.
    - If _False_, this option will won't take the "Bolt Fixed Length" setting in the initial process to apply on the next process.
- This setting uses the character string "BoltLoadFixedLength".
- The default value is _False_.

### `strPath`

- A _String_ specifying the exporting path for the ADX file.
- This is a required input.

### `iNumType`

- An _Integer_ specifying the numeric format type. This argument would allow numeric setting type of the ADX file.
    - If _iNumType=0_: Real Type - The numerical values in real number format (123.456).
    - If _iNumType=1_: Power Type - The numerical values in exponential/scientific format (1.234E-005).
- The default value is 0.

### `iUiWidth`

- An _Integer_ specifying the limitation number of digits before the point of the number. This option allows to control number digits of value in the exported ADX file.
- The default value is 10.

### `iUiPrecision`

- An _Integer_ specifying the limitation number of digits after the point of the number. This option allows to control number digits of value in the exported ADX file.
- The default value is 1.

### `bExportGeometryID`

- A _Boolean_ specifying to be enable/disable the write geometry ID number.
- The default value is _False_.

### `bSeparatePartInfoFile`

- A _Boolean_ specifying to be enable/disable the option that separate Part Information Files.
- The default value is _False_.

### `strADVCTemplateFilePath`

- A _String_ specifying the path of Template File.
- The default value is "".

### `bOutputDefinition`

- A _Boolean_ specifying to be enable/disable the option that sets the output request.
- The default value is _True_.

### `iDataFormatType`

- An _Integer_ specifying the data format type.

### `iEJobType`

- An _Integer_ specifying the job type (Structure = 0)

### `vecObjectiveFunction`

- A _Vector_ specifying Objective Function.
- Defined by _Optimization_ObjectiveConstraint_Parameter_. Members are as follows:
  <a id="Optimization-ObjectiveConstraint-Parameter"></a>

    ### ` enFunctionType`
    - An _Integer_ specifying the function type.
      <a id="Optimization-Function-Type"></a>
        <!-- <Link to="#Optimization-Function-Type">link</Link> -->

    | ID  | Function                             | Description                          |
    | --- | ------------------------------------ | ------------------------------------ |
    | -1  | Unknown_Function                     | No selection                         |
    | 0   | Compliance_Function                  | Compliance Function                  |
    | 1   | Displacement_Function                | Displacement Function                |
    | 2   | Eigen_Frequency_Function             | Eigen Frequency Function             |
    | 3   | Mass_Function                        | Mass Function                        |
    | 4   | Maximum Displacement Function        | Maximum Displacement Function        |
    | 5   | Maximum_Mises_Stress_Function        | Maximum Mises Stress Function        |
    | 6   | Maximum_Principal_Stress_Function    | Maximum Principal Stress Function    |
    | 7   | Minimum_Principal_Stress_Function    | Minimum Principal Stress Function    |
    | 8   | Surface_Area_Function                | Surface Area Function                |
    | 9   | Volume_Function                      | Volume Function                      |
    | 10  | Optimization_Frozen_Node             | Optimization Frozen Node             |
    | 11  | Optimization_Frozen_Element          | Optimization_Frozen Element          |
    | 12  | Shape_Optimization_Fixed_Node        | Shape Optimization Fixed Node        |
    | 13  | Shape_Optimization                   | Shape Optimization                   |
    | 14  | Shape_Optimization_Contact_pair      | Shape Optimization Contact pair      |
    | 15  | Shape_Optimization_Die_Drawing       | Shape Optimization Die Drawing       |
    | 16  | Shape_Optimization_Interference_Node | Shape Optimization Interference Node |
    | 17  | Shape_Optimization_Thickness         | Shape Optimization Thickness         |
    | 18  | Topology_Optimization                | Topology Optimization                |
    | 19  | Topology_Optimization_Die_Drawing    | Topology Optimization Die Drawing    |
    | 20  | Topology_Optimization_Molding        | Topology Optimization Molding        |
    - This is a required input.

    ### ` strFunctionName`
    - A _String_ specifying the name of function.
    - This is a required input.

    ### `iDisplacementRelation`
    - A _Int_ specifying to set Displacement Relation or not.
    - The default value is -1.

    ### `strDegreeOfFreedomNum`
    - A _String_ specifying to set Degree Of Freedom Number.

    ### `dDisplacementCoefficient`
    - A _Double_ specifying to set Displacement Coefficient.

    ### `iConstraint`
    - A _Int_ specifying type of Constraint.
        - If _iConstraint=0_: Equality
        - If _iConstraint=1_: Inequality

    ### `dConstraintTol`
    - A _Double_ specifying Constraint Tolerance.

    ### `iTargetType`
    - An _Int_ specifying Target Type.
        - If _iTargetType=0_: Ratio
        - If _iTargetType=1_: Value

    ### `dRatioOrValue`
    - A _Double_ specifying Ratio or Value.

    ### `dCoefficient`
    - A _Double_ specifying to set Coefficient.

    ### `crNodeSet`
    - A _Cursor_ specifying Node Set.

    ### `crPropOrElemSet`
    - A _Cursor_ specifying Element Set.

    ### `crSurfaceSet`
    - A _Cursor_ specifying Surface Set.

    ### `iKSKernel`
    - A _Int_ specifying type of KS Kernel.
        - If _iKSKernel=0_: Exponential
        - If _iKSKernel=1_: Monomial

    ### `dRHO`
    - A _Double_ specifying RHO.

    ### `dExponent`
    - A _Double_ specifying Exponent.

    ### `iEigenNumber;`
    - An _Int_ specifying Eigen Number.

### `vecConstraintFunction`

- A _Vector_ specifying Constraint Function.
- Defined by _Optimization_ObjectiveConstraint_Parameter_.

### `vecNonDesignableArea`

- A _Vector_ specifying Non-Designable Area.
- Defined by _Optimization_NonDesignableArea_Parameter_. Members are as follows:
    ### `enFunctionType`
    - An _Integer_ specifying the [function type](/docs/cli/5.1.0/psj-command/analysis/Analysis.ADVC.Structure#Optimization-Function-Type).
    - This is a required input.
    ### `strFunctionName`
    - A _String_ specifying the name of function.
    - This is a required input.
    ### `iOptimization = -1`
    - An _Int_ specifying type of Optimization.
    - If _iOptimization=0_: Shape
    - If _iOptimization=1_: Topology
        ### `strDegreeOfFreedomNum`
    - A _String_ specifying Degree of Freedom Number.
    ### `crNodeSet`
    - A _Cursor_ specifying Node Set. ### `crPropOrElemSet`
    - A _Cursor_ specifying Element Set.
    ### `vecShapeTopology`
    - A _Vector_ specifying Shape/Topology.
    - Defined by _Optimization_ShapeTopology_Parameter_. Members are as follows: ### `enFunctionType = Unknown_Function;`
        - An _Integer_ specifying the [function type](/docs/cli/5.1.0/psj-command/analysis/Analysis.ADVC.Structure#Optimization-Function-Type).
        - This is a required input. ### `strFunctionName`
        - A _String_ specifying the name of function.
        - This is a required input. ### `dInitialDensity`
        - A _Double_ specifying Initial Density. ### `dDensityRandom`
        - A _Double_ specifying Density Random. ### `dAlpha`
        - A _Double_ specifying Alpha. ### `dDraftAngle`
        - A _Double_ specifying Draft Angle. ### `dGap`
        - A _Double_ specifying Gap. ### `dDepth`
        - A _Double_ specifying Depth. ### `dAngle`
        - A _Double_ specifying Angle. ### `dClearance`
        - A _Double_ specifying Clearance. ### `dThicknessDepth`
        - A _Double_ specifying Thickness Depth. ### `dMaxThickness`
        - A _Double_ specifying Max Thickness. ### `dMinThickness`
        - A _Double_ specifying Min Thickness. ### `iMaxIteration`
        - An _Int_ specifying Max Iteration. ### `dMaxStrain`
        - A _Double_ specifying Max Strain. ### `dMaxTheta`
        - A _Double_ specifying Max Theta. ### `dH1Tolerance`
        - A _Double_ specifying H1 Tolerance. ### `iOutputLast`
        - An _Int_ specifying selection of Output Last.
        - If _iOutputLast=0_: No
        - If _iOutputLast=1_: Yes ### `iOutputInterval`
        - An _Int_ specifying Output Interval. ### `iResoutLast`
        - An _Int_ specifying selection of Resout Last.
        - If _iResoutLast=0_: No
        - If _iResoutLast=1_: Yes ### `iResoutInterval`
        - An _Int_ specifying Resout Interval. ### `iArmijoCheck`
        - An _Int_ specifying selection of Armijo Check.
        - If _iArmijoCheck=0_: No
        - If _iArmijoCheck=1_: Yes ### `dArmijoParam`
        - A _Double_ specifying Armijo Param. ### `strDirection`
        - A _String_ specifying Direction. ### `iPunchingOneSide`
        - An _Int_ specifying selection of Punching|Outside.
        - If _iPunchingOneSide=0_: Punching
        - If _iPunchingOneSide=1_: Oneside ### `iAutoIncrement`
        - An _Int_ specifying selection of Auto Increment.
        - If _iAutoIncrement=0_: No
        - If _iAutoIncrement=1_: Yes ### `dStabilizationFactor`
        - A _Double_ specifying Stabilization Factor. ### `dPoissonRatio`
        - A _Double_ specifying Poisson Ratio. ### `iAutoFrozen`
        - An _Int_ specifying selection of Auto Frozen.
        - If _iAutoFrozen=0_: No
        - If _iAutoFrozen=1_: Yes ### `iKeyCoordinate`
        - An _Int_ specifying selection of Coodinate. ### `crNodeSet`
        - A _Cursor_ to specifying Node Set. ### `crPropOrElemSet`
        - A _Cursor_ to specifying Element Set. ### `crSurfaceSetNonInterferingArea`
        - A _Cursor_ to specifying Non-Interfering Area. ### `crSurfaceSetOptimizedArea`
        - A _Cursor_ to specifying Optimized Area. ### `iWolfeCheck`
        - An _Int_ specifying selection of Wolfe Check.
        - If _iWolfeCheck=0_: No
        - If _iWolfeCheck=1_: Yes ### `dWolfeParam`
        - A _Double_ specifying Wolfe Param. ### `iMatrix`
        - An _Int_ specifying selection of Matrix.
        - If _iMatrix=0_: StiffnessLinear
        - If _iMatrix=1_: Stiffness ### `iElementDStiffness`
        - An _Int_ specifying selection of Element D.Stiffness.
        - If _iElementDStiffness=0_: No
        - If _iElementDStiffness=1_: Yes ### `iConstraintMethod`
        - An _Int_ specifying selection of Constraint Method.
        - If _iConstraintMethod=0_: No
        - If _iConstraintMethod=1_: Yes ### `dGrayScaleRatio`
        - A _Double_ specifying gray scale ratio. ### `iOutputGrayScaleRatio`
        - An _Int_ Specifing whether or not output gray scale ratio. ### `dUndercutRatio`
        - A _Double_ specifying gray scale ratio. ### `iDraftType`
        - An _Int_ specifying Draft Type.
        - If _iDraftType=0_: Oneside
        - If _iDraftType=1_: Bothside ### `strDraftDirection`
        - A _String_ specifying Draft Direction.

### `stOptimizationOutput`

- A list of _Boolean_ specifying the optimization output paramters. Output if it set _True_.
- bNodalShapeVariation = _True_/_False_
- bShapeVariation = _True_/_False_
-       bNodalDensityRation = _True_/_False_
- bDensityRatio = _True_/_False_
- bSensitivity = _True_/_False_
- bSensitivity*Of_Objective = \_True*/_False_
- bSensitivity*Of_Constraint = \_True*/_False_
- bSensitivities = _True_/_False_
- bTopologyModelingUndercut = _True_/_False_

## Return Code

A _Cursor_ specifying the created jobs.

---
id: ADVC_Structure
title: ADVC_Structure()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC job (Structure)

## Syntax

```psj
ADVC_Structure(string Name, string Description, int JobType, cursor[] processSequence,
    cursor[] elemLocationGroup, cursor[] nodeLocationGroup, bool WriteGroup,
    cursor Edit, bool ResultReference, int iSeparateFile, bool ExportRelatedAllLBCs,
    bool UseEntityName, bool MatrixSloverParam, int PreconditionType,
    int MatrixStructure, cursor[] Target, int LoadType,bool SameOutputOnAllProcess,
    bool DeleteFloatingNode, bool BC, bool CheckBCDuplicate, bool AutoAssignDummyProp,
    cursor crDummyPropMaterial, bool ReferenceRestartData, string ReferenceRestartDataPath,
    int ReferenceRestartDataProcessNum, int ReferenceRestartDataStepNum,
    int ReferenceRestartDataCoordType, int ReferenceRestartDataUpdateContactSearch,
    LoadNodeData[] LoadData, int HeatConvection, bool bCreateProcessForBoltFixedLength, string Path,
    int NumType, int UiWidth, int UiWidth, bool ExportGeometryID, bool SeparatePartInfoFile,
    string ADVCTemplateFilePath, bool OutputDefinition, int DetaFormatType,
    List ObjectiveFunction, List ConstraintFunction, List NonDesignableArea, List ShapeTopology, List OptimizationOutput)
```

## Inputs

### `1. String`

Name of ADVC Job

### `2. String`

Description of ADVC Job

### `3. Int`

Job type [0: Structural]

### `4. Cursor[]`

Advc process sequence

### `5. Cursor[]`

Element location group

### `6. Cursor[]`

Node location group

### `7. Bool`

Write group flag true = 1, false = 0

### `8. Cursor`

Edit ADVC Job

### `9. Bool`

Result reference flag true = 1, flase = 0

### `10. Int`

Separated file type[0:None; 1:By Model; 2:By Body; 3:By Selected Body, 4:Select LBCs]

### `11. Bool`

Export all related LBCs flag true = 1, false = 0

### `12. Bool`

Use entity name flag true = 1, false = 0

### `13. Bool`

Define matrix solver parameter flag true = 1, false = 0

### `14. Int`

Precondition type[0:Scaling; 1:CGCG; 2:CGCG2; 3:CGCG2_Diag; 4:CGCG2-SOR]

### `15. Int`

Matrix structure [0:Symmetry; 1:Asymmetry]

### `16. Cursor[]`

Target list

### `17. Int`

Load type [0:Load Case; 1:Load]

### `18. Bool`

All outputs are same flag true = 1, false = 0

### `19. Bool`

Delete floating node flag true = 1, false = 0

### `20. Bool`

Boundary condition flag true = 1, false = 0

### `21. Bool`

Check Boundary condition Duplicate flag true = 1, false = 0

### `22. Bool`

Auto Assign Dummy Property

### `23. Cursor`

Dummy Property Material

### `24. Bool`

Reference Restart Data flag true = 1, false = 0

### `25. String`

Reference Restart Data Path

### `26. Int`

Reference Restart Data Process Num

### `27. Int`

Reference Restart Data Step Num

### `28. Int`

Reference Restart Data Coord Type

### `29. Int`

Reference Restart Data Update Contact Search

### `30. LoadNodeData[]`

LoadNodeData list

### `31. Int`

Heat convection (not used for Structural), set 0.

### `32. Bool`

Create process for bolt fixed lentgh flag true = 1, false = 0

### `33. String`

Exported adx file path

### `34. Int`

Numric type. [0:Real; 1:Power, 2:Auto]

### `35. Int`

UI Width

### `36. Int`

UI Precision

### `37. Bool`

Export geometry id flag true = 1, false = 0

### `38. Bool`

Separate part info file flag true = 1, false = 0

### `39. String`

ADVC Template file path

### `40. Bool`

Output definition flag true = 1, false = 0

### `41. Bool`

Data format type. [0:Single, 1:Double]

### `42. ObjectiveFunction`

- A _Vector_ specifying Objective Function.
- Defined by _Optimization_ObjectiveConstraint_Parameter_. Members are as follows:
  <a id="Optimization-ObjectiveConstraint-Parameter" />

    ### ` enFunctionType`
    - An _Integer_ specifying the function type.
      <a id="Optimization-Function-Type" />
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
    | 20  | Optimization_Function_Type_Count     | Optimization Function Type Count     |
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

### `43 ConstraintFunction`

- A _Vector_ specifying Constraint Function.
- Defined by _Optimization_ObjectiveConstraint_Parameter_.

### `44 NonDesignableArea`

- A _Vector_ specifying Non-Designable Area.
- Defined by _Optimization_NonDesignableArea_Parameter_. Members are as follows:
    ### `enFunctionType`
    - An _Integer_ specifying the [function type](./ADVC_Structure#Optimization-Function-Type).
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
    - A _Cursor_ specifying Node Set.
    ### `crPropOrElemSet`
    - A _Cursor_ specifying Element Set.
    ### `vecShapeTopology`
    - A _Vector_ specifying Shape/Topology.
    - Defined by _Optimization_ShapeTopology_Parameter_. Members are as follows:
        ### `enFunctionType = Unknown_Function;`
        - An _Integer_ specifying the [function type](./ADVC_Structure#Optimization-Function-Type).
        - This is a required input.
        ### `strFunctionName`
        - A _String_ specifying the name of function.
        - This is a required input.
        ### `dInitialDensity`
        - A _Double_ specifying Initial Density.
        ### `dDensityRandom`
        - A _Double_ specifying Density Random.
        ### `dAlpha`
        - A _Double_ specifying Alpha.
        ### `dDraftAngle`
        - A _Double_ specifying Draft Angle.
        ### `dGap`
        - A _Double_ specifying Gap.
        ### `dDepth`
        - A _Double_ specifying Depth.
        ### `dAngle`
        - A _Double_ specifying Angle.
        ### `dClearance`
        - A _Double_ specifying Clearance.
        ### `dThicknessDepth`
        - A _Double_ specifying Thickness Depth.
        ### `dMaxThickness`
        - A _Double_ specifying Max Thickness.
        ### `dMinThickness`
        - A _Double_ specifying Min Thickness.
        ### `iMaxIteration`
        - An _Int_ specifying Max Iteration.
        ### `dMaxStrain`
        - A _Double_ specifying Max Strain.
        ### `dMaxTheta`
        - A _Double_ specifying Max Theta.
        ### `dH1Tolerance`
        - A _Double_ specifying H1 Tolerance.
        ### `iOutputLast`
        - An _Int_ specifying selection of Output Last.
        - If _iOutputLast=0_: No
        - If _iOutputLast=1_: Yes
        ### `iOutputInterval`
        - An _Int_ specifying Output Interval.
        ### `iResoutLast`
        - An _Int_ specifying selection of Resout Last.
        - If _iResoutLast=0_: No
        - If _iResoutLast=1_: Yes
        ### `iResoutInterval`
        - An _Int_ specifying Resout Interval.
        ### `iArmijoCheck`
        - An _Int_ specifying selection of Armijo Check.
        - If _iArmijoCheck=0_: No
        - If _iArmijoCheck=1_: Yes
        ### `dArmijoParam`
        - A _Double_ specifying Armijo Param.
        ### `strDirection`
        - A _String_ specifying Direction.
        ### `iPunchingOneSide`
        - An _Int_ specifying selection of Punching|Outside.
        - If _iPunchingOneSide=0_: Punching
        - If _iPunchingOneSide=1_: Oneside
        ### `iAutoIncrement`
        - An _Int_ specifying selection of Auto Increment.
        - If _iAutoIncrement=0_: No
        - If _iAutoIncrement=1_: Yes
        ### `dStabilizationFactor`
        - A _Double_ specifying Stabilization Factor.
        ### `dPoissonRatio`
        - A _Double_ specifying Poisson Ratio.
        ### `iAutoFrozen`
        - An _Int_ specifying selection of Auto Frozen.
        - If _iAutoFrozen=0_: No
        - If _iAutoFrozen=1_: Yes
        ### `iKeyCoordinate`
        - An _Int_ specifying selection of Coodinate.
        ### `crNodeSet`
        - A _Cursor_ to specifying Node Set.
        ### `crPropOrElemSet`
        - A _Cursor_ to specifying Element Set.
        ### `crSurfaceSetNonInterferingArea`
        - A _Cursor_ to specifying Non-Interfering Area.
        ### `crSurfaceSetOptimizedArea`
        - A _Cursor_ to specifying Optimized Area.
        ### `iWolfeCheck`
        - An _Int_ specifying selection of Wolfe Check.
        - If _iWolfeCheck=0_: No
        - If _iWolfeCheck=1_: Yes
        ### `dWolfeParam`
        - A _Double_ specifying Wolfe Param.
        ### `iMatrix`
        - An _Int_ specifying selection of Matrix.
        - If _iMatrix=0_: StiffnessLinear
        - If _iMatrix=1_: Stiffness
        ### `iElementDStiffness`
        - An _Int_ specifying selection of Element D.Stiffness.
        - If _iElementDStiffness=0_: No
        - If _iElementDStiffness=1_: Yes
        ### `iConstraintMethod`
        - An _Int_ specifying selection of Constraint Method.
        - If _iConstraintMethod=0_: No
        - If _iConstraintMethod=1_: Yes
        ### `dGrayScaleRatio`
        - A _Double_ specifying gray scale ratio.
        ### `iOutputGrayScaleRatio`
        - An _Int_ Specifing whether or not output gray scale ratio.

### `45. OptimizationOutput`

- A list of _Boolean_ specifying the optimization output paramters. Output if it set 1. From left to right,
- NodalShapeVariation
- ShapeVariation
- NodalDensityRation
- DensityRation
- Sensitivity
- Sensitivity_Of_Objective
- Sensitivity_Of_Constraint
- Sensitivities

## Return Code

- "1": The function can be executed
- "FAILED": The function cannot be executed

## Sample Code

```psj
ADVC_Structure("Job_1", "", 0, [119:1], [], [], 0, 0:0, 0, 0, 0, 0, 0, 0, 0, [3:2], 1, 1, 1, 1, 0, 1, 22:1, 0, "", 2147483647, 2147483647, 0, 1, [], 0, 0, "C:/Temp/Export.adx", 0, 10, 6, 0, 0, "", 1, 0, [(0, "Compliance_1", 0, "", 1.79769e+308, [119:1], -1, 1.79769e+308, -1, 1.79769e+308, 1, 0:0, 0:0, 0:0, -1, 1.79769e+308, 1.79769e+308, 2147483647)], [(9, "Volume_1", 0, "", 1.79769e+308, [], 0, 1.79769e+308, -1, 0.4, 1, 0:0, 0:0, 0:0, -1, 1.79769e+308, 1.79769e+308, 2147483647)], [], [(13, "ShapeOptimization_1", 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 100, 0.1, 1.79769e+308, 0.01, 1, 1, -1, 2147483647, -1, 1.79769e+308, "", -1, -1, 1.79769e+308, 1.79769e+308, 1, -1, 0:0, 0:0, 0:0, 0:0, [], -1, 1.79769e+308, -1, -1, -1, 1, 1)], (0, 1, 0, 0, 1, 1, 1, 1))
```

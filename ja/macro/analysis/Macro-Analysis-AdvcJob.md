---
id: AdvcJob
title: AdvcJob()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC job

## Syntax

```psj
AdvcJob(string Name, string Description, int eJobType, cursor[] processSequence,
    cursor[] elemLocationGroup, cursor[] nodeLocationGroup, bool WriteGroup,
    cursor Edit, bool ResultReference, int iSeparateFile, bool ExportRelatedAllLBCs,
    bool UseEntityName, bool MatrixSloverParam, int PreconditionType,
    int MatrixStructure, cursor[] Target, int LoadType,bool SameOutputOnAllProcess,
    bool DeleteFloatingNode, bool BC, bool CheckBCDuplicate, bool AutoAssignDummyProp,
    cursor crDummyPropMaterial, bool ReferenceRestartData, string ReferenceRestartDataPath,
    int ReferenceRestartDataProcessNum, int ReferenceRestartDataStepNum,int ReferenceRestartDataCoordType,
    int ReferenceRestartDataUpdateContactSearch, LoadNodeData[] LoadData, int HeatConvection)
```

## Inputs

### `1. String`

Name of ADVC Job

### `2. String`

Description of ADVC Job

### `3. Int`

Job type[0:Structural; 1:Heat Transfer]

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

Separated file type[0:None; 1:By Model; 2:By Body; 3:By Selected Body]

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

### `31. LoadNodeData`

(Cursor data, Cursor modify, int flag, double contactInterference, bool shrink, int Stabilized, double residualFactor, double EffectiveDist, int Type, double CN, double CT)

### `32. Int`

Heat Convection

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcJob("ADVC", "", 1, [128:2], [], [], 0, 0:0, 0, 0, 0, 0, 0, 0, 0, [3:1],
    1, 1, 1, 1, 0, 1, 22:2, 0, "", 2147483647, 2147483647, 0, 1, [], 1)
```

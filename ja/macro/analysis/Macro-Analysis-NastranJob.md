---
id: NastranJob
title: NastranJob()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Nastran job

## Syntax

```psj
NastranJob(string strName, string strDescription, TCursor[] taTarget, int solverType,
    int writeType, int gridFormatType, int deleteFloatingNodes, int continuanceMarker,
    int defineLbcId, int definedLoadId, int definedSpcId, int definedMpcId,
    int uniqueLbcId, int useCASI, double epsilon, int maxNumOfIter, int memory,
    int paramInrel, int ncpu, int solNo, string includeFilePath, [double startFreq,
    double endFreq, int noOfModes], [double startFrequency, double increment, int numOfInc,
    int tableId], [int numOfSteps, double timeIncrement, int outputInterval, int dampingType,
    int modalDampingTableId], [int value_Displacement, int value_SpcForces, int value_Oload,
    int value_MpcForces, int value_Stress, int value_Strain, int value_Force,
    int value_StrainEnergy, int value_Bcresult, int value_Sdisplacement, int value_Acceleration,
    int value_Velocity, int value_Meffmass, int value_Thermal, int value_Flux, int type_Displacement,
    int type_SpcForces, int type_Oload, int type_MpcForces, int type_Stress, int type_Strain,
    int type_Force, int type_StrainEnergy, int type_Bcresult, int type_Sdisplacement,
    int type_Acceleration, int type_Velocity, int type_Meffmass, int type_Thermal,
    int type_Flux], [int GEOMCHECK_NONE], [int ECHO, string title],
    [double subcaseIdForLoad, double subcaseIdForDload, double subcaseIdForSpc, double subcaseIdForMpc,
    double subcaseIdForTempInit, double subcaseIdForTempLoad], [int POST, int OGEOM, int AUTOSPC,
    string GRDPNT, string WTMASS, string K6ROT, string MAXRATIO, int BAILOUT,
    int PRGPST, int RESVEC, double G, double HFREQ, double LFREQ, double W3, double W4 int MEFFMASS,
    int MEFFMASS_GRID_ID], [int NINC, int KMETHOD, int MAXITER, int useEPSU, int useEPSP, int useEPSW,
    double EPSU, double EPSP, double EPSW], [int NDT, double DT, int MAXITER], [[int id, string title,
    string arbitraryText, int subcaseIdForLoad, int subcaseIdForDload, int subcaseIdForSpc,
    int subcaseIdForMpc, int subcaseIdForTempInit, int subcaseIdForTempLoad, int outputReq_Displacement,
    int outputReq_Stress, int outputReq_Strain, int outputReq_Acceleration, int outputReq_Velocity], ...],
    string systemCellText, string fileManagementText, string executiveControlText, string globalCaseControlText,
    string bulkDataText, int exportModelUnitSystem, TCursor crEdit)
```

## Inputs

### `1. String`

Job name

### `2. String`

Job description

### `3. TCursor[]`

target

### `4. int`

solverType parameter

### `5. int`

writeType parameter

### `6. int`

gridFormatType parameter

### `7. int`

deleteFloatingNodes parameter

### `8. int`

continuanceMarker parameter

### `9. int`

defineLbcId parameter

### `10. int`

definedLoadId parameter

### `11. int`

definedSpcId parameter

### `12. int`

definedMpcId parameter

### `13. int`

uniqueLbcId parameter

### `14. int`

useCASI parameter

### `15. double`

epsilon parameter

### `16. int`

maxNumOfIter parameter

### `17. int`

numOfThreads parameter

### `18. int`

memory parameter

### `19. int`

paramInrel parameter

### `20. int`

ncpu parameter

### `21. int`

solNo parameter

### `22. String`

includeFilePath parameter

### `23. double`

startFreq parameter

### `24. double`

endFreq parameter

### `25. int`

noOfModes parameter

### `26. double`

startFrequency parameter

### `27. double`

increment parameter

### `28. int`

numOfInc parameter

### `29. int`

tableId parameter

### `30. int`

numOfSteps parameter

### `31. double`

timeIncrement parameter

### `32. int`

outputInterval parameter

### `33. int`

dampingType parameter

### `34. int`

modalDampingTableId parameter

### `35. int`

value_Displacement parameter

### `36. int`

value_SpcForces parameter

### `37. int`

value_Oload parameter

### `38. int`

value_MpcForces parameter

### `39. int`

value_Stress parameter

### `40. int`

value_Strain parameter

### `41. int`

value_Force parameter

### `42. int`

value_StrainEnergy parameter

### `43. int`

value_Bcresults parameter

### `44. int`

value_Bgresults parameter

### `45. int`

value_Sdisplacement parameter

### `46. int`

value_Acceleration parameter

### `47. int`

value_Velocity parameter

### `48. int`

value_Meffmass parameter

### `49. int`

value_Thermal parameter

### `50. int`

value_Flux parameter

### `51. int`

type_Displacement parameter

### `52. int`

type_SpcForces parameter

### `53. int`

type_Oload parameter

### `54. int`

type_MpcForces parameter

### `55. int`

type_Stress parameter

### `56. int`

type_Strain parameter

### `57. int`

type_Force parameter

### `58. int`

type_StrainEnergy parameter

### `59. int`

type_Bcresults parameter

### `60. int`

type_Bgresults parameter

### `61. int`

type_Sdisplacement parameter

### `62. int`

type_Acceleration parameter

### `63. int`

type_Velocity parameter

### `64. int`

type_Meffmass parameter

### `65. int`

type_Thermal parameter

### `66. int`

type_Flux parameter

### `67. int`

GEOMCHECK_NONE parameter

### `68. int`

ECHO parameter

### `69. String`

title parameter

### `70. int`

subcaseIdForLoad parameter

### `71. int`

subcaseIdForDload parameter

### `72. int`

subcaseIdForSpc parameter

### `73. int`

subcaseIdForMpc parameter

### `74. int`

subcaseIdForTempInit parameter

### `75. int`

subcaseIdForTempLoad parameter

### `76. int`

POST parameter

### `77. int`

OGEOM parameter

### `78. int`

AUTOSPC parameter

### `79. String`

GRDPNT parameter

### `80. String`

WTMASS parameter

### `81. String`

K6ROT parameter

### `82. String`

MAXRATIO parameter

### `83. int`

BAILOUT parameter

### `84. int`

PRGPST parameter

### `85. int`

RESVEC parameter

### `86. double`

G parameter

### `87. double`

HFREQ parameter

### `88. double`

LFREQ parameter

### `89. double`

W3 parameter

### `90. double`

W4 parameter

### `91. int`

MEFFMASS parameter

### `92. int`

MEFFMASS_GRID_ID parameter

### `93. int`

NINC parameter

### `94. int`

KMETHOD parameter

### `95. int`

MAXITER parameter

### `96. int`

useEPSU parameter

### `97. int`

useEPSP parameter

### `98. int`

useEPSW parameter

### `99. double`

EPSU parameter

### `100. double`

EPSP parameter

### `101. double`

EPSW parameter

### `102. int`

NDT parameter

### `103. double`

DT parameter

### `104. int`

MAXITER parameter

### `105. int`

id parameter

### `106. String`

title parameter

### `107. String`

arbitraryText parameter

### `108. int`

subcaseIdForLoad parameter

### `109. int`

subcaseIdForDload parameter

### `110. int`

subcaseIdForSpc parameter

### `111. int`

subcaseIdForMpc parameter

### `112. int`

subcaseIdForTempInit parameter

### `113. int`

subcaseIdForTempLoad parameter

### `114. int`

outputReq_Displacement parameter

### `115. int`

outputReq_Stress parameter

### `116. int`

outputReq_Strain parameter

### `117. int`

outputReq_Acceleration parameter

### `118. int`

outputReq_Velocity parameter

### `119. String`

systemCellText parameter

### `120. String`

fileManagementText parameter

### `121. String`

executiveControlText parameter

### `122. String`

globalCaseControlText parameter

### `123. String`

bulkDataText parameter

### `124. TCursor`

Cursor for edit mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
NastranJob("TS-Solver1", "", [], 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1.79769e+308,
    2147483647, 0, 2147483647, 0, 1, 101, "", [1.79769e+308, 1.79769e+308, 2147483647],
    [0, 1.79769e+308, 1.79769e+308, 2147483647, 0, 0, 1.79769e+308, 1.79769e+308, 2147483647],
    [1.79769e+308, 1.79769e+308, 2147483647, 0], [2147483647, 1.79769e+308, 2147483647, 2, 0],
    [2147483647, 2147483647, 2147483647, 2147483647, 2147483647, 2147483647, 2147483647,
    0, 0, 2147483647, 0, 2147483647, 2147483647, 0, 0, 0, 0, 2147483647, 2147483647, 1, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [0, ""], [2147483647, 2147483647,
    2147483647, 2147483647, 2147483647, 2147483647], [-1, 0, 0, "", "", "", "", 2147483647, 2,
    0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 2147483647, 1, 0],
    [1, 3, 1, 0, 0, 1, 0.01, 0.01, 0.01], [2147483647, 1.79769e+308, 2147483647], [],
    "", "", "", "", "", 0, 1, 2, 0:0)
```

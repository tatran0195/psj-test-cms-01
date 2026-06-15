---
id: DynamisJob
title: DynamisJob()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Dynamis job

## Syntax

```psj
DynamisJob(string strName, string strDescription, TCursor[] taTarget, int solverType,
    int writeType, int gridFormatType, int deleteFloatingNodes, int continuanceMarker,
    int defineLbcId, int definedLoadId, int definedSpcId, int definedMpcId, int uniqueLbcId,
    int useCASI, double epsilon, int maxNumOfIter, int memory, int paramInrel, int ncpu,
    int solNo, string includeFilePath, [double startFreq, double endFreq, int noOfModes],
    [double startFrequency, double increment, int numOfInc, int tableId],
    [int numOfSteps, double timeIncrement, int outputInterval, int dampingType, int modalDampingTableId],
    [int value_Displacement, int value_SpcForces, int value_Oload, int value_MpcForces,
    int value_Stress, int value_Strain, int value_Force, int value_StrainEnergy, int value_Bcresults,
    int value_Bgresults, int value_Sdisplacement, int value_Acceleration, int value_Velocity,
    int value_Meffmass, int value_Thermal, int value_Flux, int type_Displacement,
    int type_SpcForces, int type_Oload, int type_MpcForces, int type_Stress, int type_Strain,
    int type_Force, int type_StrainEnergy, int type_Bcresults, int type_Bgresults, int type_Sdisplacement,
    int type_Acceleration, int type_Velocity, int type_Meffmass, int type_Thermal, int type_Flux],
    [int GEOMCHECK_NONE], [int ECHO, string title], [double subcaseIdForLoad, double subcaseIdForDload,
    double subcaseIdForSpc, double subcaseIdForMpc, double subcaseIdForTempInit, double subcaseIdForTempLoad],
    [int POST, int OGEOM, int AUTOSPC, string GRDPNT, string WTMASS, string K6ROT, string MAXRATIO,
    int BAILOUT, int PRGPST, int RESVEC, double G, double HFREQ, double LFREQ, int MEFFMASS, int MEFFMASS_GRID_ID],
    [int NINC, int KMETHOD, int MAXITER, int useEPSU, int useEPSP, int useEPSW, double EPSU, double EPSP, double EPSW],
    [int NDT, double DT, int MAXITER], [[int id, string title, string arbitraryText, int subcaseIdForLoad,
    int subcaseIdForDload, int subcaseIdForSpc, int subcaseIdForMpc, int subcaseIdForTempInit,
    int subcaseIdForTempLoad, int outputReq_Displacement, int outputReq_Stress, int outputReq_Strain,
    int outputReq_Acceleration, int outputReq_Velocity], ...], string systemCellText, string fileManagementText,
    string executiveControlText, string globalCaseControlText, string bulkDataText, TCursor crEdit)
```

## Inputs

### `1. String`

Job name

### `2. String`

Job description

### `3. TCursor[]`

target

### `4. Int`

solverType parameter

### `5. Int`

writeType parameter

### `6. Int`

gridFormatType parameter

### `7. Int`

deleteFloatingNodes parameter

### `8. Int`

continuanceMarker parameter

### `9. Int`

defineLbcId parameter

### `10. Int`

definedLoadId parameter

### `11. Int`

definedSpcId parameter

### `12. Int`

definedMpcId parameter

### `13. Int`

uniqueLbcId parameter

### `14. Int`

useCASI parameter

### `15. Double`

epsilon parameter

### `16. Int`

maxNumOfIter parameter

### `17. Int`

numOfThreads parameter

### `18. Int`

memory parameter

### `19. Int`

paramInrel parameter

### `20. Int`

ncpu parameter

### `21. Int`

solNo parameter

### `22. String`

includeFilePath parameter

### `23. Double`

startFreq parameter

### `24. Double`

endFreq parameter

### `25. Int`

noOfModes parameter

### `26. Double`

startFrequency parameter

### `27. Double`

increment parameter

### `28. Int`

numOfInc parameter

### `29. Int`

tableId parameter

### `30. Int`

numOfSteps parameter

### `31. Double`

timeIncrement parameter

### `32. Int`

outputInterval parameter

### `33. Int`

dampingType parameter

### `34. Int`

modalDampingTableId parameter

### `35. Int`

value_Displacement parameter

### `36. Int`

value_SpcForces parameter

### `37. Int`

value_Oload parameter

### `38. Int`

value_MpcForces parameter

### `39. Int`

value_Stress parameter

### `40. Int`

value_Strain parameter

### `41. Int`

value_Force parameter

### `42. Int`

value_StrainEnergy parameter

### `43. Int`

value_Bcresults parameter

### `44. Int`

value_Bgresults parameter

### `45. Int`

value_Sdisplacement parameter

### `46. Int`

value_Acceleration parameter

### `47. Int`

value_Velocity parameter

### `48. Int`

value_Meffmass parameter

### `49. Int`

value_Thermal parameter

### `50. Int`

value_Flux parameter

### `51. Int`

type_Displacement parameter

### `52. Int`

type_SpcForces parameter

### `53. Int`

type_Oload parameter

### `54. Int`

type_MpcForces parameter

### `55. Int`

type_Stress parameter

### `56. Int`

type_Strain parameter

### `57. Int`

type_Force parameter

### `58. Int`

type_StrainEnergy parameter

### `59. Int`

type_Bcresults parameter

### `60. Int`

type_Bgresults parameter

### `61. Int`

type_Sdisplacement parameter

### `62. Int`

type_Acceleration parameter

### `63. Int`

type_Velocity parameter

### `64. Int`

type_Meffmass parameter

### `65. Int`

type_Thermal parameter

### `66. Int`

type_Flux parameter

### `67. Int`

GEOMCHECK_NONE parameter

### `68. Int`

ECHO parameter

### `69. String`

title parameter

### `70. Int`

subcaseIdForLoad parameter

### `71. Int`

subcaseIdForDload parameter

### `72. Int`

subcaseIdForSpc parameter

### `73. Int`

subcaseIdForMpc parameter

### `74. Int`

subcaseIdForTempInit parameter

### `75. Int`

subcaseIdForTempLoad parameter

### `76. Int`

POST parameter

### `77. Int`

OGEOM parameter

### `78. Int`

AUTOSPC parameter

### `79. String`

GRDPNT parameter

### `80. String`

WTMASS parameter

### `81. String`

K6ROT parameter

### `82. String`

MAXRATIO parameter

### `83. Int`

BAILOUT parameter

### `84. Int`

PRGPST parameter

### `85. Int`

RESVEC parameter

### `86. Double`

G parameter

### `87. Double`

HFREQ parameter

### `88. Double`

LFREQ parameter

### `89. Double`

W3 parameter

### `90. Double`

W4 parameter

### `91. Int`

MEFFMASS parameter

### `92. Int`

MEFFMASS_GRID_ID parameter

### `93. Int`

NINC parameter

### `94. Int`

KMETHOD parameter

### `95. Int`

MAXITER parameter

### `96. Int`

useEPSU parameter

### `97. Int`

useEPSP parameter

### `98. Int`

useEPSW parameter

### `99. Double`

EPSU parameter

### `100. Double`

EPSP parameter

### `101. Double`

EPSW parameter

### `102. Int`

NDT parameter

### `103. Double`

DT parameter

### `104. Int`

MAXITER parameter

### `105. Int`

id parameter

### `106. String`

title parameter

### `107. String`

arbitraryText parameter

### `108. Int`

subcaseIdForLoad parameter

### `109. Int`

subcaseIdForDload parameter

### `110. Int`

subcaseIdForSpc parameter

### `111. Int`

subcaseIdForMpc parameter

### `112. Int`

subcaseIdForTempInit parameter

### `113. Int`

subcaseIdForTempLoad parameter

### `114. Int`

outputReq_Displacement parameter

### `115. Int`

outputReq_Stress parameter

### `116. Int`

outputReq_Strain parameter

### `117. Int`

outputReq_Acceleration parameter

### `118. Int`

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
DynamisJob("TS-Solver", "", [], 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1.79769e+308, 2147483647,
    0, 1024, 0, 0, 101, "", [1.79769e+308, 1.79769e+308, 2147483647], [0, 1.79769e+308,
    1.79769e+308, 2147483647, 0, 0, 1.79769e+308, 1.79769e+308, 2147483647], [1.79769e+308,
    1.79769e+308, 2147483647, 0], [2147483647, 1.79769e+308, 2147483647, 2, 0],
    [2147483647, 2147483647, 2147483647, 2147483647, 2147483647, 2147483647, 2147483647,
    0, 0, 2147483647, 0, 0, 0, 0, 0, 0, 0, 2147483647, 2147483647, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [0, ""], [2147483647, 2147483647, 2147483647,
    2147483647, 2147483647, 2147483647], [-1, 0, 0, "", "", "", "", 2147483647, 2, 0,
    1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 2147483647, 1, 0],
    [1, 3, 2147483647, 0, 0, 1, 1.79769e+308, 1.79769e+308, 0.01], [2147483647, 1.79769e+308, 2147483647],
    [], "", "", "", "", "", 0, 0:0)
```

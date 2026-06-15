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
DynamisJob(String strName, String strDescription, Cursor[] taTarget, int writeType,
    int gridFormatType, int deleteFloatingNodes, int continuanceMarker, int defineLbcId,
    int definedLoadId, int definedSpcId, int definedMpcId, int useCASI, double epsilon,
    int maxNumOfIter, int memory, int paramInrel, int ncpu, int solNo, String includeFilePath,
    [double startFreq, double endFreq, int noOfModes], [double startFrequency, double increment,
    int numOfInc, int tableId], [int numOfSteps, double timeIncrement, int outputInterval,
    int modalDampingTableId], [int value_Displacement, int value_SpcForces, int value_Oload,
    int value_MpcForces, int value_Stress, int value_Strain, int value_Force, int value_StrainEnergy,
    int value_Sdisplacement, int value_Acceleration, int value_Velocity, int value_Meffmass,
    int value_Thermal, int value_Flux, int type_Displacement, int type_SpcForces, int type_Oload,
    int type_MpcForces, int type_Stress, int type_Strain, int type_Force, int type_StrainEnergy,
    int type_Sdisplacement, int type_Acceleration, int type_Velocity, int type_Meffmass,
    int type_Thermal, int type_Flux], [int GEOMCHECK_NONE], [int ECHO, String title],
    [double subcaseIdForLoad, double subcaseIdForDload, double subcaseIdForSpc,
    double subcaseIdForMpc, double subcaseIdForTempInit, double subcaseIdForTempLoad],
    [int POST, int OGEOM, int AUTOSPC, String GRDPNT, String WTMASS, String K6ROT,
    string MAXRATIO, int BAILOUT, int PRGPST], [int NINC, int KMETHOD, int MAXITER, int useEPSU,
    int useEPSP, int useEPSW, double EPSU, double EPSP, double EPSW], [int NDT, double DT, int MAXITER],
    [[int id, int title, int subcaseIdForLoad, int subcaseIdForDload, int subcaseIdForSpc,
    int subcaseIdForMpc, int subcaseIdForTempInit, int subcaseIdForTempLoad, int outputReq_Displacement,
    int outputReq_Stress, int outputReq_Strain, int outputReq_Acceleration, int outputReq_Velocity], ...],
    Cursor crEdit)
```

## Inputs

### `1. String`

Job name

### `2. String`

Job description

### `3. Cursor[]`

target

### `4. Int`

writeType parameter

### `5. Int`

gridFormatType parameter

### `6. Int`

deleteFloatingNodes parameter

### `7. Int`

continuanceMarker parameter

### `8. Int`

defineLbcId parameter

### `9. Int`

definedLoadId parameter

### `10. Int`

definedSpcId parameter

### `11. Int`

definedMpcId parameter

### `12. Int`

useCASI parameter

### `13. Double`

epsilon parameter

### `14. Int`

maxNumOfIter parameter

### `15. Int`

memory parameter

### `16. Int`

paramInrel parameter

### `17. Int`

ncpu parameter

### `18. Int`

solNo parameter

### `19. String`

includeFilePath parameter

### `20. Double`

startFreq parameter

### `21. Double`

endFreq parameter

### `22. Int`

noOfModes parameter

### `23. Double`

startFrequency parameter

### `24. Double`

increment parameter

### `25. Int`

numOfInc parameter

### `26. Int`

tableId parameter

### `27. Int`

numOfSteps parameter

### `28. Double`

timeIncrement parameter

### `29. Int`

outputInterval parameter

### `30. Int`

modalDampingTableId parameter

### `31. Int`

value_Displacement parameter

### `32. Int`

value_SpcForces parameter

### `33. Int`

value_Oload parameter

### `34. Int`

value_MpcForces parameter

### `35. Int`

value_Stress parameter

### `36. Int`

value_Strain parameter

### `37. Int`

value_Force parameter

### `38. Int`

value_StrainEnergy parameter

### `39. Int`

value_Sdisplacement parameter

### `40. Int`

value_Acceleration parameter

### `41. Int`

value_Velocity parameter

### `42. Int`

value_Meffmass parameter

### `43. Int`

value_Thermal parameter

### `44. Int`

value_Flux parameter

### `45. Int`

type_Displacement parameter

### `46. Int`

type_SpcForces parameter

### `47. Int`

type_Oload parameter

### `48. Int`

type_MpcForces parameter

### `49. Int`

type_Stress parameter

### `50. Int`

type_Strain parameter

### `51. Int`

type_Force parameter

### `52. Int`

type_StrainEnergy parameter

### `53. Int`

type_Sdisplacement parameter

### `54. Int`

type_Acceleration parameter

### `55. Int`

type_Velocity parameter

### `56. Int`

type_Meffmass parameter

### `57. Int`

type_Thermal parameter

### `58. Int`

type_Flux parameter

### `59. Int`

GEOMCHECK_NONE parameter

### `60. Int`

ECHO parameter

### `61. String`

title parameter

### `62. Double`

subcaseIdForLoad parameter

### `63. Double`

subcaseIdForDload parameter

### `64. Double`

subcaseIdForSpc parameter

### `65. Double`

subcaseIdForMpc parameter

### `66. Double`

subcaseIdForTempInit parameter

### `67. Double`

subcaseIdForTempLoad parameter

### `68. Int`

POST parameter

### `69. Int`

OGEOM parameter

### `70. Int`

AUTOSPC parameter

### `71. String`

GRDPNT parameter

### `72. String`

WTMASS parameter

### `73. String`

K6ROT parameter

### `74. String`

MAXRATIO parameter

### `75. Int`

BAILOUT parameter

### `76. Int`

PRGPST parameter

### `77. Int`

NINC parameter

### `78. Int`

KMETHOD parameter

### `79. Int`

MAXITER parameter

### `80. Int`

useEPSU parameter

### `81. Int`

useEPSP parameter

### `82. Int`

useEPSW parameter

### `83. Double`

EPSU parameter

### `84. Double`

EPSP parameter

### `85. Double`

EPSW parameter

### `86. Int`

NDT parameter

### `87. Double`

DT parameter

### `88. Int`

MAXITER parameter

### `89. Int`

id parameter

### `90. Int`

title parameter

### `91. Int`

subcaseIdForLoad parameter

### `92. Int`

subcaseIdForDload parameter

### `93. Int`

subcaseIdForSpc parameter

### `94. Int`

subcaseIdForMpc parameter

### `95. Int`

subcaseIdForTempInit parameter

### `96. Int`

subcaseIdForTempLoad parameter

### `97. Int`

outputReq_Displacement parameter

### `98. Int`

outputReq_Stress parameter

### `99. Int`

outputReq_Strain parameter

### `100. Int`

outputReq_Acceleration parameter

### `101. Int`

outputReq_Velocity parameter

### `102. Cursor`

Cursor for edit mode

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
DynamisJob("Job1", "", [], 0, 1, 1, 0, 0, 0, 0, 0, 1, 1.79769e+308, 2147483647, 4, 1024,
    0, 1, 101, "", [1.79769e+308, 1.79769e+308, 2147483647], [1.79769e+308, 1.79769e+308, 2147483647, 0],
    [2147483647, 1.79769e+308, 2147483647, 0], [2147483647, 0, 0, 0, 2147483647, 0, 0, 0, 0, 0, 0, 0,
    2147483647, 2147483647, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0], [0, ""],
    [2147483647, 2147483647, 2147483647, 2147483647, 2147483647, 2147483647],
    [-1, 0, 0, "", "", "", "", 2147483647, 2], [1, 3, 2147483647, 0, 0, 1, 1.79769e+308, 1.79769e+308, 0.01],
    [2147483647, 1.79769e+308, 2147483647], [], 0:0)
```

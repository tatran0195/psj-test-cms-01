---
id: CreateAnsysJob
title: CreateAnsysJob()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create Ansys Job

## Syntax

```psj
CreateAnsysJob(string name, int analysisType, int SolverType, string JobName,
    string JobDescription, bool bOutputDisplacements, bool bOutputReactionLoad,
    bool bOutputStrain, bool bOutputStress, int iAnalysisOpt, bool bCal_Press_effects,
    double fUniTem, double fRefTemp, double fEndLoadtime, int iTimeStep, int iStepChosen,
    int iSubStepNum, int iMaxSubStep, int iMinStepNum, double fTimeStepSize,
    double fMinTimeStep, double fMaxTimeStep, int iWriteReslutFre, int iN, bool bRunAPDL,
    bool bWriteResultDB, double fEndFreq, double fStartFreq, int iSolutionOption,
    double fPropChange, int iPointNum, double fMinTemp, double fMaxTemp, int EquationSolv,
    double fTolLevel, double fMultiplier, bool bSignlePrecision, double fTempDiff,
    double fStartFreq, double fEndFreq, int nSubsteps, double fAlphad, double fBetad,
    double fDmprat, bool bOutputDisplacements, bool bOutputStrain, bool bOutputStress,
    int iLCId, int imodeShape, int iModeMethod, int iExtractNum, bool bExpandShape,
    int iExpandNum, bool bUseApprox, bool bInclPrssEff, bool bMemorySave, bool bRsvec,
    bool bOutputDisplacements, bool bOutputStrain, bool bOutputStress, int iPrintNum,
    bool bMemorySave, bool bOutputHeatFlux, bool bOutputTemperature, bool bPivotsCheck,
    bool bSignlePrecision, double fMultiplier, double fTempDiff, double fTolLevel,
    int iAdaptiveDes, int iEquationSolv, int iNPOption, string AnsysVersion,
    string CommandLineOption, bool OutputSOLVE, int iRigidMode, int iWorkSize,
    int iNPADNum, int iBlockNum, int iMaxiteratCnt, int iMinNShift, int iSeqCheck,
    bool bTranEffect, int iLoadingType, double fMassMatrixMult, double fStiffMatrixMult,
    bool bMidStep, double fToleranceBisection, double fToleranceTimeStep,
    int iTimeInterAlgor, int iTimeInter, double fGAMMA, double fALPHA, double fDELTA,
    double fALPHAF, double fALPHAM, bool bOutputTemperature, bool bOutputHeatFlux, Cursor Edit)
```

## Inputs

### `1. String`

Name Job

### `2. Int`

Analysis Type[0:none 1:struct 2:thermal]

### `3. Int`

Solver Type [0:none 1:modal 2:hamonic 3:static 4:struct transient 5:steady state 6:thermal transient]

### `4. String`

Name Job

### `5. String`

Job description

### `6. Bool`

Output Displacements

### `7. Bool`

Output Reaction Load

### `8. Bool`

Output Strain

### `9. Bool`

Output Stress

### `10. Int`

Analysis Opt [0 = small displacement,1 = large displacement ]

### `11. Bool`

Cal Press effects

### `12. Double`

Uniform temperature

### `13. Double`

Reference temperature

### `14. Double`

End load time

### `15. Int`

Time step [0 = Prog chosen, 1 = On, 2 = Off, 3 = Arc-Length]

### `16. Int`

Step chosen [0 = Number of SubSteps, 1 = Time Increment]

### `17. Int`

Number of substep

### `18. Int`

Max Number of substep

### `19. Int`

Min Number of substep

### `20. Double`

Time step size

### `21. Double`

Min time step

### `22. Double`

Max time step

### `23. Int`

Write result fre [0=write every subStep, 1=Do not write any substeps,2=Write last subStep only,3= Write every Nth Substep,4=Write N Number subStep]

### `24. Int`

iN

### `25. Bool`

Run APDL

### `26. Bool`

Write result DB

### `27. Double`

End frequency

### `28. Double`

Start frequency

### `29. Int`

Solution option [0=Full,=1=Quasi,2=Linear]

### `30. Double`

Property change for reformation

### `31. Int`

Number of poInts in fast table

### `32. Double`

Min temperature for fast table

### `33. Double`

Max temperature for fast table

### `34. Int`

Equation solver[0=Program Chosen,1=Frontal solver,2=Sparse solver,3=Jacobi Conj Grad,4=JCG out-of-core,5=Precondition CG,6=PCG out-of-core,7=Algebraic M-grid,8=Inc Cholesky CG,9=Iter auto select]

### `35. Double`

Tolerance/Level

### `36. Double`

Multiplier

### `37. Bool`

Single Precision

### `38. Bool`

Memory save

### `39. Double`

Temperature difference

### `40. Double`

Start frequency

### `41. Double`

End frequency

### `42. Int`

Substeps

### `43. Double`

Alfhad

### `44. Double`

Betad

### `45. Double`

Dmprat

### `46. Bool`

Output displacement

### `47. Bool`

Output Strain

### `48. Bool`

Output Stress

### `49. Int`

Load case id

### `50. Int`

Nrmkey Normalize mode shapes [0=To mass matrix, 1= To unity]

### `51. Int`

Mode Method [0=Block,1=Subspace,2=Reduced]

### `52. Int`

Extract Num

### `53. Bool`

Expand mode shape

### `54. Int`

No. of modes to expand

### `55. Bool`

Use lumped mass approx.

### `56. Bool`

Incl prestress effects

### `57. Bool`

Memory save

### `58. Bool`

Residual Vector

### `59. Bool`

Output displacement

### `60. Bool`

Output Strain

### `61. Bool`

Output Stress

### `62. Int`

Num of modes to prInt

### `63. Bool`

Memory save for steady state

### `64. Bool`

Output heat flux

### `65. Bool`

Output temperature

### `66. Bool`

Pivots check

### `67. Bool`

single precision

### `68. Double`

Multiplier

### `69. Double`

Temperature difference

### `70. Double`

Tolerance level

### `71. Int`

Adaptive descent [0 = ON if necessary, 1 = ON, 2 = OFF]

### `72. Int`

Equation solver [0= Program Chosen,1= Frontal solver]

### `73. Int`

Newton-Raphson option[0= Program chosen, 1= Full N-R, 2= Modified N-R, 3= Initial stiffnes, 4= Full N-R unsymm]

### `74. String`

Ansys version

### `75. String`

Command line option

### `76. Bool`

Output solver

### `77. Int`

Rigid mode

### `78. Int`

Work size

### `79. Int`

No of extra vectors

### `80. Int`

NPERBK No of modes/memory block

### `81. Int`

NUMSSI Maximum number of iterations

### `82. Int`

NSHIFT Min, before shift

### `83. Int`

Strmck Sturm sequence check [0 =At shift+end pts, 1= At shift pts, 2 = No Sturm check]

### `84. Bool`

Transient effects

### `85. Int`

Loading type [0= Stepped Loading,1= Ramped Loading]

### `86. Double`

Mass matrix multiplier

### `87. Double`

Stiffness matrix multiplier

### `88. Bool`

MidStep Criterion

### `89. Double`

Tolerance for Bisection

### `90. Double`

Tolerance for TimeStep

### `91. Int`

Time Intergration algorithm [0 =Newmark,1=HHT]

### `92. Int`

Time Intergration[0 =Amplitude decay ,1= Integration parameters]

### `93. Double`

Gamma

### `94. Double`

Alpha

### `95. Double`

Delta

### `96. Double`

AlphaF

### `97. Double`

AlphaM

### `98. Bool`

Output temperature

### `99. Bool`

Output heat flux

### `100. Cursor`

Edit job

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
CreateAnsysJob("Ansys", 2, 5, "Nastran4", "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    , 0, 0, 1, 1, 0, 0, 1.79769e+308, 1.79769e+308, 0, 0.05, 64, 0, 0, 0, 0, 0, 0, 0,
    1.1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, "", "", 0, 0, 8, 4, 5, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0.005, 0.252506, 0.505, 0.005, 0, 0, 0, 0:0)
```

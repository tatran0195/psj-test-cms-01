---
id: FrontISTR_NonLinearStaticAnalysis
title: FrontISTR_NonLinearStaticAnalysis()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create FrontISTR job (Non Linear Static Analysis)

## Syntax

```psj
FrontISTR_NonLinearStatic(string strFilePath, cursor[] stepSequence, int nOpn, String jobName,
	int solverVersion, int iterCount, int iterCountSchwartz, int numKrylov,
	int numColor, double threhold, double sigma_diag, double sigma,
	int numStepThermal, int intialStepNumber, String resultFileNameThermal,
	String stepName, bool bSetAutoIncrement, [String name, double RS, int NS_MAX, int NS_SUM,
	int NS_COUNT, int N_S, double RL, int NL_MAX,
	int NL_SUM, int NL_COUNT, int N_L, double RC,int N_C] autoIncrement,
	bool bSetTimePoints, [String name, BOOL bIsGenerate, int type, double time,
	double eTime, double sTime, double interval], double converg,
	int substeps, int maxiter, double dtime, double etime,
	String outputInterval, String outputFileName, int numComputationNodes,
	int numProcessorPerComputationNodes, int refineLevel, int analysisType,
	int stepType, int methodMatrixSolver, int preconditioner, int outputIteration,
	int outputElapsedTime, int outputModelInfoToLogFile, int visualizeFileType,
	int parallelSetting, int algorithm, bool resultData, bool visualizeData,
	bool disp_result, bool disp_visual, bool velocity_result, bool velocity_visual,
	bool acceleration_result, bool acceleration_visual, bool nodal_strain_result,
	bool nodal_strain_visual, bool nodal_stress_result, bool nodal_stress_visual,
	bool nodal_mises_stress_result, bool nodal_mises_stress_visual,
	bool elemental_strain_result, bool elemental_stress_result,
	bool elemental_mises_stress_result, bool strain_integration_point_result,
	bool stress_integration_point_result, bool reaction_force_result,
	bool reaction_force_visual, bool contact_NForce_result,
	bool contact_NForce_visual, bool contact_Friction_result,
	bool contact_Friction_visual, bool contact_Relvel_result,
	bool contact_Relvel_visual, bool contact_State_result,
	bool contact_State_visual, bool contact_NTraction_result,
	bool contact_NTraction_visual, bool contact_FTraction_result,
	bool contact_FTraction_visual, bool default_step,
	int directExecution, String singleCoreExeFilePath,
	String singleCoreCalculationExeFile, String parallelCoreMPIPath,
	String parallelCoreMPIExeFile, String parallelCoreMPIOption,
	String parallelCoreFrontISTRExeFilePath, String parallelCoreAreaDivisionExeFile,
	String parallelCoreCalculationExeFile, bool bWriteGroup,
	bool bExportCntFile, bool bExportMshFile,
	//Eigen Analysis parameters
	String NumEigenValues, String Tolerance, String MaxIteration,
	//Frequency Response parameters
	int iMotionEquation, int iDynamicAnalysisType, String MinimumFreq,
	String MaximumFreq, String NumIncrement, String FreqObtainDisplacement,
	String StartTime, String EndTime, int iMassMatrix, int iDamping,
	String ParameterRm, String ParameterRk, String EigenvalueAnalysisLog,
	String StartMode, String EndMode, String OutputInterval,
	int iVisualizeType, String MonitoringNode, int iDisplacement,
	int iVelocity, int iAcceleration, int iComplexOutputType,
	String strRestartOutputInterval, String strRestartOutputFilename,
	bool bEnableRestartSettings, int iStepInveralOutputResult,
	int iStepInveralOutputVisual,
},

```

## Inputs

### `1. String`

File path

### `2. Cursor[]`

Step sequence

### `3. Int`

Operation number

### `4. String`

Job name

### `5. Int`

Solver version

### `6. Int`

Main iteration count

### `7. Int`

Schwartz iteration count

### `8. Int`

Number of Krylov vectors

### `9. Int`

Number of colors used in coloring

### `10. Double`

Convergence threshold

### `11. Double`

Diagonal sigma value

### `12. Double`

Sigma coefficient

### `13. Int`

Number of thermal steps

### `14. Int`

Initial step number

### `15. String`

Result file name for thermal analysis

### `16. String`

Step name

### `17. Bool`

Enable Auto Increment setting

### `18. String`

[AutoIncrement] Name

### `19. Double`

[AutoIncrement] RS

### `20. Int`

[AutoIncrement] NS_MAX

### `21. Int`

[AutoIncrement] NS_SUM

### `22. Int`

[AutoIncrement] NS_COUNT

### `23. Int`

[AutoIncrement] N_S

### `24. Double`

[AutoIncrement] RL

### `25. Int`

[AutoIncrement] NL_MAX

### `26. Int`

[AutoIncrement] NL_SUM

### `27. Int`

[AutoIncrement] NL_COUNT

### `28. Int`

[AutoIncrement] N_L

### `29. Double`

[AutoIncrement] RC

### `30. Int`

[AutoIncrement] N_C

### `31. Bool`

Enable Time Points setting

### `32. String`

[TimePoints] Name

### `33. Bool`

[TimePoints] Is generate enabled

### `34. Int`

[TimePoints] Type

### `35. Double`

[TimePoints] Time

### `36. Double`

[TimePoints] End time

### `37. Double`

[TimePoints] Start time

### `38. Double`

[TimePoints] Interval

### `39. Double`

Convergence criterion

### `40. Int`

Number of substeps

### `41. Int`

Maximum iterations

### `42. Double`

Delta time

### `43. Double`

End time

### `44. String`

Output interval

### `45. String`

Output file name

### `46. Int`

Number of computation nodes

### `47. Int`

Processors per node

### `48. Int`

Refinement level

### `49. Int`

Analysis type

### `50. Int`

Step type

### `51. Int`

Matrix solver method

### `52. Int`

Preconditioner type

### `53. Int`

Output iteration toggle

### `54. Int`

Output elapsed time toggle

### `55. Int`

Output model info to log file

### `56. Int`

Visualize file type

### `57. Int`

Parallel setting

### `58. Int`

Algorithm type

### `59. Bool`

Enable result data output

### `60. Bool`

Enable visualize data output

### `61. Bool`

Enable displacement result

### `62. Bool`

Enable displacement visualization

### `63. Bool`

Enable velocity result

### `64. Bool`

Enable velocity visualization

### `65. Bool`

Enable acceleration result

### `66. Bool`

Enable acceleration visualization

### `67. Bool`

Enable nodal strain result

### `68. Bool`

Enable nodal strain visualization

### `69. Bool`

Enable nodal stress result

### `70. Bool`

Enable nodal stress visualization

### `71. Bool`

Enable nodal Mises stress result

### `72. Bool`

Enable nodal Mises stress visualization

### `73. Bool`

Enable elemental strain result

### `74. Bool`

Enable elemental stress result

### `75. Bool`

Enable elemental Mises stress result

### `76. Bool`

Enable strain result at integration points

### `77. Bool`

Enable stress result at integration points

### `78. Bool`

Enable reaction force result

### `79. Bool`

Enable reaction force visualization

### `80. Bool`

Enable contact normal force result

### `81. Bool`

Enable contact normal force visualization

### `82. Bool`

Enable contact friction result

### `83. Bool`

Enable contact friction visualization

### `84. Bool`

Enable contact relative velocity result

### `85. Bool`

Enable contact relative velocity visualization

### `86. Bool`

Enable contact state result

### `87. Bool`

Enable contact state visualization

### `88. Bool`

Enable contact normal traction result

### `89. Bool`

Enable contact normal traction visualization

### `90. Bool`

Enable contact friction traction result

### `91. Bool`

Enable contact friction traction visualization

### `92. Bool`

Default step setting

### `93. Int`

Direct execution mode

### `94. String`

Single-core executable file path

### `95. String`

Single-core calculation executable file

### `96. String`

MPI path for parallel execution

### `97. String`

MPI executable file

### `98. String`

MPI execution options

### `99. String`

FrontISTR parallel executable path

### `100. String`

Parallel area division executable file

### `101. String`

Parallel calculation executable file

### `102. Bool`

Enable writing group

### `103. Bool`

Export CNT file

### `104. Bool`

Export MSH file

### `105. String`

Number of eigenvalues (Eigen Value Analysis)

### `106. String`

Tolerance (Eigen Value Analysis)

### `107. String`

Maximum iterations (Eigen Value Analysis)

### `108. Int`

Motion equation type

### `109. Int`

Dynamic Analysis type

### `110. String`

Minimum frequency

### `111. String`

Maximum frequency

### `112. String`

Number of increments

### `113. String`

Displacement Frequency Response

### `114. String`

Start time for Frequency Response

### `115. String`

End time for Frequency Response

### `116. Int`

Mass matrix setting

### `117. Int`

Damping setting

### `118. String`

Parameter Rm

### `119. String`

Parameter Rk

### `120. String`

Eigen Value Analysis log path

### `121. String`

Start mode

### `122. String`

End mode

### `123. String`

Frequency Response output interval

### `124. Int`

Visualization type

### `125. String`

Monitoring node name

### `126. Int`

Displacement result toggle

### `127. Int`

Velocity result toggle

### `128. Int`

Acceleration result toggle

### `129. Int`

Complex output type

### `130. String`

Restart output interval

### `131. String`

Restart output file name

### `132. Bool`

Enable restart settings

### `133. Int`

Step interval for result output

### `134. Int`

Step interval for visualization output

## Return Code

- "1": The function can be executed
- "FAILED": The function cannot be executed

## Sample Code

```psj
JPT.Exec('FrontISTR_NonLinearStatic("D:/", [], "Job_1", 3, 20000, 2, 0, 0, 1e-06, 1, 0, 0, 0, "", "STEP0", 1, ["AP1", 0.25, 10, 50, 10, 1, 1.25, 1, 1, 1, 5, 0.25, 5], 1, ["TP1", 0, 1, 1, 0, 0, 0], 1e-05, 10, 0, 0, 0, "", "", 0, 0, 0, 4, 0, 0, 0, 1, 1, 0, 3, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", "", "", "", "", "", "", "", 0, 0, 1, "10", "1.0e-8", "60", 0, 0, "", "", "", "", "0.0", "1.0", 0, 0, "0.0", "0.0", "0.log", "", "", "10", 1, "1", 0, 0, 0, 6357060, "1", "test", 1, 0, 0)')
```

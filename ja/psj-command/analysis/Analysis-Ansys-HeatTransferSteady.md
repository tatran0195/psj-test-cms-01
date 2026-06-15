---
id: Analysis-Ansys-HeadTransferSteady
title: Analysis.Ansys.HeadTransferSteady()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Export the Ansys Heat Transfer solver file
---

## Description

Export the Ansys Heat Transfer solver file

## Syntax

```psj
Analysis.Ansys.HeadTransferSteady(...)
```

Macro: [CreateAnsysJob](/docs/cli/5.1.0/macro/analysis/CreateAnsysJob)

Ribbon: <menuselection>Analysis &#187; Ansys &#187; HeadTransferSteady</menuselection>

## Inputs

### `strName`

- A _String_ specifying the name.
- This is a required input.

### `iJobdataAnatype`

- An _Integer_ specifying the job data analysis type.
- The default value is 0.

### `iJobdataSoltype`

- An _Integer_ specifying the job data solution type.
- The default value is 0.

### `strJobdataJobname`

- A _String_ specifying the job data job name.
- The default value is "Job1".

### `strJobdataJobdescription`

- A _String_ specifying the job data job description.
- The default value is "".

### `bBasicdataBoutputdisplacements`

- A _Boolean_ specifying the basic data output displacements.
- The default value is False.

### `bBasicdataBoutputreactionload`

- A _Boolean_ specifying the basic data output reaction oad.
- The default value is False.

### `bBasicdataBoutputstrain`

- A _Boolean_ specifying the basic data output strain.
- The default value is False.

### `bBasicdataBoutputstress`

- A _Boolean_ specifying the basic data output stress.
- The default value is False.

### `iBasicdataIanalysisopt`

- An _Integer_ specifying the basic data analysis option.
- The default value is 0.

### `bBasicdataBcalPressEffects`

- A _Boolean_ specifying the basic data caculation press effects.
- The default value is False.

### `dBasicdataFunitem`

- A _Double_ specifying the basic data unit temperature.
- The default value is 0.0.

### `dBasicdataFreftemp`

- A _Double_ specifying the basic data reference temperature.
- The default value is 0.0.

### `dBasicdataFendloadtime`

- A _Double_ specifying the basic data end load time.
- The default value is 0.0.

### `iBasicdataItimestep`

- An _Integer_ specifying the basic data time step.
- The default value is 0.

### `iBasicdataIstepchosen`

- An _Integer_ specifying the basic data step chosen.
- The default value is 0.

### `iBasicdataIsubstepnum`

- An _Integer_ specifying the basic data sub step number.
- The default value is 0.

### `iBasicdataImaxsubstep`

- An _Integer_ specifying the basic data maximum sub step.
- The default value is 0.

### `iBasicdataIminstepnum`

- An _Integer_ specifying the basic data minimum sub step.
- The default value is 0.

### `dBasicdataFtimestepsize`

- A _Double_ specifying the basic data time step size.
- The default value is 0.0.

### `dBasicdataFmintimestep`

- A _Double_ specifying the basic data minimum sub step.
- The default value is 0.0.

### `dBasicdataFmaxtimestep`

- A _Double_ specifying the basic data maximum sub step.
- The default value is 0.0.

### `iBasicdataIwritereslutfre`

- An _Integer_ specifying the basic data write result frequency.
- The default value is 1.

### `iBasicdataIn`

- An _Integer_ specifying the basic data in.
- The default value is 1.

### `bRunAPDL`

- A _Boolean_ specifying the run Ansys APDL.
- The default value is False.

### `bWriteResultDB`

- A _Boolean_ specifying the write result d .
- The default value is False.

### `dFEndFreq`

- A _Double_ specifying the end frequence.
- The default value is DFLT_DBL.

### `dFStartFreq`

- A _Double_ specifying the start frequence.
- The default value is DFLT_DBL.

### `iFulltransdataIsolutionoption`

- An _Integer_ specifying the full translation data solution option.
- The default value is 0.

### `dFulltransdataFpropchange`

- A _Double_ specifying the full translation data property change.
- The default value is 0.05.

### `iFulltransdataIpointnum`

- An _Integer_ specifying the full translation data point number.
- The default value is 64.

### `dFulltransdataFmintemp`

- A _Double_ specifying the full translation data minimum temperature.
- The default value is 0.0.

### `dFulltransdataFmaxtemp`

- A _Double_ specifying the full translation data maximum temperature.
- The default value is 0.0.

### `iFulltransdataIequationsolv`

- An _Integer_ specifying the full translation data equation solve.
- The default value is 0.

### `dFulltransdataFtollevel`

- A _Double_ specifying the full translation data tolerance level.
- The default value is 0.0.

### `dFulltransdataFmultiplier`

- A _Double_ specifying the full translation data multiplier.
- The default value is 0.0.

### `bFulltransdataBsignleprecision`

- A _Boolean_ specifying the full translation data single precision.
- The default value is False.

### `bFulltransdataBmemorysave`

- A _Boolean_ specifying the full translation data memory save.
- The default value is False.

### `dFulltransdataFtempdiff`

- A _Double_ specifying the full translation data temperature difference.
- The default value is 1.1.

### `dHarmonicdataFstartfreq`

- A _Double_ specifying the harmonic data start frequence.
- The default value is 0.0.

### `dHarmonicdataFendfreq`

- A _Double_ specifying the harmonic data end frequence.
- The default value is 1.0.

### `iHarmonicdataNsubsteps`

- An _Integer_ specifying the harmonic data sub steps.
- The default value is 0.

### `dHarmonicdataFalphad`

- A _Double_ specifying the harmonic data alpha.
- The default value is 0.0.

### `dHarmonicdataFbetad`

- A _Double_ specifying the harmonic data beta.
- The default value is 0.0.

### `dHarmonicdataFdmprat`

- A _Double_ specifying the harmonic data DMP ratio.
- The default value is 0.0.

### `bHarmonicdataBoutputdisplacements`

- A _Boolean_ specifying the harmonic data output displacements.
- The default value is False.

### `bHarmonicdataBoutputstrain`

- A _Boolean_ specifying the harmonic data output strain.
- The default value is False.

### `bHarmonicdataBoutputstress`

- A _Boolean_ specifying the harmonic data output stress.
- The default value is False.

### `iLCId`

- An _Integer_ specifying the LC ID.
- The default value is 0.

### `iModeShape`

- An _Integer_ specifying the mode shape.
- The default value is 0.

### `iModaldataImodemethod`

- An _Integer_ specifying the modal data mode method.
- The default value is 0.

### `iModaldataIextractnum`

- An _Integer_ specifying the modal data extract number.
- The default value is 1.

### `bModaldataBexpandshape`

- A _Boolean_ specifying the modal data expand shape.
- The default value is True.

### `iModaldataIexpandnum`

- An _Integer_ specifying the modal data expand number.
- The default value is 0.

### `bModaldataBuseapprox`

- A _Boolean_ specifying the modal data use approximately.
- The default value is False.

### `bModaldataBinclprsseff`

- A _Boolean_ specifying the modal data include prsseff.
- The default value is False.

### `bModaldataBmemorysave`

- A _Boolean_ specifying the modal data memory save.
- The default value is False.

### `bModaldataBrsvec`

- A _Boolean_ specifying the modal data resource vector.
- The default value is False.

### `bModaldataBoutputdisplacements`

- A _Boolean_ specifying the modal data output displacements.
- The default value is False.

### `bModaldataBoutputstrain`

- A _Boolean_ specifying the modal data output strain.
- The default value is False.

### `bModaldataBoutputstress`

- A _Boolean_ specifying the modal data output stress.
- The default value is False.

### `iReduceddataIprintnum`

- An _Integer_ specifying the reduceddata print number.
- The default value is 0.

### `bSsdataBmemorysave`

- A _Boolean_ specifying the ssdata memory save.
- The default value is False.

### `bSsdataBoutputheatflux`

- A _Boolean_ specifying the ssdata output heat flux.
- The default value is False.

### `bSsdataBoutputtemperature`

- A _Boolean_ specifying the ssdata output temperature.
- The default value is False.

### `bSsdataBpivotscheck`

- A _Boolean_ specifying the ssdata pivots check.
- The default value is True.

### `bSsdataBsignleprecision`

- A _Boolean_ specifying the ssdata single precision.
- The default value is False.

### `dSsdataFmultiplier`

- A _Double_ specifying the ssdata multiplier.
- The default value is 0.0.

### `dSsdataFtempdiff`

- A _Double_ specifying the ssdata temperature difference.
- The default value is 0.0.

### `dSsdataFtollevel`

- A _Double_ specifying the ssdata tolerance level.
- The default value is 0.0.

### `iSsdataIadaptivedes`

- An _Integer_ specifying the ssdata adaptive destination.
- The default value is 0.

### `iSsdataIequationsolv`

- An _Integer_ specifying the ssdata equation solve.
- The default value is 0.

### `iSsdataInpoption`

- An _Integer_ specifying the ssdata inpoption.
- The default value is 0.

### `strAnsysVersion`

- A _String_ specifying the ansys version.
- The default value is "".

### `strCommandLineOption`

- A _String_ specifying the command line option.
- The default value is "".

### `bOutputSOLVE`

- A _Boolean_ specifying the output solve.
- The default value is False.

### `iSubspacedataIrigidmode`

- An _Integer_ specifying the subspace data rigid mode.
- The default value is 0.

### `iSubspacedataIworksize`

- An _Integer_ specifying the subspace data work size.
- The default value is 8.

### `iSubspacedataInpadnum`

- An _Integer_ specifying the subspace data inpad number.
- The default value is 4.

### `iSubspacedataIblocknum`

- An _Integer_ specifying the subspace data block number.
- The default value is 5.

### `iSubspacedataImaxiteratcnt`

- An _Integer_ specifying the subspace data maximum iterator number.
- The default value is 0.

### `iSubspacedataIminnshift`

- An _Integer_ specifying the subspace data iminnshift.
- The default value is 0.

### `iSubspacedataIseqcheck`

- An _Integer_ specifying the subspace data iseqcheck.
- The default value is 0.

### `bTransientdataBtraneffect`

- A _Boolean_ specifying the transient data effection.
- The default value is True.

### `iTransientdataIloadingtype`

- An _Integer_ specifying the transient data loading type.
- The default value is 0.

### `dTransientdataFmassmatrixmult`

- A _Double_ specifying the transient data mass matrix multiple.
- The default value is 0.0.

### `dTransientdataFstiffmatrixmult`

- A _Double_ specifying the transient data stiff matrix multiple.
- The default value is 0.0.

### `bTransientdataBmidstep`

- A _Boolean_ specifying the transient data midle step.
- The default value is False.

### `dTransientdataFtolerancebisection`

- A _Double_ specifying the transient data tolerance binary section.
- The default value is 0.0.

### `dTransientdataFtolerancetimestep`

- A _Double_ specifying the transient data tolerance time step.
- The default value is 0.0.

### `iTransientdataItimeinteralgor`

- An _Integer_ specifying the transient data time inter algorithm.
- The default value is 0.

### `iTransientdataItimeinter`

- An _Integer_ specifying the transient data time inter.
- The default value is 0.

### `dTransientdataFgamma`

- A _Double_ specifying the transient data gamma.
- The default value is 0.005.

### `dTransientdataFalpha`

- A _Double_ specifying the transient data alpha.
- The default value is 0.25250625.

### `dTransientdataFdelta`

- A _Double_ specifying the transient data delta.
- The default value is 0.505.

### `dTransientdataFalphaf`

- A _Double_ specifying the transient data alpha f.
- The default value is 0.005.

### `dTransientdataFalpham`

- A _Double_ specifying the transient data alpha m.
- The default value is 0.0.

### `bTransientdataBoutputtemperature`

- A _Boolean_ specifying the transient data output temperature.
- The default value is False.

### `bTransientdataBoutputheatflux`

- A _Boolean_ specifying the transient data output heat flux.
- The default value is False.

### `crEdit`

- A _Cursor_ specifying the edit.
- The default value is None.

## Return Code

A String of 1 if success, or 0 if fail.

---
id: Analysis-ADVC-HeatTransfer
title: Analysis.ADVC.HeatTransfer()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Create and export the ADVC (*.adx) file for the Heat Transfer analysis
---

## Description

Create and export the ADVC (\*.adx) file for the Heat Transfer analysis.

## Syntax

```psj
Analysis.ADVC.HeatTransfer(...)
```

Ribbon: <menuselection>Analysis &#187; ADVC &#187; Heat Transfer</menuselection>

## Inputs

### `strName`

- A _String_ specifying the job name of ADVC analysis. This name would be the name of analysis job in Assembly Tree and the name of ADX file after exported.
- This is a required input.

### `strDescription`

- A _String_ specifying the description for ADVC analysis job. The description would write in ADX file, where contents will be written below ModelInfo.
- The default value is "".

### `crlProcessSequence`

- A _List of Cursor_ specifying the ADVC process sequences. This argument controls the Process solution type and its setting information depended on solution type.
- The default value is [].

### `crlElemLocationGroup`

- A _List of Cursor_ specifying the element locations. The model contains Element group such as 3D Element, 2D Element, 1D Element to use this argument.
- The default value is [].

### `crlNodeLocationGroup`

- A _List of Cursor_ specifying the node locations. The model contains Node group to use this argument.
- The default value is [].

### `bWriteGroup`

- A _Boolean_ specifying whether to write group which output a selected group of Faces, Elements, Nodes as Surface Segment, Element Set and Node set respectively.
    - If _bWriteGroup=True_, the ADX file would contained group information such as Part, Face, Element(3D, 2D, 1D), Node,...
- The default value is _False_.

### `crEdit`

- A _Cursor_ specifying the existing ADVC job in Assembly Tree. If this argument is not _None_, the specified ADVC job will be modified. Otherwise, a new job will be created.
- The default value is _None_.

### `bResultReference`

- A _Boolean_ specifying whether to use the settings of Result Reference.
    - If _bResultReference=True_, the settings of Result Reference arguments will be valid to use.
- The default value is _False_.

### `iSeparateFile`

- An _Integer_ specifying the method to separate file. This option allows to separate information into many exported ADX files by the specified type.
    - If _iSeparateFile=0_, this option would export only 1 ADX file contains all information of all bodies/parts in the model (ModelInfo, Unit, Geometry, LBCs, Process Sequence,...).
    - If _iSeparateFile=1_, this option would export 2 ADX files, which the first ADX file has same name as analysis Job will contain general information (such as ModelInfo, Unit, LBCs, Job name, Process Sequence, other settings of ADVC Structure analysis). When the last one ADX file which has suffix name "\_model", contains Geometry information (such as Node, Part, Element,...).
    - If _iSeparateFile=2_, this option would export ADX files, which each body/part in model would be written individually Geometry information, Group in model would be written in another file, while other information would be written in the ADX file has same name as analysis Job.
    - If _iSeparateFile=3_, this option would export ADX file that write information of selected part/body. If selection does not have at least a specific body/part, Jupiter would write all bodies/part (same option as _iSeparateFile=0_).
    - If _iSeparateFile=4_, this option would export 1 ADX file contains LBCs information of the chosen LBCs.
- The default value is 0.

### `bExportRelatedAllLBCs`

- A _Boolean_ specifying whether to export all related Load Boundary Condition. This argument is to be used when _iSeparateFile=3_.
    - If _True_, this option would export ADX file contains related information to LBCs such as Contact, Connection RBE, Bolt Pretension,...
- The default value is _False_.

### `bUseEntityName`

- A _Boolean_ specifying whether to use entity name in exported file or not.
    - If _True_, this option would export ADX file that write Entity name to Geometry information such as Part, Face,...
    - If _False_, this option would export ADX file without writing Entities name to Geometry information.
- The default value is _False_.

### `crlTargets`

- A _List of Cursor_ specifying the list of targets. The target could be Part or LBCs item.
- The default value is [].

### `iLoadType`

- An _Integer_ specifying the load type used for analysis.
    - If _iLoadType=0_: Load Case, which is a group of specific Loads, BCs applies on the model. The model could apply many Load Cases which may have same setting of LBCs. Exporting ADX file would write all Load Cases.
    - If _iLoadType=1_: Load, which will export ADX file stores all Loads, BCs as a 1 Load case only.
- The default value is 1.

### `bSameOutputOnAllProcess`

- A _Boolean_ specifying whether to use the same output request for all processes.
    - If _True_, set same output request (Displacement, Stress, Strain,...) for all defined processes.
    - If _False_, set output request which will base on user's desired result for each process.
- The default value is _True_.

### `bDeleteFloatingNode`

- A _Boolean_ specifying whether to delete floating nodes or not.
    - If _True_, the exported ADX file would not write the floating nodes information.
    - If _False_, the exported ADX file would write the floating nodes information.
- The default value is _True_.

### `bBC`

- A _Boolean_ specifying whether to separate boundary condition. This argument is to be used when _iSeparateFile=3_.
    - If _True_, the exported ADX file would write LBCs information.
- The default value is _True_.

### `bCheckBCDuplicate`

- A _Boolean_ specifying whether to check if duplicate the boundary conditions.
    - If _True_, to check LBCs duplication when export ADX file.
- The default value is _False_.

### `bAutoAssignDummyProp`

- A _Boolean_ specifying whether to automatically assign dummy property for dummy entities. This argument is to be used when the model has that unassigned property.
    - If _True_, the model would be exported with dummy property for the Part that does not have property. The others Part (which already assigned property) will export with its property setting.
    - If _False_, the model will export ADX file in case of the model has all property in all Parts, but if there is one Part that does not have property in the model, this option will not export file.
- The default value is _False_.

### `crDummyPropMaterial`

- A _Cursor_ specifying the dummy property material for automatically assigning dummy property when export ADX file.
- The default value is _None_.

### `bReferenceRestartData`

- A _Boolean_ specifying whether to use the Reference Restart Data.
    - If _True_, the settings of Reference Restart Data arguments will be valid to use.
    - If _False_, the settings of Reference Restart Data arguments will be ignored even though User has set value or not.
- The default value is _False_.

### `strReferenceRestartDataPath`

- A _String_ specifying the path of Reference Restart Data.
- The default value is "".

### `iNumberProcesses`

- An _Integer_ specifying the number of processes for Reference Restart Data.
- The default value is DFLT_INT.

### `iNumberSteps`

- An _Integer_ specifying the number steps of Reference Restart Data.
- The default value is DFLT_INT.

### `iCoordinateType`

- An _Integer_ specifying the coordinate type of Reference Restart Data.
    - If _iCoordinateType=0_: Initial type
    - If _iCoordinateType=1_: Deformation type
- The default value is 0.

### `iUpdateContactSearch`

- An _Integer_ specifying whether to update contact search for Reference Restart Data.
    - If _iUpdateContactSearch=0_: No
    - If _iUpdateContactSearch=1_: Yes
- The default value is 1.

### `listLoadNodeContact`

- A _List of LOAD_NODE_CONTACT_ specifying the list of load node contacts.
- The default value is [].

### `iHeatConvection`

- An _Integer_ specifying the Heat Convection type. There are 2 types of Heat Convection:
    - If _iHeatConvection=0_: Direct
    - If _iHeatConvection=1_: Indirect
- The default value is 1.

### `strPath`

- A _String_ specifying the exporting path for ADX file.
- The default value is "".

### `iNumType`

- An _Integer_ specifying the numeric format type. This argument would allow numeric setting type of adx file.
    - If _iNumType=0_: Real Type - The numerical values in real number format (e.g 123.456).
    - If _iNumType=1_: Power Type - The numerical values in exponential/scientific format (e.g 1.234E-005).
- The default value is 0.

### `iUiWidth`

- An _Integer_ specifying the limitation number of digits before the point of the number. This option allows to control number digits of value in exported ADX file.
- The default value is 10.

### `iUiPrecision`

- An _Integer_ specifying the limitation number of digits after the point of the number. This option allows to control number digits of value in exported ADX file.
- The default value is 1.

### `bExportGeometryID`

- A _Boolean_ specifying whether to write geometry ID number.
- The default value is _False_.

### `bSeparatePartInfoFile`

- A _Boolean_ specifying whether to separate Part Information Files.
- The default value is _False_.

### `strADVCTemplateFilePath`

- A _String_ specifying the path of ADVC Template File.
- The default value is "".

### `bOutputDefinition`

- A _Boolean_ specifying to be enable/disable the option that sets the output request.
- The default value is _True_.

## Return Code

A _Cursor_ specifying the created jobs.

---
id: MappingHeatFlux
title: MappingHeatFlux()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create mapping pressure

## Syntax

```psj
MappingHeatFlux(string strName, cursor[] taTarget, int pos, int iViewCp, int iCp,
    int iSrcType, int iMappedCpIndexArr0, double dScaleFactor, cursor[] crTrans,
    cursor[] crRotate, double dCoordScale, double dSearchTol, int iUnit,
    string strPath, cursor crEdit, int iMappingMethod, int submodelBCMappingType,
    int iMappingFromStepNo, bool bSetADVCFile, string strADVCResultFile, bool bSetDetATol,
    double dDetATol, bool bSetElementSet, string strElementSet)
```

## Inputs

### `1. String`

Mapping heat flux name

### `2. Cursor[]`

Target entities cursor

### `3. Int`

Mapping positon

- 0: Surface node
- 1: Solid node
- 2:surface element
- 3: Solid element

### `4. Int`

View Heat flux

### `5. Int`

N/A

### `6. Int`

Source data type

- 0: Fluent
- 1: StarCD

### `7. Int`

Heat flux data index in file

### `8. Double`

Scale factor value

### `9. Cursor[]`

Translation X Y Z direction value

### `10. Cursor[]`

Rotation X Y Z direction value

### `11. Double`

Coordinate scale value

### `12. Double`

Search range tolerance

### `13. Int`

Input unit type

- 0: MW/mm^2
- 1: W/m^2
- 2: MiuW/mm^2
- 3: kcal/mm^2\*h
- 4: Lbf/ft\*s
- 5: Lbf/in\*s

### `14. String`

directory path name

### `15. Cursor`

Edit cursor

### `16. Int`

Mapping method

### `17. Int`

Submodel IBC mapping type

### `18. Int`

Mapping from step

### `19. Bool`

Set ADVC file bool flag True = 1, False = 0

### `20. String`

N/A ADVC result file

### `21. Bool`

N/A Set tolerance bool flag True = 1, False = 0

### `22. Double`

N/A set tolerance

### `23. Bool`

Set element

### `24. String`

Element set

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
MappingHeatFlux("MappingHeatFlux1", [3:1], 2, 0, 1, 0, 0, 1.5, [4, 5, 6], [1, 2, 3], 0.5,
    0.003, 0, "D:/Fluent.dat", 0:0, 1, 0, 0, 0, "", 0, 1e-08, 0, "all")
```

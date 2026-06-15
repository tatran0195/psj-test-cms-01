---
id: Calculation-PeakSearchUpdateViewSetting
title: Calculation.PeakSearchUpdateViewSetting()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
description: Update the view setting of peak search
---

## Description

Update the view setting of peak search.

## Syntax

```psj
Calculation.PeakSearchUpdateViewSetting(...)
```

Macro:

Ribbon: <menuselection>Calculation &#187; PeakSearchUpdateViewSetting</menuselection>

## Inputs

### `bRangeMax`

- A _Boolean_ specifying whether to display only the notes that are less or equal to the specified value.
- The default value is _False_.

### `bRangeMin`

- A _Boolean_ specifying whether to display only the notes that are greater or equal to the specified value.
- The default value is _False_.

### `bFlagVisibleGroupOnly`

- A _Boolean_ specifying whether to display only peaks on the currently visible part.
- The default value is _False_.

### `bFlagVisibleAreaOnly`

- A _Boolean_ specifying whether to display only peaks within the visible region shown in the result window. Peaks outside the region or on the reverse side are hidden.
- The default value is _False_.

### `bFlagMaxPrincipalStress`

- A _Boolean_ specifying whether to display the maximum principal stress value on the notes.
- The default value is _False_.

### `bFlagMinPrincipalStress`

- A _Boolean_ specifying whether to display the minimum principal stress value on the notes.
- The default value is _False_.

### `bVectorMaxPrincipalStress`

- A _Boolean_ specifying whether to display the maximum principal stress vector.
- The default value is _False_.

### `bVectorMinPrincipalStress`

- A _Boolean_ specifying whether to display the minimum principal stress vector.
- The default value is _False_.

### `bDisplayPeakNum`

- A _Boolean_ specifying whether to display the number of peaks.
- The default value is _False_.

### `bDisplaySearchOptions`

- A _Boolean_ specifying whether to display the parameters used.
- The default value is _False_.

### `bFlagColor`

- A _Boolean_ specifying whether to change the note color base on the condition.
- The default value is _False_.

### `bRefreshFlag`

- A _Boolean_ specifying whether to refresh the notes.
- The default value is _False_.

### `dRangeMax`

- A _Double_ specifying the maximum range value.
- The default value is 0.0.

### `dRangeMin`

- A _Double_ specifying the minimum range value.
- The default value is 0.0.

### `iColorType`

- An _Integer_ specifying the method to display the note color.
    - 0: Singular Points
    - 1: Principal Stress
    - 2: User Input
- The default value is 0.

### `colSingular`

- A _Class of [COLOR_SINGULAR](/docs/cli/5.1.0/data-type/psj-command/parameter-types/COLOR_SINGULAR)_ specifying the color for each load point, constraint point, rigid element connection point, and material boundary point.
- The default value is _COLOR_SINGULAR_.

### `colPrincipal`

- A _Class of [COLOR_PRINCIPAL](/docs/cli/5.1.0/data-type/psj-command/parameter-types/COLOR_PRINCIPAL)_ specifying note color based on the maximum/minimum principal stress relationship.
- The default value is _COLOR_PRINCIPAL_.

### `colUser`

- A _Class of [COLOR_USER](/docs/cli/5.1.0/data-type/psj-command/parameter-types/COLOR_USER)_ specifying the user input color.
- The default value is _COLOR_USER_.

## Return Code

- A _Boolean_ specifying whether the process is executed successfully or not:
    - _True_: The process is executed successfully.
    - _False_: Cannot execute the function.

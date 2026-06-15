---
id: AdvcStaticProcess
title: AdvcStaticProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC static process.

All the parameters except for the setting and process indications are the same among there settings.

## Syntax

```psj
AdvcStaticProcess(string m_strName,int m_iGeomNonlinear,int fixed_or_auto,
    int num_of_inc,double max_time,double max_dt,double min_dt,int load_type,
    int output_last,int output_interval,int restart_last,int restart_interval,
    double output_time_interval,double restart_time_interval,bool m_bConvergence,
    double cg_tol,double cg_nr_tol,double cg_disp_tol,double cg_nr_disp_tol,
    double cg_disp_limit_tol,double cg_total_disp_limit_tol,double newton_tol,
    double newton_disp_tol,double newton_disp_limit_tol,double newton_total_disp_limit_tol,
    int cgloop_max,int newton_max,double ht_nl_loop_tol,int ht_nl_loop_max,bool m_bContact,
    int subdivide_mode,int contactloop_max,int internal_contactloop_max,
    double separation_tol,double relative_separation_tol,double penetration_tol,
    double relative_penetration_tol,int maxchp,int friction_onset,double stick_slip_tol,
    double friction_tol,int estimate_impact_time,bool m_bAutoIncrement,
    int newton_residue_incr_max,int begin_residue_incr_check,int begin_logarithmic_rate_check,
    double cut_back_factor_for_divergence,double cut_back_factor_for_too_slow_convergence,
    double cut_back_factor_for_excessive_distortion,int incr_enlarge_newton_max,
    int incr_enlarge_suppress,double increase_factor_for_static,
    double increase_factor_for_dynamic,double increase_factor_for_creep,
    double increase_factor_for_rdnlk,double temperature_incr_max,int use_temperature_incr_max,
    double half_step_tol,double stra_tol,double creep_stra_tol,double rdnlk_stra_tol,
    double m_dStabilizationFactor,cursor m_crEdit,list m_LoadNodeList,list m_LoadCaseNodeList,
    list m_LoadNodeContactList,list m_OutputParamList,int m_iRefType,string m_strRefPath,
    list m_ReferenceResultList)
```

## Inputs

### `1. String`

name of ADVC static process

### `2. Int`

geom nonlinear[0:blank; 1:Total Langrange; 2:Updated Langrange;]

### `3. Int`

time[0:Auto; 1:Fixed]

### `4. Int`

number of increment

### `5. Double`

max time

### `6. Double`

max dt

### `7. Double`

min dt

### `8. Int`

load type[-1:default; 0:Step; 1:Ramp]

### `9. Int`

output last[-1:default; 0:No; 1:Yes]

### `10. Int`

output interval

### `11. Int`

restart last[-1:default; 0:No; 1:Yes]

### `12. Int`

restart interval

### `13. Double`

output time interval

### `14. Double`

restart time interval

### `15. Bool`

if convergence parameter defined

### `16. Double`

cg_tol

### `17. Double`

cg_nr_tol

### `18. Double`

cg_disp_tol

### `19. Double`

cg_nr_disp_tol

### `20. Double`

cg_disp_limit_tol

### `21. Double`

cg_total_disp_limit_tol

### `22. Double`

newton_tol

### `23. Double`

newton_disp_tol

### `24. Double`

newton_disp_limit_tol

### `25. Double`

newton_total_disp_limit_tol

### `26. Int`

cgloop_max

### `27. Int`

newton_max

### `28. Double`

ht_nl_loop_tol

### `29. Int`

ht_nl_loop_max

### `30. Bool`

if contact parameter defined

### `31. Int`

subdivide_mode[-1:default; 0:No; 1:Yes]

### `32. Int`

contactloop_max

### `33. Int`

internal_contactloop_max

### `34. Double`

separation_tol

### `35. Double`

relative_separation_tol

### `36. Double`

penetration_tol

### `37. Double`

relative_penetration_tol

### `38. Int`

maxchp

### `39. Int`

friction_onset[0:delayd; 1:immediate]

### `40. Double`

stick_slip_tol

### `41. Double`

friction_tol

### `42. Int`

estimate_impact_time[-1:default; 0:No; 1:Yes]

### `43. Bool`

if auto increment parameter defined

### `44. Int`

newton_residue_incr_max

### `45. Int`

begin_residue_incr_check

### `46. Int`

begin_logarithmic_rate_check

### `47. Double`

cut_back_factor_for_divergence

### `48. Double`

cut_back_factor_for_too_slow_convergence

### `49. Double`

cut_back_factor_for_excessive_distortion

### `50. Int`

incr_enlarge_newton_max

### `51. Int`

incr_enlarge_suppress

### `52. Double`

increase_factor_for_static

### `53. Double`

increase_factor_for_dynamic

### `54. Double`

increase_factor_for_creep

### `55. Double`

increase_factor_for_rdnlk

### `56. Double`

temperature_incr_max

### `57. Int`

use_temperature_incr_max[-1:default; 0:No; 1:Yes]

### `58. Double`

half_step_tol

### `59. Double`

stra_tol

### `60. Double`

creep_stra_tol

### `61. Double`

rdnlk_stra_tol

### `63. Double`

stabilization factor

### `64. Cursor`

edit cursor

### `65. List`

status of Loads

### `66. List`

status of Load Cases

### `67. List`

status and other data of Contacts

### `68. List`

output parameters

### `69. Int`

reference result type[0:Temperature Load; 1:Stress]

### `70. String`

path of reference result

### `71. List`

data of reference result

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
JPT.Exec('AdvcStaticProcess("ADVC_DEFAULT_PROCESS", 0, 0, 1, 1, 1, 1e-05, -1, -1, 2147483647, -1, 2147483647, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 2147483647, 2147483647, 1.79769e+308, 2147483647, 0, -1, 2147483647, 2147483647, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 2147483647, 0, 1.79769e+308, 1.79769e+308, 0, 0, 2147483647, 2147483647, 2147483647, 1.79769e+308, 1.79769e+308, 1.79769e+308, 2147483647, 2147483647, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0:0, [(29:1, 0:0, 1), (29:2, 0:0, 1), (37:1, 0:0, 1)], [], [], [], -1, "", [], "", 2147483647)')
```

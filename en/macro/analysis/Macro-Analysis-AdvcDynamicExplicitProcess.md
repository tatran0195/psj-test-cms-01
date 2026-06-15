---
id: AdvcDynamicExplicitProcess
title: AdvcDynamicExplicitProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC dynamic explicit process

## Syntax

```psj
AdvcDynamicExplicitProcess(string m_strName,int m_iGeomNonlinear,int fixed_or_auto,
    int num_of_inc,double max_time,double max_dt,double min_dt,int load_type,int output_last,
    int output_interval,int restart_last,int restart_interval,double output_time_interval,
    double restart_time_interval,bool m_bConvergence,double cg_tol,double cg_nr_tol,
    double cg_disp_tol,double cg_nr_disp_tol,double cg_disp_limit_tol,
    double cg_total_disp_limit_tol,double newton_tol,double newton_disp_tol,
    double newton_disp_limit_tol,double newton_total_disp_limit_tol,int cgloop_max,
    int newton_max,double ht_nl_loop_tol,int ht_nl_loop_max,bool m_bContact,
    int subdivide_mode,int contactloop_max,int internal_contactloop_max,
    double separation_tol,double relative_separation_tol,double penetration_tol,
    double relative_penetration_tol,int maxchp,int friction_onset,double stick_slip_tol,
    double friction_tol,int estimate_impact_time,bool m_bAutoIncrement,int newton_residue_incr_max,
    int begin_residue_incr_check,int begin_logarithmic_rate_check,
    double cut_back_factor_for_divergence,double cut_back_factor_for_too_slow_convergence,
    double cut_back_factor_for_excessive_distortion,int incr_enlarge_newton_max,
    int incr_enlarge_suppress,double increase_factor_for_static,double increase_factor_for_dynamic,
    double increase_factor_for_creep,double increase_factor_for_rdnlk,double temperature_incr_max,
    int use_temperature_incr_max,double half_step_tol,double stra_tol,double creep_stra_tol,
    double rdnlk_stra_tol,int iLogMessageInterval,int iLinearApproximation,double dBulkViscosityCoef1,
    double dBulkViscosityCoef2,double dMassScalingdt,double dDtScaleFactor,double dPenaltyScaleFactor,
    int iContactSearchInterval,Cursor m_crEdit,list m_LoadNodeList,list m_LoadCaseNodeList,
    list m_LoadNodeContactList,list m_OutputParamList,int m_iRefType,string m_strRefPath,
    list m_ReferenceResultList)
```

## Inputs

### `1. String`

Name of ADVC dynamic explicit process

### `2. Int`

Geom nonlinear[0:blank; 1:Total Lagrange; 2:Updated Lagrange]

### `3. Int`

Time[0:Auto; 1:Fixed]

### `4. Int`

Number of increment

### `5. Double`

Max time

### `6. Double`

Max dt

### `7. Double`

Min dt

### `8. Int`

Load type[-1:default; 0:Step; 1:Ramp]

### `9. Int`

Output last[-1:default; 0:No; 1:Yes]

### `10. Int`

Output interval

### `11. Int`

Restart last[-1:default; 0:No; 1:Yes]

### `12. Int`

Restart interval

### `13. Double`

Output time interval

### `14. Double`

Restart time interval

### `15. Bool`

If convergence parameter defined

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

If auto increment parameter defined

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

### `62. Int`

Log Message Interval

### `63. Int`

Linear approximation[-1:default; 0:No; 1:Yes]

### `64. Double`

Bulk Viscosity Coef1

### `65. Double`

Bulk Viscosity Coef2

### `66. Double`

Mass Scaling dt

### `67. Double`

Dt Scale Factor

### `68. Double`

Penalty Scale Factor

### `69. Int`

Contact Search Interval

### `70. Cursor`

Edit cursor

### `71. List`

Status of Loads

### `72. List`

Status of Load Cases

### `73. List`

Status and other data of Contacts

### `74. List`

Output parameters

### `75. Int`

Reference result type[0:Temperature Load; 1:Stress]

### `76. String`

Path of reference result

### `77. List`

Data of reference result

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcDynamicExplicitProcess("Test",1,1,1,0.001,0.001,0.001,1,1,1,1,1,0.001,0.001,1,
    0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,1,1,0.001,1,1,1,1,
    1,0.001,0.001,0.001,0.001,1,1,0.001,0.001,1,1,1,1,1,0.001,0.001,0.001,1,1,0.001,
    0.001,0.001,0.001,0.001,1,0.001,0.001,0.001,0.001,1,1,0.001,0.001,0.001,0.001,
    0.001,1,1:11,,,,,1,"Test",)
```

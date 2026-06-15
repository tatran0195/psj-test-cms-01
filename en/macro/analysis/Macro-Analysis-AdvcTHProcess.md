---
id: AdvcTHProcess
title: AdvcTHProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

Create ADVC heat transfer transient process

## Syntax

```psj
AdvcTHProcess(string m_strName,int end_type,double max_time,double steady_rate,
    int fixed_or_auto,double max_change,double init_dt,int define_max_dt,double max_dt,
    int define_min_dt,double min_dt,double fixed_dt,int output_last,int output_interval,
    int restart_last,int restart_interval,double output_time_interval,
    double restart_time_interval,int output_init,int list_output_interval,
    bool m_bConvergence,double cg_tol,double cg_nr_tol,double cg_disp_tol,
    double cg_nr_disp_tol,double cg_disp_limit_tol,double cg_total_disp_limit_tol,
    double newton_tol,double newton_disp_tol,double newton_disp_limit_tol,
    double newton_total_disp_limit_tol,int cgloop_max,int newton_max,
    double ht_nl_loop_tol,int ht_nl_loop_max,Cursor m_crEdit,list m_LoadNodeList,
    list m_LoadCaseNodeList,list m_LoadNodeContactList,list m_OutputParamList)
```

## Inputs

### `1. String`

name of ADVC heat transfer transient process

### `2. Int`

end type[1:max time; 2:steady rate; 3:both]

### `3. Double`

max time

### `4. Double`

steady rate

### `5. Int`

fixed or auto type[0:auto; 1:fixed]

### `6. Double`

max change temp

### `7. Double`

init dt time

### `8. Int`

if define max dt[0:false; 1:true]

### `9. Double`

max dt time

### `10. Int`

if define min dt[0:false; 1:true]

### `11. Double`

min dt time

### `12. Double`

fixed dt time

### `13. Int`

output last[-1:default; 0:No; 1:Yes]

### `14. Int`

output interval

### `15. Int`

restart last[-1:default; 0:No; 1:Yes]

### `16. Int`

restart interval

### `17. Double`

output time interval

### `18. Double`

restart time interval

### `19. Int`

output initial result[-1:default; 0:No; 1:Yes]

### `20. Int`

list output interval

### `21. Bool`

if convergence parameter defined

### `22. Double`

cg_tol

### `23. Double`

cg_nr_tol

### `24. Double`

cg_disp_tol

### `25. Double`

cg_nr_disp_tol

### `26. Double`

cg_disp_limit_tol

### `27. Double`

cg_total_disp_limit_tol

### `28. Double`

newton_tol

### `29. Double`

newton_disp_tol

### `30. Double`

newton_disp_limit_tol

### `31. Double`

newton_total_disp_limit_tol

### `32. Int`

cgloop_max

### `33. Int`

newton_max

### `34. Double`

ht_nl_loop_tol

### `35. Int`

ht_nl_loop_max

### `36. Cursor`

edit cursor

### `137. List`

status of Loads

### `38. List`

status of Load Cases

### `39. List`

status and other data of Contacts

### `40. List`

output parameters

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcTHProcess("Test",1,0.001,0.001,1,0.001,0.001,1,0.001,1,0.001,0.001,1,1,1,1,0.001,0.001,
    1,1,1,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,1,1,0.001,1,1:11,,,,)
```

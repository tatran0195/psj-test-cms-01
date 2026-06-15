---
id: AdvcSSHProcess
title: AdvcSSHProcess()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

create advc heat transfer steady state process

## Syntax

```psj
AdvcSSHProcess(String m_strName,int end_type,double max_time,int fixed_or_auto,
    double max_change,double init_dt,int define_max_dt,double max_dt,
    int define_min_dt,double min_dt,double fixed_dt,int output_last,
    int output_interval,int restart_last,int restart_interval,
    double output_time_interval,double restart_time_interval,int output_init,
    int list_output_interval,BOOL m_bConvergence,double cg_tol,double cg_nr_tol,
    double cg_disp_tol,double cg_nr_disp_tol,double cg_disp_limit_tol,
    double cg_total_disp_limit_tol,double newton_tol,double newton_disp_tol,
    double newton_disp_limit_tol,double newton_total_disp_limit_tol,
    int cgloop_max,int newton_max,double ht_nl_loop_tol,int ht_nl_loop_max,
    cursor m_crEdit,list m_LoadNodeList,list m_LoadCaseNodeList,
    list m_LoadNodeContactList,list m_OutputParamList)
```

## Inputs

### `1. String`

name of advc heat transfer steady state process

### `2. Int`

end type[0:blank; 1:max time]

### `3. Double`

max time

### `4. Int`

fixed or auto type[0:auto; 1:fixed]

### `5. Double`

max change temp

### `6. Double`

init dt time

### `7. Int`

if define max dt[0:false; 1:true]

### `8. Double`

max dt time

### `9. Int`

if define min dt[0:false; 1:true]

### `10. Double`

min dt time

### `11. Double`

fixed dt time

### `12. Int`

output last[-1:default; 0:No; 1:Yes]

### `13. Int`

output Interval

### `14. Int`

restart last[-1:default; 0:No; 1:Yes]

### `15. Int`

restart Interval

### `16. Double`

output time Interval

### `17. Double`

restart time Interval

### `18. Int`

output initial result[-1:default; 0:No; 1:Yes]

### `19. Int`

list output Interval

### `20. BOOL`

if convergence parameter defined

### `21. Double`

cg_tol

### `22. Double`

cg_nr_tol

### `23. Double`

cg_disp_tol

### `24. Double`

cg_nr_disp_tol

### `25. Double`

cg_disp_limit_tol

### `26. Double`

cg_total_disp_limit_tol

### `27. Double`

newton_tol

### `28. Double`

newton_disp_tol

### `29. Double`

newton_disp_limit_tol

### `30. Double`

newton_total_disp_limit_tol

### `31. Int`

cgloop_max

### `32. Int`

newton_max

### `33. Double`

ht_nl_loop_tol

### `34. Int`

ht_nl_loop_max

### `35. Cursor`

edit cursor

### `36. List`

status of Loads

### `37. List`

status of Load Cases

### `38. List`

status and other data of Contacts

### `39. List`

output parameters

## Return Code

- "1": The function can be executed
- "0": The function cannot be executed

## Sample Code

```psj
AdvcSSHProcess("ADVC_DEFAULT_PROCESS", 1, 1, 0, 1.79769e+308, 1.79769e+308, 0, 1, 0,
    1e-05, 1.79769e+308, -1, 2147483647, -1, 2147483647, 1.79769e+308, 1.79769e+308, -1,
    2147483647, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308,
    1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 2147483647,
    2147483647, 1.79769e+308, 2147483647, 128:2, [], [], [], [])
```

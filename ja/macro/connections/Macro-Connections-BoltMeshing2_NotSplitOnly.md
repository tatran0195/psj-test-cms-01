---
id: BoltMeshing2_NotSplitOnly
title: BoltMeshing2_NotSplitOnly()
author: TechnoStar Co., Ltd.
authorURL: https://www.e-technostar.com/
---

## Description

For CAD bolts, divide the bolt into upper and lower parts, generate the mesh, and apply load and boundary conditions for ADVC.

## Syntax

```psj
BoltMeshing2_NotSplitOnly(string strName, int method , double offset, int shared_face, int separate_face, int split_only, int make_section_face, cursor local_c, meshParam param, int lbc_direction, double value, bool bolt_fix_length, cursor pretension_table, cursor pretension_coord, int unit, cursor[] targets, pos[] cut_positions)'

```

## Inputs

### `1. String`

The name of newly created LBCs.

### `2. int`

Selet cutting section coordinate 0 = X-Z, coordinate 1 = Y-Z, coordinate 2 = Z-X or 3 Points.

### `3. double`

Offset value.

### `4. int`

Shared face option.

### `5. int`

Separate Face option.

### `6. int`

Split only option.

### `7. int`

Make section face option.

### `8. cusror`

Local Coordinate to refer.

### `9. MeshSizeParameters::double`

Avg_Element_Size

### `10. MeshSizeParameters::double`

Max_Element_Size

### `11. MeshSizeParameters::double`

Min_Element_Size

### `12. MeshSizeParameters::double`

Reduction Factor, default=1

### `13. MeshSizeParameters::double`

Geometry Angle, default=pi/4 radian

### `14. MeshSizeParameters::double`

Geometry Min Size, default=0.001

### `15. MeshSizeParameters::double`

Grading Factor, default=1.25

### `16. MeshSizeParameters::double`

Min Stretch Value, default=0.1

### `17. MeshSizeParameters::double`

Geometry Edge Deviation, default=0.1

### `18. MeshSizeParameters::double`

Geometry Quality Ratio, default=0.7

### `19. MeshSizeParameters::double`

Geometry Count Ratio, default=0.5

### `20. MeshSizeParameters::int`

Performance Mode 0 = Fastest, 1 = Good Quality, 2 = Best Quality

### `21. MeshSizeParameters::int`

Optimization Level 0 = Disable, 1 = Level1, 2 = Level2, 3= Level3, 4 = Level4, 5 = Level5

### `22. MeshSizeParameters::bool`

Auto Merge Edges flag true = 1, false = 0

### `23. MeshSizeParameters::bool`

Auto Merge Faces flag true = 1, false = 0

### `24. MeshSizeParameters::double`

Auto mesh pattern minimum elem angle.

### `25. MeshSizeParameters::double`

Auto merge tiny faces angle.

### `26. MeshSizeParameters::bool`

Output Quad Mesh flag true = 1, false = 0

### `27. MeshSizeParameters::bool`

Pure Quad Mesh flag true = 1, false = 0

### `28. MeshSizeParameters::bool`

Bad Input Model flag true = 1, false = 0

### `29. MeshSizeParameters::bool`

Close Gaps flag true = 1, false = 0

### `30. MeshSizeParameters::bool`

Local Remesh flag true = 1, false = 0

### `31. MeshSizeParameters::bool`

Geometry Approximation flag true = 1, false = 0

### `32. MeshSizeParameters::bool`

Curvature Control flag true = 1, false = 0

### `33. MeshSizeParameters::bool`

Delete Circle Chamfer flag true = 1, false = 0

### `34. MeshSizeParameters::bool`

Tiny Cylinder Mesh option flag true = 1, false = 0

### `35. MeshSizeParameters::int`

Next Entity Offset ID

### `36. MeshSizeParameters::int`

Next Elem Offset ID

### `37. MeshSizeParameters::int`

Next Node Offset ID

### `38. bool`

Bolt Fix Lengh flag true = 1, false = 0

### `39. Cursor`

Cursor of Abaqus pretension.

### `33. double`

Pretension value.

### `34. int`

Local unit of Abaqus pretension.

### `35. String`

Pretention direction.

### `36. point`

Control node [X,Y,Z] coordinate of Abaqus pretension.

### `37. Cursor[]`

List of target parts.

### `38. point[]`

List of cut positions.

## Return Code

- "1": The function can be executed.
- "0": The function cannot be executed.

## Sample Code

```psj
BoltMeshing2_NotSplitOnly("BoltMeshing_1", 1, 0.005, 0, 0, 0, 1, 0:0, {0.005, 0.01, 0.001, 1, 0.7853981634, 0.001, 1.25, 0.1, 0.1, 0.7, 0.5, 1, 3, 0, 0, 0, 0.5235987902, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000000, 0, 0}, 0, 100, 1, 0:0, 0:0, 0, [3:1], [[0.003420201433256688, 0.03333333333333333, 0.009396926207859084]])
```

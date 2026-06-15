import { processContent, getBranchHead, commitChanges } from "../app/cms.server";

async function addMdxDemo() {
  const branchName = "release/5.2.0";
  const head = getBranchHead(branchName);
  
  if (!head) {
    console.log("Branch release/5.2.0 not found. Run import-git first.");
    return;
  }

  const content = [
    "---",
    "title: Vector3D Data Type",
    "description: Advanced vector mathematics in PSJ.",
    "---",
    "",
    "# Vector3D",
    "",
    "<callout type=\"warning\" title=\"Important Change in v5.2.0\">",
    "  Vectors are now **immutable**. Attempting to modify a vector in-place will throw a `ReadOnlyError`.",
    "  Use `vector.clone()` if you need to mutate coordinates.",
    "</callout>",
    "",
    "A `Vector3D` object represents a point or direction in 3D simulation space.",
    "",
    "## Properties",
    "",
    "<property name=\"x\" type=\"float\">",
    "  The X coordinate in the global coordinate system.",
    "</property>",
    "",
    "<property name=\"y\" type=\"float\">",
    "  The Y coordinate in the global coordinate system.",
    "</property>",
    "",
    "<property name=\"z\" type=\"float\">",
    "  The Z coordinate in the global coordinate system.",
    "</property>",
    "",
    "<property name=\"w\" type=\"float\" added=\"5.2.0\">",
    "  Mass weighting factor for topological optimization routines. Defaults to `1.0`.",
    "</property>",
    "",
    "## Example Usage",
    "",
    "```python",
    "# Python API example",
    "start_point = psj.Vector3D(10.5, 0.0, -5.2)",
    "",
    "# New in v5.2.0",
    "weighted_point = psj.Vector3D(10.5, 0.0, -5.2, w=0.5)",
    "```"
  ].join("\n");

  console.log("Injecting MDX Custom Component Example into release/5.2.0...");
  
  await commitChanges({
    branch: branchName,
    author: "system",
    message: "Add MDX Component Showcase",
    changedFiles: [{
      path: "api/data-types/vector3d.mdx",
      content: content,
      mime_type: "text/markdown"
    }],
    deletedFiles: []
  });
  
  console.log("✅ MDX Data injected successfully!");
}

addMdxDemo().catch(console.error);
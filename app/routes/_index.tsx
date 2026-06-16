import { redirect } from "react-router";
import { getBranches } from "../cms.server";

export async function loader() {
  const branches = getBranches();
  if (branches.length > 0) {
    throw redirect(`/en/${encodeURIComponent(branches[0].name)}`);
  }
  return { branches };
}

export default function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">CMS Loading...</h1>
      <p className="text-muted-foreground">No branches found in the database.</p>
    </div>
  );
}

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
    <div className="container mx-auto p-12">
      <h1 className="text-2xl font-bold">CMS Loading...</h1>
      <p>No branches found in the database.</p>
    </div>
  );
}
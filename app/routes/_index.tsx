import { redirect } from "react-router";
import { getBranches } from "../cms.server";

export async function loader({ request }: import("react-router").LoaderFunctionArgs) {
  const branches = getBranches();
  if (branches.length > 0) {
    // Prefer a published branch for the initial redirect; fall back to the
    // first branch (which will trigger the auth redirect if it's a draft).
    const published = branches.find((b: any) => !b.is_draft) ?? branches[0];
    throw redirect(`/en/${encodeURIComponent(published.name)}`);
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

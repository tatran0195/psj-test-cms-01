import { redirect } from "react-router";
import { destroySession, getSession } from "../session.server";

export async function action({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}
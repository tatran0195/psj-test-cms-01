import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("auth/github", "routes/auth.github.tsx"),
  route("auth/github/callback", "routes/auth.github.callback.tsx"),
  route("auth/logout", "routes/auth.logout.tsx"),
  
  ...prefix("api", [
    route("preview", "routes/api.preview.tsx"),
    route("webhook/github", "routes/api.webhook.github.tsx")
  ]),

  route(":locale", "routes/$locale.tsx", [
    route(":branch", "routes/$locale.$branch.tsx", [
      index("routes/$locale.$branch._index.tsx"),
      route("assets/*", "routes/$locale.$branch.assets.$.tsx"),
      route("edit/*", "routes/$locale.$branch.edit.$.tsx"),
      route("*", "routes/$locale.$branch.$.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
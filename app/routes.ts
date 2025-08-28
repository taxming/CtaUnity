import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("core/layouts/navigation.layout.tsx", [
    index("features/common/screens/home-screen.tsx"),
    ...prefix("questions", [
      index("features/questions/screens/questions-screen.tsx"),
      route("new", "features/questions/screens/new-question-screen.tsx"),
      route("/:question_id", "features/questions/screens/question-screen.tsx"),
      route("/:question_id/edit", "features/questions/screens/edit-question-screen.tsx"),
      route("/:question_id/delete", "features/questions/screens/delete-question-screen.tsx"),
    ]),
    route("/contact", "features/contact/screens/contact-screen.tsx"),

    ...prefix("law", [
      route("/test", "features/law/screens/law-test.tsx"),
      route("/quick-law", "features/law/screens/quick-law-screen.tsx"),
      route("/quick-law/api", "features/law/api/law.quick.ts"),
      
      route("/api/search", "features/law/api/law.search.ts"),
      route("/api/:id", "features/law/api/law.$id.ts"),
      route("/api/:id/content", "features/law/api/law.$id.content.ts"),
    ]),

    ...prefix("caselaw", [
      index("features/caselaw/screens/caselaw-screen.tsx"),
    ]),
    ...prefix("forum", [
      index("features/forum/screens/forums-screen.tsx"),
      route("/new", "features/forum/screens/new-forum-screen.tsx"),
      route("/:forum_id", "features/forum/screens/forum-screen.tsx"),
    ]),

  ]),
  layout("features/legal/layouts/legal.layout.tsx", [
    ...prefix("legal", [
      route("/privacy-policy", "features/legal/screens/privacy-policy-screen.tsx"),
      route("/terms-of-service", "features/legal/screens/terms-of-service-screen.tsx"),
    ]),
  ]),
  layout("features/auth/layouts/auth.layout.tsx", [
    route("/login", "features/auth/screens/login-screen.tsx"),
    route("/register", "features/auth/screens/register-screen.tsx"),
  ]),

  layout("features/dashboard/layouts/dashboard.layout.tsx", [
    ...prefix("/dashboard", [
      index("features/dashboard/screens/dashboard-screen.tsx"),
    ]),
  ]),
] satisfies RouteConfig;

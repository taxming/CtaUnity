import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("core/layouts/navigation.layout.tsx", [
    index("common/pages/home-page.tsx"),
    ...prefix("questions", [
      index("features/questions/pages/questions-page.tsx"),
      route("new", "features/questions/pages/new-question-page.tsx"),
      route("/:question_id", "features/questions/pages/question-page.tsx"),
      route("/:question_id/edit", "features/questions/pages/edit-question-page.tsx"),
      route("/:question_id/delete", "features/questions/pages/delete-question-page.tsx"),
    ]),
  ]),
  layout("core/layouts/legal.layout.tsx", [
    ...prefix("legal", [
      route("/privacy-policy", "features/legal/pages/privacy-policy-page.tsx"),
      route("/terms-of-service", "features/legal/pages/terms-of-service-page.tsx"),
    ]),
  ])
] satisfies RouteConfig;

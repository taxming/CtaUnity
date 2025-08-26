import { Outlet } from "react-router";
import type { Route } from "./+types/dashboard.layout";


export default function DashboardLayout({loaderData}: Route.ComponentProps) {

  return (
    <div>
      <Outlet />
    </div>
  )
}
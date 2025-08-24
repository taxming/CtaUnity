

import { Outlet, useLoaderData } from "react-router";
import { NavigationBar } from "~/core/navigation-bar";
import Footer from "../footer";
import type { Route } from "./+types/navigation.layout";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const message = url.searchParams.get("message");
  return { message };
}

export default function NavigationLayout({loaderData}: Route.ComponentProps) {
  const { message } = loaderData as { message: string };
  return (
    <div>
      
        <div>   
            <NavigationBar name="" email="" avatarUrl="" loading={false} message={message} />
        </div>
        <div className=" min-h-screen max-w-screen-2xl mx-auto pt-16">
        <Outlet />
        </div>
        <Footer />
    </div>
  );
}

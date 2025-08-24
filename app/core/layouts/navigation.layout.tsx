

import { Outlet } from "react-router";
import { NavigationBar } from "~/core/navigation-bar";
import Footer from "../footer";

export default function NavigationLayout() {
  return (
    <div>
        <div>   
            <NavigationBar name="" email="" avatarUrl="" loading={false} />
        </div>
        <div className=" min-h-screen max-w-screen-2xl mx-auto pt-16">
        <Outlet />
        </div>
        <Footer />
    </div>
  );
}

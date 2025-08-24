

import { Outlet } from "react-router";
import { NavigationBar } from "~/core/navigation-bar";
import Footer from "../footer";

export default function NavigationLayout() {
  return (
    <div>
        <div>   
            <NavigationBar name="John Doe" email="john.doe@example.com" avatarUrl="https://github.com/shadcn.png" loading={false} />
        </div>
        <div className="flex flex-col min-h-screen pt-16">
        <Outlet />
        </div>
        <Footer />
    </div>
  );
}

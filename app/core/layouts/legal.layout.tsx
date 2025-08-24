import { Link, Outlet, useLoaderData } from "react-router";
import { ChevronsRightIcon } from "lucide-react";
import Footer from "../footer";
import type { Route } from "./+types/legal.layout";

function LegalNav({ pathname }: { pathname: string }) {
  return (
    <nav className="mx-auto w-full flex h-16 items-center justify-center border-b px-5 shadow-xs backdrop-blur-lg transition-opacity md:px-10">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-start py-3">
        <h1 className="flex items-center gap-2 text-lg">
          <Link
            to="/"
            className="text-muted-foreground text-sm font-extrabold"
            viewTransition
          >
            CTAUNITY
            |
            세무사 커뮤니티
          </Link>
          <ChevronsRightIcon className="text-muted-foreground size-4" />
          <Link to={`${pathname}`} className="text-sm font-semibold" viewTransition>
            {pathname === "privacy-policy" ? "개인정보처리방침" : "이용약관"}
          </Link>
    
        </h1>
      </div>
    </nav>
  );
}

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  return { pathname };
}

export default function LegalLayout() {
  const { pathname } = useLoaderData<typeof loader>() as { pathname: string };
  return (
    <div className="min-h-screen flex flex-col">
      <LegalNav pathname={pathname} />
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

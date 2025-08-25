import { CogIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { Button } from "~/core/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/core/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "~/core/components/ui/sheet";
import ThemeSwitcher from "./theme-switcher";
import { Separator } from "~/core/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "~/core/components/ui/avatar";
import { useEffect, useState } from "react";


function Actions() {
    return (
      <>
        {/* Settings/debug dropdown menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Button variant="ghost" size="icon">
              <CogIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* Sentry monitoring link */}
            <DropdownMenuItem asChild>
              <Link to="/debug/sentry" viewTransition>
                Sentry
              </Link>
            </DropdownMenuItem>
            {/* Google Analytics link */}
            <DropdownMenuItem asChild>
              <Link to="/debug/analytics" viewTransition>
                Google Tag
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Theme switcher component (light/dark mode) */}
        <ThemeSwitcher />
        
        {/* Language switcher component */}
        {/* <LangSwitcher /> */}
      </>
    );
  }

  function AuthButtons() {
    return (
      <>
        {/* Sign in button (less prominent) */}
        <Button variant="ghost" asChild>
          <Link to="/login" viewTransition>
            Sign in
          </Link>
        </Button>
        
        {/* Sign up button (more prominent) */}
        <Button variant="default" asChild>
          <Link to="/join" viewTransition>
            Sign up
          </Link>
        </Button>
      </>
    );
  }

  function UserMenu({
    name,
    email,
    avatarUrl,
  }: {
    name: string;
    email?: string;
    avatarUrl?: string | null;
  }) {
    return (
      <DropdownMenu>
        {/* Avatar as the dropdown trigger */}
        <DropdownMenuTrigger asChild>
          <Avatar className="size-8 cursor-pointer rounded-lg">
            <AvatarImage src={avatarUrl ?? undefined} />
            <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        
        {/* Dropdown content with user info and actions */}
        <DropdownMenuContent className="w-56">
          {/* User information display */}
          <DropdownMenuLabel className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{name}</span>
            <span className="truncate text-xs">{email}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          {/* Dashboard link */}
          <DropdownMenuItem asChild>
            <Link to="/dashboard" viewTransition>
              <HomeIcon className="size-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          
          {/* Logout link */}
          <DropdownMenuItem asChild>
            <Link to="/logout" viewTransition>
              <LogOutIcon className="size-4" />
              Log out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  
export function NavigationBar({
    name,
    email,
    avatarUrl,
    loading,
    message,
  }: {
    name?: string;
    email?: string;
    avatarUrl?: string | null;
    loading: boolean;
    message?: string;
  }) {
    // Get translation function for internationalization
    const [messageState, setMessageState] = useState<string | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      if (message) {
        setMessageState(message);
        setTimeout(() => {
          setMessageState(null);
          // URL에서 message 파라미터 제거
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.delete("message");
          setSearchParams(newSearchParams);
        }, 1000);
      }
    }, [message, searchParams, setSearchParams]);

    return (
      <>
      <nav
        className={
          "mx-auto flex fixed top-0 left-0 right-0 h-16 w-full items-center justify-between border-b px-5 shadow-xs backdrop-blur-lg transition-opacity md:px-10 z-50"
        }
      >
        <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between py-3">
          {/* Application logo/title with link to home */}
          <Link to="/" className="flex flex-row items-center gap-4">
            <h1 className="text-lg font-extrabold">CTAUNITY</h1>
            <h1 className="text-lg text-muted-foreground">|</h1>
            <h1 className="text-lg font-extrabold">세무사 커뮤니티</h1> 
          </Link>
          
          
          {/* Desktop navigation menu (hidden on mobile) */}
          <div className="hidden h-full items-center gap-5 md:flex">
            {/* Main navigation links */}
            <Link
              to="/questions"
              viewTransition
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Questions
            </Link>
            <Link
              to="/contact"
              viewTransition
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/payments/checkout"
              viewTransition
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Payments
            </Link>
            
            <Separator orientation="vertical" />
         
            {loading ? (
              <div className="flex items-center">
                <div className="bg-muted-foreground/20 size-8 animate-pulse rounded-lg" />
              </div>
            ) : (
              <>
                {name ? (
                  // Authenticated state with user menu
                  <UserMenu name={name} email={email} avatarUrl={avatarUrl} />
                ) : (
                  // Unauthenticated state with auth buttons
                  <AuthButtons />
                )}
              </>
            )}
          </div>
          
          {/* Mobile menu trigger (hidden on desktop) */}
          <Sheet>
            <SheetTrigger className="size-6 md:hidden">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                  <SheetClose asChild>
                      <Link to="/blog">Blog</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/contact">Contact</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/payments/checkout">Payments</Link>
                </SheetClose>
              </SheetHeader>
              {loading ? (
                <div className="flex items-center">
                  <div className="bg-muted-foreground h-4 w-24 animate-pulse rounded-full" />
                </div>
              ) : (
                <SheetFooter>
                  {name ? (
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 flex w-full justify-between">
                        <Actions />
                      </div>
                      <div className="flex justify-end">
                        <UserMenu name={name} email={email} avatarUrl={avatarUrl} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-between">
                        <Actions />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <AuthButtons />
                      </div>
                    </div>
                  )}
                </SheetFooter>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      {messageState && (
        <div 
          className="text-red-500 text-center max-w-screen-sm mx-auto fixed top-0 left-0 right-0 z-52 border h-16 flex items-center justify-center"
          style={{animation: "fadeOut 1s forwards"}}
        >
          {messageState}
        </div>
      )}
      </>
    );
  }
  
import { FlickeringGrid } from "~/core/components/magicui/flickering-grid";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
      <main className="grid grid-cols-2 min-h-screen">
      <div className="relative h-full w-full overflow-hidden rounded-lg border bg-background">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={8}
        color="rgb(255, 120, 0)"
        maxOpacity={0.5}
        flickerChance={0.1}
        width={1000}
        height={1000}
      />
    </div>
        <div className="col-span-1 min-h-full">
          <Outlet />
        </div>
      </main>
  );
}

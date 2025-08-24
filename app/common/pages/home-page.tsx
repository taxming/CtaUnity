import { Button } from "~/core/components/ui/button";
import { Welcome } from "~/welcome/welcome";
import type { Route } from "./+types/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home page" },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <Button className="dark">Click me</Button>
      <p className="text-primary">Hello World</p>
    </>
  );
}

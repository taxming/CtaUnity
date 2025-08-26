import type { Route } from "./+types/law.search";

// React Router v7: loader에서 Response 반환
export async function loader({ request }: Route.LoaderArgs) {
    console.log("loader");
    const OC = process.env.LAW_OC ?? "test";
    const DRF = process.env.LAW_BASE ?? "https://www.law.go.kr/DRF";
  
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? "";
  
    console.log(q)

    if (!OC) return new Response("Missing LAW_OC", { status: 500 });
    if (!q) {
      return new Response(JSON.stringify({ items: [], total: 0 }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    const api = `${DRF}/lawSearch.do?target=lawjosub&type=JSON&OC=${encodeURIComponent(OC)}&query=${encodeURIComponent(q)}`;
    console.log(api)
    const res = await fetch(api, { headers: { Accept: "application/json" } });
    if (!res.ok) return new Response("LAW API error", { status: 502 });
  
    const raw = await res.json();
    const items = Array.isArray(raw?.law)
      ? raw.law.map((x: any) => ({
          id: x.법령ID ?? x.MST ?? "",
          name: x.법령명한글 ?? "",
          ministry: x.소관부처명 ?? "",
          promulgation: x.공포일자 ?? "",
          effective: x.시행일자 ?? "",
        }))
      : [];
    const total = Number(raw?.totalCnt ?? items.length);
  
    return new Response(JSON.stringify({ items, total }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=120",
      },
    });
  }
  
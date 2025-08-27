import type { Route } from "./+types/law.search";

// React Router v7: loader에서 Response 반환
export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const q = formData.get("q") as string;

    const OC = process.env.LAW_OC ?? "test";
    const DRF = process.env.LAW_BASE ?? "https://www.law.go.kr/DRF";
  


    if (!OC) return new Response("Missing LAW_OC", { status: 500 });
    if (!q) {
      return new Response(JSON.stringify({ items: [], total: 0 }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    const api = `${DRF}/lawSearch.do?target=law&type=JSON&OC=${encodeURIComponent(OC)}&query=${encodeURIComponent(q)}`;
    const res = await fetch(api, { headers: { Accept: "application/json" } });
    if (!res.ok) return new Response("LAW API error", { status: 502 });
  
    const raw = await res.json();

    const items = Array.isArray(raw?.LawSearch.law)
      ? raw.LawSearch.law.map((x: any) => ({
          id: x.법령ID ?? x.MST ?? "",
          name: x.법령명한글 ?? "",
          ministry: x.소관부처명 ?? "",
          promulgation: x.공포일자 ?? "",
          effective: x.시행일자 ?? "",
          promulgation_number: x.공포번호 ?? "",
          amendment_type: x.제개정구분명 ?? "",
          ministry_code: x.소관부처코드 ?? "",
          law_id: x.법령ID ?? "",
          law_serial_number: x.법령일련번호 ?? "",
          law_abbreviation: x.법령약칭명 ?? "",
          law_detail_link: x.법령상세링크 ?? "",
          law_type: x.법령구분명 ?? "",
          law_name: x.법령명한글 ?? ""
        }))
      : [];
    const total = Number(raw?.LawSearch.totalCnt ?? items.length);
  
    return new Response(JSON.stringify({ items, total }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=120",
      },
    });
  }
  
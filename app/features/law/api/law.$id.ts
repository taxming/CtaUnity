export async function loader({ params }: { params: { id: string } }) {
    const id = params.id;
    const OC =  process.env.LAW_OC ?? "test";
    const DRF = process.env.LAW_BASE ?? "https://www.law.go.kr/DRF";
  
    if (!OC) return new Response("Missing LAW_OC", { status: 500 });
    if (!id) return new Response("Missing id", { status: 400 });
  
    const api = `${DRF}/lawService.do?target=law&type=JSON&OC=${encodeURIComponent(OC)}&ID=${encodeURIComponent(id)}`;
  
    const res = await fetch(api, { headers: { Accept: "application/json" } });
    if (!res.ok) return new Response("LAW API error", { status: 502 });
  
    const data = await res.json();
  
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=86400, max-age=3600",
      },
    });
  }
  
// import { writeFileSync, mkdirSync } from "fs";
// import { join } from "path";

import type { Route } from "./+types/law.$id";

export async function action({request, params}: Route.ActionArgs) {
    const formData = await request.formData();
    const law_name = formData.get("law_name");

    const id = params.id;
    const OC =  process.env.LAW_OC ?? "test";
    const DRF = process.env.LAW_BASE ?? "https://www.law.go.kr/DRF";
  
    if (!OC) return new Response("Missing LAW_OC", { status: 500 });
    if (!id) return new Response("Missing id", { status: 400 });
  
    const api = `${DRF}/lawService.do?target=law&type=JSON&OC=${encodeURIComponent(OC)}&ID=${encodeURIComponent(id)}`;
  
    const res = await fetch(api, { headers: { Accept: "application/json" } });
    if (!res.ok) return new Response("LAW API error", { status: 502 });
  
    const data = await res.json();
    
    const law = data.법령;
    const 조문합계 = law.조문.조문단위;
    

    return new Response(JSON.stringify(조문합계), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=86400, max-age=3600",
      },
    });

}




  
    // JSON 파일로 저장 테스트목적 - 차후 지울것 
    // try {
    //   // public/law-data 디렉토리 생성
    //   const outputDir = join(process.cwd(), "public", "law-data");
    //   mkdirSync(outputDir, { recursive: true });
      
    //   // 파일명 생성 (ID와 타임스탬프 포함)
    //   const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    //   const filename = `law-${id}-${timestamp}.json`;
    //   const filepath = join(outputDir, filename);
      
    //   // JSON 파일로 저장
    //   writeFileSync(filepath, JSON.stringify(data, null, 2), "utf8");
      
    //   console.log(`법령 데이터가 JSON 파일로 저장되었습니다: ${filepath}`);
    // } catch (error) {
    //   console.error("JSON 파일 저장 중 오류 발생:", error);
    // }
    // 테스트목적 끝끝
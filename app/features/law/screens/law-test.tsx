import type { Route } from "./+types/law-test";
import { useLoaderData, useFetcher, Form, redirect } from "react-router";
import { useEffect } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "~/core/components/ui/card";
import { Input } from "~/core/components/ui/input";
import { Button } from "~/core/components/ui/button";
import { Separator } from "~/core/components/ui/separator";

// 초기 쿼리만 읽어서 그대로 넘김(검색은 fetcher가 처리)
export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  return { initialQ: q };
}


// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const q = formData.get("q")?.toString() ?? "";
//   const url = new URL(request.url);
//   url.searchParams.set("q", q);
//   return redirect("/api");
// }

export default function LawTestScreen({}: Route.ComponentProps) {
  const { initialQ } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<{ items: any[]; total: number }>();
  const detailFetcher = useFetcher<any>();


  const items = fetcher.data?.items ?? [];
  const total = fetcher.data?.total ?? 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>법령 검색 (테스트)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* URL 유지용 GET 폼. 목록은 fetcher로 호출 */}
          <Form method="get" className="flex gap-2" action="/law/api/search">
            <Input name="q" defaultValue={initialQ} placeholder="예: 부가가치세법" />
            <Button
              type="submit"
              formMethod="get"
            >
              검색
            </Button>
          </Form>

          <Separator />

          <div className="text-sm text-muted-foreground">총 {total}건</div>
          <div className="space-y-3">
            {items.map((it) => (
              <Card key={it.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{it.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div>소관부처: {it.ministry || "-"}</div>
                  <div>공포일자: {it.promulgation || "-"}</div>
                  <div>시행일자: {it.effective || "-"}</div>
                  <div className="mt-3">
                    <detailFetcher.Form method="get" action={`/api/law/${it.id}`}>
                      <Button type="submit" size="sm" variant="secondary">
                        상세 불러오기
                      </Button>
                    </detailFetcher.Form>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 상세 JSON 미리보기 */}
          {detailFetcher.state === "loading" && <div>상세 로딩중…</div>}
          {detailFetcher.data && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>상세 응답(JSON)</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-xs bg-muted p-3 rounded-md overflow-auto max-h-96">
                  {JSON.stringify(detailFetcher.data, null, 2)}
                </pre>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

import Hero from "~/core/components/hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/core/components/ui/card";
import { Badge } from "~/core/components/ui/badge";
import { Button } from "~/core/components/ui/button";
import { EyeIcon, Link } from "lucide-react";
import type { Route } from "./+types/caselaws-screen";
import { TAX_CATEGORIES } from "~/core/lib/constants";
import { Separator } from "~/core/components/ui/separator";

export default function CaselawScreen({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-10">
      <Hero title="판례" subtitle="여러 판례에 대해 함께 분석해봐요" />

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">최신 예규</h1>
            <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
              최신 예규를 확인해보세요.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index}>
                <CardHeader className="relative flex flex-row gap-2 items-center justify-between">
                  <CardTitle>
                    후발적 경정청구 가능 여부
                    <Badge variant="outline">심판</Badge>
                    <Badge variant="outline">법인</Badge>
                    <Badge variant="outline">기각</Badge>
                  </CardTitle>
                  <div className="flex flex-row gap-2">
                    <Button variant="outline" className="text-sm">
                      <EyeIcon className="w-4 h-4" />
                      자세히 보기
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  {/* 사건 기본사항 보여줌 */}
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-muted-foreground">
                      사건번호 : 조심-2025-서-0765
                    </span>
                    <span className="text-sm text-muted-foreground">
                      사건날짜 : 2025-07-02
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm ">
                      쟁점판결은 처분청의 법인세 등 부과처분에 영향을 미치거나
                      변경이 있었다고 보기 어려움
                    </p>
                  </div>
                  {/* AI요약문 있는 경우 보여줌 */}
                  <div className="flex flex-col gap-2">
                    <p className="text-sm ">
                      <Badge variant="default">AI요약</Badge> : 2017년 설립된
                      철강 도매 및 상품중개업체로, 일본 중국에서 철강재를
                      수입하여 국내 판매. 2017년 물품 매입원가 과다계상 및
                      2018년 대표이사 인건비 중복 계상
                    </p>
                  </div>
                  {/* 댓글 있는 경우 최근1개 댓글만 보여줌 */}
                  <div className="flex flex-row gap-2">
                    <Badge variant="outline">COMMENT</Badge>
                    <p className="text-sm text-muted-foreground">
                      대표이사가 잘못 판단해서 이뤄진것이 분명한듯합니다... 기각
                      처분이 적절할 것 같습니다.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <aside className="col-span-2 ">
          <div className="flex flex-col gap-2">            
            <h1 className="text-3xl font-bold">CATEGORIES</h1>
            {TAX_CATEGORIES.map((category) => (
              <div key={category.id} className="flex flex-col gap-2">
                <Button variant="link" className="w-full" asChild>
                  <Link to={`/caselaws?category=${category.id}`}>{category.name}</Link>
                </Button>
                <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
                  {category.laws.join(", ")}
                </span>
                <Separator className="w-full" />

              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

import type { Route } from "./+types/home-screen";
import { AnimatedGridPattern } from "~/core/components/magicui/animated-grid-pattern";
import { cn } from "~/core/lib/utils";
import { CardComponent } from "~/features/common/components/card-component";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/core/components/ui/command";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "~/core/components/ui/card";
import { Badge } from "~/core/components/ui/badge";
import { EyeIcon } from "lucide-react";
import { Button } from "~/core/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Home page" }];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-col gap-4 min-h-[calc(100vh-10rem)] justify-center items-center select-none">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
          )}
        />
        <h1 className="text-4xl font-bold text-primary">CTA-UNITY</h1>
        <h2 className="text-2xl font-bold">
          현직 세무사들을 위한 전문 커뮤니티
        </h2>
        <span className="text-sm text-muted-foreground block whitespace-pre-wrap text-center">
          실무에서 마주하는 다양한 세무 문제를 함께 논의하고 해결하며, 법령과
          판례를 공유하고 검토하는 공간입니다. <br />
          질문과 답변을 통해 서로의 경험과 지식을 나누고, 모두가 신뢰받는
          세무사로 성장할 수 있도록 돕습니다.
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">최근 질문</h1>
          <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
            최근 질문 목록을 확인해보세요.
          </span>
        </div>
        {Array.from({ length: 3 }).map((_, index) => (
          <CardComponent
            key={index}
            title="거주자 판정시 입국 후 184일 이내이더라도 거주자 판정 가능한지?"
            description="소득세법 제102조 제1항 제1호에 따르면 거주자 판정은 입국 후 184일 이내에 판정해야 한다...."
            badges={[
              { text: "소득세법", variant: "default" },
              { text: "거주자", variant: "secondary" },
              { text: "법령중심", variant: "secondary" },
              { text: "판례중심", variant: "secondary" },
              { text: "실무사례", variant: "secondary" },
            ]}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-10">
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
                    <Badge variant="default">AI요약</Badge> : 2017년 설립된 철강
                    도매 및 상품중개업체로, 일본 중국에서 철강재를 수입하여 국내
                    판매. 2017년 물품 매입원가 과다계상 및 2018년 대표이사
                    인건비 중복 계상
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
    </div>
  );
}

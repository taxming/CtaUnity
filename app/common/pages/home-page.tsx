import { Welcome } from "~/welcome/welcome";
import type { Route } from "./+types/home-page";
import { AnimatedGridPattern } from "~/core/components/magicui/animated-grid-pattern";
import { cn } from "~/core/lib/utils";
import { CardComponent } from "~/common/components/card-component";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Home page" }];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-col gap-4 min-h-[calc(100vh-10rem)] justify-center items-center ">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
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
        {Array.from({ length: 6 }).map((_, index) => ( 
        <CardComponent
          title="거주자 판정시 입국 후 184일 이내이더라도 거주자 판정 가능한지?"
          description="소득세법 제102조 제1항 제1호에 따르면 거주자 판정은 입국 후 184일 이내에 판정해야 한다...."
          badges={[
            { text: "소득세법", variant: "default" },
            { text: "거주자", variant: "secondary" }
          ]}
        />
        ))}
      </div>
    </div>
  );
}

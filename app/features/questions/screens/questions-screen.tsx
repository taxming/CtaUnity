import React from "react";
import { Link } from "react-router";
import { CardComponent } from "~/features/common/components/card-component";
import { Button } from "~/core/components/ui/button";
import { Separator } from "~/core/components/ui/separator";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
} from "~/core/components/ui/command";
import type { Route } from "./+types/questions-screen";
import Hero from "~/core/components/hero";
import { TAX_CATEGORIES } from "~/core/lib/constants";
import { PlusIcon } from "lucide-react";


export const meta: Route.MetaFunction = () => {
  return [
    { title: "질문목록 | CTAUNITY" },
    { name: "description", content: "질문 목록을 확인해보세요." },
  ];
};

export default function QuestionsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Hero title="질문" subtitle="질문 목록을 확인해보세요."/>

      <div className="grid grid-cols-7 gap-12">
        <div className="col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-2  h-20">
            <h1 className="text-3xl font-bold">최근 질문</h1>
            <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
              최근 질문 목록을 확인해보세요.
            </span>
          </div>
          {/* 빠른 검색(Command) */}
          <div className="w-full ">
            <Command className="rounded-xl border">
              <CommandInput placeholder="예: 외항운송 영세율 / 상증 판례 2023두XXXX" />
              <CommandList>
                <CommandEmpty>검색어를 입력해 보세요.</CommandEmpty>
                {/* 추천/최근 검색어가 있다면 <CommandItem>으로 바인딩 */}
                <CommandItem>소득세법 · 거주자 판정</CommandItem>
                <CommandItem>부가세 · 영세율 적용 요건</CommandItem>
                <CommandItem>상속증여세 · 특례/판례</CommandItem>
              </CommandList>
            </Command>
          </div>
          <div className="grid grid-cols-1 gap-4">
          {Array.from({ length: 1 }).map((_, index) => (
            <CardComponent
              title="부가가치세 영세율 적용시 수출신고필증 없이도 적용 가능한지?"
              description="부가가치세법 제21조 및 시행령 제31조에 따르면 영세율 적용을 위해서는 수출신고필증이 필수인데..."
              badges={[
                { text: "부가가치세", variant: "default" },
                { text: "영세율", variant: "secondary" },
                { text: "수출", variant: "secondary" },
                { text: "예규중심", variant: "secondary" },
                { text: "실무사례", variant: "secondary" },
              ]}
              isCompensation={true} 
              className="max-w-full bg-primary/5"             
            />
          ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardComponent
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
        </div>

        <aside className="col-span-2 mt-28">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/questions/new"><PlusIcon className="w-4 h-4" />새 글 작성</Link>
              </Button>
              <Separator className="w-full" />
            </div>
            <h1 className="text-3xl font-bold">CATEGORIES</h1>
            {TAX_CATEGORIES.map((category) => (
              <div key={category.id} className="flex flex-col gap-2">
                <Button variant="link" className="w-full" asChild>
                  <Link to={`/questions/category/${category.id}`}>{category.name}</Link>
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

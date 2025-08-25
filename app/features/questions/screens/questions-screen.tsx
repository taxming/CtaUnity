import React from 'react';
import { Link } from 'react-router';
import { CardComponent } from '~/common/components/card-component';
import { Button } from '~/core/components/ui/button';
import { Separator } from '~/core/components/ui/separator';
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem } from '~/core/components/ui/command';

export default function QuestionsPage() {
  return (
    <div className="flex flex-col gap-4 mt-10">

      <div className="flex flex-col h-40 gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">최근 질문</h1>
        <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
          최근 질문 목록을 확인해보세요.
        </span>
      </div>
 

    <div className="grid grid-cols-6 gap-12">
        <div className="col-span-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">최근 질문</h1>
          <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
            최근 질문 목록을 확인해보세요.
          </span>
        </div>
               {/* 빠른 검색(Command) */}
  <div className="mt-4 w-full ">
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
        {Array.from({ length: 6 }).map((_, index) => ( 
        <CardComponent
          title="거주자 판정시 입국 후 184일 이내이더라도 거주자 판정 가능한지?"
          description="소득세법 제102조 제1항 제1호에 따르면 거주자 판정은 입국 후 184일 이내에 판정해야 한다...."
          badges={[
            { text: "소득세법", variant: "default" },
            { text: "거주자", variant: "secondary" },
            { text: "법령중심", variant: "secondary" },
            { text: "판례중심", variant: "secondary" },          
            { text: "실무사례", variant: "secondary" }
          ]}
        />
        ))}
        </div>


        <aside className="col-span-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/questions/new">새 글 작성</Link>
              </Button>
              <Separator className="w-full" />
            </div>
            <h1 className="text-3xl font-bold">카테고리 목록</h1>
            <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
              카테고리 목록을 확인해보세요.
            </span>
          </div>
          
        </aside>
      </div>
      </div>

  );
}

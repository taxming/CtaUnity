import React from 'react';
import { Link } from 'react-router';
import { CardComponent } from '~/common/components/card-component';
import { Button } from '~/core/components/ui/button';
import { Separator } from '~/core/components/ui/separator';

export default function QuestionsPage() {
  return (
    <div className="flex flex-col gap-4 mt-10">

      <div className="flex flex-col h-40 gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">최근 질문</h1>
        <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
          최근 질문 목록을 확인해보세요.
        </span>
      </div>

    <div className="grid grid-cols-6 gap-8">
        <div className="col-span-4 flex flex-col gap-2">
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

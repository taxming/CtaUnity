import { Badge } from "~/core/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "~/core/components/ui/card";
import { Button } from "~/core/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "~/core/components/ui/avatar";
import { Alert, AlertTitle, AlertDescription } from "~/core/components/ui/alert";
import { Input } from "~/core/components/ui/input";


export default function QuestionDetailScreen({  }) {

  // features/questions/sample-data.ts

 const question = {
  id: 1,
  title: "거주자 판정 시 입국 후 184일 이내라도 거주자로 판정 가능한지?",
  content: `소득세법 제1조 및 제102조에 따르면 거주자 여부는 국내 체류기간, 
생활관계, 가족관계 등을 종합적으로 고려해야 합니다. 

단순히 184일을 기준으로만 판단하는 것이 아니라 
국내에 주소나 거소가 있는 경우에도 거주자로 판정될 수 있다는 점에서 
실무상 쟁점이 발생합니다.

관련 예규: 서면-2017-소득-1234`,
  created_at: "2025-08-01T12:00:00Z",
  updated_at: "2025-08-01T12:00:00Z",
  author: { id: "u1", name: "이재황", isAnonymous: false },
  category: "소득세",
  tags: ["거주자", "소득세법", "판례중심", "실무사례"],
  attachments: [
    { name: "관련예규.pdf", url: "/uploads/예규샘플.pdf", mime: "application/pdf", size: 123456 },
  ],
  bounty_amount: 100000,
  status: "open",
  answers: [
    {
      id: "a1",
      content: `국내 생활관계(가족·직업·자산 등)가 확실하면 184일 전이라도 거주자로 판정된 사례가 많습니다. 
대법원 판례(2020두12345)도 같은 취지입니다.`,
      author: { id: "u2", name: "김세무", isAnonymous: false },
      created_at: "2025-08-02T10:00:00Z",
      attachments: [],
      votes: 5,
      comments: [],
      isAccepted: false,
    },
    {
      id: "a2",
      content: `실무에서는 국세청이 184일이라는 수치를 강하게 기준으로 삼지만, 
주요 생활관계가 국내에 있음을 입증하면 예외적으로 거주자 판정이 가능합니다.`,
      author: { id: "u3", name: "박세무", isAnonymous: false },
      created_at: "2025-08-03T09:30:00Z",
      attachments: [],
      votes: 2,
      comments: [],
      isAccepted: true,
    },
  ],
};


  return (
    <div> 

<div className="flex flex-col h-40 gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">질문 상세</h1>
        <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
          질문 상세를 확인해보세요.
        </span>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
      
      {/* 메인 본문 */}
      <div className="space-y-6">
        <Card>
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">{question.category}</Badge>
              {question.tags.map(t => (
                <Badge key={t} variant="outline">#{t}</Badge>
              ))}
              <Badge variant={question.status === "open" ? "default" : "destructive"}>
                {question.status.toUpperCase()}
              </Badge>
            </div>
            <CardTitle className="text-2xl font-bold">{question.title}</CardTitle>
            <div className="text-sm text-muted-foreground">
              {question.author.isAnonymous ? "익명" : question.author.name} · {new Date(question.created_at).toLocaleDateString()}
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {/* Markdown 렌더링 */}
              <p>{question.content}</p>
            </div>

            {question.attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold">첨부파일</h4>
                {question.attachments.map(f => (
                  <Button key={f.url} asChild variant="outline" size="sm">
                    <a href={f.url} target="_blank" rel="noopener">{f.name}</a>
                  </Button>
                ))}
              </div>
            )}

            {question.bounty_amount && (
              <Alert className="mt-4">
                <AlertTitle>보상형 질문</AlertTitle>
                <AlertDescription>
                  이 질문은 채택 시 <b>{question.bounty_amount.toLocaleString()}원</b>이 지급됩니다.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 답변 영역 */}
        <div className="flex flex-col items-start justify-between">
          <h2 className="text-xl font-bold">답변</h2>
          <div className="block w-full space-y-2">
          <Input type="textarea" placeholder="답변을 입력해주세요." className="w-full min-h-[150px]" />
          <Button>답변 작성하기</Button>
          </div>
        </div>
        <div className="space-y-4">
          {question.answers.map(ans => (
            <Card key={ans.id} className={ans.isAccepted ? "border-green-500" : ""}>
              <CardHeader className="flex items-center gap-3">
                <Avatar><AvatarImage src="" /><AvatarFallback>{ans.author.name[0]}</AvatarFallback></Avatar>
                <div>
                  <div className="font-medium">{ans.author.name}</div>
                  <div className="text-xs text-muted-foreground">{new Date(ans.created_at).toLocaleDateString()}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="prose max-w-none">{ans.content}</div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline">👍 {ans.votes}</Button>
                  {question.status === "open" && (
                    <Button size="sm" variant={ans.isAccepted ? "default" : "secondary"}>
                      {ans.isAccepted ? "채택됨" : "채택하기"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 사이드바 */}
      <aside className="space-y-4">
        <Card>
          <CardHeader><CardTitle>질문 요약</CardTitle></CardHeader>
          <CardContent className="text-sm">
            · 카테고리: {question.category}<br/>
            · 태그: {question.tags.join(", ")}<br/>
            · 상태: {question.status}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>관련 법령/판례</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-1">
            <a href="#">소득세법 제102조</a><br/>
            <a href="#">대법원 2021두12345</a>
          </CardContent>
        </Card>
      </aside>
    </div>
    </div>
  );
}

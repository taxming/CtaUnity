import { Button } from "~/core/components/ui/button";
import { Input } from "~/core/components/ui/input";
import { Textarea } from "~/core/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/core/components/ui/select";
import { Switch } from "~/core/components/ui/switch";
import { Label } from "~/core/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "~/core/components/ui/card";
import { Separator } from "~/core/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "~/core/components/ui/alert";
import { z } from "zod";
import { Form } from "react-router";


const schema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  visibility: z.string().min(1),
  tags: z.array(z.string()).min(1),
  content: z.string().min(1),
});

export default function NewQuestionScreen() {
  

  return (
    <div>
           <div className="flex flex-col h-40 gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">새 질문 작성</h1>
        <span className="text-sm text-muted-foreground block whitespace-pre-wrap">
          새 질문을 작성해보세요.
        </span>
      </div>
    <Form  className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
       
      {/* 좌측: 폼 */}
      <div className="space-y-5">
        <Card>
          <CardHeader><CardTitle>질문 기본 정보</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">제목</Label>
              <Input id="title" placeholder="쟁점을 드러내는 제목" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>카테고리</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="선택" /></SelectTrigger>
                  <SelectContent>
                    {["법인세","소득세","부가세","상속·증여","국제조세"].map(c=>(
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>공개 범위</Label>
                <Select>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">전체 공개</SelectItem>
                    <SelectItem value="members">세무사 회원</SelectItem>
                    <SelectItem value="invited">초대 전용</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* 태그: 간단 버전 - 콤마로 구분 입력 */}
            <div className="space-y-2">
              <Label htmlFor="tags">태그(최대 5개)</Label>
              <Input
                id="tags"
                placeholder="예: 부가세, 영세율, 판례"
                onBlur={(e) => {
                  const arr = e.currentTarget.value.split(",").map(s=>s.trim()).filter(Boolean).slice(0,5);
                  // form.setValue("tags", arr);
                }}
              />
              <p className="text-xs text-muted-foreground">쉼표(,)로 구분해 최대 5개</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>본문</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Textarea rows={12} placeholder={`사실관계, 쟁점, 원하는 결론, 참고자료 링크 등을 포함해 주세요.\n예: 계약서/세금계산서/판례 링크`} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>증빙 첨부</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Input type="file" multiple onChange={async (e) => {
              // 업로드 처리 → URL 생성 → form.setValue("attachments", [...])
            }} />
            <p className="text-xs text-muted-foreground">10MB 이하, 최대 10개</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>보상형 질문</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>보상형으로 설정</Label>
                <p className="text-xs text-muted-foreground">채택 시 답변자에게 사례비 지급</p>
              </div>
              <Switch
                // checked={form.watch("bountyEnabled")}
                onCheckedChange={(v) => {
                  // form.setValue("bountyEnabled", v);
                  // if (!v) form.setValue("bountyAmount", null);
                }}
              />
            </div>
            {/* {form.watch("bountyEnabled") && ( */}
              <>
                <Input
                  type="number"
                  min={50000}
                  step={10000}
                  placeholder="금액(원)"
                  // onChange={(e)=>form.setValue("bountyAmount", Number(e.target.value))}
                />
                <Alert>
                  <AlertTitle>안내</AlertTitle>
                  <AlertDescription className="text-sm">
                    결제는 등록 후 진행됩니다. 결제 완료 시 질문이 ‘유료’로 표시되며
                    채택 시 사례비가 자동 정산됩니다(수수료 제외).
                  </AlertDescription>
                </Alert>
              </>
            {/* )} */}

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>익명으로 공개</Label>
                <p className="text-xs text-muted-foreground">작성자명 비공개(운영자만 확인)</p>
              </div>
              <Switch checked={false} onCheckedChange={()=>{}} />
              {/* <Switch checked={form.watch("isAnonymous")} onCheckedChange={(v)=>form.setValue("isAnonymous", v)} /> */}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline">임시저장</Button>
          <Button type="button" variant="secondary">미리보기</Button>
          <Button type="submit">등록</Button>
        </div>
      </div>

      {/* 우측: 가이드/정책 */}
      <aside className="space-y-4 sticky top-20 self-start">
        <Card>
          <CardHeader><CardTitle>좋은 질문 체크리스트</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>사실관계(날짜/당사자/금액) 명확히</li>
              <li>쟁점 1~2개로 압축</li>
              <li>원하는 결론/기대효과 제시</li>
              <li>참고자료 링크/증빙 첨부</li>
            </ul>
            <Separator />
            <div className="text-xs text-muted-foreground">제목 입력 시 유사 질문을 자동 제안합니다.</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>정책</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>· 개인정보/납세자 식별정보는 마스킹</div>
            <div>· 법령/판례 인용 시 출처 명기</div>
            <div>· 영업비밀/수사 관련 사안은 업로드 금지</div>
          </CardContent>
        </Card>
      </aside>
    </Form>
    </div>
  );
}

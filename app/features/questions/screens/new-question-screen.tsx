import { useMemo, useState } from "react";
import { Form } from "react-router";
import { z } from "zod";

import { Button } from "~/core/components/ui/button";
import { Input } from "~/core/components/ui/input";
import { Textarea } from "~/core/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/core/components/ui/select";
import { Switch } from "~/core/components/ui/switch";
import { Label } from "~/core/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "~/core/components/ui/card";
import { Separator } from "~/core/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "~/core/components/ui/alert";
import { Tabs, TabsList, TabsTrigger } from "~/core/components/ui/tabs";
import Hero from "~/core/components/hero";
import { INDUSTRY_CODES } from "~/core/lib/constants";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "~/core/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/core/components/ui/popover";
import type { Route } from "./+types/new-question-screen";

/* ------------------------------- 스키마 ---------------------------------- */
const schema = z.object({
  title: z.string().min(1),
  // 주제 축(카테고리 → 법 → 서브법)
  category_id: z.string().min(1),
  law_id: z.string().min(1),
  sublaw: z.enum(["법", "시행령", "시행규칙"]),
  // 관점 축
  view_type: z.enum(["statute", "practice"]),
  visibility: z.enum(["public", "members", "invited"]),
  // 공통
  tags: z.array(z.string()).min(0).max(5),
  content: z.string().min(1),
  // 보상형
  bounty_enabled: z.union([z.literal("on"), z.literal("off")]).optional(),
  bounty_amount: z.string().optional(),
  // 익명
  is_anonymous: z.union([z.literal("on"), z.literal("off")]).optional(),
  // 법령기반 메타
  article_ref: z.string().optional(),
  precedent_refs: z.array(z.string()).optional(),
  // 실무기반 메타
  industry: z.string().optional(),
  transaction_type: z.string().optional(),
  filing_type: z.string().optional(),
  period_start: z.string().optional(),
  period_end: z.string().optional(),
  amount_range: z.string().optional(),
  evidence: z.string().optional(),
});

/* ------------------------- 데모 카테고리(그대로 유지) ------------------------- */
const DEMO_CATEGORIES = [
  {
    id: "national",
    name: "국세",
    laws: [
      "소득세법",
      "법인세법",
      "부가가치세법",
      "상속세 및 증여세법",
      "조세특례제한법",
      "종합부동산세법",
    ],
  },
  {
    id: "local",
    name: "지방세",
    laws: ["지방세법", "지방세기본법", "지방세징수법", "지방세특례제한법"],
  },
  {
    id: "intl",
    name: "국제조세",
    laws: ["국제조세조정에 관한 법률", "외국인투자촉진법"],
  },
  {
    id: "procedure",
    name: "절차/기본/징수",
    laws: ["국세기본법", "국세징수법", "조세범처벌법", "조세범처벌절차법"],
  },
  {
    id: "special",
    name: "특별/기타",
    laws: [
      "개별소비세법",
      "주세법",
      "주류 면허 등에 관한 법률",
      "인지세법",
      "교육세법",
      "농어촌특별세법",
      "자산재평가법",
      "교통·에너지·환경세법",
      "증권거래세법",
    ],
  },
];

/* -------------------------- ⬇️ 업종 검색 유틸 추가 -------------------------- */
// INDUSTRY_CODES는 다음과 같은 구조를 가정합니다.
// [{ code: "A", name: "농업, 임업 및 어업(01~03)", children?: [{code:"01", name:"농업"}, ...] }, ...]
type IndustryNode = {
  code: string;
  name: string;
  children?: { code: string; name: string }[];
};
type FlatItem = {
  code: string;     // 예: "01" 또는 "A"
  name: string;     // 예: "농업"
  path: string;     // 예: "A > 농업, 임업 및 어업(01~03) > 01 농업"
  parentCode?: string;
  parentName?: string;
  _chosung: string; // 초성 인덱스
};

const CHO = [
  "ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"
] as const;


export const meta: Route.MetaFunction = () => {
  return [
    { title: "질문 등록" },
  ];
};

function getChosung(str: string): string {
  const base = 0xac00;
  const choUnit = 21 * 28;
  let out = "";
  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (0xac00 <= code && code <= 0xd7a3) {
      const choIndex = Math.floor((code - base) / choUnit);
      out += CHO[choIndex];
    } else {
      out += ch;
    }
  }
  return out;
}

function buildIndex(data: IndustryNode[]): FlatItem[] {
  const out: FlatItem[] = [];
  for (const p of data) {
    const parentPath = `${p.code} > ${p.name}`;
    // 상위도 검색 대상으로 포함
    out.push({
      code: p.code,
      name: p.name,
      path: parentPath,
      _chosung: getChosung(p.name),
    });
    if (p.children?.length) {
      for (const c of p.children) {
        out.push({
          code: c.code,
          name: c.name,
          path: `${parentPath} > ${c.code} ${c.name}`,
          parentCode: p.code,
          parentName: p.name,
          _chosung: getChosung(c.name),
        });
      }
    }
  }
  return out;
}

function isJamoOnly(q: string) {
  const t = q.replace(/\s+/g, "");
  return !!t && /^[ㄱ-ㅎ]+$/.test(t);
}

function searchIndustry(index: FlatItem[], raw: string, limit = 30): FlatItem[] {
  const q = raw.trim();
  if (!q) return [];
  const qLower = q.toLowerCase();
  const qIsJamo = isJamoOnly(q);
  type Scored = { item: FlatItem; score: number };
  const buf: Scored[] = [];

  for (const it of index) {
    let s = -1;

    // 초성 매칭
    if (qIsJamo) {
      const target = it._chosung.replace(/\s+/g, "");
      const needle = q.replace(/\s+/g, "");
      if (target.startsWith(needle)) s = Math.max(s, 90);
      else if (target.includes(needle)) s = Math.max(s, 60);
    }

    // name 매칭
    if (it.name.startsWith(q)) s = Math.max(s, 100);
    else if (it.name.includes(q)) s = Math.max(s, 70);
    else if (it.name.toLowerCase().startsWith(qLower)) s = Math.max(s, 68);
    else if (it.name.toLowerCase().includes(qLower)) s = Math.max(s, 50);

    // code 매칭
    const codeLower = it.code.toLowerCase();
    if (codeLower.startsWith(qLower)) s = Math.max(s, 85);
    else if (codeLower.includes(qLower)) s = Math.max(s, 55);

    if (s >= 0) buf.push({ item: it, score: s });
  }

  buf.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.item.name.length !== b.item.name.length) return a.item.name.length - b.item.name.length;
    return a.item.name.localeCompare(b.item.name, "ko");
  });

  return buf.slice(0, limit).map(v => v.item);
}
/* ------------------------ 업종 검색 유틸 끝 ------------------------ */

export default function NewQuestionScreen() {
  // 관점(법령/실무)
  const [viewType, setViewType] = useState<"statute" | "practice">("practice");

  // 카테고리/법/서브법 선택 상태 (hidden input 동기화용)
  const [categoryId, setCategoryId] = useState<string>("");
  const [lawName, setLawName] = useState<string>("");
  const [subLaw, setSubLaw] = useState<"법" | "시행령" | "시행규칙" | "">("");

  // 공개 범위
  const [visibility, setVisibility] = useState<"public" | "members" | "invited">("members");

  // 태그: 입력창 한 줄 → hidden inputs(tags[])
  const [tagInput, setTagInput] = useState<string>("");

  // 보상형/금액/익명
  const [bountyEnabled, setBountyEnabled] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  // 선택된 카테고리의 법 목록
  const lawsOfSelected = useMemo(() => {
    const c = DEMO_CATEGORIES.find((v) => v.id === categoryId);
    return c?.laws ?? [];
  }, [categoryId]);

  // 태그 배열로 변환
  const tags = useMemo(
    () =>
      tagInput
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 5),
    [tagInput]
  );

  /* ---------------------- ⬇️ 업종 Command 검색 상태 ---------------------- */
  const industryIndex = useMemo(() => buildIndex(INDUSTRY_CODES as IndustryNode[]), []);
  const [industryQuery, setIndustryQuery] = useState("");
  const [industryOpen, setIndustryOpen] = useState(false);
  const [industryName, setIndustryName] = useState("");   // 표시/제출용 이름
  const [industryCode, setIndustryCode] = useState("");   // 제출용 코드

  const industryResults = useMemo(() => {
    if (!industryQuery) return [];
    return searchIndustry(industryIndex, industryQuery, 30);
  }, [industryQuery, industryIndex]);

  const applyIndustry = (item: FlatItem) => {
    setIndustryName(item.name);
    setIndustryCode(item.code);
    setIndustryOpen(false);
  };
  /* ---------------------- 업종 Command 검색 끝 ---------------------- */

  return (
    <div className="pb-16">
      <Hero title="질문 등록" />

      {/* action/loader로 처리: multipart 필요 시 encType 추가 */}
      <Form method="post" className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* 좌측: 폼 */}
        <div className="space-y-5">
          {/* 관점(법령/실무) */}
          <Card>
            <CardHeader>
              <CardTitle>질문 성격</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={viewType} onValueChange={(v) => setViewType(v as any)}>
                <TabsList>
                  <TabsTrigger value="statute">법령기반</TabsTrigger>
                  <TabsTrigger value="practice">실무기반</TabsTrigger>
                </TabsList>
              </Tabs>
              {/* 제출용 hidden */}
              <input type="hidden" name="view_type" value={viewType} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>질문 기본 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">제목</Label>
                <Input id="title" name="title" placeholder="쟁점을 드러내는 제목" required />
              </div>

              {/* 주제 축: 카테고리 → 법 → (법/시행령/시행규칙) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>대분류(카테고리)</Label>
                  <Select onValueChange={(v) => {
                    setCategoryId(v);
                    setLawName("");
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {DEMO_CATEGORIES.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="category_id" value={categoryId} />
                </div>

                <div className="space-y-2">
                  <Label>법(소속 법령)</Label>
                  <Select onValueChange={(v) => setLawName(v)} value={lawName || undefined}>
                    <SelectTrigger>
                      <SelectValue placeholder="선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {lawsOfSelected.map((ln) => (
                        <SelectItem key={ln} value={ln}>
                          {ln}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="law_id" value={lawName} />
                </div>

                <div className="space-y-2">
                  <Label>세부 구분</Label>
                  <Select onValueChange={(v) => setSubLaw(v as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="법/시행령/시행규칙" />
                    </SelectTrigger>
                    <SelectContent>
                      {["법", "시행령", "시행규칙"].map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="sublaw" value={subLaw} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>공개 범위</Label>
                <Select onValueChange={(v) => setVisibility(v as any)} defaultValue={visibility}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">전체 공개</SelectItem>
                    <SelectItem value="members">세무사 회원</SelectItem>
                    <SelectItem value="invited">초대 전용</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="visibility" value={visibility} />
              </div>

              {/* 태그: 콤마 분리 → tags[] */}
              <div className="space-y-2">
                <Label htmlFor="tags">태그(최대 5개)</Label>
                <Input
                  id="tags"
                  placeholder="예: 부가세, 영세율, 판례"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.currentTarget.value)}
                />
                {tags.map((t, i) => (
                  <input key={t + i} type="hidden" name="tags[]" value={t} />
                ))}
                <p className="text-xs text-muted-foreground">쉼표(,)로 구분해 최대 5개</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>본문</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                name="content"
                rows={12}
                required
                placeholder={`사실관계, 쟁점, 원하는 결론, 참고자료 링크 등을 포함해 주세요.\n예: 계약서/세금계산서/판례 링크`}
              />
            </CardContent>
          </Card>

          {/* 파일 업로드 */}
          <Card>
            <CardHeader>
              <CardTitle>증빙 첨부</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input type="file" name="files" multiple />
              <p className="text-xs text-muted-foreground">10MB 이하, 최대 10개</p>
            </CardContent>
          </Card>

          {/* 보상형 */}
          <Card>
            <CardHeader>
              <CardTitle>보상형 질문</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>보상형으로 설정</Label>
                  <p className="text-xs text-muted-foreground">채택 시 답변자에게 사례비 지급</p>
                </div>
                <Switch
                  checked={bountyEnabled}
                  onCheckedChange={(v) => setBountyEnabled(v)}
                  aria-label="보상형 여부"
                />
                <input type="hidden" name="bounty_enabled" value={bountyEnabled ? "on" : "off"} />
              </div>

              {bountyEnabled && (
                <>
                  <Input
                    type="number"
                    min={50000}
                    step={10000}
                    placeholder="금액(원)"
                    name="bounty_amount"
                    required
                  />
                  <Alert>
                    <AlertTitle>안내</AlertTitle>
                    <AlertDescription className="text-sm">
                      결제는 등록 후 진행됩니다. 결제 완료 시 질문이 ‘유료’로 표시되며 채택 시 사례비가 자동 정산됩니다(수수료 제외).
                    </AlertDescription>
                  </Alert>
                </>
              )}

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>익명으로 공개</Label>
                  <p className="text-xs text-muted-foreground">작성자명 비공개(운영자만 확인)</p>
                </div>
                <Switch
                  checked={isAnonymous}
                  onCheckedChange={(v) => setIsAnonymous(v)}
                  aria-label="익명 여부"
                />
                <input type="hidden" name="is_anonymous" value={isAnonymous ? "on" : "off"} />
              </div>
            </CardContent>
          </Card>

          {/* 관점별 메타필드 */}
          {viewType === "statute" ? (
            <Card>
              <CardHeader>
                <CardTitle>법령기반 메타</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="article_ref">관련 조문(자유 입력)</Label>
                  <Input id="article_ref" name="article_ref" placeholder="예: 소득세법 시행령 제155조 제1항" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="precedent_refs">판례/예규(쉼표로 구분)</Label>
                  <Input id="precedent_refs" name="precedent_refs" placeholder="예: 대법원 2020두12345, 국심 2019중부0000" />
                  <p className="text-xs text-muted-foreground">서버에서 쉼표 분리해 배열로 저장 권장</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>실무기반 메타</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* ⬇️ 업종: Command 검색 + 자유 입력 결합 */}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="industry">업종</Label>

                  {/* 자유 입력(표시/제출용): 사용자가 직접 텍스트 확정 가능 */}
                  <Input
                    id="industry"
                    name="industry"
                    placeholder="예: 국제운송/IT/제조/건설"
                    value={industryName}
                    onChange={(e) => {
                      const v = e.currentTarget.value;
                      setIndustryName(v);
                      setIndustryQuery(v);      // 입력값으로 검색
                      setIndustryOpen(!!v);     // 입력이 있으면 팝오버 오픈
                      // 자유 입력 시 code는 비움(선택하면 code 세팅)
                      setIndustryCode("");
                    }}
                  />

                  {/* Command 검색 팝오버 */}
                  <Popover open={industryOpen} onOpenChange={setIndustryOpen}>
                    <PopoverTrigger asChild>
                      <div />
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width,320px)]" align="start">
                      <Command shouldFilter={false}>
                        <CommandInput
                          value={industryQuery}
                          onValueChange={setIndustryQuery}
                          placeholder="업종 검색(예: 세, ㄱㄴ, 01, A...)"
                          autoFocus
                        />
                        <CommandList>
                          <CommandEmpty>결과가 없습니다.</CommandEmpty>
                          <CommandGroup heading="검색 결과">
                            {industryResults.map((it) => (
                              <CommandItem
                                key={`${it.path}-${it.code}`}
                                onSelect={() => {
                                  applyIndustry(it);
                                }}
                              >
                                <div className="flex flex-col">
                                  <span className="font-medium">{it.code} {it.name}</span>
                                  <span className="text-xs text-muted-foreground">{it.path}</span>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  {/* 선택된 코드 제출용(hidden) */}
                  <input type="hidden" name="industry_code" value={industryCode} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transaction_type">거래유형</Label>
                  <Input id="transaction_type" name="transaction_type" placeholder="예: 용역/수출/역발행" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="filing_type">신고유형</Label>
                  <Input id="filing_type" name="filing_type" placeholder="예: 정기/수정/경정/기한후" />
                </div>
                <div className="space-y-2">
                  <Label>과세기간</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="date" name="period_start" />
                    <Input type="date" name="period_end" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount_range">금액대(선택)</Label>
                  <Input id="amount_range" name="amount_range" placeholder="예: 1천만~5천만 / 5천만~1억" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="evidence">첨부/증빙 개요</Label>
                  <Textarea id="evidence" name="evidence" rows={4} placeholder="계약서, 세금계산서, 외화입금증명 등" />
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2 justify-end">
            <Button type="submit" name="_intent" value="save-draft" variant="outline">
              임시저장
            </Button>
            <Button type="submit" name="_intent" value="preview" variant="secondary">
              미리보기
            </Button>
            <Button type="submit" name="_intent" value="create">
              등록
            </Button>
          </div>
        </div>

        {/* 우측: 가이드/정책 */}
        <aside className="space-y-4 sticky top-20 self-start">
          <Card>
            <CardHeader>
              <CardTitle>좋은 질문 체크리스트</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>사실관계(날짜/당사자/금액) 명확히</li>
                <li>쟁점 1~2개로 압축</li>
                <li>원하는 결론/기대효과 제시</li>
                <li>참고자료 링크/증빙 첨부</li>
              </ul>
              <Separator />
              <div className="text-xs text-muted-foreground">
                제목 입력 시 유사 질문을 자동 제안합니다.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>정책</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <div>· 개인정보/납세자 식별정보는 마스킹</div>
              <div>· 법령/판례 인용 시 출처 명기</div>
              <div>· 영업비밀/수사 관련 사안은 업로드 금지</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>세법 검색 [API준비중]</CardTitle>
              <CardDescription> 검색 후 조문 참조 가능</CardDescription>
            </CardHeader>
            <CardContent>
              <Form method="get" action="/law/api/search">
                <Input type="text" placeholder="예: 소득세법, 장기보유특별공제" />
              </Form>
            </CardContent>
          </Card>
        </aside>
      </Form>
    </div>
  );
}

/**
 * 개별 판례 상세 보기 화면
 * 
 * 이 파일은 선택된 판례의 상세 정보를 표시하는 화면을 제공합니다.
 * 주요 기능:
 * 1. 판례 기본 정보 표시 (4:2 비율 그리드)
 * 2. 판례 내용 및 요약 상세 보기
 * 3. 관련 판례 및 태그 정보
 * 4. 판례 수정 및 삭제 기능
 */

import { useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Edit, Trash2, Calendar, Scale, BookOpen, Tag, FileText, Download, Share2, Send } from "lucide-react";

// UI 컴포넌트들
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "~/core/components/ui/card";
import { Button } from "~/core/components/ui/button";
import { Badge } from "~/core/components/ui/badge";
import { Separator } from "~/core/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/core/components/ui/dialog";
import Hero from "~/core/components/hero";
import { Avatar, AvatarImage, AvatarFallback } from "~/core/components/ui/avatar";
import { Input } from "~/core/components/ui/input";

/**
 * 판례 상세 데이터 타입 정의
 */
interface CaselawDetail {
  id: string;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  judge: string;
  plaintiff: string;
  defendant: string;
  result: string;
  reasoning: string;
  relatedCases: Array<{
    id: string;
    title: string;
    caseNumber: string;
    similarity: number;
  }>;
  attachments: Array<{
    name: string;
    type: string;
    size: string;
    url: string;
  }>;
}

/**
 * 샘플 판례 상세 데이터
 */
const sampleCaselawDetail: CaselawDetail = {
  id: "1",
  title: "소득세법 위반 사건",
  caseNumber: "2023두12345",
  court: "대법원",
  date: "2023-12-15",
  summary: "연말정산 시 공제 항목에 대한 판례로, 의료비 공제의 범위와 한도를 명확히 한 사건입니다.",
  content: `이 사건은 연말정산 시 의료비 공제와 관련된 중요한 판례로, 다음과 같은 주요 쟁점을 다루고 있습니다:

1. 의료비 공제의 범위
   - 의료기관에서 발생한 비용의 인정 기준
   - 약품비와 치료비의 구분
   - 보험금을 받은 경우의 공제 한도

2. 공제 한도의 계산 방법
   - 총수입금액 대비 의료비 비율
   - 연간 공제 한도액
   - 가족 의료비의 합산 계산

3. 증빙서류의 요건
   - 의료기관 발행 영수증의 필수성
   - 처방전과 약품명세서의 증빙력
   - 전자문서의 증빙 가능성

이 판례는 의료비 공제와 관련된 실무상 중요한 기준을 제시하여, 향후 유사한 사건에 대한 판단의 지침이 되고 있습니다.`,
  category: "세법",
  tags: ["소득세", "공제", "연말정산", "의료비", "공제한도"],
  judge: "대법원 제3부",
  plaintiff: "국세청장",
  defendant: "김○○",
  result: "원고 승소",
  reasoning: `의료비 공제는 의료기관에서 발생한 비용 중 실제 의료행위와 직접적으로 관련된 비용에 한정하여 인정되어야 하며, 
  이는 소득세법 제52조의2의 입법 취지와도 부합한다. 다만, 공제 한도는 총수입금액의 3%를 초과할 수 없으며, 
  보험금을 받은 경우에는 그 금액을 공제한 후의 금액이 공제 대상이 된다.`,
  relatedCases: [
    {
      id: "2",
      title: "의료비 공제 범위 사건",
      caseNumber: "2023두12340",
      similarity: 95
    },
    {
      id: "3",
      title: "연말정산 공제 한도 사건",
      caseNumber: "2023두12341",
      similarity: 87
    },
    {
      id: "4",
      title: "가족 의료비 합산 사건",
      caseNumber: "2023두12342",
      similarity: 82
    }
  ],
  attachments: [
    {
      name: "판결문.pdf",
      type: "PDF",
      size: "2.3MB",
      url: "#"
    },
    {
      name: "증거자료.zip",
      type: "ZIP",
      size: "15.7MB",
      url: "#"
    }
  ]
};

/**
 * 개별 판례 상세 보기 화면 컴포넌트
 */
export default function CaselawScreen() {
  const { id } = useParams<{ id: string }>();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // 실제로는 useParams로 받은 id로 API 호출하여 데이터 가져오기
  const caselaw = sampleCaselawDetail;

  /**
   * 판례 삭제 처리
   */
  const handleDelete = () => {
    console.log("판례 삭제:", caselaw.id);
    // TODO: API 호출 로직 구현
    alert("판례가 삭제되었습니다.");
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero 섹션 */}
      <Hero title={caselaw.title} subtitle={caselaw.caseNumber} />

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-8">
        {/* 4:2 비율 그리드 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* 왼쪽 메인 콘텐츠 (4/6) */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {/* 기본 정보 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    기본 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">판례 제목</Label>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{caselaw.title}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">사건번호</Label>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{caselaw.caseNumber}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">법원</Label>
                      <p className="text-gray-900 dark:text-white mt-1">{caselaw.court}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">판결일자</Label>
                      <p className="text-gray-900 dark:text-white mt-1">{caselaw.date}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">카테고리</Label>
                      <Badge variant="secondary" className="mt-1">{caselaw.category}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">원고</Label>
                      <p className="text-gray-900 dark:text-white mt-1">{caselaw.plaintiff}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">피고</Label>
                      <p className="text-gray-900 dark:text-white mt-1">{caselaw.defendant}</p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">판결 결과</Label>
                    <Badge variant={caselaw.result === "원고 승소" ? "default" : "destructive"} className="mt-1">
                      {caselaw.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* 판례 요약 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    판례 요약(AI)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {caselaw.summary}
                  </p>
                </CardContent>
              </Card>

              {/* 판례 내용 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    판례 내용
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {caselaw.content}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 판시사항 및 이유 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    판시사항 및 이유
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">판시사항</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {caselaw.reasoning}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">판결 이유</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      이 사건의 판결 이유는 다음과 같습니다. 의료비 공제의 범위와 한도에 대한 법적 해석을 통해 
                      소득세법의 공제 제도가 가지는 의미와 한계를 명확히 하였으며, 이는 향후 유사한 사건에 대한 
                      판단의 기준이 될 것입니다.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* {코멘트목록} */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="text-3xl font-bold">코멘트</h1>
                    <div className="block w-full space-y-2">
                    <Input type="textarea" placeholder="코멘트를 입력해주세요." className="w-full min-h-[150px]" />
                    <Button variant="outline" className="w-full">
                        <Send className="w-4 h-4" />
                        전송
                    </Button>
                    </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>
                    <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">2023-01-01</p>
                        </div>
                        </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                       
                        <div className="flex flex-col gap-2">
                            <p>아쉽지만 옳은 판결이네요.</p>
                        </div>
                        </div>
                      </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* 오른쪽 사이드바 (2/6) */}
          <aside className="lg:col-span-2">
            <div className="space-y-6">
              {/* 태그 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    태그
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {caselaw.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 관련 판례 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    관련 판례
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {caselaw.relatedCases.map((relatedCase) => (
                    <div key={relatedCase.id} className="border-b border-gray-100 dark:border-gray-800 pb-3 last:border-b-0">
                      <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1 line-clamp-2">
                        {relatedCase.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedCase.caseNumber}</span>
                        <Badge variant="secondary" className="text-xs">
                          {relatedCase.similarity}% 유사
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* 첨부파일 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    첨부파일
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {caselaw.attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {file.type} • {file.size}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* 액션 버튼들 */}
              <div className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  판례 수정
                </Button>
                <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      판례 삭제
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>판례 삭제 확인</DialogTitle>
                      <DialogDescription>
                        정말로 이 판례를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-3 justify-end">
                      <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                        취소
                      </Button>
                      <Button variant="destructive" onClick={handleDelete}>
                        삭제
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button className="w-full" variant="secondary">
                  <Share2 className="w-4 h-4 mr-2" />
                  공유하기
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// Label 컴포넌트 정의 (shadcn/ui에 없는 경우)
const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={className} {...props}>
    {children}
  </label>
);

import type { Route } from "./+types/law-test";
import { useLoaderData, useFetcher, Form, Link } from "react-router";
import { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "~/core/components/ui/card";
import { Input } from "~/core/components/ui/input";
import { Button } from "~/core/components/ui/button";
import { Separator } from "~/core/components/ui/separator";
import { Badge } from "~/core/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/core/components/ui/dialog";

// 법령 데이터 구조 정의
interface LawStructure {
  법령정보: {
    법령명: string;
    시행일자: string;
    공포일자: string;
    소관부처: string;
  };
  조문: {
    조문단위: Array<{
      조문키: string;
      조문번호: string;
      조문내용: string;
      항: Array<{
        항번호: string;
        항내용: string;
        호: Array<{
          호번호: string;
          호내용: string;
        }>;
      }>;
    }>;
  };
}

// 검색 결과 타입 정의
interface SearchResult {
  조문키: string;
  조문번호: string;
  조문내용: string;
  매칭타입: "조문" | "항" | "호";
  매칭위치: string;
  매칭내용: string;
  부모정보: {
    법령명: string;
    조문제목?: string;
  };
  전체맥락: {
    조문: string;
    항: string[];
    호: string[];
  };
}

// 법령 검색 엔진 클래스
class LawSearchEngine {
  private lawData: LawStructure;

  constructor(lawData: LawStructure) {
    this.lawData = lawData;
  }

  // 키워드 검색 메인 함수
  searchByKeyword(keyword: string): SearchResult[] {
    if (!keyword.trim()) return [];

    // 2글자 미만이면 검색하지 않음
    if (keyword.trim().length < 2) return [];

    // 검색어를 쉼표로 분리하여 여러 단어로 처리
    const keywords = keyword
      .trim()
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length >= 2);
    if (keywords.length === 0) return [];

    const results: SearchResult[] = [];

    try {
      for (const 조문 of this.lawData.조문.조문단위) {
        // 조문내용에서 검색 - 모든 키워드가 포함되어야 함
        if (
          조문.조문내용 &&
          typeof 조문.조문내용 === "string" &&
          this.containsAllKeywords(조문.조문내용, keywords)
        ) {
          results.push(
            this.createSearchResult(조문, "조문", keyword, 조문.조문내용)
          );
        }

        // 항내용에서 검색 - 안전한 배열 체크
        if (조문.항 && Array.isArray(조문.항)) {
          for (const 항 of 조문.항) {
            if (
              항.항내용 &&
              typeof 항.항내용 === "string" &&
              this.containsAllKeywords(항.항내용, keywords)
            ) {
              results.push(
                this.createSearchResult(조문, "항", keyword, 항.항내용, 항)
              );
            }

            // 호내용에서 검색 - 안전한 배열 체크
            if (항.호 && Array.isArray(항.호)) {
              for (const 호 of 항.호) {
                if (
                  호.호내용 &&
                  typeof 호.호내용 === "string" &&
                  this.containsAllKeywords(호.호내용, keywords)
                ) {
                  results.push(
                    this.createSearchResult(
                      조문,
                      "호",
                      keyword,
                      호.호내용,
                      항,
                      호
                    )
                  );
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
      console.log("현재 조문 데이터:", this.lawData.조문.조문단위);
    }

    return results;
  }

  // 모든 키워드가 포함되어 있는지 확인하는 헬퍼 함수
  private containsAllKeywords(text: string, keywords: string[]): boolean {
    return keywords.every((keyword) => text.includes(keyword));
  }

  // 검색 결과 생성
  private createSearchResult(
    조문: any,
    매칭타입: "조문" | "항" | "호",
    keyword: string,
    매칭내용: string,
    항?: any,
    호?: any
  ): SearchResult {
    return {
      조문키: 조문.조문키,
      조문번호: 조문.조문번호,
      조문내용: 조문.조문내용,
      매칭타입,
      매칭위치: this.getMatchingLocation(매칭타입, 조문, 항, 호),
      매칭내용,
      부모정보: {
        법령명: this.lawData.법령정보.법령명,
        조문제목: this.extractArticleTitle(조문.조문내용),
      },
      전체맥락: this.getFullContext(조문),
    };
  }

  // 매칭 위치 정보 생성
  private getMatchingLocation(
    매칭타입: string,
    조문: any,
    항?: any,
    호?: any
  ): string {
    let location = 조문.조문번호;

    if (매칭타입 === "항" && 항) {
      location += ` ${항.항번호}`;
    } else if (매칭타입 === "호" && 항 && 호) {
      location += ` ${항.항번호} ${호.호번호}`;
    }

    return location;
  }

  // 조문 제목 추출 (괄호 안의 내용)
  private extractArticleTitle(조문내용: string): string | undefined {
    const match = 조문내용.match(/\(([^)]+)\)/);
    return match ? match[1] : undefined;
  }

  // 전체 맥락 정보 생성
  private getFullContext(조문: any) {
    return {
      조문: 조문.조문번호,
      항: Array.isArray(조문.항) ? 조문.항.map((항: any) => 항.항번호) : [],
      호: Array.isArray(조문.항)
        ? 조문.항.flatMap((항: any) =>
            Array.isArray(항.호)
              ? 항.호.map((호: any) => `${항.항번호} ${호.호번호}`)
              : []
          )
        : [],
    };
  }

  // 텍스트 하이라이트 함수
  highlightText(text: string, keyword: string): string {
    if (!keyword.trim()) return text;

    // 검색어를 쉼표로 분리하여 여러 단어로 처리
    const keywords = keyword
      .trim()
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length >= 2);
    if (keywords.length === 0) return text;

    let highlightedText = text;

    // 각 키워드를 순차적으로 하이라이트
    for (const kw of keywords) {
      const regex = new RegExp(`(${kw})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>'
      );
    }

    return highlightedText;
  }
}

// 초기 쿼리만 읽어서 그대로 넘김(검색은 fetcher가 처리)
export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  return { initialQ: q };
}

export default function LawTestTextScreen({}: Route.ComponentProps) {
  const { initialQ } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<{ items: any[]; total: number }>();
  const detailFetcher = useFetcher<any>();
  const detailItemFetcher = useFetcher<any>();

  //법령ID저장
  const [lawId, setLawId] = useState<number>(0);

  // 검색 관련 상태
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchEngine, setSearchEngine] = useState<LawSearchEngine | null>(
    null
  );

  // 상세 조문 데이터 상태
  const [selectedArticleData, setSelectedArticleData] = useState<any>(null);

  // Dialog 열림/닫힘 상태
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const items = fetcher.data?.items ?? [];
  const total = fetcher.data?.total ?? 0;
  // 검색 엔진 초기화
  useEffect(() => {
    if (detailFetcher.data) {
      try {
        // API 응답을 LawStructure 형태로 변환
        const lawData: LawStructure = {
          법령정보: {
            법령명: "법령명", // 실제 데이터에서 추출 필요
            시행일자: "",
            공포일자: "",
            소관부처: "",
          },
          조문: {
            조문단위: detailFetcher.data,
          },
        };

        const engine = new LawSearchEngine(lawData);
        setSearchEngine(engine);

        // 초기 검색 실행
        if (searchKeyword) {
          const results = engine.searchByKeyword(searchKeyword);
          setSearchResults(results);
        }
      } catch (error) {
        console.error("검색 엔진 초기화 오류:", error);
      }
    }
  }, [detailFetcher.data]);

  // 검색 실행
  const handleSearch = async () => {
    if (searchEngine && searchKeyword.trim()) {
      const results = await searchEngine.searchByKeyword(searchKeyword);
      setSearchResults(results);
    }
  };

  // 검색어 변경 시 자동 검색
  useEffect(() => {
    if (searchEngine && searchKeyword.trim()) {
      const results = searchEngine.searchByKeyword(searchKeyword);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword, searchEngine]);

  // detailItemFetcher 데이터 처리
  useEffect(() => {
    const fetchData = async () => {
      if (detailItemFetcher.data) {
        console.log("상세 조문 데이터:", detailItemFetcher.data);
        
        // 배열인 경우 마지막 요소 선택, 단일 객체인 경우 그대로 사용
        let dataToSet;
        if (Array.isArray(detailItemFetcher.data)) {
          // 가장 마지막 요소 선택 (가장 최신 데이터)
          dataToSet = detailItemFetcher.data.at(-1);
          
          // 또는 특정 조건을 만족하는 마지막 요소 선택
          // 예: 조문여부가 "조문"인 것 중 마지막
          // const lastArticle = detailItemFetcher.data
          //   .filter(item => item.조문여부 === "조문")
          //   .at(-1);
          // dataToSet = lastArticle || detailItemFetcher.data.at(-1);
          
          console.log("배열에서 마지막 요소 선택:", dataToSet);
        } else {
          dataToSet = detailItemFetcher.data;
        }
        
        await setSelectedArticleData(dataToSet);
        setIsDialogOpen(true); // Dialog 자동 열기
      }
    };
    fetchData();
  }, [detailItemFetcher.data]);

  return (
    <div className="flex flex-col mx-auto max-w-6xl px-4 py-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>법령 계층적 검색 시스템</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* 법령 검색 폼 */}
          <fetcher.Form
            method="post"
            className="flex gap-2"
            action="/law/api/search"
          >
            <Input
              name="q"
              defaultValue={initialQ}
              placeholder="예: 부가가치세법"
            />
            <Button type="submit" formMethod="post">
              법령 검색
            </Button>
          </fetcher.Form>

          <Separator />

          <div className="text-sm text-muted-foreground">총 {total}건</div>

          {/* 법령 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((it) => (
              <Card key={it.id} className="col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{it.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div>소관부처: {it.ministry || "-"}</div>
                  <div>공포일자: {it.promulgation || "-"}</div>
                  <div>시행일자: {it.effective || "-"}</div>
                  <div>법령ID: {it.law_id || "-"}</div>
                  <div>법령일련번호: {it.law_serial_number || "-"}</div>
                  <div>법령약칭명: {it.law_abbreviation || "-"}</div>
                  {/* <div>법령상세링크: {it.law_detail_link || "-"}</div> */}
                  <div>법령구분명: {it.law_type || "-"}</div>
                  <div>법령명한글: {it.law_name || "-"}</div>
                  <div className="mt-3">
                    <detailFetcher.Form
                      method="post"
                      action={`/law/api/${it.id}`}
                      onSubmit={() => setLawId(it.law_id)}
                    >
                      <Input
                        name="law_name"
                        defaultValue={it.law_name}
                        className="hidden"
                      />
                      <Button type="submit" size="sm" variant="secondary">
                        상세 불러오기
                      </Button>
                    </detailFetcher.Form>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 조문 내용 검색 */}
          {detailFetcher.state === "loading" && <div>상세 로딩중…</div>}
          {detailFetcher.data && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>조문 내용 검색 {lawId}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* 검색 입력 필드 */}
                <div className="mb-4 p-4 bg-muted rounded-lg">
                  <div className="flex gap-2 mb-2">
                    <Input
                      name="search_keyword"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      placeholder="예: 부가가치세,납세의무자 (쉼표로 구분)"
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSearch}
                      variant="secondary"
                      disabled={searchKeyword.trim().length < 2}
                    >
                      검색
                    </Button>
                    <Button
                      onClick={() => {
                        setSearchKeyword("");
                        setSearchResults([]);
                      }}
                      variant="outline"
                    >
                      초기화
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {searchKeyword.length < 2 ? (
                      <span className="text-orange-600">
                        2글자 이상 입력해주세요
                      </span>
                    ) : (
                      <>
                        검색 결과: {searchResults.length}건
                        {searchKeyword && (
                          <>
                            <br />
                            <span className="text-blue-600">
                              검색어: "{searchKeyword}"
                              {searchKeyword
                                .trim()
                                .split(",")
                                .map((k) => k.trim())
                                .filter((k) => k.length >= 2).length > 1 &&
                                ` (${
                                  searchKeyword
                                    .trim()
                                    .split(",")
                                    .map((k) => k.trim())
                                    .filter((k) => k.length >= 2).length
                                }개 단어 모두 포함)`}
                            </span>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* 검색 결과 표시 */}
                {searchResults.length > 0 && (
                  <div className="space-y-4">
                    {searchResults.map((result, index) => (
                      <detailItemFetcher.Form
                        method="post"
                        action={`/law/api/${result.조문키}/content`}
                      >
                        <input type="hidden" name="law_id" value={lawId} />
                        <input
                          type="hidden"
                          name="law_josub"
                          value={result.조문키}
                        />
                        <Card
                          key={index}
                          className="border-l-4 border-l-blue-500"
                        >
                          <CardHeader >
                            <div className="flex items-center gap-2 overflow-hidden">
                              <Button
                                type="submit"
                                size="sm"
                                variant="secondary"
                              >
                                {result.조문내용}
                              </Button>
                              <Badge
                                variant={
                                  result.매칭타입 === "조문"
                                    ? "default"
                                    : result.매칭타입 === "항"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {result.매칭타입}
                              </Badge>
                              <span className="font-semibold">
                                {result.매칭위치}
                              </span>
                              {/* {result.부모정보.조문제목 && (
                                <span className="text-sm text-muted-foreground">
                                  ({result.부모정보.조문제목})
                                </span>
                              )} */}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="p-3 bg-muted/50 rounded">
                              <div className="text-sm font-medium mb-2">
                                매칭된 내용:
                              </div>
                              <div
                                className="text-sm"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    searchEngine?.highlightText(
                                      result.매칭내용,
                                      searchKeyword
                                    ) || result.매칭내용,
                                }}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </detailItemFetcher.Form>
                    ))}
                  </div>
                )}

                {/* 검색 결과가 없을 때 */}
                {searchKeyword && searchResults.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    {searchKeyword.length < 2 ? (
                      <span className="text-orange-600">
                        2글자 이상 입력해주세요
                      </span>
                    ) : (
                      `검색어 "${searchKeyword}"에 대한 결과를 찾을 수 없습니다.`
                    )}
                  </div>
                )}

                {/* 상세 조문 내용 Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent className="w-screen max-h-[80vh] sm:max-w-[50vw] overflow-y-auto">
                    {selectedArticleData && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-xl">
                            {selectedArticleData.조문제목 || "제목 없음"}
                          </DialogTitle>
                          <DialogDescription>
                            조문번호: {selectedArticleData.조문번호} | 시행일자:{" "}
                            {selectedArticleData.조문시행일자}
                          </DialogDescription>
                          <div className="flex justify-end">
                            <Button variant="link">
                              <Link
                                to={`https://www.law.go.kr/DRF/lawService.do?OC=cta.lee&target=lawjosub&type=HTML&ID=${lawId}&JO=${selectedArticleData.조문키?.substring(0, 6)}`}
                                target="_blank"
                              >
                                법령페이지이동
                              </Link>
                            </Button>
                          </div>
                        </DialogHeader>

                        <div className="space-y-4">
                          {/* 조문 내용 */}
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="text-sm font-medium mb-2">
                              조문 내용:
                            </div>
                            <div className="text-sm">
                              {selectedArticleData.조문내용}
                            </div>
                          </div>

                          {/* 항 내용들 */}
                          {selectedArticleData.항 &&
                            selectedArticleData.항.length > 0 && (
                              <div className="space-y-3">
                                <div className="text-sm font-medium">
                                  항 내용:
                                </div>
                                {selectedArticleData.항.map(
                                  (항: any, 항Index: number) => (
                                    <div
                                      key={항Index}
                                      className="p-3 bg-muted/20 rounded-lg border-l-2 border-l-blue-400"
                                    >
                                      <div className="font-medium text-sm mb-2">
                                        {항.항내용}
                                      </div>

                                      {/* 호 내용들 */}
                                      {항.호 && 항.호.length > 0 && (
                                        <div className="ml-4 space-y-2 mt-2">
                                          {항.호.map(
                                            (호: any, 호Index: number) => (
                                              <div
                                                key={호Index}
                                                className="text-sm text-muted-foreground"
                                              >
                                                {호.호내용}
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                          {/* 조문 정보 */}
                          <div className="p-3 bg-muted/10 rounded-lg">
                            <div className="text-xs text-muted-foreground space-y-1">
                              <div>
                                조문키: {selectedArticleData.조문단위?.조문키}
                              </div>
                              <div>
                                변경여부:{" "}
                                {selectedArticleData.조문단위?.조문변경여부}
                              </div>
                              <div>
                                조문여부:{" "}
                                {selectedArticleData.조문단위?.조문여부}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

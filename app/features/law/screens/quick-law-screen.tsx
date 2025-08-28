/**
 * 빠른 법령 검색 화면
 * 
 * 이 파일은 주요 세법들의 조문 내용을 빠르게 검색할 수 있는 화면을 제공합니다.
 * 주요 기능:
 * 1. 법령 데이터 자동 수집 및 로컬 스토리지 캐싱
 * 2. 쉼표로 구분된 다중 키워드 검색
 * 3. 조문, 항, 호 단위별 검색 및 하이라이트
 * 4. 검색 결과 상세 보기 (Dialog)
 * 5. 24시간 캐시 시스템으로 성능 최적화
 */

import { useLoaderData, useFetcher, Link } from "react-router";
import { useState, useEffect } from "react";
import { MAJOR_LAWS_NOT_RULES } from "../constants";

// UI 컴포넌트들
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
} from "~/core/components/ui/dialog";


/**
 * Loader 데이터 타입 정의
 * 
 * 이 인터페이스는 loader 함수에서 반환하는 데이터의 구조를 정의합니다.
 * 법령 데이터 수집 결과와 요약 정보를 포함합니다.
 */
interface LoaderData {
  success: boolean;                    // 데이터 수집 성공 여부
  total_collected: number;            // 실제 수집된 법령 개수
  total_expected: number;             // 예상 수집 법령 개수
  processing_mode: string;            // 처리 모드 (parallel/sequential)
  laws: Array<{                       // 수집된 법령 데이터 배열
    law_id: string;                   // 법령 ID
    law_name: string;                 // 법령명
    raw_data: any;                    // API에서 받은 원본 데이터
    collected_at: string;             // 수집 시간
    status: "success" | "error";      // 수집 상태
    error?: string;                   // 오류 메시지 (실패 시)
  }>;
  summary: {                          // 수집 결과 요약
    successful: number;               // 성공한 법령 개수
    failed: number;                   // 실패한 법령 개수
  };
}

/**
 * 법령 데이터 구조 정의
 * 
 * 이 인터페이스는 법령 API에서 받는 데이터의 구조를 정의합니다.
 * 실제 API 응답과는 다를 수 있으므로 any 타입을 사용합니다.
 */
interface LawStructure {
  법령정보: {
    법령명: string;                   // 법령명
    시행일자: string;                 // 시행일자
    공포일자: string;                 // 공포일자
    소관부처: string;                 // 소관부처
  };
  조문: {
    조문단위: Array<{                 // 조문 단위 배열
      조문키: string;                 // 조문 고유 키
      조문번호: string;               // 조문 번호
      조문내용: string;               // 조문 내용
      항: Array<{                     // 항 배열
        항번호: string;               // 항 번호
        항내용: string;               // 항 내용
        호: Array<{                   // 호 배열
          호번호: string;             // 호 번호
          호내용: string;             // 호 내용
        }>;
      }>;
    }>;
  };
}

/**
 * 검색 결과 타입 정의
 * 
 * 이 인터페이스는 검색 결과의 구조를 정의합니다.
 * 검색된 조문, 항, 호의 정보와 매칭된 내용을 포함합니다.
 */
interface SearchResult {
  조문키: string;                     // 조문 고유 키
  조문번호: string;                   // 조문 번호
  조문내용: string;                   // 조문 전체 내용
  매칭타입: "조문" | "항" | "호";     // 매칭된 타입 (조문/항/호)
  매칭위치: string;                   // 매칭된 위치 (예: "조문 1", "조문 1 항 1")
  매칭내용: string;                   // 키워드가 하이라이트된 매칭 내용
  부모정보: {                         // 부모 정보
    법령명: string;                   // 법령명
    조문제목?: string;                // 조문제목
    법령ID: number;
  };
  전체맥락: {                         // 전체 맥락 정보
    조문: string;                     // 조문 전체 내용
    항: string[];                     // 항 내용들
    호: string[];                     // 호 내용들
  };
}

/**
 * 법령 검색 엔진 클래스
 * 
 * 이 클래스는 법령 데이터에서 키워드를 검색하고 결과를 반환하는 기능을 제공합니다.
 * 조문, 항, 호 단위별로 검색하며, 모든 키워드가 포함된 내용만 결과에 포함합니다.
 */
class LawSearchEngine {
  private lawData: any; // 실제 API 응답 구조에 맞게 any로 변경

  constructor(lawData: any) {
    this.lawData = lawData;
  }

  
    /**
   * 키워드 검색 메인 함수
   * 
   * @param keyword - 검색할 키워드 (쉼표로 구분된 다중 키워드 지원)
   * @returns SearchResult[] - 검색 결과 배열
   * 
   * 동작 방식:
   * 1. 키워드를 쉼표로 분리하여 배열로 변환
   * 2. 조문, 항, 호 단위별로 순회하며 검색
   * 3. 모든 키워드가 포함된 내용만 결과에 포함
   * 4. 키워드를 하이라이트 처리하여 반환
   */
  searchByKeyword(keyword: string): SearchResult[] {
    console.log("키워드 검색 메인 ", this.lawData)
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
      // 실제 API 응답 구조에 맞게 조정
      // API 응답 구조가 다양할 수 있으므로 여러 경로를 시도
      const 조문단위 = this.lawData?.법령?.조문?.조문단위 || this.lawData?.조문?.조문단위 || [];
      const 법령명 = this.lawData?.법령?.기본정보?.법령명_한글 || this.lawData?.법령정보?.법령명 || "알 수 없는 법령";
      const 법령정보 = this.lawData?.법령 || []

      console.log("this.lawData?.법령?.기본정보", this.lawData?.법령?.기본정보)

      console.log("검색 엔진 데이터 구조:", {
        hasLawData: !!this.lawData,
        lawDataKeys: Object.keys(this.lawData || {}),
        hasLaw: !!this.lawData?.법령,
        lawKeys: Object.keys(this.lawData?.법령 || {}),
        hasJoong: !!this.lawData?.법령?.조문,
        joongKeys: Object.keys(this.lawData?.법령?.조문 || {}),
        joongUnitCount: 조문단위?.length || 0,
        lawName: 법령명,
        lawId: this.lawData?.법령?.기본정보?.법령ID,
        gongpoDate: this.lawData?.법령?.기본정보?.공포일자 || "",
        tryDate: this.lawData?.법령?.기본정보?.시행일자 || "",
      });

      // 각 조문 단위에 대해 검색 실행
      for (const 조문 of 법령정보.조문.조문단위) {
        // 조문내용에서 검색 - 모든 키워드가 포함되어야 함
        // console.log("조문.조문내용",조문)
        if (
          조문.조문내용 &&
          typeof 조문.조문내용 === "string" &&
          this.containsAllKeywords(조문.조문내용, keywords)
        ) {
          // console.log("조문.조문내용",조문.조문내용)
          results.push({
            조문키: 조문.조문키 || "",
            조문번호: 조문.조문번호 || "",
            조문내용: 조문.조문내용,
            매칭타입: "조문",
            매칭위치: `조문 ${조문.조문번호}`,
            매칭내용: this.highlightKeywords(조문.조문내용, keywords),
                         부모정보: {
               법령명: 법령명,
               조문제목: 조문.조문내용,
               법령ID: this.lawData?.법령?.기본정보?.법령ID || this.lawData?.법령정보?.법령ID || "수집실패",
             },
            전체맥락: {
              조문: 조문.조문내용,
              항: 조문.항?.map((h: any) => h.항내용) || [],
              호: [조문.항?.flatMap((h: any) => h.호?.map((ho: any) => ho.호내용) || []) || [],]
            },
          });
        }

        // 항에서 검색
        if (조문.항 && 조문.항.length > 0) {
          for (const 항 of 조문.항) {
            if (
              항.항내용 &&
              typeof 항.항내용 === "string" &&
              this.containsAllKeywords(항.항내용, keywords)
            ) {
                             results.push({
                 조문키: 조문.조문키 || "",
                 조문번호: 조문.조문번호 || "",
                 조문내용: 조문.조문내용,
                 매칭타입: "항",
                 매칭위치: `조문 ${조문.조문번호} 항 ${항.항번호}`,
                 매칭내용: this.highlightKeywords(항.항내용, keywords),
                 부모정보: {
                   법령명: 법령명,
                   조문제목: 조문.조문내용,
                   법령ID: this.lawData?.법령?.기본정보?.법령ID || this.lawData?.법령정보?.법령ID || "수집실패",
                 },
                전체맥락: {
                  조문: 조문.조문내용,
                  항: [항.항내용],
                  호: 항.호?.map((ho: any) => ho.호내용) || [],
                },
              });
            }

            // 호에서 검색
            if (항.호 && 항.호.length > 0) {
              for (const 호 of 항.호) {
                if (
                  호.호내용 &&
                  typeof 호.호내용 === "string" &&
                  this.containsAllKeywords(호.호내용, keywords)
                ) {
                                     results.push({
                     조문키: 조문.조문키 || "",
                     조문번호: 조문.조문번호 || "",
                     조문내용: 조문.조문내용,
                     매칭타입: "호",
                     매칭위치: `조문 ${조문.조문번호} 항 ${항.항번호} 호 ${호.호번호}`,
                     매칭내용: this.highlightKeywords(호.호내용, keywords),
                     부모정보: {
                       법령명: 법령명,
                       조문제목: 조문.조문내용,
                       법령ID: this.lawData?.법령?.기본정보?.법령ID || this.lawData?.법령정보?.법령ID || "수집실패",
                     },
                    전체맥락: {
                      조문: 조문.조문내용,
                      항: [항.항내용],
                      호: [호.호내용],
                    },
                  });
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }

    return results;
  }

  /**
   * 모든 키워드가 포함되어 있는지 확인
   * 
   * @param text - 검색할 텍스트
   * @param keywords - 검색할 키워드 배열
   * @returns boolean - 모든 키워드가 포함되어 있으면 true
   * 
   * 대소문자를 구분하지 않고 검색합니다.
   */
  private containsAllKeywords(text: string, keywords: string[]): boolean {
    return keywords.every((keyword) =>
      text.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  /**
   * 키워드 하이라이트 처리
   * 
   * @param text - 원본 텍스트
   * @param keywords - 하이라이트할 키워드 배열
   * @returns string - HTML 태그가 포함된 하이라이트된 텍스트
   * 
   * 검색된 키워드를 노란색 배경으로 하이라이트 처리합니다.
   */
  private highlightKeywords(text: string, keywords: string[]): string {
    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
      );
    });
    return highlightedText;
  }
}


/**
 * Loader 함수
 * 
 * 이 함수는 React Router의 loader로 사용되며, 페이지 로드 시 자동으로 실행됩니다.
 * 주요 기능:
 * 1. API에서 법령 데이터 수집
 * 2. 병렬 처리로 성능 최적화
 * 3. 수집된 데이터를 클라이언트에 반환
 * 4. 로컬 스토리지 저장은 클라이언트에서 처리
 */
export async function loader({ request }: { request: Request }): Promise<Response> {
    const OC = process.env.LAW_OC ?? "cta.lee";                    // 법령 API 접근 키
    const DRF = process.env.LAW_BASE ?? "https://www.law.go.kr/DRF"; // 법령 API 기본 URL

    if (!OC) {
        return new Response("Missing LAW_OC", { status: 500 });
    }

    try {
        console.log("법령 데이터 수집 시작...");
        
        // 로컬 스토리지 캐시 확인은 클라이언트 사이드에서 처리
        // 서버 사이드에서는 항상 새로운 데이터를 수집
        
        // 병렬 처리로 모든 법령 데이터 수집
        // MAJOR_LAWS_NOT_RULES 배열의 모든 법령에 대해 동시에 API 호출
        const promises = MAJOR_LAWS_NOT_RULES.map(async (law) => {
            try {
                const api = `${DRF}/lawService.do?target=law&type=JSON&OC=${encodeURIComponent(OC)}&ID=${encodeURIComponent(law.raw_id)}`;
                
                console.log(`수집 중: ${law.raw_name} (ID: ${law.raw_id})`);
                
                const res = await fetch(api, { 
                    headers: { Accept: "application/json" } 
                });
                
                if (res.ok) {
                    const raw = await res.json();
                    
                    return {
                        law_id: law.raw_id,
                        law_name: law.raw_name,
                        raw_data: raw,
                        collected_at: new Date().toISOString(),
                        status: "success" as const
                    };
                } else {
                    console.error(`API 호출 실패: ${law.raw_name} (${res.status})`);
                    return {
                        law_id: law.raw_id,
                        law_name: law.raw_name,
                        raw_data: null,
                        collected_at: new Date().toISOString(),
                        status: "error" as const,
                        error: `HTTP ${res.status}`
                    };
                }
                
            } catch (error) {
                console.error(`법령 데이터 수집 오류 (${law.raw_name}):`, error);
                return {
                    law_id: law.raw_id,
                    law_name: law.raw_name,
                    raw_data: null,
                    collected_at: new Date().toISOString(),
                    status: "error" as const,
                    error: error instanceof Error ? error.message : "Unknown error"
                };
            }
        });
        
        // 모든 Promise가 완료될 때까지 대기
        const allLawsData = await Promise.all(promises);
        
        console.log(`수집 완료: ${allLawsData.length}개 법령`);
        
        // 수집된 데이터 반환 (클라이언트에서 로컬 스토리지에 저장)
        const responseData = {
            success: true,
            total_collected: allLawsData.length,
            total_expected: MAJOR_LAWS_NOT_RULES.length,
            processing_mode: "parallel",
            laws: allLawsData,
            summary: {
                successful: allLawsData.filter(l => l.status === "success").length,
                failed: allLawsData.filter(l => l.status === "error").length
            }
        };
        
        return new Response(JSON.stringify(responseData), {
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=300",
            },
        });
        
    } catch (error) {
        console.error("전체 법령 데이터 수집 중 오류:", error);
        return new Response(JSON.stringify({
            success: false,
            error: "전체 법령 데이터 수집 실패",
            details: error instanceof Error ? error.message : "Unknown error"
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
  


/**
 * 빠른 법령 검색 화면 컴포넌트
 * 
 * 이 컴포넌트는 사용자가 법령을 검색하고 결과를 확인할 수 있는 메인 화면입니다.
 * 주요 기능:
 * 1. 검색어 입력 및 검색 실행
 * 2. 검색 결과 표시 및 상세 보기
 * 3. 로컬 스토리지 데이터 관리 및 캐싱
 * 4. 데이터 상태 표시 및 새로고침
 */
export default function QuickLawScreen({loaderData}: {loaderData: any}) {
  const searchFetcher = useFetcher();
  
  // 상태 관리
  const [searchKeyword, setSearchKeyword] = useState("");           // 검색 키워드
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]); // 검색 결과
  const [isSearching, setIsSearching] = useState(false);            // 검색 중 상태
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null); // 선택된 결과
  const [isDialogOpen, setIsDialogOpen] = useState(false);          // 다이얼로그 열림 상태
  const [isLoadingData, setIsLoadingData] = useState(false);        // 데이터 로딩 상태
  const [dataStatus, setDataStatus] = useState<{                    // 데이터 상태 정보
    total: number;                                                  // 총 법령 개수
    successful: number;                                             // 성공한 법령 개수
    failed: number;                                                 // 실패한 법령 개수
    lastUpdate?: string;                                            // 마지막 업데이트 시간
  } | null>(null);

  /**
   * 로컬 스토리지에서 데이터 불러오기
   * 
   * @returns LoaderData | null - 로컬 스토리지에서 불러온 데이터 또는 null
   * 
   * 로컬 스토리지에 저장된 법령 데이터를 불러와서 상태를 업데이트합니다.
   */
  // 로컬 스토리지에서 데이터 불러오기 (24시간 캐시 확인 포함)
  const loadDataFromStorage = () => {
    try {
      const storageKey = "cta_law_data";
      const lastUpdateKey = "cta_law_last_update";
      const cacheExpiryHours = 24; // 24시간 캐시
      
      // 로컬 스토리지에서 먼저 시도
      let cachedData = localStorage.getItem(storageKey);
      let lastUpdate = localStorage.getItem(lastUpdateKey);
      
      // 로컬 스토리지에 없으면 세션 스토리지에서 시도
      if (!cachedData) {
        cachedData = sessionStorage.getItem(storageKey);
        lastUpdate = sessionStorage.getItem(lastUpdateKey);
        if (cachedData) {
          console.log("세션 스토리지에서 데이터 불러옴");
        }
      }
      
      if (cachedData && lastUpdate) {
        const lastUpdateTime = new Date(lastUpdate).getTime();
        const currentTime = new Date().getTime();
        const hoursDiff = (currentTime - lastUpdateTime) / (1000 * 60 * 60);
        
        if (hoursDiff < cacheExpiryHours) {
          console.log("캐시된 법령 데이터 사용 (24시간 이내)");
          const parsedData = JSON.parse(cachedData);
          setDataStatus({
            total: parsedData.total_collected,
            successful: parsedData.summary.successful,
            failed: parsedData.summary.failed,
            lastUpdate: lastUpdate
          });
          return parsedData;
        } else {
          console.log("캐시 만료됨 (24시간 경과)");
          // 만료된 캐시 삭제
          localStorage.removeItem(storageKey);
          localStorage.removeItem(lastUpdateKey);
        }
      }
    } catch (error) {
      console.warn("로컬 스토리지에서 데이터 불러오기 오류:", error);
    }
    return null;
  };

  /**
   * 데이터 새로고침 함수
   * 
   * 로컬 스토리지의 캐시를 삭제하고 페이지를 새로고침하여 새로운 데이터를 로드합니다.
   */
  const refreshData = async () => {
    setIsLoadingData(true);
    try {
      // 로컬 스토리지와 세션 스토리지 캐시 모두 삭제
      localStorage.removeItem("cta_law_data");
      localStorage.removeItem("cta_law_last_update");
      sessionStorage.removeItem("cta_law_data");
      sessionStorage.removeItem("cta_law_last_update");
      
      // 페이지 새로고침으로 loader 재실행
      window.location.reload();
    } catch (error) {
      console.error("데이터 새로고침 오류:", error);
      setIsLoadingData(false);
    }
  };

  /**
   * 컴포넌트 마운트 시 로컬 스토리지 데이터 확인
   * 
   * useEffect를 사용하여 컴포넌트가 마운트될 때 데이터 상태를 초기화합니다.
   * loaderData가 있으면 그것을 사용하고, 없으면 로컬 스토리지에서 확인합니다.
   */
  useEffect(() => {
    // 먼저 로컬 스토리지에서 캐시된 데이터 확인
    const cachedData = loadDataFromStorage();
    
    if (cachedData) {
      // 캐시된 데이터가 있으면 그것을 사용
      console.log("캐시된 데이터 사용");
      return;
    }
    
          // 캐시된 데이터가 없고 loader 데이터가 있으면 저장
      if (loaderData?.success) {
        try {
          const storageKey = "cta_law_data";
          const lastUpdateKey = "cta_law_last_update";
          
                     // 로컬 스토리지 용량 제한을 고려하여 필요한 데이터만 저장
           const compressedData = {
             success: loaderData.success,
             total_collected: loaderData.total_collected,
             total_expected: loaderData.total_expected,
             processing_mode: loaderData.processing_mode,
             laws: loaderData.laws.map((law: any) => {
               // 안전한 데이터 압축 함수
               const compressLawData = (rawData: any) => {
                 if (!rawData) return null;
                 
                 try {
                   const 조문단위 = rawData?.법령?.조문?.조문단위;
                   if (!Array.isArray(조문단위)) return null;
                   
                   return {
                     법령: {
                       기본정보: {
                         법령ID: rawData?.법령?.기본정보?.법령ID || "",
                         법령명_한글: rawData?.법령?.기본정보?.법령명_한글 || "",
                         공포일자: rawData?.법령?.기본정보?.공포일자 || "",
                         시행일자: rawData?.법령?.기본정보?.시행일자 || ""
                       },
                       조문: {
                         조문단위: 조문단위.map((조문: any) => {
                           // 조문 데이터 안전하게 처리
                           if (!조문 || typeof 조문 !== 'object') return null;
                           
                           const 항 = Array.isArray(조문.항) ? 조문.항.map((항: any) => {
                             if (!항 || typeof 항 !== 'object') return null;
                             
                             const 호 = Array.isArray(항.호) ? 항.호.map((호: any) => {
                               if (!호 || typeof 호 !== 'object') return null;
                               return {
                                 호번호: 호.호번호 || "",
                                 호내용: 호.호내용 || ""
                               };
                             }).filter(Boolean) : [];
                             
                             return {
                               항번호: 항.항번호 || "",
                               항내용: 항.항내용 || "",
                               호
                             };
                           }).filter(Boolean) : [];
                           
                           return {
                             조문키: 조문.조문키 || "",
                             조문번호: 조문.조문번호 || "",
                             조문내용: 조문.조문내용 || "",
                             항
                           };
                         }).filter(Boolean) // null 값 제거
                       }
                     }
                   };
                 } catch (error) {
                   console.warn(`법령 ${law.law_name} 데이터 압축 중 오류:`, error);
                   return null;
                 }
               };
               
               return {
                 law_id: law.law_id,
                 law_name: law.law_name,
                 status: law.status,
                 error: law.error,
                 collected_at: law.collected_at,
                 raw_data: compressLawData(law.raw_data)
               };
             }),
             summary: loaderData.summary
           };
          
          // 로컬 스토리지에 저장 시도
          try {
            localStorage.setItem(storageKey, JSON.stringify(compressedData));
            localStorage.setItem(lastUpdateKey, new Date().toISOString());
            console.log("압축된 법령 데이터를 로컬 스토리지에 저장했습니다.");
          } catch (storageError) {
            // 로컬 스토리지 용량 부족 시 세션 스토리지에 저장
            if (storageError instanceof Error && storageError.name === 'QuotaExceededError') {
              console.log("로컬 스토리지 용량 부족, 세션 스토리지에 저장합니다.");
              sessionStorage.setItem(storageKey, JSON.stringify(compressedData));
              sessionStorage.setItem(lastUpdateKey, new Date().toISOString());
              console.log("압축된 법령 데이터를 세션 스토리지에 저장했습니다.");
            } else {
              throw storageError; // 다른 오류는 다시 던지기
            }
          }
        
        setDataStatus({
          total: loaderData.total_collected,
          successful: loaderData.summary.successful,
          failed: loaderData.summary.failed,
          lastUpdate: new Date().toISOString()
        });
              } catch (error) {
          console.warn("로컬 스토리지 저장 오류:", error);
          
          // 저장 실패 시에도 상태는 업데이트
          setDataStatus({
            total: loaderData.total_collected,
            successful: loaderData.summary.successful,
            failed: loaderData.summary.failed,
            lastUpdate: new Date().toISOString()
          });
          
          // 용량 제한 오류인 경우 사용자에게 알림
          if (error instanceof Error && error.name === 'QuotaExceededError') {
            console.warn("로컬 스토리지 용량 제한으로 인해 캐시를 저장할 수 없습니다.");
            console.warn("데이터는 메모리에서만 사용되며, 페이지 새로고침 시 다시 로드됩니다.");
          }
        }
    }
  }, [loaderData]);

  /**
   * 검색 실행 함수
   * 
   * 사용자가 입력한 검색어로 법령 데이터를 검색합니다.
   * 동작 방식:
   * 1. 검색어 유효성 검사 (2글자 이상)
   * 2. 로더 데이터 또는 로컬 스토리지에서 법령 데이터 가져오기
   * 3. 각 법령에 대해 검색 엔진 실행
   * 4. 검색 결과를 상태에 저장
   */
  const handleSearch = async () => {
    if (!searchKeyword.trim() || searchKeyword.trim().length < 2) {
      alert("2글자 이상 입력해주세요.");
      return;
    }

    setIsSearching(true);
    setSearchResults([]);

    try {
      // 먼저 로컬 스토리지에서 캐시된 데이터 확인
      let searchData = null;
      const cachedData = loadDataFromStorage();
      
      if (cachedData?.laws) {
        // 캐시된 데이터가 있으면 우선 사용
        searchData = cachedData.laws;
        console.log("캐시된 데이터로 검색:", searchData.length);
      } else if (loaderData?.laws) {
        // 캐시가 없으면 loader 데이터 사용
        searchData = loaderData.laws;
        console.log("loader 데이터로 검색:", searchData.length);
      }
      
      if (searchData) {
        console.log("검색 시작:", { keyword: searchKeyword, totalLaws: searchData.length });
        const allResults: SearchResult[] = [];
        
        // 각 법령에 대해 검색 실행
        for (const law of searchData) {
          if (law.status === "success" && law.raw_data) {
            try {
              console.log(`법령 ${law.law_name} 검색 중...`, { 
                lawId: law.law_id, 
                hasRawData: !!law.raw_data,
                rawDataKeys: Object.keys(law.raw_data || {})
              });
              
              const searchEngine = new LawSearchEngine(law.raw_data);
              const results = searchEngine.searchByKeyword(searchKeyword);
              
              console.log(`법령 ${law.law_name} 검색 결과:`, results.length);
              
              // 결과에 법령 정보 추가
              results.forEach(result => {
                result.부모정보.법령명 = law.law_name;
              });
              
              allResults.push(...results);
            } catch (error) {
              console.error(`법령 ${law.law_name} 검색 중 오류:`, error);
            }
          } else {
            console.warn(`법령 ${law.law_name} 상태:`, law.status, law.error);
          }
        }
        
        console.log("전체 검색 결과:", allResults.length);
        setSearchResults(allResults);
      } else {
        console.error("법령 데이터가 로드되지 않았습니다.");
        alert("법령 데이터를 먼저 로드해주세요.");
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
      alert("검색 중 오류가 발생했습니다.");
    } finally {
      setIsSearching(false);
    }
  };

  /**
   * 검색 결과 클릭 시 상세 보기
   * 
   * @param result - 클릭된 검색 결과
   * 
   * 검색 결과를 클릭하면 상세 보기 다이얼로그를 엽니다.
   */
  const handleResultClick = (result: SearchResult) => {
    setSelectedResult(result);
    console.log(result);
    setIsDialogOpen(true);
  };

  /**
   * 키워드 입력 시 엔터키 처리
   * 
   * @param e - 키보드 이벤트
   * 
   * 검색창에서 엔터키를 누르면 검색을 실행합니다.
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 
          헤더 섹션
          - 페이지 제목과 설명
          - 데이터 상태 표시 (총 개수, 성공/실패 개수, 마지막 업데이트 시간)
          - 데이터 새로고침 버튼
        */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            빠른 법령 검색
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            주요 세법의 조문 내용을 빠르게 검색할 수 있습니다
          </p>
          
          {/* 
            데이터 상태 표시 섹션
            - 로컬 스토리지에 저장된 법령 데이터의 상태 정보
            - 총 개수, 성공/실패 개수, 마지막 업데이트 시간 표시
            - 데이터 새로고침 버튼으로 캐시 삭제 및 재로드
          */}
          {dataStatus && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">총 {dataStatus.total}개</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-green-500">성공 {dataStatus.successful}개</Badge>
                </div>
                {dataStatus.failed > 0 && (
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">실패 {dataStatus.failed}개</Badge>
                  </div>
                )}
                {dataStatus.lastUpdate && (
                  <div className="text-gray-500">
                    마지막 업데이트: {new Date(dataStatus.lastUpdate).toLocaleString('ko-KR')}
                  </div>
                )}
              </div>
              <div className="mt-3 flex justify-center">
                <Button 
                  onClick={refreshData} 
                  disabled={isLoadingData}
                  variant="outline" 
                  size="sm"
                >
                  {isLoadingData ? "새로고침 중..." : "데이터 새로고침"}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* 
          검색창 섹션
          - 검색어 입력 필드 (쉼표로 구분된 다중 키워드 지원)
          - 검색 버튼
          - 검색 예시 안내
        */}
        <div className="mb-8">
          <div className="flex gap-4 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="검색어를 입력하세요 (쉼표로 구분하여 여러 단어 검색 가능)"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button 
              onClick={handleSearch}
              disabled={isSearching}
              className="px-6"
            >
              {isSearching ? "검색 중..." : "검색"}
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            예시: 소득세, 공제, 연말정산
          </p>
        </div>

        {/* 
          검색 결과 표시 섹션
          - 검색 결과 개수와 검색어 표시
          - 각 검색 결과를 카드 형태로 표시
          - 카드 클릭 시 상세 보기 다이얼로그 열기
        */}
        {searchResults.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                검색 결과 ({searchResults.length}건)
              </h2>
              <Badge variant="secondary">
                {searchKeyword}
              </Badge>
            </div>
            
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <Card 
                  key={`${result.조문키}-${index}`}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleResultClick(result)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {result.매칭타입}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {result.매칭위치}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {result.부모정보.법령명}
                      </span>
                    </div>
                    <CardTitle className="text-lg">
                      {result.부모정보.조문제목 || "제목 없음"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: result.매칭내용 }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 
          검색 결과가 없을 때 표시 섹션
          - 검색어는 입력했지만 결과가 없는 경우 안내 메시지 표시
          - 다른 검색어 시도 권장
        */}
        {searchResults.length === 0 && !isSearching && searchKeyword && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              "{searchKeyword}"에 대한 검색 결과가 없습니다.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              다른 검색어를 시도해보세요.
            </p>
          </div>
        )}

        {/* 
          상세 보기 다이얼로그
          - 검색 결과 클릭 시 열리는 모달 창
          - 매칭된 내용과 전체 맥락 정보 표시
          - 조문, 항, 호 단위별로 구조화된 정보 제공
        */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] sm:max-w-[50vw] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Badge variant="outline">
                  {selectedResult?.매칭타입}
                </Badge>
                {selectedResult?.매칭위치}
              </DialogTitle>
              <DialogDescription>
                {selectedResult?.부모정보.법령명} - {selectedResult?.부모정보.조문제목}
                <Button variant="link" >
                  <Link to={`https://www.law.go.kr/DRF/lawService.do?OC=cta.lee&target=lawjosub&type=HTML&ID=${selectedResult?.부모정보.법령ID}&JO=${selectedResult?.조문키?.substring(0, 6)}`}
                    target="_blank"
                  >
                    법령페이지이동
                  </Link>
                </Button>
              </DialogDescription>
            </DialogHeader>
            
            {selectedResult && (
              <div className="space-y-6">
                {/* 
                  매칭된 내용 표시
                  - 검색어와 매칭된 부분을 하이라이트하여 표시
                  - 노란색 배경으로 키워드 강조
                */}
                <div>
                  <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">
                    매칭된 내용
                  </h4>
                  <div 
                    className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
                    dangerouslySetInnerHTML={{ __html: selectedResult.매칭내용 }}
                  />
                </div>

                <Separator />

                {/* 전체 맥락 표시 */}
                <div>
                  <h4 className="font-semibold mb-2">전체 맥락</h4>
                  
                  {/* 
                    조문 내용
                    - 선택된 검색 결과의 전체 조문 내용 표시
                    - 조문 번호와 함께 구조화된 정보 제공
                  */}
                  {selectedResult.전체맥락.조문 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                        조문 {selectedResult.조문번호}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 pl-4">
                        {selectedResult.전체맥락.조문}
                      </p>
                    </div>
                  )}

                  {/* 
                    항 내용들
                    - 선택된 검색 결과와 관련된 항들의 내용 표시
                    - 조문 내의 세부 항목 정보 제공
                  */}
                  {selectedResult.전체맥락.항.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                        항
                      </h5>
                      <div className="space-y-2 pl-4">
                        {selectedResult.전체맥락.항.map((항내용, index) => (
                          <p key={index} className="text-gray-600 dark:text-gray-400">
                            {항내용}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 
                    호 내용들
                    - 선택된 검색 결과와 관련된 호들의 내용 표시
                    - 항 내의 세부 호 정보 제공
                  */}
                  {selectedResult.전체맥락.호.length > 0 && (
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                        호
                      </h5>
                      <div className="space-y-2 pl-4">
                        {selectedResult.전체맥락.호.map((호내용, index) => (
                          <p key={index} className="text-gray-600 dark:text-gray-400">
                            {호내용}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

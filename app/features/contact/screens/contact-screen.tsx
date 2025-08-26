// features/contact/screens/contact-screen.tsx
import type { Route } from "./+types/contact-screen";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/core/components/ui/card";
import { Button } from "~/core/components/ui/button";
import { Input } from "~/core/components/ui/input";
import { Textarea } from "~/core/components/ui/textarea";
import { Separator } from "~/core/components/ui/separator";
import { Label } from "~/core/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/core/components/ui/select";
import { Alert, AlertTitle, AlertDescription } from "~/core/components/ui/alert";
import { Form } from "react-router";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | CTA-UNITY" },
    { name: "description", content: "운영자 연락처 및 문의 페이지" },
  ];
}

export default function ContactScreen({}: Route.ComponentProps) {


  return (
    <div className="mx-auto w-full max-w-screen-lg xl:max-w-screen-xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-sm text-muted-foreground">
          운영자와 직접 연락할 수 있어요. 아래 폼을 작성해 주시면 신속히 답변드리겠습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        {/* 좌측: 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>문의하기</CardTitle>
            <CardDescription>서비스 관련 문의, 버그 제보, 결제/환불, 개인정보 요청 등</CardDescription>
          </CardHeader>
          <CardContent>
            <Form
              className="space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" placeholder="홍길동" />
            
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" placeholder="you@example.com" type="email"  />
                
                </div>
              </div>
    
              <div className="space-y-2">
                <Label>문의 유형</Label>
                <Select
                  defaultValue="general"
                  onValueChange={(v) => {}}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">일반 문의</SelectItem>
                    <SelectItem value="bug">버그 제보</SelectItem>
                    <SelectItem value="payment">결제/환불</SelectItem>
                    <SelectItem value="privacy">개인정보/삭제요청</SelectItem>
                  </SelectContent>
                </Select>
                
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">내용</Label>
                <Textarea
                  id="message"
                  rows={10}
                  placeholder={`문의 배경, 기대 결과, 관련 링크 등을 포함해 주세요.`}
                />
                
              </div>

              {/* 파일 첨부를 쓰고 싶다면 아래 블록을 주석 해제하고 서버를 FormData로 처리하세요.
              <div className="space-y-2">
                <Label htmlFor="file">첨부파일(선택)</Label>
                <Input id="file" type="file" multiple />
                <p className="text-xs text-muted-foreground">10MB 이하, 최대 5개</p>
              </div>
              */}

              <div className="flex items-center justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {}}
                >
                  초기화
                </Button>
                <Button type="submit" disabled={false}>
                  {"전송"}
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>

        {/* 우측: 운영자 연락처/안내 */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>운영자 연락처</CardTitle>
              <CardDescription>급한 이슈는 이메일로 연락 주세요.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="space-y-2">
                <div>이메일: <a className="underline" href="mailto:admin@cta-unity.example">admin@cta-unity.example</a></div>
                <div>업무시간: 평일 10:00–18:00 (KST)</div>
                <div>평균 응답: 24시간 이내</div>
              </div>
              <Separator className="my-4" />
              <Alert>
                <AlertTitle>개인정보 안내</AlertTitle>
                <AlertDescription className="text-xs">
                  민감정보는 업로드하지 마세요. 필요 시 마스킹 처리하여 문의해 주세요.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>자주 묻는 질문</CardTitle>
              <CardDescription>빠른 해결을 위해 먼저 확인해 보세요.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>· 결제 내역/영수증: 대시보드 &gt; 설정 &gt; 결제</div>
              <div>· 계정/비밀번호: 로그인 페이지의 “비밀번호 재설정”</div>
              <div>· 문의 현황: “내 문의”에서 처리 상태 확인</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
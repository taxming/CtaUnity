import React from "react";
import type { Route } from "./+types/privacy-policy-screen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "개인정보처리방침 - CTA-UNITY" },
    { name: "description", content: "CTA-UNITY 개인정보처리방침" }
  ];
}

export default function PrivacyPolicyScreen() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">개인정보처리방침</h1>
        <p className="text-muted-foreground">
          최종 수정일: 2025년 1월 1일
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">1. 개인정보의 처리 목적</h2>
          <p>
            CTA-UNITY는 세무사 커뮤니티 서비스 제공을 위해 다음과 같은 목적으로 개인정보를 처리합니다:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>회원 가입 및 관리</li>
            <li>커뮤니티 서비스 제공</li>
            <li>질문과 답변 서비스</li>
            <li>고객 상담 및 문의 응대</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. 수집하는 개인정보 항목</h2>
          <p>필수항목: 이메일 주소, 비밀번호, 이름</p>
          <p>선택항목: 프로필 이미지, 소속, 경력 등</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. 개인정보의 보유 및 이용기간</h2>
          <p>
            회원 탈퇴 시까지 보유하며, 탈퇴 후에는 즉시 파기됩니다.
            단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. 개인정보의 제3자 제공</h2>
          <p>
            CTA-UNITY는 원칙적으로 회원의 개인정보를 제3자에게 제공하지 않습니다.
            다만, 법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라
            수사기관의 요구가 있는 경우를 제외하고는 개인정보를 제3자에게 제공하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. 개인정보처리방침 변경</h2>
          <p>
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의
            추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여
            고지할 것입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. 개인정보 보호책임자</h2>
          <p>
            개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
            정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
            지정하고 있습니다.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p><strong>개인정보 보호책임자</strong></p>
            <p>이름: [책임자명]</p>
            <p>연락처: [연락처]</p>
            <p>이메일: [이메일]</p>
          </div>
        </section>
      </div>
    </div>
  );
}

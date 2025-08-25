import React from "react";
import type { Route } from "./+types/terms-of-service-screen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "이용약관 - CTA-UNITY" },
    { name: "description", content: "CTA-UNITY 이용약관" }
  ];
}

export default function TermsOfServiceScreen() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">이용약관</h1>
        <p className="text-muted-foreground">
          최종 수정일: 2025년 1월 1일
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">제1조 (목적)</h2>
          <p>
            이 약관은 CTA-UNITY(이하 "회사")가 제공하는 세무사 커뮤니티 서비스(이하 "서비스")의
            이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제2조 (정의)</h2>
          <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>"서비스"라 함은 회사가 제공하는 세무사 커뮤니티 서비스를 의미합니다.</li>
            <li>"회원"이라 함은 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
            <li>"게시물"이라 함은 회원이 서비스를 이용하면서 게시한 부호, 문자, 음성, 음향, 화상, 동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제3조 (약관의 효력 및 변경)</h2>
          <p>
            1. 이 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.<br/>
            2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.<br/>
            3. 약관이 변경되는 경우, 회사는 변경사항을 시행일자 7일 전부터 공지사항을 통해 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제4조 (서비스의 제공)</h2>
          <p>회사는 다음과 같은 서비스를 제공합니다:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>세무 관련 질문과 답변 서비스</li>
            <li>세무사 커뮤니티 서비스</li>
            <li>세무 관련 정보 공유 서비스</li>
            <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제5조 (서비스 이용)</h2>
          <p>
            1. 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.<br/>
            2. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제6조 (회원의 의무)</h2>
          <p>회원은 다음 행위를 하여서는 안 됩니다:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>신청 또는 변경 시 허위내용의 등록</li>
            <li>타인의 정보 도용</li>
            <li>회사가 게시한 정보의 변경</li>
            <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
            <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제7조 (게시물의 관리)</h2>
          <p>
            1. 회원이 서비스에 게시한 게시물이 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 저작권법 등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있고, 회사는 관련법에 따라 조치를 취하여야 합니다.<br/>
            2. 회사는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치 등을 취할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제8조 (서비스 이용제한)</h2>
          <p>
            회원이 제6조의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 회사는 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제9조 (책임제한)</h2>
          <p>
            1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.<br/>
            2. 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.<br/>
            3. 회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">제10조 (준거법 및 관할법원)</h2>
          <p>
            1. 이 약관의 해석 및 회사와 회원 간의 분쟁에 대하여는 대한민국의 법을 적용합니다.<br/>
            2. 이 약관과 관련하여 회사와 회원 간에 발생한 분쟁에 대해 소송이 제기될 경우 회사의 본사 소재지를 관할하는 법원을 전속관할법원으로 합니다.
          </p>
        </section>
      </div>
    </div>
  );
}

import React from 'react';

export default function QuestionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">질문 목록</h1>
      <div className="grid gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">새 질문 작성하기</h2>
          <p className="text-gray-600 mb-4">질문을 작성하여 커뮤니티와 지식을 공유해보세요.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            질문 작성
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">최근 질문</h3>
          <div className="space-y-3">
            <div className="border-b pb-2">
              <h4 className="font-medium">React에서 상태 관리하는 방법은?</h4>
              <p className="text-sm text-gray-500">2시간 전 • 5개 답변</p>
            </div>
            <div className="border-b pb-2">
              <h4 className="font-medium">TypeScript 타입 정의 팁</h4>
              <p className="text-sm text-gray-500">5시간 전 • 3개 답변</p>
            </div>
            <div className="border-b pb-2">
              <h4 className="font-medium">CSS Grid 레이아웃 문제</h4>
              <p className="text-sm text-gray-500">1일 전 • 7개 답변</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useParams } from 'react-router';

export default function QuestionScreen() {
  const { question_id } = useParams();
  const [answer, setAnswer] = useState('');

  // 실제 구현에서는 API에서 질문 데이터를 가져와야 합니다
  const question = {
    id: question_id,
    title: 'React에서 상태 관리하는 방법은?',
    content: 'React 프로젝트에서 복잡한 상태를 효율적으로 관리하는 방법에 대해 궁금합니다. Redux, Context API, Zustand 등 여러 옵션이 있는데, 각각의 장단점과 언제 사용해야 하는지 알려주세요.',
    author: '개발자김',
    createdAt: '2024-01-15',
    tags: ['react', 'state-management', 'frontend'],
    answers: [
      {
        id: 1,
        content: 'Redux는 대규모 애플리케이션에 적합하고, Context API는 간단한 상태 공유에 좋습니다. Zustand는 가볍고 사용하기 쉽습니다.',
        author: '상태관리전문가',
        createdAt: '2024-01-15',
        votes: 5
      },
      {
        id: 2,
        content: '프로젝트 규모에 따라 선택하세요. 작은 프로젝트는 Context API, 중간은 Zustand, 큰 프로젝트는 Redux를 추천합니다.',
        author: 'React개발자',
        createdAt: '2024-01-15',
        votes: 3
      }
    ]
  };

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    // 답변 제출 로직 구현
    console.log('답변 제출:', answer);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 질문 헤더 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          {question.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-4">{question.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{question.author}</span>
          <span>{question.createdAt}</span>
        </div>
      </div>

      {/* 질문 내용 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-gray-700 leading-relaxed">{question.content}</p>
      </div>

      {/* 답변 목록 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">답변 ({question.answers.length})</h2>
        <div className="space-y-6">
          {question.answers.map((ans) => (
            <div key={ans.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-medium">{ans.author}</span>
                <span className="text-sm text-gray-500">{ans.createdAt}</span>
                <span className="text-sm text-gray-500">👍 {ans.votes}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{ans.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 답변 작성 폼 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">답변 작성</h3>
        <form onSubmit={handleSubmitAnswer}>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="질문에 대한 답변을 작성해주세요"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
          >
            답변 등록
          </button>
        </form>
      </div>
    </div>
  );
}

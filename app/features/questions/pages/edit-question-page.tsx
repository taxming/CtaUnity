import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function EditQuestionPage() {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제 구현에서는 API에서 기존 질문 데이터를 가져와야 합니다
    const fetchQuestion = async () => {
      // 시뮬레이션된 데이터 로딩
      setTimeout(() => {
        setTitle('React에서 상태 관리하는 방법은?');
        setContent('React 프로젝트에서 복잡한 상태를 효율적으로 관리하는 방법에 대해 궁금합니다. Redux, Context API, Zustand 등 여러 옵션이 있는데, 각각의 장단점과 언제 사용해야 하는지 알려주세요.');
        setTags('react, state-management, frontend');
        setIsLoading(false);
      }, 500);
    };

    fetchQuestion();
  }, [question_id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 질문 수정 로직 구현
    console.log('질문 수정:', { question_id, title, content, tags });
    // 수정 완료 후 질문 상세 페이지로 이동
    navigate(`/questions/${question_id}`);
  };

  const handleCancel = () => {
    navigate(`/questions/${question_id}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">질문 수정</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            질문 제목 *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="질문의 핵심을 간단히 설명해주세요"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            질문 내용 *
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="구체적인 상황과 문제점을 자세히 설명해주세요"
            required
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            태그
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="쉼표로 구분하여 태그를 입력하세요 (예: react, typescript, css)"
          />
          <p className="text-sm text-gray-500 mt-1">태그는 쉼표로 구분하여 입력해주세요</p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
          >
            수정 완료
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function DeleteQuestionPage() {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const [questionTitle, setQuestionTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // 실제 구현에서는 API에서 질문 제목을 가져와야 합니다
    const fetchQuestionTitle = async () => {
      // 시뮬레이션된 데이터 로딩
      setTimeout(() => {
        setQuestionTitle('React에서 상태 관리하는 방법은?');
        setIsLoading(false);
      }, 300);
    };

    fetchQuestionTitle();
  }, [question_id]);

  const handleDelete = async () => {
    setIsDeleting(true);
    
    try {
      // 실제 구현에서는 API 호출로 질문을 삭제해야 합니다
      await new Promise(resolve => setTimeout(resolve, 1000)); // 삭제 시뮬레이션
      
      console.log('질문 삭제 완료:', question_id);
      // 삭제 완료 후 질문 목록 페이지로 이동
      navigate('/questions');
    } catch (error) {
      console.error('질문 삭제 실패:', error);
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    navigate(`/questions/${question_id}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">질문 삭제</h1>
          <p className="text-gray-600">이 작업은 되돌릴 수 없습니다.</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">삭제할 질문:</h2>
          <p className="text-gray-700">{questionTitle}</p>
        </div>

        <div className="text-sm text-gray-600 mb-8">
          <p className="mb-2">이 질문을 삭제하면:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-500">
            <li>질문과 모든 답변이 영구적으로 삭제됩니다</li>
            <li>관련된 모든 데이터가 사라집니다</li>
            <li>이 작업은 되돌릴 수 없습니다</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2"
          >
            {isDeleting ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                삭제 중...
              </>
            ) : (
              '질문 삭제'
            )}
          </button>
          <button
            onClick={handleCancel}
            disabled={isDeleting}
            className="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-medium"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "~/core/components/ui/card";
import { Button } from "~/core/components/ui/button";
import { Input } from "~/core/components/ui/input";
import { Badge } from "~/core/components/ui/badge";
import { Textarea } from "~/core/components/ui/textarea";
import { Label } from "~/core/components/ui/label";
import { 
  ArrowLeft, 
  Plus, 
  X,
  AlertCircle,
  CheckCircle,
  MessageCircle,
  User
} from "lucide-react";
import Hero from "~/core/components/hero";

// 카테고리 목록
const categories = [
  "시험준비",
  "사업자등록", 
  "연말정산",
  "법인세",
  "부가가치세",
  "기타"
];

// 게시글 작성 폼 데이터 타입
interface NewForumPost {
  title: string;
  content: string;
  category: string;
  tags: string[];
}

export default function NewForumScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<NewForumPost>({
    title: "",
    content: "",
    category: "",
    tags: []
  });
  const [newTag, setNewTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<NewForumPost>>({});

  // 폼 데이터 업데이트
  const handleInputChange = (field: keyof NewForumPost, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 에러 메시지 제거
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // 태그 추가
  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  // 태그 제거
  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Enter 키로 태그 추가
  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  // 폼 유효성 검사
  const validateForm = (): boolean => {
    const newErrors: Partial<NewForumPost> = {};

    if (!formData.title.trim()) {
      newErrors.title = "제목을 입력해주세요";
    } else if (formData.title.trim().length < 5) {
      newErrors.title = "제목은 5자 이상 입력해주세요";
    }

    if (!formData.content.trim()) {
      newErrors.content = "내용을 입력해주세요";
    } else if (formData.content.trim().length < 10) {
      newErrors.content = "내용은 10자 이상 입력해주세요";
    }

    if (!formData.category) {
      newErrors.category = "카테고리를 선택해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: API 호출로 게시글 저장
      console.log("게시글 작성:", formData);
      
      // 성공 시 게시판 목록으로 이동
      setTimeout(() => {
        navigate("/forum");
      }, 1000);
      
    } catch (error) {
      console.error("게시글 작성 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 취소
  const handleCancel = () => {
    if (formData.title || formData.content) {
      if (confirm("작성 중인 내용이 있습니다. 정말 나가시겠습니까?")) {
        navigate("/forum");
      }
    } else {
      navigate("/forum");
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <Hero title="자유토론방" subtitle="자유롭게 의견을 나누는 공간입니다" />
      {/* 헤더 */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={handleCancel}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          뒤로가기
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            새 글 작성
          </h1>
          <p className="text-muted-foreground">
            자유토론방에 새로운 글을 작성합니다
          </p>
        </div>
      </div>

      {/* 그리드 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* 메인 폼 영역 (좌측 4개) */}
        <div className="lg:col-span-4 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* 제목 입력 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">제목</CardTitle>
                  <CardDescription>
                    게시글의 제목을 입력해주세요 (5자 이상)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Input
                      placeholder="제목을 입력하세요..."
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className={errors.title ? "border-destructive" : ""}
                      maxLength={100}
                    />
                    {errors.title && (
                      <div className="flex items-center gap-2 text-sm text-destructive">
                        <AlertCircle className="w-4 h-4" />
                        {errors.title}
                      </div>
                    )}
                    <div className="text-xs text-muted-foreground text-right">
                      {formData.title.length}/100
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 카테고리 선택 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">카테고리</CardTitle>
                  <CardDescription>
                    게시글의 카테고리를 선택해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          type="button"
                          variant={formData.category === category ? "default" : "outline"}
                          className="justify-start"
                          onClick={() => handleInputChange("category", category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                    {errors.category && (
                      <div className="flex items-center gap-2 text-sm text-destructive">
                        <AlertCircle className="w-4 h-4" />
                        {errors.category}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* 내용 입력 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">내용</CardTitle>
                  <CardDescription>
                    게시글의 내용을 자세히 작성해주세요 (10자 이상)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="내용을 입력하세요..."
                      value={formData.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      className={`min-h-[300px] resize-none ${errors.content ? "border-destructive" : ""}`}
                      maxLength={5000}
                    />
                    {errors.content && (
                      <div className="flex items-center gap-2 text-sm text-destructive">
                        <AlertCircle className="w-4 h-4" />
                        {errors.content}
                      </div>
                    )}
                    <div className="text-xs text-muted-foreground text-right">
                      {formData.content.length}/5000
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 태그 입력 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">태그</CardTitle>
                  <CardDescription>
                    관련된 태그를 추가해주세요 (선택사항)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* 태그 입력 필드 */}
                    <div className="flex gap-2">
                      <Input
                        placeholder="태그를 입력하고 Enter를 누르세요..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={handleTagKeyPress}
                        maxLength={20}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleAddTag}
                        disabled={!newTag.trim()}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* 태그 목록 */}
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-sm">
                            #{tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-auto p-0 ml-1 hover:bg-transparent"
                              onClick={() => handleRemoveTag(tag)}
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground">
                      • 태그는 최대 10개까지 추가할 수 있습니다
                      • 태그는 20자 이내로 입력해주세요
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 제출 버튼 */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-[120px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      작성 중...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      게시글 작성
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* 사이드바 영역 (우측 2개) */}
        <div className="lg:col-span-2 space-y-6">
          {/* 작성 가이드라인 */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                작성 가이드라인
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-700 dark:text-blue-300">
              <ul className="space-y-2 list-disc list-inside">
                <li>타인을 비방하거나 불쾌감을 주는 내용은 삼가해주세요</li>
                <li>개인정보나 민감한 정보는 포함하지 마세요</li>
                <li>광고성 내용은 금지됩니다</li>
                <li>질문이나 토론 주제는 명확하게 작성해주세요</li>
                <li>관련 법령이나 세무 지식을 공유하는 것을 권장합니다</li>
              </ul>
            </CardContent>
          </Card>

          {/* 카테고리 설명 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">카테고리 안내</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-medium">시험준비</h4>
                <p className="text-muted-foreground">세무사 시험 관련 질문과 스터디</p>
              </div>
              <div>
                <h4 className="font-medium">사업자등록</h4>
                <p className="text-muted-foreground">사업자 등록 및 관련 절차</p>
              </div>
              <div>
                <h4 className="font-medium">연말정산</h4>
                <p className="text-muted-foreground">연말정산 관련 질문과 팁</p>
              </div>
              <div>
                <h4 className="font-medium">법인세</h4>
                <p className="text-muted-foreground">법인세 관련 질문과 해결방법</p>
              </div>
              <div>
                <h4 className="font-medium">부가가치세</h4>
                <p className="text-muted-foreground">부가가치세 관련 질문과 가이드</p>
              </div>
            </CardContent>
          </Card>

          {/* 태그 추천 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">인기 태그</CardTitle>
              <CardDescription>자주 사용되는 태그들</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["세무사시험", "스터디", "부가가치세", "연말정산", "사업자등록", "법인세", "세무상담", "회계"].map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="text-xs cursor-pointer hover:bg-primary/10"
                    onClick={() => {
                      if (!formData.tags.includes(tag)) {
                        setFormData(prev => ({
                          ...prev,
                          tags: [...prev.tags, tag]
                        }));
                      }
                    }}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 빠른 링크 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">빠른 링크</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/forum">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  게시판 목록
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/questions">
                  <User className="w-4 h-4 mr-2" />
                  Q&A 게시판
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/caselaws">
                  <User className="w-4 h-4 mr-2" />
                  판례 모음
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

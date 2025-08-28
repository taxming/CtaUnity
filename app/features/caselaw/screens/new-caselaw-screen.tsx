/**
 * 새 판례 등록 화면
 * 
 * 이 파일은 새로운 판례를 등록하는 화면을 제공합니다.
 * 주요 기능:
 * 1. 판례 기본 정보 입력 (4:2 비율 그리드)
 * 2. 판례 내용 및 요약 작성
 * 3. 태그 및 카테고리 설정
 * 4. 파일 업로드 및 첨부
 */

import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Save, Upload, Tag, Calendar, Scale, BookOpen, FileText } from "lucide-react";

// UI 컴포넌트들
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "~/core/components/ui/card";
import { Input } from "~/core/components/ui/input";
import { Button } from "~/core/components/ui/button";
import { Badge } from "~/core/components/ui/badge";
import { Textarea } from "~/core/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/core/components/ui/select";
import { Label } from "~/core/components/ui/label";

/**
 * 새 판례 등록 화면 컴포넌트
 */
export default function NewCaselawScreen() {
  const [formData, setFormData] = useState({
    title: "",
    caseNumber: "",
    court: "",
    date: "",
    category: "",
    summary: "",
    content: "",
    tags: [] as string[],
    newTag: ""
  });

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  /**
   * 폼 데이터 업데이트
   */
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * 태그 추가
   */
  const handleAddTag = () => {
    if (formData.newTag.trim() && !formData.tags.includes(formData.newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, prev.newTag.trim()],
        newTag: ""
      }));
    }
  };

  /**
   * 태그 제거
   */
  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  /**
   * 파일 업로드 처리
   */
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachedFiles(prev => [...prev, ...files]);
  };

  /**
   * 파일 제거
   */
  const handleRemoveFile = (fileToRemove: File) => {
    setAttachedFiles(prev => prev.filter(file => file !== fileToRemove));
  };

  /**
   * 폼 제출 처리
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("판례 등록:", { ...formData, attachedFiles });
    // TODO: API 호출 로직 구현
    alert("판례가 성공적으로 등록되었습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero 섹션 */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Button 
                asChild
                variant="ghost" 
                className="text-white hover:bg-white/20 mr-4"
              >
                <Link to="/caselaw">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  목록으로
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              새 판례 등록
            </h1>
            <p className="text-xl md:text-2xl text-green-100">
              새로운 판례 정보를 입력하고 등록하세요
            </p>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          {/* 4:2 비율 그리드 레이아웃 */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* 왼쪽 메인 폼 (4/6) */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* 기본 정보 카드 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      기본 정보
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">판례 제목 *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          placeholder="판례 제목을 입력하세요"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="caseNumber">사건번호 *</Label>
                        <Input
                          id="caseNumber"
                          value={formData.caseNumber}
                          onChange={(e) => handleInputChange("caseNumber", e.target.value)}
                          placeholder="예: 2023두12345"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="court">법원 *</Label>
                        <Select value={formData.court} onValueChange={(value) => handleInputChange("court", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="법원 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="대법원">대법원</SelectItem>
                            <SelectItem value="고등법원">고등법원</SelectItem>
                            <SelectItem value="지방법원">지방법원</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">판결일자 *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">카테고리 *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="카테고리 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="세법">세법</SelectItem>
                            <SelectItem value="민법">민법</SelectItem>
                            <SelectItem value="상법">상법</SelectItem>
                            <SelectItem value="형법">형법</SelectItem>
                            <SelectItem value="행정법">행정법</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 판례 요약 카드 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      판례 요약
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="summary">요약 *</Label>
                      <Textarea
                        id="summary"
                        value={formData.summary}
                        onChange={(e) => handleInputChange("summary", e.target.value)}
                        placeholder="판례의 핵심 내용을 간단히 요약해주세요"
                        rows={4}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* 판례 내용 카드 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      판례 내용
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="content">상세 내용</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => handleInputChange("content", e.target.value)}
                        placeholder="판례의 상세한 내용을 입력하세요"
                        rows={8}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* 태그 카드 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      태그
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          value={formData.newTag}
                          onChange={(e) => handleInputChange("newTag", e.target.value)}
                          placeholder="새 태그 입력"
                          onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                        />
                        <Button type="button" onClick={handleAddTag} variant="outline">
                          추가
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="cursor-pointer">
                            {tag}
                            <button
                              type="button"
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-2 hover:text-red-500"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 오른쪽 사이드바 (2/6) */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* 파일 첨부 카드 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      파일 첨부
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="file-upload">파일 선택</Label>
                      <Input
                        id="file-upload"
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx,.txt"
                      />
                    </div>
                    {attachedFiles.length > 0 && (
                      <div className="space-y-2">
                        <Label>첨부된 파일</Label>
                        <div className="space-y-2">
                          {attachedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                              <span className="text-sm truncate">{file.name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveFile(file)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ×
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* 미리보기 카드 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      등록 정보 미리보기
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium text-gray-700 dark:text-gray-300">제목</div>
                      <div className="text-gray-600 dark:text-gray-400 truncate">
                        {formData.title || "입력되지 않음"}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700 dark:text-gray-300">사건번호</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {formData.caseNumber || "입력되지 않음"}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700 dark:text-gray-300">법원</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {formData.court || "입력되지 않음"}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700 dark:text-gray-300">카테고리</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {formData.category || "입력되지 않음"}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700 dark:text-gray-300">태그</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {formData.tags.length > 0 ? (
                          formData.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-gray-400">태그 없음</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 제출 버튼 */}
                <div className="sticky top-6">
                  <Button type="submit" className="w-full" size="lg">
                    <Save className="w-4 h-4 mr-2" />
                    판례 등록
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

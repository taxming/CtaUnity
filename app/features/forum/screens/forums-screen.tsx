import { useState } from "react";
import { Link } from "react-router";
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
import { Avatar, AvatarFallback, AvatarImage } from "~/core/components/ui/avatar";
import { Separator } from "~/core/components/ui/separator";
import { 
  Search, 
  Plus, 
  MessageCircle, 
  Eye, 
  ThumbsUp, 
  Clock, 
  User,
  Filter,
  SortAsc,
  SortDesc
} from "lucide-react";
import type { Route } from "./+types/forums-screen";
import Hero from "~/core/components/hero";

// 게시글 타입 정의
interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  createdAt: string;
  updatedAt?: string;
  viewCount: number;
  replyCount: number;
  likeCount: number;
  category: string;
  tags: string[];
  isPinned?: boolean;
  isClosed?: boolean;
}

// 임시 데이터
const mockPosts: ForumPost[] = [
  {
    id: "1",
    title: "2024년 세무사 시험 준비하시는 분들 계신가요?",
    content: "올해 세무사 시험 준비하고 있는데, 함께 스터디하실 분들 찾습니다. 특히 부가가치세 부분에서 어려움을 겪고 있어서...",
    author: {
      name: "세무준비생",
      role: "준비생"
    },
    createdAt: "2024-01-15T10:30:00Z",
    viewCount: 156,
    replyCount: 8,
    likeCount: 12,
    category: "시험준비",
    tags: ["세무사시험", "스터디", "부가가치세"],
    isPinned: true
  },
  {
    id: "2",
    title: "신규 사업자 등록 후 주의사항들",
    content: "신규 사업자 등록을 마치고 나서 꼭 확인해야 할 세무 관련 체크리스트를 정리해봤습니다...",
    author: {
      name: "세무사김철수",
      role: "세무사"
    },
    createdAt: "2024-01-14T15:45:00Z",
    viewCount: 89,
    replyCount: 5,
    likeCount: 7,
    category: "사업자등록",
    tags: ["신규사업자", "사업자등록", "체크리스트"]
  },
  {
    id: "3",
    title: "연말정산 간소화 서비스 사용 후기",
    content: "올해 연말정산 간소화 서비스를 사용해봤는데, 생각보다 편리하고 시간도 많이 절약되었습니다...",
    author: {
      name: "회계담당자",
      role: "회계담당"
    },
    createdAt: "2024-01-13T09:20:00Z",
    viewCount: 234,
    replyCount: 15,
    likeCount: 23,
    category: "연말정산",
    tags: ["연말정산", "간소화서비스", "후기"]
  }
];

// 카테고리 목록
const categories = [
  "전체",
  "시험준비",
  "사업자등록",
  "연말정산",
  "법인세",
  "부가가치세",
  "기타"
];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Forum" }, { name: "description", content: "Forum page" }];
}

export default function ForumsScreen() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "views">("latest");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // 게시글 정렬
  const sortedPosts = [...mockPosts].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case "latest":
        comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        break;
      case "popular":
        comparison = b.replyCount - a.replyCount;
        break;
      case "views":
        comparison = b.viewCount - a.viewCount;
        break;
    }
    
    return sortOrder === "desc" ? comparison : -comparison;
  });

  // 카테고리별 필터링
  const filteredPosts = selectedCategory === "전체" 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === selectedCategory);

  // 검색 필터링
  const searchFilteredPosts = searchKeyword.trim() === "" 
    ? filteredPosts 
    : filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        post.content.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchKeyword.toLowerCase()))
      );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "어제";
    if (diffDays < 7) return `${diffDays}일 전`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
    return date.toLocaleDateString("ko-KR");
  };

  return (
    <div className="flex flex-col gap-10">
      <Hero title="자유토론방" subtitle="자유롭게 의견을 나누는 공간입니다" />
    

      {/* 그리드 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* 메인 콘텐츠 영역 (좌측 4개) */}
        <div className="lg:col-span-4 space-y-6">
          {/* 검색 및 필터 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* 검색 */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="제목, 내용, 태그로 검색..."
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* 카테고리 선택 */}
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* 정렬 옵션 */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">정렬:</span>
                  <Button
                    variant={sortBy === "latest" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("latest")}
                  >
                    최신순
                  </Button>
                  <Button
                    variant={sortBy === "popular" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("popular")}
                  >
                    인기순
                  </Button>
                  <Button
                    variant={sortBy === "views" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("views")}
                  >
                    조회순
                  </Button>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
                >
                  {sortOrder === "desc" ? <SortDesc className="w-4 h-4" /> : <SortAsc className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 새 글 작성 버튼 */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              총 {searchFilteredPosts.length}개의 게시글
            </div>
            <Button asChild>
              <Link to="/forum/new">
                <Plus className="w-4 h-4 mr-2" />
                새 글 작성
              </Link>
            </Button>
          </div>

          {/* 게시글 목록 */}
          <div className="space-y-4">
            {searchFilteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  {/* 게시글 헤더 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {post.isPinned && (
                          <Badge variant="destructive" className="text-xs">
                            공지
                          </Badge>
                        )}
                        {post.isClosed && (
                          <Badge variant="secondary" className="text-xs">
                            마감
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer">
                        <Link to={`/forum/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {post.content}
                      </p>
                    </div>
                  </div>

                  {/* 게시글 메타 정보 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback className="text-xs">
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{post.author.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {post.author.role}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDate(post.createdAt)}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.viewCount}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.replyCount}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {post.likeCount}
                      </div>
                    </div>
                  </div>

                  {/* 태그 */}
                  {post.tags.length > 0 && (
                    <div className="flex gap-2 mt-3 pt-3 border-t">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 게시글이 없을 때 */}
          {searchFilteredPosts.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-muted-foreground">
                  {searchKeyword || selectedCategory !== "전체" 
                    ? "검색 결과가 없습니다." 
                    : "아직 게시글이 없습니다."}
                </div>
                <Button asChild className="mt-4">
                  <Link to="/forum/new">
                    <Plus className="w-4 h-4 mr-2" />
                    첫 번째 글 작성하기
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* 사이드바 영역 (우측 2개) */}
        <div className="lg:col-span-2 space-y-6">
          {/* 인기 게시글 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">인기 게시글</CardTitle>
              <CardDescription>많은 관심을 받고 있는 게시글입니다</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockPosts
                .sort((a, b) => b.viewCount - a.viewCount)
                .slice(0, 5)
                .map((post) => (
                  <div key={post.id} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <Link to={`/forum/${post.id}`} className="block">
                      <h4 className="font-medium text-sm line-clamp-2 mb-2 hover:text-primary">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.author.name}</span>
                        <span>•</span>
                        <span>{post.viewCount} 조회</span>
                      </div>
                    </Link>
                  </div>
                ))}
            </CardContent>
          </Card>

          {/* 카테고리별 통계 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">카테고리별 통계</CardTitle>
              <CardDescription>주제별 게시글 현황</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.slice(1).map((category) => {
                const count = mockPosts.filter(post => post.category === category).length;
                return (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-sm">{category}</span>
                    <Badge variant="secondary" className="text-xs">
                      {count}
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* 최근 활동 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">최근 활동</CardTitle>
              <CardDescription>새로운 게시글과 댓글</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockPosts
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .slice(0, 3)
                .map((post) => (
                  <div key={post.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback className="text-xs">
                        {post.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {post.title}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                ))}
            </CardContent>
          </Card>

          {/* 빠른 링크 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">빠른 링크</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/forum/new">
                  <Plus className="w-4 h-4 mr-2" />
                  새 글 작성
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/questions">
                  <MessageCircle className="w-4 h-4 mr-2" />
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

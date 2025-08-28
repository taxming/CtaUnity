import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
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
import { Textarea } from "~/core/components/ui/textarea";
import { Separator } from "~/core/components/ui/separator";
import { 
  ArrowLeft, 
  MessageCircle, 
  Eye, 
  ThumbsUp, 
  Clock, 
  Edit,
  Trash2,
  Share2,
  Flag,
  MoreHorizontal,
  Reply,
  Heart
} from "lucide-react";

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
  isLiked?: boolean;
}

// 댓글 타입 정의
interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  createdAt: string;
  likeCount: number;
  isLiked?: boolean;
  replies?: Comment[];
}

// 임시 데이터
const mockPost: ForumPost = {
  id: "1",
  title: "2024년 세무사 시험 준비하시는 분들 계신가요?",
  content: `안녕하세요! 올해 세무사 시험을 준비하고 있는 준비생입니다.

특히 부가가치세 부분에서 어려움을 겪고 있어서 함께 스터디하실 분들을 찾고 있습니다.

**현재 상황:**
- 부가가치세 기본 개념은 이해했지만, 실전 문제 풀이에서 막히는 경우가 많습니다
- 특히 면세와 영세율 구분, 공제가능매입세액 계산 부분이 어렵습니다
- 매주 토요일 오후에 2-3시간 정도 스터디를 진행하고 싶습니다

**스터디 방식:**
- 온라인으로 진행 (Zoom 또는 Discord)
- 문제 풀이 위주로 진행
- 서로 모르는 부분 질문하고 답변하는 방식
- 매주 한 주제씩 깊이 있게 다루기

**참여 조건:**
- 부가가치세에 관심이 있으신 분
- 꾸준히 참여 가능하신 분
- 서로 도움을 주고받을 수 있는 분

함께 열심히 공부해서 합격의 기쁨을 나누고 싶습니다! 
관심 있으신 분들은 댓글이나 쪽지로 연락 부탁드립니다.

감사합니다! 🙏`,
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
  isPinned: true,
  isLiked: false
};

const mockComments: Comment[] = [
  {
    id: "1",
    content: "저도 부가가치세 부분이 어려워서 스터디에 참여하고 싶습니다! 매주 토요일 오후라면 시간 맞을 것 같아요.",
    author: {
      name: "세무준비생2",
      role: "준비생"
    },
    createdAt: "2024-01-15T11:00:00Z",
    likeCount: 3,
    isLiked: false
  },
  {
    id: "2",
    content: "부가가치세는 처음에는 어렵지만 체계적으로 정리하면 이해가 잘 됩니다. 스터디 참여하고 싶은데, 혹시 구체적인 커리큘럼이 있나요?",
    author: {
      name: "세무사김철수",
      role: "세무사"
    },
    createdAt: "2024-01-15T11:30:00Z",
    likeCount: 5,
    isLiked: true
  },
  {
    id: "3",
    content: "저도 참여하고 싶습니다! 부가가치세 면세와 영세율 구분이 정말 헷갈려요. 함께 공부하면 좋을 것 같아요.",
    author: {
      name: "회계담당자",
      role: "회계담당"
    },
    createdAt: "2024-01-15T12:00:00Z",
    likeCount: 2,
    isLiked: false
  }
];

export default function ForumScreen() {
  const { forum_id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<ForumPost>(mockPost);
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 좋아요 토글
  const toggleLike = () => {
    setPost(prev => ({
      ...prev,
      isLiked: !prev.isLiked,
      likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1
    }));
  };

  // 댓글 좋아요 토글
  const toggleCommentLike = (commentId: string) => {
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          isLiked: !comment.isLiked,
          likeCount: comment.isLiked ? comment.likeCount - 1 : comment.likeCount + 1
        };
      }
      return comment;
    }));
  };

  // 댓글 작성
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    try {
      // TODO: API 호출로 댓글 저장
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        content: newComment,
        author: {
          name: "현재사용자",
          role: "사용자"
        },
        createdAt: new Date().toISOString(),
        likeCount: 0,
        isLiked: false
      };

      setComments(prev => [newCommentObj, ...prev]);
      setPost(prev => ({ ...prev, replyCount: prev.replyCount + 1 }));
      setNewComment("");
      
    } catch (error) {
      console.error("댓글 작성 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 답글 작성
  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyContent.trim() || !replyTo) return;

    setIsSubmitting(true);

    try {
      // TODO: API 호출로 답글 저장
      const newReply: Comment = {
        id: Date.now().toString(),
        content: replyContent,
        author: {
          name: "현재사용자",
          role: "사용자"
        },
        createdAt: new Date().toISOString(),
        likeCount: 0,
        isLiked: false
      };

      setComments(prev => prev.map(comment => {
        if (comment.id === replyTo) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply]
          };
        }
        return comment;
      }));

      setReplyTo(null);
      setReplyContent("");
      
    } catch (error) {
      console.error("답글 작성 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 날짜 포맷팅
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

  // 게시글 삭제 (작성자만)
  const handleDelete = () => {
    if (confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
      // TODO: API 호출로 게시글 삭제
      navigate("/forum");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 헤더 */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate("/forum")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          목록으로
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            게시글 상세
          </h1>
          <p className="text-muted-foreground">
            자유토론방의 게시글을 확인합니다
          </p>
        </div>
      </div>

      {/* 게시글 내용 */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
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
              
              <CardTitle className="text-2xl mb-3">
                {post.title}
              </CardTitle>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback className="text-sm">
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{post.author.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {post.author.role}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {formatDate(post.createdAt)}
                </div>

                {post.updatedAt && post.updatedAt !== post.createdAt && (
                  <span className="text-xs">(수정됨)</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                공유
              </Button>
              <Button variant="outline" size="sm">
                <Flag className="w-4 h-4 mr-2" />
                신고
              </Button>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* 게시글 내용 */}
          <div className="prose prose-sm max-w-none mb-6">
            <div className="whitespace-pre-wrap text-foreground">
              {post.content}
            </div>
          </div>

          {/* 태그 */}
          {post.tags.length > 0 && (
            <div className="flex gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* 게시글 액션 */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                조회 {post.viewCount}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                댓글 {post.replyCount}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={post.isLiked ? "default" : "outline"}
                size="sm"
                onClick={toggleLike}
              >
                <Heart className={`w-4 h-4 mr-2 ${post.isLiked ? "fill-current" : ""}`} />
                좋아요 {post.likeCount}
              </Button>

              {/* 작성자만 수정/삭제 가능 */}
              {post.author.name === "현재사용자" && (
                <>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    수정
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDelete}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    삭제
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 댓글 작성 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">댓글 작성</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCommentSubmit}>
            <div className="space-y-3">
              <Textarea
                placeholder="댓글을 입력하세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px] resize-none"
                maxLength={1000}
              />
              <div className="flex justify-between items-center">
                <div className="text-xs text-muted-foreground">
                  {newComment.length}/1000
                </div>
                <Button type="submit" disabled={isSubmitting || !newComment.trim()}>
                  {isSubmitting ? "작성 중..." : "댓글 작성"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* 댓글 목록 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            댓글 {comments.length}개
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-border pb-4 last:border-b-0">
                {/* 댓글 내용 */}
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarImage src={comment.author.avatar} />
                    <AvatarFallback className="text-sm">
                      {comment.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm">{comment.author.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {comment.author.role}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    
                    <div className="text-sm text-foreground mb-3">
                      {comment.content}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCommentLike(comment.id)}
                        className="h-auto p-1 text-xs"
                      >
                        <Heart className={`w-3 h-3 mr-1 ${comment.isLiked ? "fill-current text-red-500" : ""}`} />
                        {comment.likeCount}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                        className="h-auto p-1 text-xs"
                      >
                        <Reply className="w-3 h-3 mr-1" />
                        답글
                      </Button>
                    </div>

                    {/* 답글 작성 폼 */}
                    {replyTo === comment.id && (
                      <div className="mt-3 ml-4 border-l-2 border-border pl-4">
                        <form onSubmit={handleReplySubmit}>
                          <div className="space-y-2">
                            <Textarea
                              placeholder="답글을 입력하세요..."
                              value={replyContent}
                              onChange={(e) => setReplyContent(e.target.value)}
                              className="min-h-[80px] resize-none text-sm"
                              maxLength={500}
                            />
                            <div className="flex justify-between items-center">
                              <div className="text-xs text-muted-foreground">
                                {replyContent.length}/500
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setReplyTo(null);
                                    setReplyContent("");
                                  }}
                                >
                                  취소
                                </Button>
                                <Button
                                  type="submit"
                                  size="sm"
                                  disabled={isSubmitting || !replyContent.trim()}
                                >
                                  {isSubmitting ? "작성 중..." : "답글 작성"}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}

                    {/* 답글 목록 */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-3 ml-4 border-l-2 border-border pl-4 space-y-3">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-2">
                            <Avatar className="w-6 h-6 flex-shrink-0">
                              <AvatarImage src={reply.author.avatar} />
                              <AvatarFallback className="text-xs">
                                {reply.author.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-xs">{reply.author.name}</span>
                                <Badge variant="secondary" className="text-xs">
                                  {reply.author.role}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {formatDate(reply.createdAt)}
                                </span>
                              </div>
                              
                              <div className="text-xs text-foreground mb-2">
                                {reply.content}
                              </div>
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleCommentLike(reply.id)}
                                className="h-auto p-1 text-xs"
                              >
                                <Heart className={`w-3 h-3 mr-1 ${reply.isLiked ? "fill-current text-red-500" : ""}`} />
                                {reply.likeCount}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* 댓글이 없을 때 */}
            {comments.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

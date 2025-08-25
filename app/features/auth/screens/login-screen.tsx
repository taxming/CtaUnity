import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "~/core/components/ui/button";
import { Input } from "~/core/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/core/components/ui/card";
import { Label } from "~/core/components/ui/label";
import { GithubIcon, MessageCircleIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/core/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/core/components/ui/dropdown-menu";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 실제 구현에서는 API 호출로 로그인 처리
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 로그인 시뮬레이션

      console.log("로그인 시도:", { email, password });

      // 로그인 성공 시 홈페이지로 이동
      navigate("/?message=로그인되었습니다");
    } catch (error) {
      console.error("로그인 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="absolute  top-4 right-4 list-none">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/login">Auth</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Login</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">로그인</CardTitle>
          <CardDescription className="text-center">
            계정에 로그인하여 서비스를 이용하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            계정이 없으신가요?{" "}
            <Link to="/register" className="text-primary hover:underline">
              회원가입
            </Link>
          </div>

          <div className="mt-4 text-center text-sm">
            <Link
              to="/forgot-password"
              className="text-muted-foreground hover:underline"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/auth/kakao">
              <MessageCircleIcon className="size-4 mr-2" />
              KAKAO 로그인
            </Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/auth/kakao">
              <GithubIcon className="size-4 mr-2" />
              GITHUB 로그인
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

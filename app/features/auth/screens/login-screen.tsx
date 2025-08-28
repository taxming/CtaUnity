import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router";
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
import type { Route } from "./+types/login-screen";
import { z } from "zod";

export const meta: Route.MetaFunction = () => {
  return [{ title: "로그인 | CTAUNITY" }];
};

const loginSchema = z.object({
  email: z.email({message: "올바른 이메일 형식을 입력해주세요"}),
  password: z.string().min(8, {message: "비밀번호는 8자 이상이어야 합니다"}),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const {error:TypeError, data: parsedData} = await loginSchema.safeParseAsync(Object.fromEntries(formData));
  if(TypeError) {
    return { error: TypeError.flatten().fieldErrors };
  }

  return null;
};

export default function LoginScreen({loaderData, actionData} : Route.ComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

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
          <Form method="post" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                name="email"
                required
                disabled={isLoading}
              />
              {actionData?.error?.email && (
                <p className="text-sm text-red-500">{actionData.error.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                name="password"
                required
                disabled={isLoading}
              />
              {actionData?.error?.password && (
                <p className="text-sm text-red-500">{actionData.error.password}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
          </Form>

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

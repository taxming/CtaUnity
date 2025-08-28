import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router";
import { Button } from "~/core/components/ui/button";
import { Input } from "~/core/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/core/components/ui/card";
import { Label } from "~/core/components/ui/label";
import { GithubIcon, MessageCircleIcon } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "~/core/components/ui/breadcrumb";
import type { Route } from "./+types/register-screen";
import { json, z } from "zod";



export const meta: Route.MetaFunction = () => {
  return [{ title: "회원가입 | CTAUNITY" }];
};

const registerSchema = z.object({
  name: z.string().min(2, {message: "두글자 이상 입력해주세요"}),
  email: z.email({message: "올바른 이메일 형식을 입력해주세요"}),
  password: z.string().min(8, {message: "비밀번호는 8자 이상이어야 합니다"}),
  confirmPassword: z.string().min(8, {message: "비밀번호는 8자 이상이어야 합니다"}),
  taxNumber: z.number({message: "숫자만 입력 가능합니다"}).min(3, {message: "너무 짧습니다"}),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();

  const {error:TypeError, data: parsedData} = await registerSchema.safeParseAsync(Object.fromEntries(formData));
  console.log("TypeError", TypeError?.flatten().fieldErrors);
  console.log("parsedData", parsedData);

  if (TypeError) {
    return { error: TypeError.flatten().fieldErrors };
  }

  return null;
};


export default function RegisterScreen({loaderData, actionData} : Route.ComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
            <div className="absolute  top-4 right-4 list-none" >
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
            <Link to="/register">Auth</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Register</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">회원가입</CardTitle>
          <CardDescription className="text-center">
            새로운 계정을 만들어 서비스를 이용하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                type="text"
                placeholder="홍길동"
                name="name"
                required
                disabled={isLoading}
              />
              {actionData?.error?.name && (
                <p className="text-sm text-red-500">{actionData.error.name}</p>
              )}
            </div>
            
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
                placeholder="8자 이상 입력하세요"
                name="password"
                required
                disabled={isLoading}
              />
              {actionData?.error?.password && (
                <p className="text-sm text-red-500">{actionData.error.password}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                name="confirmPassword"
                required
                disabled={isLoading}
              />
              {actionData?.error?.confirmPassword && (
                <p className="text-sm text-red-500">{actionData.error.confirmPassword}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">세무사등록번호</Label>
              <Input
                id="taxNumber"
                type="text"
                placeholder="세무사등록번호를 입력하세요"
                name="taxNumber"
                required
                disabled={isLoading}
              />
              {actionData?.error?.taxNumber && (
                <p className="text-sm text-red-500">{actionData.error.taxNumber}</p>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? "회원가입 중..." : "회원가입"}
            </Button>
          </Form>
          
          <div className="mt-4 text-center text-sm">
            이미 계정이 있으신가요?{" "}
            <Link 
              to="/login" 
              className="text-primary hover:underline"
            >
              로그인
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/auth/kakao">
              <MessageCircleIcon className="size-4 mr-2" />
              KAKAO로 계속하기
            </Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/auth/kakao">
              <GithubIcon className="size-4 mr-2" />
              GITHUB로 계속하기
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

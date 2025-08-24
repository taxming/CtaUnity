import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/core/components/ui/avatar";
import { Badge } from "~/core/components/ui/badge";
import { Button } from "~/core/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/core/components/ui/card";
import { EyeIcon, MessageCircleIcon } from "lucide-react";

interface CardComponentProps {
  avatarSrc?: string;
  avatarFallback?: string;
  username?: string;
  date?: string;
  title: string;
  description: string;
  badges?: Array<{
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  }>;
  showMessageButton?: boolean;
  messageButtonLink?: string;
  className?: string;
}

export function CardComponent({
  avatarSrc = "https://github.com/shadcn.png",
  avatarFallback = "CN",
  username = "@shadcn",
  date = "2025-08-24",
  title,
  description,
  badges = [],
  showMessageButton = true,
  messageButtonLink = "/",
  className = "",
}: CardComponentProps) {
  return (
    <Card className={`max-w-screen-lg space-y-2 ${className}`}>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <span>{username}</span>
          <span>{date}</span>
        </div>
        <CardTitle>
          <h1>{title}</h1>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center">
        <div className="flex gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant}>
              {badge.text}
            </Badge>
          ))}
        </div>
        {showMessageButton && (
          <div className="flex justify-end items-center gap-2">
            <Button variant="outline" size="icon">
              <Link to={messageButtonLink}>
                <MessageCircleIcon className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link to="/questions/1">
                <EyeIcon className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

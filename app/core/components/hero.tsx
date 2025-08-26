interface HeroProps {
    title: string;
    subtitle?: string;
    className?: string;
  }
  
  export default function Hero({ title, subtitle, className = "" }: HeroProps) {
    return (
      <div className={`flex flex-col items-center justify-between rounded-md bg-gradient-to-t from-background to-primary/10 py-20 px-20 mb-10 ${className}`}>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">{title}</h1>
        {subtitle && <span className="text-xl font-light text-foreground tracking-tight">{subtitle}</span>}
      </div>
    );
  } 
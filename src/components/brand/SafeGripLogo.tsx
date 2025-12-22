import { cn } from "@/lib/utils";

interface SafeGripLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: "default" | "light" | "dark";
}

export function SafeGripLogo({ 
  className, 
  size = 40, 
  showText = true,
  variant = "default" 
}: SafeGripLogoProps) {
  const iconColors = {
    default: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--primary-foreground))",
      accent: "hsl(var(--accent))",
    },
    light: {
      primary: "hsl(var(--foreground))",
      secondary: "hsl(var(--background))",
      accent: "hsl(var(--primary))",
    },
    dark: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--background))",
      accent: "hsl(var(--accent))",
    },
  };

  const colors = iconColors[variant];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* SVG Logo Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Shield background */}
        <path
          d="M32 4L8 14V30C8 45.464 18.536 58.464 32 62C45.464 58.464 56 45.464 56 30V14L32 4Z"
          fill={colors.primary}
        />
        
        {/* Inner shield highlight */}
        <path
          d="M32 8L12 16.5V30C12 43.255 21.255 54.755 32 58C42.745 54.755 52 43.255 52 30V16.5L32 8Z"
          fill={colors.primary}
          opacity="0.9"
        />
        
        {/* Glove icon - palm */}
        <path
          d="M32 18C28 18 25 21 25 25V38C25 40 26.5 42 29 42H35C37.5 42 39 40 39 38V25C39 21 36 18 32 18Z"
          fill={colors.secondary}
        />
        
        {/* Glove fingers */}
        <rect x="26" y="14" width="4" height="12" rx="2" fill={colors.secondary} />
        <rect x="30" y="12" width="4" height="14" rx="2" fill={colors.secondary} />
        <rect x="34" y="14" width="4" height="12" rx="2" fill={colors.secondary} />
        
        {/* Thumb */}
        <ellipse cx="23" cy="28" rx="3" ry="5" fill={colors.secondary} transform="rotate(-20 23 28)" />
        
        {/* Grip lines on palm */}
        <line x1="28" y1="32" x2="36" y2="32" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="28" y1="35" x2="36" y2="35" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="28" y1="38" x2="36" y2="38" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        
        {/* Protection badge / checkmark */}
        <circle cx="44" cy="44" r="8" fill={colors.accent} />
        <path
          d="M40 44L43 47L48 41"
          stroke={colors.secondary}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-extrabold tracking-tight text-foreground text-xl">
            SAFE-GRIP
          </span>
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-[10px] mt-0.5">
            Professional Gloves
          </span>
        </div>
      )}
    </div>
  );
}

// Standalone icon version for favicon/app icon usage
export function SafeGripIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield background */}
      <path
        d="M32 4L8 14V30C8 45.464 18.536 58.464 32 62C45.464 58.464 56 45.464 56 30V14L32 4Z"
        fill="hsl(var(--primary))"
      />
      
      {/* Glove icon - palm */}
      <path
        d="M32 18C28 18 25 21 25 25V38C25 40 26.5 42 29 42H35C37.5 42 39 40 39 38V25C39 21 36 18 32 18Z"
        fill="hsl(var(--primary-foreground))"
      />
      
      {/* Glove fingers */}
      <rect x="26" y="14" width="4" height="12" rx="2" fill="hsl(var(--primary-foreground))" />
      <rect x="30" y="12" width="4" height="14" rx="2" fill="hsl(var(--primary-foreground))" />
      <rect x="34" y="14" width="4" height="12" rx="2" fill="hsl(var(--primary-foreground))" />
      
      {/* Thumb */}
      <ellipse cx="23" cy="28" rx="3" ry="5" fill="hsl(var(--primary-foreground))" transform="rotate(-20 23 28)" />
      
      {/* Grip lines */}
      <line x1="28" y1="32" x2="36" y2="32" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="28" y1="35" x2="36" y2="35" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="28" y1="38" x2="36" y2="38" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      
      {/* Protection checkmark badge */}
      <circle cx="44" cy="44" r="8" fill="hsl(var(--accent))" />
      <path
        d="M40 44L43 47L48 41"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

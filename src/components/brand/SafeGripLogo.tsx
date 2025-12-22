import { cn } from "@/lib/utils";

interface SafeGripLogoProps {
  className?: string;
  variant?: "yellow" | "black";
}

// Triple-bar grip element component
function GripBars({ color, height = 18 }: { color: string; height?: number }) {
  const barHeight = 3;
  const gap = 2;
  const barWidth = 14;
  const totalHeight = barHeight * 3 + gap * 2;
  const offsetY = (height - totalHeight) / 2;
  
  return (
    <svg 
      width={barWidth} 
      height={height} 
      viewBox={`0 0 ${barWidth} ${height}`}
      className="flex-shrink-0"
    >
      <rect x="0" y={offsetY} width={barWidth} height={barHeight} fill={color} />
      <rect x="0" y={offsetY + barHeight + gap} width={barWidth} height={barHeight} fill={color} />
      <rect x="0" y={offsetY + (barHeight + gap) * 2} width={barWidth} height={barHeight} fill={color} />
    </svg>
  );
}

export function SafeGripLogo({ 
  className, 
  variant = "yellow"
}: SafeGripLogoProps) {
  const color = variant === "yellow" ? "#FFE600" : "#000000";

  return (
    <div className={cn("flex items-center", className)}>
      <span 
        style={{ 
          color,
          fontFamily: "'Bebas Neue', Impact, 'Arial Black', sans-serif",
          fontWeight: 900,
          fontSize: '1.75rem',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        SAFE
      </span>
      <div className="mx-0.5 flex items-center">
        <GripBars color={color} height={22} />
      </div>
      <span 
        style={{ 
          color,
          fontFamily: "'Bebas Neue', Impact, 'Arial Black', sans-serif",
          fontWeight: 900,
          fontSize: '1.75rem',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        GRIP
      </span>
    </div>
  );
}

// Monogram version for favicon: S═G
export function SafeGripMonogram({ size = 32, variant = "yellow" }: { size?: number; variant?: "yellow" | "black" }) {
  const color = variant === "yellow" ? "#FFE600" : "#000000";
  const bgColor = variant === "yellow" ? "#1a1a1a" : "#ffffff";
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="64" height="64" fill={bgColor} rx="8" />
      
      {/* S letter */}
      <text
        x="8"
        y="46"
        fill={color}
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: '38px',
          fontWeight: 900,
        }}
      >
        S
      </text>
      
      {/* Triple grip bars */}
      <rect x="26" y="26" width="12" height="3" fill={color} />
      <rect x="26" y="31" width="12" height="3" fill={color} />
      <rect x="26" y="36" width="12" height="3" fill={color} />
      
      {/* G letter */}
      <text
        x="40"
        y="46"
        fill={color}
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: '38px',
          fontWeight: 900,
        }}
      >
        G
      </text>
    </svg>
  );
}

// Icon version for other uses (compact)
export function SafeGripIcon({ size = 32, className, variant = "yellow" }: { size?: number; className?: string; variant?: "yellow" | "black" }) {
  const color = variant === "yellow" ? "#FFE600" : "#000000";
  const bgColor = variant === "yellow" ? "#1a1a1a" : "#ffffff";
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="64" height="64" fill={bgColor} rx="8" />
      <text
        x="8"
        y="46"
        fill={color}
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: '38px',
          fontWeight: 900,
        }}
      >
        S
      </text>
      <rect x="26" y="26" width="12" height="3" fill={color} />
      <rect x="26" y="31" width="12" height="3" fill={color} />
      <rect x="26" y="36" width="12" height="3" fill={color} />
      <text
        x="40"
        y="46"
        fill={color}
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: '38px',
          fontWeight: 900,
        }}
      >
        G
      </text>
    </svg>
  );
}

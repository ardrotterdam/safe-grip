import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  className?: string;
  containerClassName?: string;
  placeholderClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  webpSrc,
  className,
  containerClassName,
  placeholderClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Generate WebP source from original if not provided
  const webpSource = webpSrc || (src ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : undefined);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", containerClassName)}>
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            placeholderClassName
          )}
        />
      )}
      
      {/* Actual image with WebP support - only load when in view */}
      {isInView && (
        <picture>
          {webpSource && (
            <source srcSet={webpSource} type="image/webp" />
          )}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
              className
            )}
            {...props}
          />
        </picture>
      )}
    </div>
  );
}

interface LazyBackgroundImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export function LazyBackgroundImage({
  src,
  webpSrc,
  alt,
  className,
  children,
}: LazyBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check WebP support
  useEffect(() => {
    const checkWebP = async () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setSupportsWebP(webP.height === 1);
      };
      webP.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    };
    checkWebP();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src) {
      const imageSrc = supportsWebP && webpSrc ? webpSrc : src;
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => setIsLoaded(true);
    }
  }, [isInView, src, webpSrc, supportsWebP]);

  const imageSrc = supportsWebP && webpSrc ? webpSrc : src;

  return (
    <div
      ref={containerRef}
      className={cn(
        "bg-cover bg-center bg-no-repeat transition-opacity duration-700",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      style={isInView ? { backgroundImage: `url(${imageSrc})` } : undefined}
      role="img"
      aria-label={alt}
    >
      {children}
    </div>
  );
}

// Utility hook to detect WebP support
export function useWebPSupport() {
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    const checkWebP = async () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setSupportsWebP(webP.height === 1);
      };
      webP.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    };
    checkWebP();
  }, []);

  return supportsWebP;
}

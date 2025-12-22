import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Responsive image sizes configuration
export interface ResponsiveSizes {
  mobile?: string;   // 480w
  tablet?: string;   // 768w
  desktop?: string;  // 1280w
  large?: string;    // 1920w
}

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  srcSet?: string;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  placeholderClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  webpSrc,
  srcSet,
  sizes = "(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
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
      
      {/* Actual image with WebP and srcset support - only load when in view */}
      {isInView && (
        <picture>
          {webpSrc && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
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

interface ResponsiveImageProps extends Omit<OptimizedImageProps, 'srcSet' | 'sizes'> {
  responsiveSrc: {
    mobile: string;   // 480w
    tablet: string;   // 768w
    desktop: string;  // 1280w
  };
}

export function ResponsiveImage({
  responsiveSrc,
  alt,
  className,
  containerClassName,
  placeholderClassName,
  ...props
}: ResponsiveImageProps) {
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

  const srcSet = `${responsiveSrc.mobile} 480w, ${responsiveSrc.tablet} 768w, ${responsiveSrc.desktop} 1280w`;
  const sizes = "(max-width: 480px) 100vw, (max-width: 768px) 100vw, 50vw";

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
      
      {/* Responsive image with srcset */}
      {isInView && (
        <img
          src={responsiveSrc.desktop}
          srcSet={srcSet}
          sizes={sizes}
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
      )}
    </div>
  );
}

interface LazyBackgroundImageProps {
  src: string;
  mobileSrc?: string;
  tabletSrc?: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export function LazyBackgroundImage({
  src,
  mobileSrc,
  tabletSrc,
  webpSrc,
  alt,
  className,
  children,
}: LazyBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const containerRef = useRef<HTMLDivElement>(null);

  // Select appropriate image based on screen size
  useEffect(() => {
    const updateSrc = () => {
      const width = window.innerWidth;
      if (width <= 480 && mobileSrc) {
        setCurrentSrc(mobileSrc);
      } else if (width <= 768 && tabletSrc) {
        setCurrentSrc(tabletSrc);
      } else {
        setCurrentSrc(webpSrc || src);
      }
    };

    updateSrc();
    window.addEventListener('resize', updateSrc);
    return () => window.removeEventListener('resize', updateSrc);
  }, [src, mobileSrc, tabletSrc, webpSrc]);

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
    if (isInView && currentSrc) {
      setIsLoaded(false);
      const img = new Image();
      img.src = currentSrc;
      img.onload = () => setIsLoaded(true);
    }
  }, [isInView, currentSrc]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "bg-cover bg-center bg-no-repeat transition-opacity duration-700",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      style={isInView ? { backgroundImage: `url(${currentSrc})` } : undefined}
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

// Utility to generate srcset string from responsive sources
export function generateSrcSet(sources: ResponsiveSizes): string {
  const parts: string[] = [];
  if (sources.mobile) parts.push(`${sources.mobile} 480w`);
  if (sources.tablet) parts.push(`${sources.tablet} 768w`);
  if (sources.desktop) parts.push(`${sources.desktop} 1280w`);
  if (sources.large) parts.push(`${sources.large} 1920w`);
  return parts.join(', ');
}

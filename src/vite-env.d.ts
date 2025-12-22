/// <reference types="vite/client" />

// Image imports with query parameters for vite-imagetools
declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*?optimized' {
  const src: string;
  export default src;
}

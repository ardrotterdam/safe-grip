/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Image imports with query parameters for vite-imagetools
declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*?format=webp&quality=85' {
  const src: string;
  export default src;
}

declare module '*?optimized' {
  const src: string;
  export default src;
}

// Generic pattern for any jpg/png with query parameters
declare module '*.jpg?*' {
  const src: string;
  export default src;
}

declare module '*.jpeg?*' {
  const src: string;
  export default src;
}

declare module '*.png?*' {
  const src: string;
  export default src;
}

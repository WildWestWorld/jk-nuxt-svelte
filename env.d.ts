/// <reference types="vite/client" />

interface ImportMeta {
  glob(pattern: (string | string[]), options?: { query?: string; import?: string, eager?: boolean }): Record<string, unknown>;
  hot;
}

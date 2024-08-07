# Hono Blog Template

---
type: "index"
title: "Home"
---

### 1. About

Simple blog template with Hono Js and Deno.

### 2. Getting Started

```bash
git clone https://github.com/phothinmg/hono-blog-template.git
```

### 3. `deno.json`

```json
{
  "$schema": "./deno.schema.json",
  "version": "1.0.0",
  "tasks": {
    "start": "deno serve -A mod.ts"
  },
  "imports": {
    "@hono/hono": "jsr:@hono/hono@^4.5.4",
    "@ptm/hono-blog": "jsr:@ptm/hono-blog@^0.0.5"
  },
  "compilerOptions": {
    "jsx": "precompile",
    "jsxImportSource": "jsr:@hono/hono@^4.5.4/jsx"
  }
}
```

Check and update version of @hono/hono at https://jsr.io/@hono/hono and @ptm/hono-blog at https://jsr.io/@ptm/hono-blog

### 4. Configuration

`mod.ts`

```ts
import { blog } from "@ptm/hono-blog";

const app = blog({
  siteName: "Hono Blog Template",
  baseDir: "app",
  meta: {
    author: "Hono Blog",
    description: "Hono Blog Template with Deno",
    keywords: ["hono", "deno", "blog"],
    favicon: "favicon.ico",
    ogType: "website",
    // This og:image is generated by https://www.opengraph.xyz/
    ogImage:
      "https://opengraph.b-cdn.net/production/images/a1ea7ff1-12b9-4505-9f6e-2e9a119badf8.png?token=4mnJrVq4kMMlG2GMzBGRIj4S5DHq81C3BS6owMZYgWY&height=960&width=1200&expires=33259066794",
    ogTitle: "Hono Blog Template",
    ogUrl: "https://hono-blog-template.deno.dev/",
  },
  socialLink: {
    github: "https://github.com/phothinmg/hono-blog-template",
  },
});

export default app;

```

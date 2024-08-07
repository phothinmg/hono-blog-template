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

### 3. Configuration

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
  },
  socialLink: {
    github: "https://github.com/phothinmg/hono-blog-template",
  },
});

export default app;
```

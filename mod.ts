import { blog } from "@ptm/hono-blog";

const app = blog({
  siteName: "Hono Blog Template",
  baseDir: "app",
});

export default app;

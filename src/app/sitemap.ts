import type { MetadataRoute } from "next";
import { publicEnv } from "@/lib/env";

const routes = [
  "",
  "/ai-employees",
  "/for-sales",
  "/for-service",
  "/pricing",
  "/results",
  "/about",
  "/demo",
  "/privacy",
  "/terms",
  "/tcpa",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = publicEnv.siteUrl.replace(/\/$/, "");
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/demo" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/demo" ? 0.9 : 0.7,
  }));
}

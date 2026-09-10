import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahala Shana VK | Software Developer Portfolio" },
      { name: "description", content: "Portfolio of Sahala Shana VK, a B.Tech IT student building practical software, web, and Flutter experiences." },
      { property: "og:title", content: "Sahala Shana VK | Software Developer Portfolio" },
      { property: "og:description", content: "Explore Sahala's software projects, technical skills, experience, and education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

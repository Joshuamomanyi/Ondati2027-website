import { createFileRoute } from "@tanstack/react-router";
import { NewsGallery } from "@/components/campaign/NewsGallery";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Media — Dennis Ondati Omari Campaign" },
      {
        name: "description",
        content:
          "Rally updates, Ondati Cup highlights, and media appearances from the Dennis Ondati Omari campaign for Gesusu Ward.",
      },
      { property: "og:title", content: "News & Media — Dennis Ondati Omari" },
      {
        property: "og:description",
        content: "From the ground, straight to you.",
      },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: () => (
    <div className="pt-16">
      <NewsGallery />
    </div>
  ),
});

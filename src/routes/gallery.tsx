import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/campaign/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Dennis Ondati Omari Campaign" },
      {
        name: "description",
        content:
          "Event photos of Dennis Ondati Omari — rallies, community gatherings, and campaign moments across Gesusu Ward.",
      },
      { property: "og:title", content: "Photo Gallery — Dennis Ondati Omari" },
      {
        property: "og:description",
        content: "Moments from the campaign trail across Gesusu Ward.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <div className="pt-16">
      <Gallery />
    </div>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { LocationPortals } from "@/components/campaign/LocationPortals";

export const Route = createFileRoute("/your-area")({
  head: () => ({
    meta: [
      { title: "Your Area — Local Plans for Gesusu Ward" },
      {
        name: "description",
        content:
          "See the specific commitments Dennis Ondati Omari has made for your sub-location across Gesusu Ward.",
      },
      { property: "og:title", content: "Your Area — Plans for Gesusu Ward" },
      {
        property: "og:description",
        content: "Targeted, local commitments for where you live.",
      },
    ],
    links: [{ rel: "canonical", href: "/your-area" }],
  }),
  component: () => (
    <div className="pt-16">
      <LocationPortals />
    </div>
  ),
});

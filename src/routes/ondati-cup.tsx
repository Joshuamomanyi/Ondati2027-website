import { createFileRoute } from "@tanstack/react-router";
import { OndatiCup } from "@/components/campaign/OndatiCup";

export const Route = createFileRoute("/ondati-cup")({
  head: () => ({
    meta: [
      { title: "The Ondati Cup — Community Sports in Gesusu Since 2014" },
      {
        name: "description",
        content:
          "Started in 2014, the Ondati Cup unites the youth of Gesusu Ward through football — developing talent, building unity, and fostering peace.",
      },
      { property: "og:title", content: "The Ondati Cup — Since 2014" },
      {
        property: "og:description",
        content: "More than a tournament — a movement uniting the youth of Gesusu.",
      },
    ],
    links: [{ rel: "canonical", href: "/ondati-cup" }],
  }),
  component: () => (
    <div className="pt-16">
      <OndatiCup />
    </div>
  ),
});

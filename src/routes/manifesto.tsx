import { createFileRoute } from "@tanstack/react-router";
import { Manifesto } from "@/components/campaign/Manifesto";

export const Route = createFileRoute("/manifesto")({
  head: () => ({
    meta: [
      { title: "Manifesto — Four Pillars for a Stronger Gesusu Ward" },
      {
        name: "description",
        content:
          "Dennis Ondati Omari's manifesto: youth empowerment, a transparent ward development fund, infrastructure and market development, and support for farmers.",
      },
      { property: "og:title", content: "Manifesto — Dennis Ondati Omari" },
      {
        property: "og:description",
        content: "Four practical pillars with measurable commitments for Gesusu Ward.",
      },
    ],
    links: [{ rel: "canonical", href: "/manifesto" }],
  }),
  component: () => (
    <div className="pt-16">
      <Manifesto />
    </div>
  ),
});

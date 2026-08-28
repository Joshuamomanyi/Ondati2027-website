import { createFileRoute } from "@tanstack/react-router";
import { Manifesto } from "@/components/campaign/Manifesto";

export const Route = createFileRoute("/manifesto")({
  head: () => ({
    meta: [
      { title: "Manifesto — 5-Point Mandate for Gesusu Ward" },
      {
        name: "description",
        content:
          "Dennis Ondati Omari's 5-point mandate for Gesusu Ward: water and modern farming, roads and lighting, education, healthcare, and sports, entertainment and recreation.",
      },
      { property: "og:title", content: "Manifesto — Dennis Ondati Omari" },
      {
        property: "og:description",
        content: "Five practical mandate points for a stronger, more connected Gesusu Ward.",
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

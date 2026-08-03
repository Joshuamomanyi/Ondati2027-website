import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/campaign/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dennis Ondati Omari — Gesusu Ward MCA Aspirant" },
      {
        name: "description",
        content:
          "Learn about Dennis Ondati Omari: his deep local roots in Gesusu Ward, his closeness to the people, and his dedication to accountable service.",
      },
      { property: "og:title", content: "About Dennis Ondati Omari" },
      {
        property: "og:description",
        content: "A son of Gesusu, standing with Gesusu.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="pt-16">
      <About />
    </div>
  ),
});

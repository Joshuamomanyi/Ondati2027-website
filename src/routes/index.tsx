import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/campaign/Hero";
import { About } from "@/components/campaign/About";
import { Testimonials } from "@/components/campaign/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dennis Ondati Omari — MCA Aspirant, Gesusu Ward 2027" },
      {
        name: "description",
        content:
          "Dennis Ondati Omari is running for MCA of Gesusu Ward in 2027 on a platform of accountable, people-centered leadership. Join the movement.",
      },
      { property: "og:title", content: "Dennis Ondati Omari — MCA Aspirant, Gesusu Ward 2027" },
      {
        property: "og:description",
        content: "Accountable, people-centered leadership for Gesusu Ward.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
    </>
  );
}

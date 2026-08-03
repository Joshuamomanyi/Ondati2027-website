import { createFileRoute } from "@tanstack/react-router";
import { GetInvolved } from "@/components/campaign/GetInvolved";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Volunteer for Gesusu Ward" },
      {
        name: "description",
        content:
          "Join the movement for Gesusu Ward. Register as a volunteer and the Dennis Ondati Omari team will reach out on WhatsApp.",
      },
      { property: "og:title", content: "Get Involved — Volunteer" },
      {
        property: "og:description",
        content: "Volunteers are the heartbeat of this campaign. Register today.",
      },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: () => (
    <div className="pt-16">
      <GetInvolved />
    </div>
  ),
});

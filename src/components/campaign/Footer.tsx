import { Facebook, Twitter, Music2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CAMPAIGN } from "@/lib/campaign-data";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/ondati-cup", label: "Ondati Cup" },
  { to: "/manifesto", label: "Manifesto" },
  { to: "/your-area", label: "Your Area" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/get-involved", label: "Volunteer" },
] as const;

const SOCIALS = [
  { icon: Facebook, href: CAMPAIGN.socials.facebook, label: "Facebook" },
  { icon: Twitter, href: CAMPAIGN.socials.twitter, label: "X (Twitter)" },
  { icon: Music2, href: CAMPAIGN.socials.tiktok, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold font-display text-lg font-extrabold text-gold-foreground">
                DO
              </span>
              <div className="leading-tight">
                <p className="font-display font-bold">Dennis Ondati Omari</p>
                <p className="text-sm text-primary-foreground/70">
                  MCA Aspirant · Gesusu Ward {CAMPAIGN.year}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-primary-foreground/70">
              Accountable, people-centered leadership. Building a Gesusu Ward that works for every
              family — together.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Get in touch
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/75">
              Join the official campaign WhatsApp community for updates and to volunteer.
            </p>
            <a
              href={CAMPAIGN.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green px-4 py-2.5 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90"
            >
              Join on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Dennis Ondati Omari Campaign. All rights reserved.
          </p>
          <p className="mt-2 max-w-3xl">
            Paid for and authorised by the Dennis Ondati Omari Campaign. This website is for
            informational and civic-engagement purposes. Location plans and figures are indicative
            commitments and may be refined in consultation with residents and county authorities.
          </p>
        </div>
      </div>
    </footer>
  );
}

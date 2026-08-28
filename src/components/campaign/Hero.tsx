import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/dennis-hero-portrait.png.asset.json";
import { CAMPAIGN } from "@/lib/campaign-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Background portrait with deep-blue overlay */}
      <div className="absolute inset-0">
        <img
          src="/dennis-portrait.png"
          alt="Dennis Ondati Omari"
          className="h-full w-full object-cover object-top md:object-[center_top] lg:object-[70%_top]"
        />
        <div className="absolute inset-0 bg-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-primary/20" />
      </div>

      {/* ambient shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-green/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-32 text-center sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold shadow-lg backdrop-blur-sm">
            MCA Aspirant · Gesusu Ward · {CAMPAIGN.year}
          </span>
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-6 py-8 shadow-xl backdrop-blur-md sm:px-8 sm:py-10">
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Accountable Leadership{" "}
              <span className="text-gold">| Tiga Gesusu Emese See!</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-primary-foreground/90">
              I'm{" "}
              <strong className="font-semibold text-primary-foreground">Dennis Ondati Omari</strong>.
              Together we'll deliver transparent development, real opportunities for our youth, and a
              Ward that works for every family.
            </p>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/manifesto">
                Read Manifesto <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/get-involved">
                <HeartHandshake className="h-5 w-5" /> Volunteer Now
              </Link>
            </Button>
          </div>

          {/* Front text elements */}
          <div className="mt-10 inline-flex flex-col items-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-4 backdrop-blur-sm">
            <p className="font-display text-lg font-bold text-primary-foreground">
              Dennis Ondati Omari
            </p>
            <p className="text-sm text-gold">People-centered. Present. Proven.</p>
          </div>

          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
            {[
              { k: "4", v: "Core pillars" },
              { k: "1", v: "Ward, one team" },
              { k: "100%", v: "Accountability" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-extrabold text-gold">{s.k}</dt>
                <dd className="mt-1 text-xs text-primary-foreground/70">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

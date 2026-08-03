import { useState } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { LOCATIONS } from "@/lib/campaign-data";
import { cn } from "@/lib/utils";

export function LocationPortals() {
  const [active, setActive] = useState(LOCATIONS[0].id);
  const current = LOCATIONS.find((l) => l.id === active) ?? LOCATIONS[0];

  return (
    <section id="portals" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green">
            Your Neighborhood
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
            What Dennis Plans for Your Area
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Select your location to see the specific commitments for where you live.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Selector */}
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {LOCATIONS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setActive(l.id)}
                  className={cn(
                    "flex flex-1 items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all lg:flex-none",
                    active === l.id
                      ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-accent",
                  )}
                >
                  <MapPin className="h-4 w-4 shrink-0" />
                  {l.name}
                </button>
              ))}
            </div>

            {/* Card */}
            <div
              key={current.id}
              className="animate-fade-up rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-7 shadow-[var(--shadow-elegant)] sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-gold-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Plan for
                  </p>
                  <h3 className="font-display text-2xl font-extrabold">{current.name}</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {current.promises.map((promise) => (
                  <li key={promise} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                    <span className="text-pretty text-foreground/90">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

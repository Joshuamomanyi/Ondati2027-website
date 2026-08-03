import { Users, Shield, Building2, Sprout, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { PILLARS } from "@/lib/campaign-data";

const ICONS: Record<string, LucideIcon> = {
  users: Users,
  shield: Shield,
  building: Building2,
  sprout: Sprout,
};

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green">
            The Manifesto
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Four pillars for a stronger Gesusu Ward
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            A clear, practical vision — with measurable commitments the community can hold me to.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[p.icon] ?? Users;
            return (
              <Reveal key={p.title} delay={i * 90} as="article">
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[var(--shadow-elegant)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-5 block font-display text-xs font-bold text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

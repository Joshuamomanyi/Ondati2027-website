import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/lib/campaign-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green">
            Voices of Gesusu & Beyond
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Real stories, real impact
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From school fees to hospital bills, businesses to funeral support — residents share how
            Dennis has stood with them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} as="article">
              <figure className="glow-card flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 flex-1 text-pretty text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                  <span className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t.help}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MapPin, HandHeart, Landmark } from "lucide-react";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    icon: MapPin,
    title: "Deep local roots",
    text: "Born, raised and grounded in Gesusu Ward — I know our villages, markets and paths because they are home.",
  },
  {
    icon: HandHeart,
    title: "Close to the people",
    text: "From weddings to funerals, harambees to harvests, I show up. Leadership is presence, not promises.",
  },
  {
    icon: Landmark,
    title: "Dedicated to service",
    text: "Years of community organising and mentorship have prepared me to serve Gesusu with integrity.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green">
            About Dennis
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Omomura Oito, Ogotenena na Gesusu Chingangi Chiosi.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            Dennis Ondati Omari has spent his life within the community he now seeks to serve. His
            rapport with residents — young and old — is built on years of listening, showing up, and
            getting things done quietly and consistently.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="glow-card h-full rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

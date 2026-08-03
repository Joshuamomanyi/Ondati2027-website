import { Trophy, Users, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { CAMPAIGN } from "@/lib/campaign-data";
import cup1 from "@/assets/ondati-cup-match.jpg.asset.json";
import cup2 from "@/assets/dennis-crowd.png.asset.json";
import cup3 from "@/assets/ondati-cup-flag.jpg.asset.json";

const GALLERY = [
  { img: "Ondati-cup-2.jpg", caption: "Community turnout at the Ondati Cup" },
  { img: "/dennis-crowd.png", caption: "Dennis with supporters across Gesusu" },
  { img: "Ondati-cup.jpg", caption: "Bringing generations together" },
];

const VALUES = [
  { icon: Trophy, title: "Talent Development", text: "A real platform for young footballers to be seen and grow." },
  { icon: Users, title: "Youth Unity", text: "Bringing villages together through friendly, fair competition." },
  { icon: HeartHandshake, title: "Peace & Belonging", text: "Sport as a bridge — building peace and pride in Gesusu." },
];

export function OndatiCup() {
  return (
    <section id="ondati-cup" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
            <Trophy className="h-4 w-4" /> Community Sports
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold sm:text-4xl">
            The Ondati Cup — since {CAMPAIGN.cupSince}
          </h2>
          <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
            More than a tournament — a movement. Started in {CAMPAIGN.cupSince}, the Ondati Cup has
            for over a decade united the youth of Gesusu, nurtured raw talent, and become a living
            symbol of Dennis's connection with the community.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.caption} delay={i * 100} as="article">
              <figure className="group relative overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-[var(--shadow-elegant)]">
                <img
                  src={g.img}
                  alt={g.caption}
                  width={1000}
                  height={800}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 to-transparent p-4 text-sm font-medium">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="glow-card h-full rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10 transition-transform duration-300 hover:shadow-[var(--shadow-gold)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-gold-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  HeartHandshake,
  MapPin,
  Play,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const TEAMS = [
  "Getacho",
  "Chibwobi",
  "Omobera",
  "Kiomiti",
  "Getare",
  "Ikenye",
  "Nyamesocho",
  "Mesabisabi",
  "Raganga",
  "Masabo",
  "Chironge",
  "Nyangonda",
  "Geteri",
  "Emonga",
];
const FIXTURES = [
  {
    status: "LIVE · 67'",
    category: "MEN",
    date: "Today · 16:00",
    venue: "Getacho",
    home: "Getacho",
    away: "Chibwobi",
    score: "2 - 1",
    action: "Watch Live",
  },
  {
    status: "UPCOMING",
    category: "WOMEN",
    date: "Fri, Aug 23 · 17:00",
    venue: "Geteri",
    home: "Mesabisabi",
    away: "Nyangonda",
    score: "-",
    action: "Set Reminder",
  },
  {
    status: "UPCOMING",
    category: "WOMEN",
    date: "Sat, Aug 17 · 15:30",
    venue: "Nyanturago",
    home: "Nyamesocho",
    away: "Raganga",
    score: "-",
    action: "Set Reminder",
  },
  {
    status: "FULL TIME",
    category: "MEN",
    date: "Yesterday · 15:00",
    venue: "Ibacho",
    home: "Omobera",
    away: "Kiomiti",
    score: "3 - 3",
    action: "Match Report",
  },
];
const GROUPS = [
  {
    name: "Group A",
    teams: ["Getacho", "Chibwobi", "Omobera", "Kiomiti", "Getare", "Ikenye", "Nyamesocho"],
  },
  {
    name: "Group B",
    teams: ["Mesabisabi", "Raganga", "Masabo", "Chironge", "Nyangonda", "Geteri", "Emonga"],
  },
];
const MEDIA = [
  { image: "/women-league (1).jpg", eyebrow: "On the pitch", title: "Women's Category Spotlight" },
  { image: "/Ondati-cup-2.jpg", eyebrow: "Save of the day", title: "Highlight of the Week" },
  { image: "/Amashabiki.jpg", eyebrow: "Community", title: "Amashabiki A'Nyaribari Yaito" },
];

const VALUES = [
  {
    icon: Trophy,
    title: "Talent Development",
    text: "A real platform for young footballers to be seen and grow.",
  },
  {
    icon: Users,
    title: "Youth Unity",
    text: "Bringing villages together through friendly, fair competition.",
  },
  {
    icon: HeartHandshake,
    title: "Peace & Belonging",
    text: "Sport as a bridge — building peace and pride in Gesusu.",
  },
];

export function OndatiCup() {
  const [category, setCategory] = useState<"Men's Category" | "Women's Category">("Men's Category");

  return (
    <section id="ondati-cup" className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,oklch(0.34_0.11_262_/_10%),transparent_30%)]" />
      <div className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-24 lg:pt-32">
          <Reveal>
            <span className="inline-flex rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              December Edition · Men & Women
            </span>
            <h1 className="mt-6 max-w-xl text-balance font-display text-5xl font-black uppercase leading-[0.88] sm:text-7xl">
              The Pride of <span className="text-gold">Gesusu</span>
              <br />
              Since 2014
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              More than a tournament — a movement. Started in 2014, the Ondati Cup has for over a
              decade united the youth of Gesusu, nurtured raw talent, and become a living symbol of
              Dennis&apos;s connection with the community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/get-involved">
                  Register Your Team <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/gallery">
                  <Play /> Watch Live
                </Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 border-t border-border pt-5">
              {[
                ["14", "Teams"],
                ["M+W", "Categories"],
                ["1", "Edition / Yr"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl font-black text-gold">{value}</dt>
                  <dd className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]"
          >
            <img
              src="/dennis-portrait.png"
              alt="Ondati Cup players on the pitch"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 font-display text-2xl font-black uppercase text-primary-foreground">
              The game belongs to everyone.
            </p>
          </Reveal>
        </div>
        <div className="overflow-hidden border-y border-border bg-secondary py-4">
          <div className="ondati-marquee flex min-w-max gap-8 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {[...TEAMS, ...TEAMS].map((team, index) => (
              <span key={`${team}-${index}`} className="flex items-center gap-8">
                <i className="h-1.5 w-1.5 rounded-full bg-gold" />
                {team}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div id="fixtures">
            <Reveal className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  Fixtures & Results
                </span>
                <h2 className="mt-2 font-display text-4xl font-black uppercase sm:text-5xl">
                  Live & Upcoming
                </h2>
              </div>
              <Link
                to="/ondati-cup"
                hash="standings"
                className="hidden text-sm text-muted-foreground hover:text-primary sm:block"
              >
                View full schedule <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="ondati-fixtures mt-8 flex min-w-max gap-4 pb-4">
            {[...FIXTURES, ...FIXTURES].map((fixture, index) => (
              <Reveal
                key={`${fixture.home}-${fixture.away}`}
                delay={index * 80}
                as="article"
                className="w-[min(86vw,320px)] shrink-0 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span
                    className={fixture.status.startsWith("LIVE") ? "text-red-400" : "text-gold"}
                  >
                    {fixture.status}
                  </span>
                  <span className="text-muted-foreground">{fixture.category}</span>
                </div>
                <div className="mt-5 flex items-center justify-between border-b border-border pb-4 text-sm text-muted-foreground">
                  <span>
                    <CalendarDays className="mr-2 inline h-4 w-4" />
                    {fixture.date}
                  </span>
                  <span>
                    <MapPin className="mr-1 inline h-3.5 w-3.5" />
                    {fixture.venue}
                  </span>
                </div>
                <div className="space-y-3 py-5 font-bold text-foreground">
                  <div className="flex justify-between">
                    {fixture.home}
                    <strong className="font-display text-xl">
                      {fixture.score.split(" - ")[0]}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    {fixture.away}
                    <strong className="font-display text-xl">
                      {fixture.score.split(" - ")[1] ?? "-"}
                    </strong>
                  </div>
                </div>
                <Button
                  asChild
                  variant={fixture.status.startsWith("LIVE") ? "gold" : "outline"}
                  className={`w-full ${!fixture.status.startsWith("LIVE") ? "border-gold bg-transparent text-gold hover:bg-gold/10 hover:text-gold" : ""}`}
                >
                  <Link
                    to={
                      fixture.status === "FULL TIME"
                        ? "/news"
                        : fixture.status.startsWith("LIVE")
                          ? "/gallery"
                          : "/get-involved"
                    }
                  >
                    {fixture.status.startsWith("LIVE") ? (
                      <Play />
                    ) : fixture.status === "FULL TIME" ? (
                      <ArrowRight />
                    ) : (
                      <Clock3 />
                    )}
                    {fixture.action}
                  </Link>
                </Button>
              </Reveal>
            ))}
          </div>
          <div
            id="standings"
            className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"
          >
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Tournament Groups
              </span>
              <h2 className="mt-2 font-display text-4xl font-black uppercase sm:text-5xl">
                Standings
              </h2>
              <p className="mt-4 max-w-sm text-muted-foreground">
                Fourteen teams. Two categories. One community coming together at the pitch.
              </p>
              <div className="mt-8 inline-flex rounded-xl border border-border bg-secondary p-1">
                {(["Men's Category", "Women's Category"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-lg px-4 py-2 text-xs font-bold ${category === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {GROUPS.map((group) => (
                <Reveal key={group.name} as="article">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                    <div className="flex justify-between border-b border-border px-4 py-4">
                      <h3 className="font-display font-bold uppercase">{group.name}</h3>
                      <span className="text-xs text-primary">{category}</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[430px] text-left text-xs">
                        <thead className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          <tr>
                            <th className="px-3 py-3">#</th>
                            <th className="px-2 py-3">Team</th>
                            {["MP", "W", "D", "L", "GD", "PTS"].map((heading) => (
                              <th key={heading} className="px-2 py-3">
                                {heading}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {group.teams.map((team, index) => (
                            <tr key={team} className="border-t border-border">
                              <td className="px-3 py-3 text-primary">{index + 1}</td>
                              <td className="px-2 py-3 font-semibold">{team}</td>
                              {["0", "0", "0", "0", "0", "0"].map((value, valueIndex) => (
                                <td
                                  key={`${team}-${valueIndex}`}
                                  className="px-2 py-3 text-muted-foreground"
                                >
                                  {value}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} as="article">
                <figure className="group relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[1.35] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                      {item.eyebrow}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-black uppercase">{item.title}</h3>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 grid gap-5 sm:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="glow-card h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 overflow-hidden rounded-3xl border border-border bg-secondary p-5 shadow-[var(--shadow-elegant)] sm:p-8">
            <div className="grid gap-8 md:grid-cols-[260px_1fr] md:items-center">
              <img
                src="/Ondati-portrait-2.png"
                alt="Dennis Ondati Omari, MCA 2027 aspirant"
                className="aspect-[4/3] w-full rounded-2xl object-cover object-top"
              />
              <div>
                <span className="rounded-full border border-gold/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                  Gesusu MCA 2027
                </span>
                <h2 className="mt-5 font-display text-4xl font-black uppercase">
                  Dennis <span className="text-gold">&quot;Ondati&quot;</span>
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  A community builder committed to creating a place to compete, belong, and be seen.
                  In 2027, the vision is practical leadership for everybody in our ward.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="gold">
                    <Link to="/about">
                      Read More <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="heroOutline">
                    <Link to="/get-involved">
                      Volunteer <HeartHandshake />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-20 rounded-3xl border border-border bg-primary px-5 py-14 text-center text-primary-foreground shadow-[var(--shadow-elegant)] sm:px-10">
            <span className="rounded-full border border-gold/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
              Registration Open
            </span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-black uppercase leading-none sm:text-6xl">
              Kama unaaminia team yako, <span className="text-gold">ilete kwa pitch.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/65">
              Team registration for the December edition is now open. Captains, get your squad in
              early.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/get-involved">
                  Register Your Team <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/get-involved">Contact the Organisers</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

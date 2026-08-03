import { Radio, ArrowUpRight, Newspaper } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { NEWS_POSTS } from "@/lib/campaign-data";


const IMAGES = {
  crowd: "/dennis-crowd.png",
  seated: "/Ondati-churc.jpg",
  portrait: "/Ondati-portrait-2.png",
  event: "/Ondati-cup-2.jpg",
  elders: "/Ondati-church.jpg",
} as const;

export function NewsGallery() {
  return (
    <section id="news" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-green">
              News & Media
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
              From the ground, straight to you
            </h2>
          </div>
          <p className="text-muted-foreground">
            Rally updates, Ondati Cup highlights and media appearances.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS_POSTS.map((item, i) => (
            <Reveal key={item.slug} delay={i * 90} as="article">
              <Link
                to="/news/$slug"
                params={{ slug: item.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={IMAGES[item.image]}
                    alt={item.title}
                    width={1000}
                    height={800}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground backdrop-blur-sm">
                    {item.category === "Interview" ? (
                      <Radio className="h-3.5 w-3.5" />
                    ) : (
                      <Newspaper className="h-3.5 w-3.5" />
                    )}
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-4 text-sm text-muted-foreground">
                    <span>{item.date}</span>
                    <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

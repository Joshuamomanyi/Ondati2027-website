import { Camera } from "lucide-react";
import { Reveal } from "./Reveal";
import photo1 from "@/assets/dennis-crowd.png.asset.json";
import photo2 from "@/assets/elders-church.jpg.asset.json";
import photo3 from "@/assets/dennis-event.png.asset.json";
import photo4 from "@/assets/dennis-portrait.png.asset.json";
import photo5 from "@/assets/ondati-cup-goal.jpg.asset.json";
import photo6 from "@/assets/dennis-hero-portrait.png.asset.json";

interface Photo {
  src: string;
  caption: string;
}

const PHOTOS: Photo[] = [
  { src: "/dennis-crowd.png", caption: "Rally with residents across Gesusu Ward" },
  { src: "/Ondati-church.jpg", caption: "Listening session with community elders" },
  { src: "/ondati-community.jpg", caption: "Community event and mobilisation drive" },
  { src: "/Ondati-portrait-2.png", caption: "Dennis Ondati Omari — MCA Aspirant portrait" },
  { src: "/Ondati-cup-3.jpg", caption: "Developing talents in Gesusu" },
  { src: "/dennis-portrait.png", caption: "Dennis Ondati Omari — On the campaign trail" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-green">
            <Camera className="h-4 w-4" /> Photo Gallery
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Moments from the campaign trail
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Events, rallies and community gatherings with Dennis Ondati Omari across Gesusu Ward.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 90} as="article">
              <figure className="group relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 text-sm font-medium text-primary-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

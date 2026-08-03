import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";
import { NEWS_POSTS, type NewsPost } from "@/lib/campaign-data";
import crowd from "@/assets/dennis-crowd.png.asset.json";
import seated from "@/assets/dennis-seated.png.asset.json";
import portrait from "@/assets/dennis-portrait.png.asset.json";
import event from "@/assets/ondati-cup-match.jpg.asset.json";
import elders from "@/assets/elders-church.jpg.asset.json";

const IMAGES = {
  crowd: crowd.url,
  seated: seated.url,
  portrait: portrait.url,
  event: event.url,
  elders: elders.url,
} as const;

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const post = NEWS_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Story not found — Dennis Ondati Omari" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Dennis Ondati Omari Campaign` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: IMAGES[post.image] },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 pt-32 pb-24 text-center">
      <h1 className="font-display text-3xl font-extrabold">Story not found</h1>
      <p className="mt-3 text-muted-foreground">
        The article you're looking for isn't available.
      </p>
      <Link
        to="/news"
        className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to News
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 pt-32 pb-24 text-center">
      <h1 className="font-display text-3xl font-extrabold">Something went wrong</h1>
      <Link to="/news" className="mt-6 inline-flex text-primary hover:underline">
        Back to News
      </Link>
    </div>
  ),
  component: NewsPostPage,
});

function NewsPostPage() {
  const { post } = Route.useLoaderData() as { post: NewsPost };
  const related = NEWS_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-background pt-16">
      <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={IMAGES[post.image]}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-foreground">
            <Tag className="h-3.5 w-3.5" /> {post.category}
          </span>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {post.location}
          </span>
        </div>

        <div className="prose prose-lg mt-8 max-w-none">
          <p className="text-xl font-medium text-foreground">{post.excerpt}</p>
          {post.body.map((para, i) => (
            <p key={i} className="mt-5 text-pretty text-lg leading-relaxed text-foreground/85">
              {para}
            </p>
          ))}
        </div>

        <Link
          to="/news"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all stories
        </Link>
      </div>

      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold">More from the campaign</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/news/$slug"
                params={{ slug: r.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES[r.image]}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-green">
                    {r.category}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

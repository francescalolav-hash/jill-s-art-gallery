import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { works } from "@/lib/works";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Jill Pierucci Bolakas" },
      { name: "description", content: "Selected sculptural works by Jill Pierucci Bolakas." },
      { property: "og:title", content: "Gallery — Jill Pierucci Bolakas" },
      { property: "og:description", content: "Selected sculptural works." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Gallery</h2>
        <p className="text-center text-muted-foreground text-sm tracking-[0.15em] uppercase mb-16">
          Selected Works · 2025 – 2026
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((w) => (
            <figure key={w.id} className="group">
              <div className="overflow-hidden bg-background aspect-square">
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <div className="text-lg font-serif italic">{w.title}</div>
                <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  {w.year} · {w.medium}
                </div>
                <div className="text-xs text-muted-foreground/80 mt-0.5">{w.dimensions}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}

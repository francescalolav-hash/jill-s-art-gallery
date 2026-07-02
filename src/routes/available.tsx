import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { works } from "@/lib/works";

export const Route = createFileRoute("/available")({
  head: () => ({
    meta: [
      { title: "Available Works — Jill Pierucci Bolakas" },
      { name: "description", content: "Sculptural works currently available for acquisition." },
      { property: "og:title", content: "Available Works — Jill Pierucci Bolakas" },
      { property: "og:description", content: "Works currently available for acquisition." },
    ],
  }),
  component: Available,
});

function Available() {
  const available = works.filter((w) => w.available);
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Available</h2>
        <p className="text-center text-muted-foreground text-sm tracking-[0.15em] uppercase mb-16">
          For inquiries please <Link to="/contact" className="text-accent hover:underline">contact the studio</Link>
        </p>

        <div className="space-y-16">
          {available.map((w, i) => (
            <div
              key={w.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <img
                src={w.image}
                alt={w.title}
                loading="lazy"
                width={1200}
                height={1200}
                className="w-full aspect-square object-cover [direction:ltr]"
              />
              <div className="[direction:ltr]">
                <h3 className="text-3xl italic font-serif">{w.title}</h3>
                <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {w.year}
                </div>
                <dl className="mt-6 space-y-2 text-sm">
                  <div className="flex gap-4">
                    <dt className="w-28 text-muted-foreground uppercase tracking-widest text-xs pt-1">Medium</dt>
                    <dd>{w.medium}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-28 text-muted-foreground uppercase tracking-widest text-xs pt-1">Dimensions</dt>
                    <dd>{w.dimensions}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-28 text-muted-foreground uppercase tracking-widest text-xs pt-1">Price</dt>
                    <dd>{w.price ?? "Inquire"}</dd>
                  </div>
                </dl>
                <Link
                  to="/contact"
                  className="inline-block mt-8 text-xs tracking-[0.25em] uppercase border-b border-accent text-accent pb-1 hover:opacity-70 transition"
                >
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}

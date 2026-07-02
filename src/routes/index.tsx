import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jill Pierucci Bolakas — Sculptor" },
      { name: "description", content: "Sculptural works in wood by Jill Pierucci Bolakas — carved, layered forms exploring rhythm, movement, and time." },
      { property: "og:title", content: "Jill Pierucci Bolakas — Sculptor" },
      { property: "og:description", content: "Sculptural works in wood by Jill Pierucci Bolakas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-2">
          <img
            src={hero}
            alt="Detail of a large carved wood sculpture with vertical undulating ribbons"
            width={1920}
            height={1280}
            className="w-full h-[55vh] md:h-[70vh] object-cover"
          />
        </div>

        <section className="mt-16 md:mt-24 grid md:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Biography</h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl font-light">
              <p>
                Jill Pierucci Bolakas is a sculptor working primarily in wood.
                Her practice grew from a background in fibers, and the influence
                remains visible in the linear, layered structures that define
                each piece — progressive rhythms of carved strips that catch
                light, cast shadow, and suggest movement in stillness.
              </p>
              <p>
                Her recent work considers forms that develop over time. The
                undulating layers speak of mortality, of the long expanses that
                lead to a single moment of beauty. Each sculpture is shaped by
                hand, one strip at a time, until the whole finds its rhythm.
              </p>
              <p>
                Jill has exhibited widely and her work is held in private and
                corporate collections across the United States.
              </p>
            </div>
          </div>
          <div>
            <img
              src={portrait}
              alt="Portrait of Jill Pierucci Bolakas in her studio"
              loading="lazy"
              width={900}
              height={1200}
              className="w-full object-cover"
            />
            <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground text-center">
              In the studio
            </p>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

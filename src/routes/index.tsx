import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import stones from "@/assets/stones.jpg.asset.json";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jill Pierucci Bolakas — Artist" },
      { name: "description", content: "Mixed media works by Jill Pierucci Bolakas — layered forms exploring rhythm, movement, and time." },
      { property: "og:title", content: "Jill Pierucci Bolakas — Artist" },
      { property: "og:description", content: "Mixed media works by Jill Pierucci Bolakas." },
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
            src={stones.url}
            alt="River Stones — mixed media on canvas"
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
                Jill Pierucci Bolakas is a mixed media artist working in acrylic,
                collage, and oil and cold wax media. Her work is rooted in the
                patterns and forms of the natural world, from the radial symmetry
                of a jellyfish, to the smooth weight of river stones pressed
                together over centuries. Her work spans the interlocking geometry
                of organic textures found at the water's edge and forest floor.
              </p>
              <p>
                What draws Jill to these subjects is not their surface beauty alone,
                but the underlying logic beneath it, but the way nature repeats itself
                across scales, the way light behaves differently inside a translucent
                thing than it does on an opaque one. These questions drive her
                process as much as her subject matter.
              </p>
              <p>
                Her mixed media approach reflects this layered thinking. Cold wax and
                oil build slowly across the canvas, each pass transforming what came
                before, creating surfaces with depth and luminosity that shift with
                the light. Collage introduces the physical world directly through
                paper, texture, material with its own history, while acrylic brings
                immediacy and saturated color. The result is work that feels
                simultaneously ancient and alive.
              </p>
              <p>
                Jill's recent abstract pieces push further from representation while
                remaining anchored in nature's vocabulary: the jewel-toned fields of
                her stone compositions recall stained glass and tide pools in equal
                measure, while her woven collage work evokes harvested earth and the
                quiet architecture of things that grow slowly.
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

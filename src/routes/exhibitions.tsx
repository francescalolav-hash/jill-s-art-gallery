import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Current Exhibitions — Jill Pierucci Bolakas" },
      { name: "description", content: "Current and upcoming exhibitions featuring Jill Pierucci Bolakas." },
      { property: "og:title", content: "Current Exhibitions — Jill Pierucci Bolakas" },
      { property: "og:description", content: "Current and upcoming exhibitions." },
    ],
  }),
  component: Exhibitions,
});

function Exhibitions() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Current Exhibitions</h2>
        <p className="text-center text-muted-foreground text-sm tracking-[0.15em] uppercase mb-16">
          Where to see the work
        </p>

        <div className="border border-border p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl italic font-serif">Mix it Up Media</h3>
          <div className="mt-3 text-sm tracking-[0.15em] uppercase text-muted-foreground">
            July 3 – July 26, 2026
          </div>
          <div className="mt-8 space-y-2 text-base leading-relaxed">
            <p className="font-medium">Lynchburg Art Club and Gallery</p>
            <p className="text-muted-foreground">1011 Rivermont Avenue</p>
            <p className="text-muted-foreground">Lynchburg, VA</p>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

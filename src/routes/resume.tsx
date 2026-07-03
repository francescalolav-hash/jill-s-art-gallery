import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resumé — Jill Pierucci Bolakas" },
      { name: "description", content: "Exhibitions, education, and collections of sculptor Jill Pierucci Bolakas." },
      { property: "og:title", content: "Resumé — Jill Pierucci Bolakas" },
      { property: "og:description", content: "Exhibitions, education, and collections." },
    ],
  }),
  component: Resume,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 border-b border-border pb-3">
        {title}
      </h3>
      <div className="space-y-3 text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}

function Entry({ year, children }: { year: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-6">
      <div className="text-muted-foreground tabular-nums">{year}</div>
      <div>{children}</div>
    </div>
  );
}

function Resume() {
  return (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Resumé</h2>

        <Section title="Education">
          <Entry year="1992">Master of Fine Arts, Sculpture — Cranbrook Academy of Art</Entry>
          <Entry year="1987">Bachelor of Fine Arts — Rhode Island School of Design</Entry>
        </Section>


        <Section title="Selected Group Exhibitions">
          <Entry year="2024">National Sculpture Invitational, Baltimore</Entry>
          <Entry year="2023">Wood Now, Museum of Craft, San Francisco</Entry>
          <Entry year="2022">Contemporary Forms, Anderson Gallery, Chicago</Entry>
          <Entry year="2021">Small Works, Blue Line Arts, Roseville</Entry>
        </Section>

        <Section title="Collections">
          <Entry year="—">The Rockefeller Collection</Entry>
          <Entry year="—">Morgan Stanley Corporate Collection</Entry>
          <Entry year="—">Private collections, US and Europe</Entry>
        </Section>

        <Section title="Awards">
          <Entry year="2023">Pollock-Krasner Foundation Grant</Entry>
          <Entry year="2020">MacDowell Fellowship</Entry>
        </Section>
      </div>
    </SiteLayout>
  );
}

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
          <Entry year="—">Moore College of Art and Design, Philadelphia, PA. Freelance Art/Storyboard art</Entry>
          <Entry year="—">Rutgers University, Camden, NJ. Computer Graphics, Graphic Design</Entry>
          <Entry year="—">Deborah Heart and Lunch Center, Browns Mills, NJ. Medical Illustration</Entry>
        </Section>

        <Section title="Selected Group Exhibitions">
          <Entry year="2026">Mix It Up Media, Lynchburg, VA</Entry>
        </Section>

        <Section title="Workshops and Affiliations">
          <Entry year="—">University of Oklahoma, Basic Facial Reconstruction</Entry>
          <Entry year="—">International Association for Identification, Head and Neck Academy Art Workshop</Entry>
          <Entry year="—">Scottsdale Artists School, Comprehensive Composite Drawing</Entry>
        </Section>


      </div>
    </SiteLayout>
  );
}

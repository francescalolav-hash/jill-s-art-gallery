import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jill Pierucci Bolakas" },
      { name: "description", content: "Contact the studio of sculptor Jill Pierucci Bolakas for inquiries and commissions." },
      { property: "og:title", content: "Contact — Jill Pierucci Bolakas" },
      { property: "og:description", content: "Contact the studio for inquiries and commissions." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-8">Contact</h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          For inquiries about available works, commissions, or exhibitions,
          please write to the studio. All correspondence is answered personally.
        </p>

        <div className="space-y-6 text-sm">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Email</div>
            <a href="mailto:Jillyb9583@aol.com" className="text-accent hover:underline text-lg">
              Jillyb9583@aol.com
            </a>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Studio</div>
            <div>Altavista, Virginia</div>
          </div>
        </div>

        <form
          className="mt-16 text-left space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Jillyb9583@aol.com";
          }}
        >
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Name</label>
            <input type="text" required className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-accent transition" />
          </div>
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Email</label>
            <input type="email" required className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-accent transition" />
          </div>
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Message</label>
            <textarea rows={5} required className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-accent transition resize-none" />
          </div>
          <button
            type="submit"
            className="mt-4 text-xs tracking-[0.3em] uppercase border-b border-accent text-accent pb-1 hover:opacity-70 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </SiteLayout>
  );
}

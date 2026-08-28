import Reveal from "@/components/ui/Reveal";
import RouteLine from "@/components/ui/RouteLine";

const steps = [
  { n: "01", title: "Understand", text: "Understand the customer's requirement." },
  { n: "02", title: "Source", text: "Identify suitable products, suppliers or opportunities." },
  { n: "03", title: "Evaluate", text: "Assess suitability based on requirements." },
  { n: "04", title: "Coordinate", text: "Coordinate the relevant business or supply process." },
  { n: "05", title: "Deliver", text: "Support the completion of the requirement." },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-z-cream">
      <div className="container-z">
        <div className="max-w-2xl mb-16">
          <Reveal><p className="eyebrow mb-3">How We Work</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-z-ink">
              From Requirement to Reliable Supply
            </h2>
          </Reveal>
          <Reveal delay={0.14}><RouteLine width={96} className="my-5" /></Reveal>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-z-border" />
          <Reveal>
            <div className="hidden md:block absolute top-6 left-0 h-px bg-z-gold origin-left" style={{ width: "100%" }} />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <div className="relative pl-0">
                  <div className="flex items-center gap-3 md:block">
                    <span className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-z-white border border-z-gold text-z-gold font-display font-bold text-sm shrink-0">
                      {s.n}
                    </span>
                  </div>
                  <p className="mt-4 font-display font-bold text-lg text-z-ink">{s.title}</p>
                  <p className="mt-1.5 text-sm text-z-muted leading-relaxed max-w-[200px]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

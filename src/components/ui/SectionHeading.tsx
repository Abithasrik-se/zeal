import Reveal from "./Reveal";
import RouteLine from "./RouteLine";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <Reveal>
        <p className="eyebrow mb-3">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display font-bold tracking-tight text-4xl md:text-5xl ${
            light ? "text-z-white" : "text-z-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <div className={align === "center" ? "flex justify-center" : ""}>
          <RouteLine width={96} className="my-5" />
        </div>
      </Reveal>
      {description && (
        <Reveal delay={0.18}>
          <p
            className={`text-base md:text-lg leading-relaxed ${
              light ? "text-white/70" : "text-z-muted"
            } ${align === "center" ? "mx-auto" : "max-w-2xl"}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

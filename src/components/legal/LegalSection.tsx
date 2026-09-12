import RouteLine from "@/components/ui/RouteLine";

export default function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="scroll-mt-28" id={`section-${number}`}>
      <h2 className="font-display font-bold text-xl md:text-2xl text-z-ink">
        <span className="text-z-gold">{number}.</span> {title}
      </h2>
      <RouteLine width={56} className="my-4" />
      <div className="space-y-4 text-z-muted leading-relaxed">{children}</div>
    </div>
  );
}
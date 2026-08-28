import LoaderMark from "@/components/ui/LoaderMark";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-5 bg-z-cream">
      <LoaderMark size={88} />
      <p className="eyebrow tracking-[0.3em]">Zeal</p>
    </div>
  );
}

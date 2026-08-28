export default function LoaderMark({ size = 84 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    >
      <div
        className="absolute inset-0 rounded-full border animate-spin-slow"
        style={{ borderColor: "rgba(200,155,24,0.35)", borderTopColor: "#C89B18" }}
      />
      <div
        className="absolute inset-2 rounded-full border animate-spin-slow-rev"
        style={{ borderColor: "rgba(21,21,21,0.12)", borderBottomColor: "#151515" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/zeal-mark.png"
        alt=""
        aria-hidden="true"
        className="relative w-1/2 h-1/2 object-contain drop-shadow-[0_0_10px_rgba(200,155,24,0.35)]"
      />
      <span className="sr-only">Loading Zeal…</span>
    </div>
  );
}

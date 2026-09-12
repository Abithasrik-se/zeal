import { AlertTriangle } from "lucide-react";

export default function LegalDisclaimerBanner() {
  return (
    <div className="border-b border-z-gold/30 bg-z-gold/10">
      <div className="container-z flex items-start gap-3 py-4 text-sm text-z-ink/80">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-z-gold" />
        <p>
          This page is a draft legal template and has not yet been reviewed by
          a qualified legal professional. It should not be treated as final or
          legally binding until confirmed by Zeal&apos;s legal counsel.
        </p>
      </div>
    </div>
  );
}
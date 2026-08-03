import { MessageCircle } from "lucide-react";
import { CAMPAIGN } from "@/lib/campaign-data";

export function WhatsappWidget() {
  return (
    <a
      href={CAMPAIGN.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our WhatsApp community"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green py-3 pl-3 pr-4 text-green-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:bg-green/90"
    >
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-green-foreground/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-green-foreground/20" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden pr-1 text-sm font-semibold sm:block">Join WhatsApp</span>
    </a>
  );
}

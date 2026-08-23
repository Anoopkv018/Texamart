import { MessageCircle } from "lucide-react";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

export function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={createWhatsAppUrl(buildGeneralEnquiryMessage())} target="_blank" rel="noreferrer" aria-label="Chat with Texa Mart on WhatsApp"><MessageCircle size={20} aria-hidden="true" /><span>Chat with Texa Mart</span></a>;
}

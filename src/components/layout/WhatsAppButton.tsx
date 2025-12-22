import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "31612345678"; // Replace with actual SafeGrip WhatsApp number
  const message = encodeURIComponent("Hallo SafeGrip, ik heb een vraag over jullie werkhandschoenen.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

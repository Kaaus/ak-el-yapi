"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Info, MessageCircle, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const actionButtons = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    href: siteConfig.social.whatsapp,
    tone: "text-green-500",
    bg: "bg-green-500",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Telefon",
    href: `tel:${siteConfig.phone}`,
    tone: "text-blue-500",
    bg: "bg-blue-500",
  },
  {
    id: "quote",
    icon: Info,
    label: "Teklif Al",
    href: "/iletisim",
    tone: "text-brand-gold",
    bg: "bg-brand-gold",
  },
];

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-5 z-50 flex flex-col items-end gap-3 md:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="glass flex flex-col items-end gap-3 rounded-[1.5rem] border-white/50 bg-white/72 p-3 shadow-2xl shadow-brand-charcoal/12 backdrop-blur-2xl"
          >
            {actionButtons.map((btn, idx) => {
              const Icon = btn.icon;
              return (
                <motion.a
                  key={btn.id}
                  href={btn.href}
                  target={btn.id === "whatsapp" ? "_blank" : "_self"}
                  rel={btn.id === "whatsapp" ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ delay: idx * 0.04 }}
                  className="group flex items-center gap-3"
                  aria-label={btn.label}
                >
                  <span className="pointer-events-none translate-x-2 rounded-full bg-brand-charcoal px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    {btn.label}
                  </span>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-white ${btn.tone} shadow-xl ring-1 ring-brand-gray/45 transition-transform duration-200 group-hover:scale-110`}>
                    <Icon size={22} />
                  </span>
                </motion.a>
              );
            })}

            <motion.button
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ delay: actionButtons.length * 0.04 }}
              onClick={scrollToTop}
              className={`group flex items-center gap-3 transition-opacity ${showTopBtn ? "opacity-100" : "opacity-55"}`}
              aria-label="Yukarı çık"
            >
              <span className="pointer-events-none translate-x-2 rounded-full bg-brand-charcoal px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                Yukarı Çık
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-charcoal shadow-xl ring-1 ring-brand-gray/45 transition-transform duration-200 group-hover:scale-110">
                <ArrowUp size={21} />
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((value) => !value)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-colors duration-300 ${
          isOpen ? "bg-brand-charcoal text-white" : "bg-brand-gold text-white"
        }`}
        aria-label="Hızlı işlemler"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

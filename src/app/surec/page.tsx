import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Süreç - Keşiften Montaja Şeffaf Plan",
  description:
    "AK-EL Yapı'da ücretsiz keşif, yerinde ölçü, ürün seçimi, profesyonel montaj ve teslim sonrası destek adımlarını inceleyin.",
  path: "/surec",
});

export default function SurecPage() {
  return (
    <div className="bg-bg-warm pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-10 md:pb-12">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
            <ClipboardCheck size={17} />
            Şeffaf süreç
          </div>
          <h1 className="text-balance font-heading text-5xl font-bold leading-tight tracking-tight text-brand-charcoal md:text-7xl">
            Keşiften montaja, her adım net.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-brand-charcoal/70 md:text-xl">
            Ölçü, ürün seçimi, montaj ve teslim aşamalarını sade bir akışla ilerletiyoruz. Kullanıcı ne bekleyeceğini baştan bilir, ekip ne yapacağını baştan planlar.
          </p>
          <Link
            href="/iletisim"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand-charcoal px-7 py-4 font-bold text-white shadow-xl shadow-brand-charcoal/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold"
          >
            Keşif talebi oluştur
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <ProcessTimeline />
    </div>
  );
}

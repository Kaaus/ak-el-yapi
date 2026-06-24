import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Kullanım Koşulları",
  description:
    "AK-EL Yapı web sitesinde yer alan içerik, görsel, teklif ve keşif bilgilendirmelerine dair kullanım koşulları.",
  path: "/kullanim-kosullari",
});

export default function TermsPage() {
  return (
    <div className="bg-bg-soft pt-28">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-10 md:pb-28">
        <div className="mb-10">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Yasal bilgilendirme</div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-brand-charcoal md:text-7xl">
            Kullanım Koşulları
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-brand-charcoal/70">
            Bu web sitesinde yer alan bilgiler, AK-EL Yapı hizmetleri hakkında genel bilgilendirme amacı taşır.
          </p>
        </div>

        <div className="space-y-8 rounded-[2rem] border border-brand-gray/55 bg-white p-7 shadow-lg shadow-brand-charcoal/5 md:p-10">
          <section>
            <h2 className="mb-3 font-heading text-2xl font-bold text-brand-charcoal">İçerik kullanımı</h2>
            <p className="leading-relaxed text-brand-charcoal/70">
              Sitedeki metin, görsel ve yönlendirmeler bilgilendirme amaçlıdır. Nihai ürün seçimi ve uygulama kapsamı keşif sonrası netleşir.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-heading text-2xl font-bold text-brand-charcoal">Teklif ve keşif</h2>
            <p className="leading-relaxed text-brand-charcoal/70">
              Web sitesinden gönderilen talepler ön bilgilendirme niteliğindedir. Kesin teklif; ölçü, ürün seçimi, montaj koşulları ve uygulama detaylarına göre hazırlanır.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-heading text-2xl font-bold text-brand-charcoal">İletişim</h2>
            <p className="leading-relaxed text-brand-charcoal/70">
              Kullanım koşullarıyla ilgili sorularınız için {siteConfig.email} adresinden veya{" "}
              <a href={`tel:${siteConfig.phone}`} className="font-medium text-brand-charcoal hover:text-brand-gold">
                {siteConfig.phoneDisplay}
              </a>{" "}
              numarasından bize ulaşabilirsiniz.
            </p>
          </section>
        </div>

        <Link
          href="/iletisim"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-brand-charcoal px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold"
        >
          Ücretsiz keşif iste
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

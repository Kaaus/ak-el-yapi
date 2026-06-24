import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Gizlilik Politikası",
  description:
    "AK-EL Yapı web sitesi ve keşif talebi süreçlerinde paylaşılan iletişim bilgilerinin kullanımına dair gizlilik bilgilendirmesi.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bg-soft pt-28">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-10 md:pb-28">
        <div className="mb-10">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Yasal bilgilendirme</div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-brand-charcoal md:text-7xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-brand-charcoal/70">
            Bu sayfa, AK-EL Yapı ile paylaştığınız iletişim ve keşif talebi bilgilerinin hangi amaçlarla kullanılabileceğini özetler.
          </p>
        </div>

        <div className="space-y-8 rounded-[2rem] border border-brand-gray/55 bg-white p-7 shadow-lg shadow-brand-charcoal/5 md:p-10">
          <section>
            <h2 className="mb-3 font-heading text-2xl font-bold text-brand-charcoal">Toplanan bilgiler</h2>
            <p className="leading-relaxed text-brand-charcoal/70">
              Telefon numarası, mesaj içeriği, seçilen hizmet ve keşif ihtiyacınıza dair bilgiler yalnızca size dönüş yapmak ve doğru çözümü hazırlamak için kullanılır.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-heading text-2xl font-bold text-brand-charcoal">Kullanım amacı</h2>
            <p className="leading-relaxed text-brand-charcoal/70">
              Bilgileriniz teklif, keşif planlama, ürün/hizmet bilgilendirmesi ve talebinizle ilgili iletişim süreçlerinde değerlendirilir.
            </p>
          </section>
          <section>
            <h2 className="mb-3 font-heading text-2xl font-bold text-brand-charcoal">İletişim</h2>
            <p className="leading-relaxed text-brand-charcoal/70">
              Gizlilik talepleriniz için {siteConfig.email} adresinden veya{" "}
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
          İletişime geç
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

import WhyUs from "@/components/WhyUs";
import TrustBar from "@/components/TrustBar";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Kurumsal - Neden Bizi Seçmelisiniz?",
  description:
    "AK-EL Yapı'nın kalite, güven, profesyonel montaj ve müşteri odaklı hizmet yaklaşımını yakından tanıyın.",
  path: "/kurumsal",
});

export default function KurumsalPage() {
  return (
    <div className="pt-20">
      <h1 className="sr-only">AK-EL Yapı kurumsal kalite ve güven yaklaşımı</h1>
      <TrustBar lifted={false} />
      <WhyUs />
    </div>
  );
}

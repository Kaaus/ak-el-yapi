import ContactSection from "@/components/ContactSection";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "İletişim - Ücretsiz Keşif Talebi",
  description:
    "AK-EL Yapı ile iletişime geçin, mekanınıza en uygun Pimapen, PVC kapı, cam balkon ve panjur çözümleri için ücretsiz keşif talep edin.",
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <div className="pt-20">
      <h1 className="sr-only">AK-EL Yapı iletişim ve ücretsiz keşif talebi</h1>
      <ContactSection />
    </div>
  );
}

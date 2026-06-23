import NirvanaProductDetail from "@/components/NirvanaProductDetail";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Nirvana Serisi - Premium Pimapen Pencere Sistemi",
  description:
    "80 mm profil genişliği, 6 odacıklı yapı, üçlü conta sistemi ve güçlü ısı ses yalıtımıyla Nirvana Serisi premium Pimapen pencere sistemi.",
  path: "/urunler/nirvana",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Nirvana Serisi Pimapen Pencere Sistemi",
  brand: {
    "@type": "Brand",
    name: "AK-EL Yapı",
  },
  description:
    "80 mm profil genişliği, 6 odacıklı tasarım ve üçlü conta sistemiyle premium ısı ve ses yalıtımı sunan Pimapen pencere sistemi.",
  image: [
    absoluteUrl("/images/nirvana-360.webp"),
    absoluteUrl("/images/nirvana-profile-detail.webp"),
  ],
  category: "PVC pencere sistemi",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "TRY",
    url: absoluteUrl("/urunler/nirvana"),
  },
};

export default function NirvanaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <NirvanaProductDetail
        phoneDisplay={siteConfig.phoneDisplay}
        phoneHref={`tel:${siteConfig.phone}`}
        whatsappUrl={siteConfig.social.whatsapp}
      />
    </>
  );
}

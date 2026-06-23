import NirvanaProductDetail from "@/components/NirvanaProductDetail";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Albatros Sürme - Geniş Cam Yüzeyli Pimapen Sürme Sistem",
  description:
    "Geniş açıklıklar, maksimum cam yüzeyi ve ferah geçiş hissi için Albatros Sürme premium Pimapen kapı sistemi.",
  path: "/urunler/albatros",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Albatros Sürme Pimapen Kapı Sistemi",
  brand: {
    "@type": "Brand",
    name: "AK-EL Yapı",
  },
  description:
    "Geniş açıklıklar ve maksimum cam yüzeyi için tasarlanan, teras ve bahçe geçişlerinde premium ferahlık sunan Pimapen sürme kapı sistemi.",
  image: [
    absoluteUrl("/images/albatros-showcase-poster.webp"),
  ],
  category: "PVC sürme kapı sistemi",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "TRY",
    url: absoluteUrl("/urunler/albatros"),
  },
};

export default function AlbatrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <NirvanaProductDetail
        series="albatros"
        phoneDisplay={siteConfig.phoneDisplay}
        phoneHref={`tel:${siteConfig.phone}`}
        whatsappUrl={siteConfig.social.whatsapp}
      />
    </>
  );
}

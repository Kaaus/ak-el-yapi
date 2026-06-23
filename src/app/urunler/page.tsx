import PopularProducts from "@/components/PopularProducts";
import ProductCategories from "@/components/ProductCategories";
import EnergySavingSection from "@/components/EnergySavingSection";
import SoundInsulationSection from "@/components/SoundInsulationSection";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Ürünlerimiz - Pimapen ve Cam Balkon Sistemleri",
  description:
    "Orijinal Pimapen serileri, PVC pencere ve kapı sistemleri, ısı ve ses yalıtımı güçlü cam balkon ve panjur çözümleri.",
  path: "/urunler",
});

export default function UrunlerPage() {
  return (
    <div className="pt-20">
      <h1 className="sr-only">AK-EL Yapı Pimapen, PVC kapı, sürgülü sistem, panjur ve cam balkon ürünleri</h1>
      <PopularProducts />
      <ProductCategories />
      <EnergySavingSection />
      <SoundInsulationSection />
    </div>
  );
}

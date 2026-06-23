import ServicesIntroHero from "@/components/ServicesIntroHero";
import ServicesShowcase from "@/components/ServicesShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import BeforeAfter from "@/components/BeforeAfter";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Hizmetlerimiz - Profesyonel Montaj ve Tamir",
  description:
    "Pimapen, PVC kapı, sürgülü sistem, cam balkon ve panjur sistemleri için profesyonel keşif, montaj, bakım ve yenileme hizmetleri.",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <div className="bg-bg-warm">
      <ServicesIntroHero />
      <ServicesShowcase />
      <BeforeAfter />
      <ProcessTimeline />
    </div>
  );
}

import Projects from "@/components/Projects";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Referanslar ve Projelerimiz",
  description:
    "AK-EL Yapı tarafından tamamlanan villa, rezidans, ofis ve yaşam alanı Pimapen, cam balkon ve panjur projelerini inceleyin.",
  path: "/referanslar",
});

export default function ReferanslarPage() {
  return (
    <div className="pt-20">
      <h1 className="sr-only">AK-EL Yapı referans projeleri ve Pimapen uygulamaları</h1>
      <Projects />
    </div>
  );
}

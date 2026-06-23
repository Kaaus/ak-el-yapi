import HeroWindowReveal from "@/components/HeroWindowReveal";
import TrustBar from "@/components/TrustBar";
import BeforeAfter from "@/components/BeforeAfter";
import PopularProducts from "@/components/PopularProducts";
import EnergySavingSection from "@/components/EnergySavingSection";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroWindowReveal />
      <TrustBar />
      <BeforeAfter />
      <PopularProducts />
      <EnergySavingSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}

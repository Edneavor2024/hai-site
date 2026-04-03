import { SectionReveal } from "@/components/SectionReveal";
import {
  ConceptSection,
  CtaSection,
  HeroSection,
  InventorySection,
  ServicesSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <SectionReveal>
        <HeroSection />
      </SectionReveal>
      <SectionReveal>
        <ConceptSection />
      </SectionReveal>
      {/* SERVICES: Hero の次 → THE GALLERY の手前（VISION と在庫のあいだ） */}
      <ServicesSection />
      <SectionReveal>
        <InventorySection />
      </SectionReveal>
      <SectionReveal>
        <CtaSection />
      </SectionReveal>
    </main>
  );
}

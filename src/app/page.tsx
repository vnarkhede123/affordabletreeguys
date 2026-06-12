import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { TrustTicker } from "@/components/trust-ticker";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { MobileCallBar } from "@/components/mobile-call-bar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <HeroSection />
        <TrustTicker />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}

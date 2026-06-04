import { FloatingHeader } from "@/components/ui/floating-header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesMobileCarousel from "./components/FeaturesMobileCarousel";
import PricingSection from "./components/PricingSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <FloatingHeader />
      <main className="pt-14">
        <Hero />
        <section id="features" className="scroll-mt-14">
          <div className="hidden md:block">
            <Features />
          </div>
          <div className="block md:hidden">
            <FeaturesMobileCarousel />
          </div>
        </section>
        <PricingSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

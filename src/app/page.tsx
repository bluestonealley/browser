import { FloatingHeader } from "@/components/ui/floating-header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PricingSection from "./components/PricingSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <FloatingHeader />
      <main>
        <Hero />
        <Features />
        <PricingSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import HeroSection from "@/app/components/sections/hero-home";
import FeaturesSection from "@/app/components/sections/features";
import PricingSection from "@/app/components/sections/pricing";
import FAQSection from "@/app/components/sections/faq";
import MobileCTA from "@/app/components/ui/common/mobile-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <MobileCTA />
    </>
  );
}

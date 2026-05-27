import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { EmotionalSection } from "@/components/sections/EmotionalSection";
import { ViralSection } from "@/components/sections/ViralSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#0D0D0D]">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <HowItWorksSection />
      <EmotionalSection />
      <ViralSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}

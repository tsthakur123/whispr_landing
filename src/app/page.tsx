import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { MicroTeasersSection } from "@/components/sections/MicroTeasersSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#0D0D0D]">
      <Header />
      <HeroSection />
      <ProblemSection />
      <MicroTeasersSection />
      <SocialProofSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}

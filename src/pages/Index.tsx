import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import CallForPapersSection from "@/components/CallForPapersSection";
import ThemesSection from "@/components/ThemesSection";
import AbstractSection from "@/components/AbstractSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ScientificCommitteeSection from "@/components/ScientificCommitteeSection";
import RegistrationForm from "@/components/RegistrationForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { UrgencyBar, WhatsAppButton, ExitIntentPopup, SlideInNotification, StickyMobileBar, StickyCountdownBanner } from "@/components/ExtrasSection";

const Index = () => {
  return (
    <main className="pb-14 md:pb-0">
      <HeroSection />
      <AboutSection />
      <ParticipantsSection />
      <BenefitsSection />
      <CollaborationsSection />
      <CallForPapersSection />
      <ThemesSection />
      <AbstractSection />
      <WhyChooseSection />
      <ScientificCommitteeSection />
      <RegistrationForm />
      <UrgencyBar />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />

      {/* Floating / overlay elements */}
      <WhatsAppButton />
      <ExitIntentPopup />
      <SlideInNotification />
      <StickyMobileBar />
      <StickyCountdownBanner />
    </main>
  );
};

export default Index;

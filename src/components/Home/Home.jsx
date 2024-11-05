import AboutSection from "../AboutSection/AboutSection";
import CallToActionSection from "../CallToActionSection/CallToActionSection";
import LandingSection from "../LandingSection/LandingSection";
import OurFeaturesSection from "../OurFeaturesSection/OurFeaturesSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import WhyUsSection from "../WhyUsSection/WhyUsSection";
import WordSection from "../WordSection/WordSection";
import WorkProcessSection from "../WorkProcessSection/WorkProcessSection";


export default function Home() {
  return (
    <>
      <main>
        <LandingSection />
        <OurFeaturesSection/>
        <AboutSection />
        <ServicesSection/>
        <CallToActionSection/>
        <WorkProcessSection/>
        <WhyUsSection/>
        <WordSection/>
      </main>
    </>
  );
}

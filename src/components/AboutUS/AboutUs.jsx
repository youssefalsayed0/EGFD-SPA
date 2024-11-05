import Banner from "../Banner/Banner";
import AboutSection from "../AboutSection/AboutSection";
import WhyUsSection from "../WhyUsSection/WhyUsSection";
import OurMissionSection from "../OurMissionSection/OurMissionSection";
import OurVisionSection from "../OurVisionSection/OurVisionSection";
import WorkProcessSection from "../WorkProcessSection/WorkProcessSection";
import { useTranslation } from "react-i18next";
import about from "../../assets/images/about.webp";
export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <Banner title={t("banner.about")} image={about} />
        <AboutSection showButton={false} />
        <OurMissionSection />
        <OurVisionSection />
        <WorkProcessSection />
        <WhyUsSection />
      </main>
    </>
  );
}

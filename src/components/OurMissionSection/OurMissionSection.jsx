import AboutCard from "../AboutCard/AboutCard";
import mission from "../../assets/images/mission.webp"
import { useTranslation } from "react-i18next";
import MainHeading from "../MainHeading/MainHeading";
export default function OurMissionSection() {
    const { t } = useTranslation();
  return (
    <>
      <section className="about-card main-p position-relative">
      <MainHeading 
          title={t("main-heading.mission.title")} 
          subTitle={t("main-heading.mission.sub-title")} 
        />
        <div className="container">
          <div className="row featurette flex-column-reverse  flex-md-row align-items-center  gy-5">
          <AboutCard  image={mission}  title={ t('our-mission-section.title')} description={ t('our-mission-section.description') }/>
          </div>
        </div>
      </section>
    </>
  );
}

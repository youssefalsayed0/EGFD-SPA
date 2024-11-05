import AboutCard from "../AboutCard/AboutCard";
import vision from "../../assets/images/vision.webp";
import { useTranslation } from "react-i18next";
import MainHeading from "../MainHeading/MainHeading";

export default function OurVisionSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="about-card main-p sec-background position-relative  ">
      <MainHeading 
          title={t("main-heading.vision.title")} 
          subTitle={t("main-heading.vision.sub-title")} 
        />
        <div className="container">
          <div className="row flex-column-reverse flex-md-row-reverse align-items-center gy-5">
          <AboutCard image={vision} title={ t('our-vision-section.title')} description={ t('our-vision-section.description')}/>
          </div>
        </div>
      </section>
    </>
  );
}

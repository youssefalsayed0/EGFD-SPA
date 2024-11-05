import animal from "../../assets/images/animal.webp";
import { useTranslation } from "react-i18next";
export default function AnimalFat() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image " data-aos="fade-left">
          <img src={animal} alt="Thumb" className="img-fluid" />
        </div>
        <h2  data-aos="fade-up" className="mt-5">{t("animal-fat.title")}</h2>
        <p data-aos="fade-up">{t("animal-fat.description")}</p>
        <div className="features mt-4">
         
          <div className="content ">
            <h4 data-aos="fade-up">{t("usage")}</h4>
            <p data-aos="fade-up">{t("animal-fat.usage-content")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

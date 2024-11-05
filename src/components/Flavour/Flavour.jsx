import drying from "../../assets/images/drying.webp";
import { useTranslation } from "react-i18next";
export default function Flavour() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image " data-aos="fade-left">
          <img src={drying} alt="Thumb" className="img-fluid" />
        </div>
        <h2 data-aos="fade-up" className="mt-5">{t("flavour.title")}</h2>
        <p data-aos="fade-up">{t("flavour.description")}</p>
        <div className="features mt-4">
          <div className="content ">
            <h4 data-aos="fade-up">{t("usage")}</h4>
            <p data-aos="fade-up">{t("flavour.usage-content")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

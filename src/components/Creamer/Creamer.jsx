import creamer from "../../assets/images/creamer.webp";
import { useTranslation } from "react-i18next";
export default function Creamer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image  "  data-aos="fade-left">
          <img src={creamer} alt="Thumb" className="img-fluid" />
        </div>
        <h2 data-aos="fade-up" className="mt-5">{t("creamer.title")}</h2>
        <p data-aos="fade-up">{t("creamer.description")}</p>
        <div className="features mt-4">
         
          <div className="content ">
            <h4 data-aos="fade-up">{t("usage")}</h4>
            <p data-aos="fade-up">{t("creamer.usage-content")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

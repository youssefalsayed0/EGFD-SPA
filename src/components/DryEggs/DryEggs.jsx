import eggs from "../../assets/images/eggs.webp";
import { useTranslation } from "react-i18next";
export default function DryEggs() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image "  data-aos="fade-left">
          <img src={eggs} alt="Thumb" className="img-fluid" />
        </div>
        <h2 data-aos="fade-up" className="mt-5">{t("dry-eggs.title")}</h2>
        <p data-aos="fade-up">{t("dry-eggs.description")}</p>
        <div className="features mt-4">
          <div className="content ">
            <h4 data-aos="fade-up">{t("usage")}</h4>
            <p data-aos="fade-up">{t("dry-eggs.usage-content")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

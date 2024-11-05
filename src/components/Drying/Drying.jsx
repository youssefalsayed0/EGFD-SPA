import { useTranslation } from "react-i18next";
import drying from "../../assets/images/dry.webp";
export default function Drying() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image " data-aos="fade-left">
          <img src={drying} alt="Thumb" className="img-fluid" />
        </div>
        <h2 data-aos="fade-up"className="mt-5">{t("drying.title")}</h2>
        <p data-aos="fade-up">{t("drying.description")}</p>
        <div className="features mt-4">
          <div className="content ">
            <h4 data-aos="fade-up">{t("usage")}</h4>
            <ul className=" ">
              <li data-aos="fade-left">
                <strong>{t("drying.list.1.head")}:</strong>{" "}
                {t("drying.list.1.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("drying.list.2.head")}:</strong>{" "}
                {t("drying.list.2.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("drying.list.3.head")}:</strong>{" "}
                {t("drying.list.3.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("drying.list.4.head")}:</strong>{" "}
                {t("drying.list.4.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("drying,list.5.head")}:</strong>{" "}
                {t("drying.list.5.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("drying.list.6.head")}:</strong>{" "}
                {t("drying.list.6.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("drying.list.7.head")}:</strong>{" "}
                {t("drying.list.7.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("drying.list.8.head")}:</strong>{" "}
                {t("drying.list.8.content")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

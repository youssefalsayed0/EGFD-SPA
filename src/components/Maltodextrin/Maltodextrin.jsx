import { useTranslation } from "react-i18next";
import malto from "../../assets/images/malto 2.webp";
export default function Maltodextrin() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-lg-8 services-single-content">
        <div className="image " data-aos="fade-left">
          <img src={malto} alt="Thumb" className="img-fluid" />
        </div>
        <h2 data-aos="fade-up" className="mt-5">{t("malto.title")}</h2>
        <p data-aos="fade-up">{t("malto.description")}</p>
        <div className="features mt-4">
          <div className="content ">
            <h4 data-aos="fade-up">{t("usage")}</h4>
            <ul className="">
              <li data-aos="fade-left">
                <strong>{t("malto.list.1.head")}:</strong>{" "}
                {t("malto.list.1.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("malto.list.2.head")}:</strong>{" "}
                {t("malto.list.2.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("malto.list.3.head")}:</strong>{" "}
                {t("malto.list.3.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("malto.list.4.head")}:</strong>{" "}
                {t("malto.list.4.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("malto.list.5.head")}:</strong>{" "}
                {t("malto.list.5.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("malto.list.6.head")}:</strong>{" "}
                {t("malto.list.6.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("malto.list.7.head")}:</strong>{" "}
                {t("malto.list.7.content")}
              </li>
              <li data-aos="fade-left">
                <strong>{t("malto.list.8.head")}:</strong>{" "}
                {t("malto.list.8.content")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

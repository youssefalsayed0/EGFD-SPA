import { Link } from "react-router-dom";
import shape from "../../assets/images/shape.webp";
import { useTranslation } from "react-i18next";

export default function CallToActionSection() {
    
    const { t } = useTranslation();


  return (
    <>
      <section className="call-section main-p text-light position-relative z-1 overflow-hidden">
        <div className="fixed-shape position-absolute top-0 end-0">
          <img src={shape} alt="Shape" />
        </div>

        <div className="container position-relative">
          <div className="clients-item-box">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 info " data-aos="fade-right">
                <h2>{t("call-section.title")}</h2>
                <p>
                {t("call-section.description")}
                </p>
              </div>
              <div className="col-lg-3 info  ">
                <Link data-aos="zoom-in" to="/contact-us" className="btn btn-dark py-3 px-5 text-white rounded-pill text-capitalize">{t("call-section.button")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

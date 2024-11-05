import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import factory from "../../assets/images/factory.webp";
import MainHeading from "../MainHeading/MainHeading";

export default function AboutSection({ showButton = true }) {
  const { t } = useTranslation();
  return (
    <>
      <section className="main-p about-section sec-background">
        <MainHeading 
          title={t("main-heading.about.title")} 
          subTitle={t("main-heading.about.sub-title")} 
        />
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-5">
              <div className="image " data-aos="fade-right">
                <img src={factory} alt="factory" className="img-fluid rounded-3" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-7 info">
              <h2 data-aos="fade-left" className="fw-semibold">{t("about-section.title")}</h2>
              <p data-aos="fade-left" data-aos-delay="200" className="mt-4 text-secondary">
                {t("about-section.description1")}
              </p>
              <p data-aos="fade-left" data-aos-delay="300" className="mt-2 text-secondary">
                {t("about-section.description2")}
              </p>

              <ul className="p-0 mt-4 mx-0"> 
                <li className="d-flex align-items-center"  data-aos="fade-left" data-aos-delay="500">
                  <span className="mx-2 d-flex justify-content-center align-items-center icon rounded-circle text-white">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  {t("about-section.list1")}
                </li>
                <li className="d-flex align-items-center mt-2"  data-aos="fade-left" data-aos-delay="600">
                  <span className="mx-2 d-flex justify-content-center align-items-center icon rounded-circle text-white">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  {t("about-section.list2")}
                </li>
              </ul>

              {/* Render button conditionally */}
              {showButton && (
                <Link  data-aos="zoom-in" data-aos-delay="500"
                type="button"
                  to="/about-us"
                  className="secondry-button mt-3"
                >
                  {t("about-section.button")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

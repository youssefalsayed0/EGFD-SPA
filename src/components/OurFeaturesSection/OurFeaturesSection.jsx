import { useTranslation } from "react-i18next";
import lab1 from "../../assets/images/lab1.webp";
import lab2 from "../../assets/images/lab2.webp";

export default function OurFeaturesSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="main-p our-features ">
        <div className="container">
          <div className="feature-item text-light  ">
            <div className="row g-0   ">
              <div className="col-lg-3 col-md-6 image overflow-hidden">
                <img className="img-fluid" src={lab1} alt="lab"  />
              </div>
              <div className="col-lg-3 col-md-6 info position-relative" data-aos="fade-down">
                <h2>
                  <strong>{t("features-section.years")}</strong>
                  {t("features-section.card1")}
                </h2>
              </div>
              <div className="col-lg-3 col-md-6 image overflow-hidden " >
                <img className="img-fluid" src={lab2} alt="lab" />
              </div>
              <div className="col-lg-3 col-md-6 info position-relative  " data-aos="fade-left">
                <h2 className="text-black fw-semibold">
                  {t("features-section.card2")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

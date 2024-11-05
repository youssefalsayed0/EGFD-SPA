import { useTranslation } from "react-i18next";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";


export default function LandingSection() {
  const { t } = useTranslation();
 
  return (
    <>
      <section className="landing vh-100 ">
        <Overlay/>
        <div className="container h-100 d-flex align-items-center text-light position-relative">
          <div className="text"  >
            <h1 data-aos="fade-up" className="display-3 mb-4 fw-semibold" >{t("landing.title")}</h1>
            <p data-aos="fade-up" className="py-3 ">{t("landing.description")}</p>
            <Link data-aos="zoom-in" to="/about-us" className="btn d-inline-block  py-3 px-3 rounded-5 main-btn">{t("landing.button.text")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";

export default function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="why-us-section  position-relative ">
        <Overlay />
        <div className="container-fluid">
          <div className="row align-items-center  gy-5 gy-lg-0 position-relative">
            <div className="col-lg-8"></div>
            <div className="col-lg-4   left-info">
              <div className="content ">
                <h5 className="mb-3"  data-aos="fade-up" >{t("why-us-section.title")}</h5>
                <h2 className="fw-semibold"  data-aos="fade-up" data-aos-delay="100">
                  {t("why-us-section.description")}
                </h2>
                <Link to="/contact-us"  type="button" data-aos="zoom-in" data-aos-delay="200"
                  className="secondry-button mt-3 bg-white text-dark">
                  {t("why-us-section.button")}
                </Link>
              </div>
            </div>

            <div className="col-lg-4   info text-white  ">
              <div className="content  ">
                <ul className=" ">
                  <li  data-aos="fade-left" data-aos-delay="200" >
                    <h5>{t("why-us-section.content1.title")}</h5>
                    <p>{t("why-us-section.content1.description")}</p>
                  </li>
                  <li  data-aos="fade-left" data-aos-delay="300">
                    <h5> {t("why-us-section.content2.title")}</h5>

                    <p>{t("why-us-section.content2.description")}</p>
                  </li>
                  <li  data-aos="fade-left" data-aos-delay="400">
                    <h5> {t("why-us-section.content3.title")}</h5>
                    <p>{t("why-us-section.content3.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

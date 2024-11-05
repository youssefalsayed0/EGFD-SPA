import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router-dom";

export default function ServiceDetailsSection() {
    const {t} = useTranslation();
  return (
    <>
      <section className="services-details-section main-p">
        <div className="container">
          <div className="services-details-items">
            <div className="row gy-5">
              <div className="col-lg-4 services-sidebar  order-last order-lg-first">
                {/* Single Widget */}
                <div className="single-widget services-list">
                  <div className="content">
                    <ul className=" list-unstyled text-uppercase">
                      <li >
                        <NavLink activeClassName="active" to="maltodextrin">{t("service-details-section.links.malto")}</NavLink>
                      </li>
                      <li>
                      <NavLink to="drying" activeClassName="active">{t("service-details-section.links.drying")}</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widget */}
                {/* Single Widget */}
                <div
                  className="single-widget quick-contact text-light mt-5 "
                  style={{ backgroundImage: "url(assets/img/about/1.jpg)" }}
                >
                  <div className="content">
                    <h4 >{t("service-details-section.contact.help")}</h4>
                    <i className="fas fa-headset my-5" />
                    <h2 dir="ltr"><a href="tel:+201150522550">+201150522550</a></h2>
                  </div>
                </div>
                {/* End Single Widget */}
                {/* Single Widget */}
                <div className="single-widget brochure mt-5">
                  <h4 className="widget-title position-relative text-capitalize mb-4 pb-2 fw-bold ">{t("service-details-section.brochure.title")}</h4>
                  <ul className="list-unstyled">
                  <li>
  <a href="../../assets/EGFD Company Profile .pdf" download="EGFD Company Profile .pdf">
    <i className="fas fa-file-pdf fa-xl me-3" /> {t("service-details-section.brochure.download1")}
  </a>
</li>
                    <li>
                      <a href="../../assets/pdf/EGFD Company Profile .pdf" download="EGFD Company Profile .pdf" className="bg-black">
                        <i className="fas fa-file-pdf fa-xl me-3" /> {t("service-details-section.brochure.download2")}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

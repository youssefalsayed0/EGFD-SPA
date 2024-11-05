import { useTranslation } from "react-i18next";
import MainHeading from "../MainHeading/MainHeading";

export default function WorkProcessSection() {
    const { t } = useTranslation();
  return (
   <>
<section className="work-process-section main-p " >
<MainHeading title={t("main-heading.work.title")} subTitle= {t("main-heading.work.sub-title")}/>
  <div className="container">
    <div className="work-pro-items ">
      <div className="row  ">
        <div className="col-lg-4 col-md-6 single-item d-flex" data-aos="fade-up">
          <div className="item ">
            <div className="item-inner">
            <i className="fa-solid fa-box"></i>
              <h4>{t("work-section.card1.title")} <span>01</span></h4>
              <p>
              {t("work-section.card1.description")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 single-item d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="item">
            <div className="item-inner">
            <i className="fa-solid fa-gears"></i>
              <h4>  {t("work-section.card2.title")} <span>02</span></h4>
              <p>
               {t("work-section.card2.description")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 single-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="item">
            <div className="item-inner">
            <i className="fa-solid fa-truck-ramp-box"></i>
              <h4>  {t("work-section.card3.title")} <span>03</span></h4>
              <p>
                {t("work-section.card3.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   
   
   </>
  )
}

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServicesCard({ title, description, image, link , icon }) {
  const {t} = useTranslation();
  return (
    <>
      <div className="services-items  col-lg-5 col-xl-4 " data-aos="flip-right">
        <div className="item bg-white shadow-sm  ">
          <div className="thumb overflow-hidden position-relative z-1 ">
            <img src={image} alt="service-image" className="img-fluid" loading="lazy" />
          </div>
          <div className="info position-relative z-1 py-5 px-4">
          <i className={`flaticon-milling-machine ${icon}`}></i>   
            <h4 className="text-capitalize fw-bold">
              <Link to={link}>{title}</Link>
            </h4>
            <p>{description}</p>
          
            <div className="button">
              <Link to={link}>
                {t("services-section.button")} <i className="fas fa-plus" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

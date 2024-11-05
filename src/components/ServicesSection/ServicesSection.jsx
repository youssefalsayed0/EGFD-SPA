
import ServicesCard from "../ServicesCard/ServicesCard";
import malto from "../../assets/images/malto.webp"
import drying from "../../assets/images/drying.webp"
import MainHeading from "../MainHeading/MainHeading";
import { useTranslation } from "react-i18next";


export default function ServicesSection() {

  const { t } = useTranslation();
  
  return (
    <>
      <section className="services-section main-p">
      <MainHeading title={t("main-heading.services.title")} subTitle= {t("main-heading.services.sub-title")}/>
        <div className="container">
            <div className="row justify-content-evenly gy-5">
              <ServicesCard  image={malto} title={t("services-section.card2.title")}  description={t("services-section.card2.description")} icon={'fa-solid fa-wheat-awn'} link={'/services/service-details/maltodextrin'}/>
              <ServicesCard  image={drying} title={t("services-section.card1.title")}  description={t("services-section.card1.description")} icon={'fa-brands fa-canadian-maple-leaf'} link={'/services/service-details/drying'}/>
            </div>
          </div>
      </section>
    </>
  );
}

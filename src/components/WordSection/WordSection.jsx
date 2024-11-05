import { useTranslation } from "react-i18next";
import avatar from "../../assets/images/avatar.jpg"
export default function WordSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="word-section main-p">
        <div className="container">
          <div className="row align-items-center">
          <div className=" col-md-6 ">
            <div className="image " data-aos="fade-right">
            <img src={avatar} alt="profile" className="profile  img-fluid" loading="lazy" />
            </div>
            </div>
            <div className=" col-md-6 text ">
              <h2 data-aos="fade-left" >{t("word-section.title")}</h2>
              <p data-aos="fade-left">{t("word-section.description")}</p>
              <span data-aos="fade-left"  data-aos-delay="200" className="d-inline-block">{t("word-section.name")}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

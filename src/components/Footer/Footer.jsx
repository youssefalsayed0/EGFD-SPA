import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className=" text-black main-p">
        <div className="container">
          <div className=" row    gy-3 p-4 ">
            <div className="col-md-9  ">
              <span>{t("footer.social")}</span>
            </div>

            <div className="col-md-3  ">
              <a href="https://www.facebook.com/profile.php?id=61554795033502" className="me-4" target="_blank">
                <i className="fab fa-facebook-f fa-lg" />
              </a>
              <a href="https://www.instagram.com/egyptiangerman.co/?igsh=NjVpZGN1ZDFhcjh1" className="me-4" target="_blank">
                <i className="fab fa-instagram  fa-lg" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/egfd-%D9%84%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9-%D9%88-%D8%A7%D9%84%D8%AA%D8%AC%D9%81%D9%8A%D9%81/posts/?feedView=all" className="me-4">
                <i className="fab fa-linkedin fa-lg" />
              </a>
            </div>
          </div>

          <div>
            <div className="container text-center data text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">{t("footer.title")}</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>{t("footer.content")}</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                  <h6 className="text-uppercase fw-bold">{t("footer.products.title")}</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <Link to="/products/maltodextrin" >
                      {t("footer.products.link1")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/products/animal-fat-powder" className="">
                      {t("footer.products.link2")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/products/food-flavour" className="">
                      {t("footer.products.link3")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/products/dry-eggs" className="">
                      {t("footer.products.link4")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/products/creamer" className="">
                      {t("footer.products.link5")}
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">{t("footer.useful links.title")}</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <Link to="/home" className="">
                      {t("footer.useful links.link1")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/products" className="">
                      {t("footer.useful links.link2")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/services" className="">
                      {t("footer.useful links.link3")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/about-us" className="">
                      {t("footer.useful links.link4")}
                    </Link>
                  </p>
                  <p>
                    <Link to="/contact-us" className="">
                      {t("footer.useful links.link5")}
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">{t("footer.contact.title")}</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fas fa-map-marker-alt me-3" />     <a
                      href="https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D8%A7%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A7%D8%AA+%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9+%D9%88+%D8%A7%D9%84%D8%AA%D8%AC%D9%81%D9%8A%D9%81%E2%80%AD/@30.2745242,31.7914045,17z/data=!3m1!4b1!4m6!3m5!1s0x1457fd6869ccaa03:0xb3d9b79df72d4bf7!8m2!3d30.2745196!4d31.7939794!16s%2Fg%2F11tsg282hc?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
        
                      10th of Ramadan City, Egypt
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" /> <a href="mailto:Commercial@egfd.com.eg" >
                      Commercial@egfd.com.eg
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> <a href="tel:+201150522558">+201150522558</a>
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> <a href="tel:+20554410589">+20554410589</a>
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> <a href="tel:+20554410587">+20554410587</a>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-3 bg-se">
            {t("footer.copy")}
          </div>
        </div>
      </footer>
    </>
  );
}

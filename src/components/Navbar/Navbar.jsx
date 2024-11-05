import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const navbarRef = useRef(null);
  const offcanvasRef = useRef(null); // Reference for offcanvas
  const toggleRef = useRef(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Handle opening/closing of off-canvas
  const closeOffcanvas = () => {
    offcanvasRef.current.classList.remove("show");
  };

  const openOffcanvas = () => {
    offcanvasRef.current.classList.add("show");
  };

  useEffect(() => {
    const navLinks = offcanvasRef.current.querySelectorAll(".navbar-link");
    const handleNavLinkClick = () => {
      closeOffcanvas();
    };

    navLinks.forEach((link) =>
      link.addEventListener("click", handleNavLinkClick)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
    };
  }, []);

  // Language switcher handler
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // Set direction of the document
    localStorage.setItem("language", lng); // Save selected language
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "ar"; // Default to arabic if no language saved
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      const toggle = toggleRef.current;

      if (window.scrollY > 50) {
        navbar.classList.add("shadow-sm", "nav-style");
        toggle.classList.remove("text-white");
      }
      else if (window.scrollY == 0){
        navbar.classList.remove("shadow-sm", "nav-style");
        toggle.classList.add("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav ref={navbarRef} className="navbar navbar-expand-lg z-3 w-100 fixed-top"   >
        <div className="container">
          <Link to="/home" className="offcanvas-title" id="offcanvasNavbarLabel" >
            <img src={logo} alt="logo" width="60px" className="img-fluid" />
          </Link>
          <i
            ref={toggleRef}
            className="fas fa-bars fa-lg me-2 text-white navbar-toggler border-0"
            onClick={openOffcanvas} // Open offcanvas on click
            type="button"
          ></i>

          <div  ref={offcanvasRef}  className="offcanvas offcanvas-start"
            tabIndex="1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header" dir="ltr" >
              <Link to="/home" className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="logo" width="60px" className="img-fluid" />
              </Link>
              <button
                type="button"
                className="btn-close"
                onClick={closeOffcanvas} // Close offcanvas on button click
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-center align-content-center " >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                {["/", "/about-us", "/products", "/services", "/contact-us"].map((path, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink className="nav-link navbar-link" to={path} onClick={closeOffcanvas} activeClassName="active">
                      {t(`nav.navLink${index + 1}`)}
                    </NavLink>
                  </li>
                ))}

                {/* Language Switcher Dropdown */}
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="languageDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-globe me-2"></i>
                    {i18n.language === "ar" ? "AR" : "EN"}
                  </span>
                  <ul
                    className="dropdown-menu dropdown-menu-end text-center w-auto" // Add "w-auto" for automatic width
                    aria-labelledby="languageDropdown"
                    style={{ minWidth: "80px" }} // Ensure the width fits content
                  >
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("en")}
                            type="button"
                      >
                        En
                      </span>
                    </li>
                    <hr />
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("ar")}
                        type="button"
                      >
                        Ar
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

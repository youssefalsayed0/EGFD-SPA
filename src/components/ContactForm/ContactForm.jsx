import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../firebase.js"; // Adjust the import based on your Firebase setup
import { collection, addDoc } from "firebase/firestore"; // Import addDoc and collection
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ContactForm = () => {

const {t} =  useTranslation(); 


  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be digits only"), // Ensures only numbers
    message: Yup.string().required("Please tell us about your project"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const toastId = toast.loading("Sending your message...");
      try {
        // Send data to Firebase
        await addDoc(collection(db, "contacts"), values); // Use addDoc for Firestore
        resetForm();
        toast.success("Message sent successfully!", { id: toastId });
      } catch (error) {
        console.error("Error sending message: ", error); // Log the error for debugging
        toast.error("Error sending message, please try again.", { id: toastId });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Toaster /> {/* This will render the toast notifications */}
      <section className="contact">
        <div className="container">
          <div className="contact-items">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-8 left-item">
                <div className="content">
                  <h2>{t("contact.title")}</h2>
                  <form className="contact-form" onSubmit={formik.handleSubmit}>
                    {/* Your form inputs here */}
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder={t("contact.name")}
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 gy-3">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder={t("contact.email")}
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder={t("contact.phone")}
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                          />
                          {formik.touched.phone && formik.errors.phone ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.phone}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <div className="form-group message">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder={t("contact.message")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                          />
                          {formik.touched.message && formik.errors.message ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.message}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          className="secondry-button"
                          disabled={formik.isSubmitting}
                        >
                          {t("contact.button")} <i className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 right-item">
                {/* Additional contact info here (same as in your original code) */}
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-map-marked-alt" />
                  </div>
                  <div className="info">
                    <h4>{t("contact.location")}</h4>
                    <Link target="_blank" to="https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D8%A7%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A7%D8%AA+%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9+%D9%88+%D8%A7%D9%84%D8%AA%D8%AC%D9%81%D9%8A%D9%81%E2%80%AD/@30.2745196,31.7939794,17z/data=!3m1!4b1!4m6!3m5!1s0x1457fd6869ccaa03:0xb3d9b79df72d4bf7!8m2!3d30.2745196!4d31.7939794!16s%2Fg%2F11tsg282hc?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D">
                parcel No. 55 industrial Zone 
                      <br /> 10th Of Ramadan City , Egypt
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="info">
                    <h4>{t("contact.call")}</h4>
                    <p>
                    <a href="tel:+201150522558">+201150522558</a>
                      <br />
                      <a href="tel:+20554410589">+20554410589</a>
                      <br />
                      <a href="tel:+20554410587">+20554410587</a>
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="info">
                    <h4>{t("contact.send")}</h4>
                    <p>
                      <a href="mailto:Commercial@egfd.com.eg">Commercial@egfd.com.eg</a>
                      <br />
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

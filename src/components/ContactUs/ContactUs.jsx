import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import contact from "../../assets/images/contact.webp";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import ContactForm from "../ContactForm/ContactForm";
export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <Banner title={t("banner.contact-us")} image={contact} />
        <ContactForm />
        <GoogleMaps />
      </main>
    </>
  );
}

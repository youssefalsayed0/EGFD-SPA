import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import malto from "../../assets/images/lab 3.webp"
import { Outlet } from "react-router-dom";

export default function Products() {
  const { t } = useTranslation();
  return (
    <>
   <main>
       <Banner title={t("banner.products")} image={malto}/>
       <Outlet />
   </main>
    </>
  );
}
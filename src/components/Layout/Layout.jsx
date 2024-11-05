import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SubNav from "../SubNav/SubNav";

export default function Layout() {
  return (
    <>
      <SubNav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

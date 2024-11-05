import {  useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUS/AboutUs";
import Products from "./components/Products/Products";
import ContactUs from "./components/ContactUs/ContactUs";
import ServiceDetailsSection from "./components/ServiceDetailsSection/ServiceDetailsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Maltodextrin from "./components/Maltodextrin/Maltodextrin";
import Drying from "./components/Drying/Drying";
import ProductDetailsSection from "./components/ProductDetailsSection/ProductDetailsSection";
import VegFat from "./components/VegFat/VegFat";
import Creamer from "./components/Creamer/Creamer";
import DryEggs from "./components/DryEggs/DryEggs";
import Flavour from "./components/Flavour/Flavour";
import AnimalFat from "./components/AnimaFat/AnimalFat";
import 'aos/dist/aos.css'; 
import aos from "aos";


// Create the router
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      {
        path: "services",
        element: <Services />,
        children: [
          { path: "", element: <ServicesSection /> },
          {
            path: "service-details",
            element: <ServiceDetailsSection />,
            children: [
              { path: "", element: <Maltodextrin /> },
              { path: "maltodextrin", element: <Maltodextrin /> },
              { path: "drying", element: <Drying /> },
            ],
          },
        ],
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductDetailsSection />,
            children: [
              { path: "", element: <Maltodextrin /> },
              { path: "maltodextrin", element: <Maltodextrin /> },
              { path: "animal-fat-powder", element: <AnimalFat /> },
              { path: "vegetable-fat-powder", element: <VegFat /> },
              { path: "creamer", element: <Creamer /> },
              { path: "dry-eggs", element: <DryEggs /> },
              { path: "food-flavour", element: <Flavour /> },
            ],
          },
        ],
      },
      { path: "products", element: <Products /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {

  useEffect(() => {
    aos.init({
      duration: 600, // Animation duration in milliseconds
      // once: true, // Animation happens only once (disable to repeat animation on scroll)
      // easing: 'ease-in-out', // Easing function
      mirror: false, // Whether to animate out when scrolling past the element
    });
  }, []);


  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

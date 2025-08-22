import Approaches from "@/components/Approaches";
import Highlights from "@/components/Highlights";
import Loader from "@/components/Loader";
import OurAllServices from "@/components/OurAllServices";
import PersonalizedWeb from "@/components/PersonalizedWeb";
import ProductServices from "@/components/ProductService";
import SaasHome from "@/components/SaasHome";
import SliderTestimonials from "@/components/SliderTestimonimals";
import SoftwareDevEntp from "@/components/SoftwareDevEntp";
import TechStack from "@/components/TechStack";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NewsLetter from "@/layout/NewsLetter";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function SoftwareDevelopment() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader opacity={"50%"} />}
      <Head>
        <title>Software Development - Entterprice</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <SaasHome />
      <SoftwareDevEntp />
      <OurAllServices />
      <ProductServices />
      <Highlights />
      <Approaches />
      <TechStack />
      <PersonalizedWeb />
      {/* <Testimonials /> */}
      <SliderTestimonials />
      <div className="d-none d-md-block" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: -400,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          <NewsLetter />
        </div>
        <div style={{ marginTop: "500px" }}>
          <Footer />
        </div>
      </div>

      <div className="d-md-none">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

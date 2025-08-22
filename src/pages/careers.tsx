import CareersHome from "@/components/CareersHome";
import Loader from "@/components/Loader";
import OurValues from "@/components/OurValues";
import PaymentCompany from "@/components/PaymentCompany";
import SearchOpportunities from "@/components/SearchOpportunities";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NewsLetter from "@/layout/NewsLetter";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader opacity={"50%"} />}

      <Header />
      <CareersHome />
      <OurValues />
      <SearchOpportunities />
      <PaymentCompany />
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

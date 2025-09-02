import AMLSection from "@/components/AMLSection";
import IntroSection from "@/components/IntroSection";
import ISOCompliance from "@/components/ISOCompliance";
import Loader from "@/components/Loader";
import PrivacySecurity from "@/components/PrivacySecurity";
import RegulatoryCompliance from "@/components/RegulatoryCompliance";
import SecurityHome from "@/components/SecurityHome";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader opacity={"50%"} />}
      <Head>
        <title>Governance - Entterprice</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* {isLoading ? (
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader opacity="50%" />
        </div>
      ) : (
        <> */}
      <Header />
      <SecurityHome />
      <IntroSection />
      <RegulatoryCompliance />
      <AMLSection />
      <PrivacySecurity />
      <ISOCompliance />
      {/* <div className="d-none d-md-block" style={{ position: "relative" }}>
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
      </div> */}

      {/* <div className="d-md-none">
        <NewsLetter /> */}
      <Footer padding={false} />
      {/* </div> */}
    </>
    //   )}
    // </>
  );
}

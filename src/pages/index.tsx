import BusinessPayment from "@/components/BusinessPayment";
import FXSection from "@/components/FxSection";
import GlobalFootprint from "@/components/GlobalFootprint";
import HomeSection from "@/components/HomeSection";
import InternationalTransaction from "@/components/InternationalTransaction";
import RelationshipManager from "@/components/RelationshipManager";
import TrackSection from "@/components/TrackSection";
import TransferAnywhere from "@/components/TransferAnywhere";
import WorkWith from "@/components/WorkWith";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NewsLetter from "@/layout/NewsLetter";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoading(false);
  //   };

  //   if (document.readyState === "complete") {
  //     handleLoad();
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //     return () => window.removeEventListener("load", handleLoad);
  //   }
  // }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader opacity={"50%"} />}
      <Head>
        <title>Home - Entterprice</title>
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
      <HomeSection />
      <BusinessPayment />
      <InternationalTransaction />
      <WorkWith />
      <FXSection />
      <TransferAnywhere />
      <RelationshipManager />
      <TrackSection />
      <GlobalFootprint />

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
    //   )}
    // </>
  );
}

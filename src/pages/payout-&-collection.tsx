import AMLSection from "@/components/AMLSection";
import ContactHome from "@/components/ContactHome";
import FAQs from "@/components/FAQs";
import FindUs from "@/components/FindUs";
import GetPaidHome from "@/components/GetPaidHome";
import ImporterExporter from "@/components/ImporterExporter";
import Loader from "@/components/Loader";
import PaidPaymentStatus from "@/components/PaidPaymentStatus";
import PayCollect from "@/components/PayCollect";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NewsLetter from "@/layout/NewsLetter";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function PayoutAndCollection() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader opacity={"50%"} />}
      <Head>
        <title>Pay Out & Collection - Entterprice</title>
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
      <GetPaidHome />
      <ImporterExporter />
      <PayCollect />
      <PaidPaymentStatus />
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
